# Filesystem

The file system is perhaps the most underappreciated component in the
blockchain synchronization process, despite being pivotal. It's puzzling how
little attention this crucial element receives. Try seeking a single article
discussing the ideal record sizes for blockchain databases - you'll quickly
discover the dearth of literature on this subject. By offloading additional
tasks to the application users, we inadvertently make chains more difficult to
synchronize, an outcome that inadvertently centralizes those running the nodes.

Upon rigorous testing of various file systems - including mdraid (ext4), LVM,
mdraid, Btrfs, and ZFS - our findings suggest that ZFS stands out as the most
user-friendly and well-rounded solution. While LVM and Btrfs also has its
merits, its user interface tooling design seems to be more suitable for those
with a high tolerance for complexity.

## ZFS

ZFS offers incredibly easy client tool to use for setting up complex filesystem
setup with snapshots and quota management.

### Installation

execute as sudo on debian12/bookworm
```bash
#!/bin/bash

# Create the backports file
echo "deb http://deb.debian.org/debian bookworm-backports main contrib
deb-src http://deb.debian.org/debian bookworm-backports main contrib" > /etc/apt/sources.list.d/bookworm-backports.list

# Create the preferences file
echo "Package: src:zfs-linux
Pin: release n=bookworm-backports
Pin-Priority: 990" > /etc/apt/preferences.d/90_zfs

# Update package lists
apt update

# Install necessary packages
apt install -y dpkg-dev linux-headers-$(uname -r) linux-image-$(uname -r)

# Set the environment variable DEBIAN_FRONTEND to noninteractive
# Install ZFS packages
DEBIAN_FRONTEND=noninteractive apt install -y zfs-dkms zfsutils-linux

# Verify the ZFS installation
modprobe zfs && echo "ZFS installed successfully" || echo "ZFS installation failed"
```

### ZFS partitioning

```bash
#!/bin/bash
# bkk03 zfs setup

# Array of disks to be used
disks=("nvme1n1" "nvme2n1" "nvme3n1" "nvme4n1")

# Size of the swap partition on each disk
swap_size="16G"

# Create swap partition and ZFS partition on each disk
for disk in "${disks[@]}"; do
    echo "Creating partitions on /dev/${disk}"
    
    # Create the swap partition
    parted -s /dev/${disk} mklabel gpt
    parted -s /dev/${disk} mkpart primary linux-swap 1MiB ${swap_size}
    mkswap /dev/${disk}p1
    swap_uuid=$(blkid -s UUID -o value /dev/${disk}p1)

    # Add the swap partitions to /etc/fstab so they're used on startup
    echo "UUID=${swap_uuid} none swap sw 0 0" >> /etc/fstab

    # Enable the swap partition
    echo "Enabling swap on /dev/${disk}p1"
    swapon /dev/${disk}p1

    # Create the ZFS partition
    parted -s /dev/${disk} mkpart primary ${swap_size} 100%

    # Inform the OS of partition table changes
    partprobe /dev/${disk}
done

```

### ZFS optimized for blockchain

```bash
# Now, create the ZFS pool with the remaining space
# TODO: add disk with  root installation to pool as well
disks=("nvme1n1" "nvme2n1" "nvme3n1" "nvme4n1")
zpool create -o ashift=12 tank $(for disk in "${disks[@]}"; do echo "/dev/${disk}p2"; done)

# Disable access time (atime) as it can negatively impact performance
zfs set atime=off tank
# Set recordsize to 16K as most values in the ParityDb are small and values over 16K are rare
zfs set recordsize=16k tank
# throughput safer than latency
zfs set logbias=throughput tank
# Set the primary cache to only metadata, as ParityDb relies on the OS page cache
zfs set primarycache=metadata tank
# Enable compression as it can provide both space and performance benefits
zfs set compression=lz4 tank
# Set redundant metadata to most to protect against data corruption
zfs set redundant_metadata=most tank
# Synchronous writes (sync) should be set to standard to ensure data integrity in case of an unexpected shutdown
zfs set sync=standard tank
# Enable snapshots for better data protection
zfs snapshot tank@daily

echo "Finished setting up ZFS pool and swap partitions"
```

bkk03 lsblk:
```bash
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    1  28.7G  0 disk
├─sda1        8:1    1   1.9G  0 part /boot/efi
├─sda2        8:2    1   1.9G  0 part /boot
└─sda3        8:3    1  24.9G  0 part /media/user/489b6b9f-f615-4270-b2c9-9565b9516c00
nvme1n1     259:0    0   1.9T  0 disk
├─nvme1n1p2 259:7    0   1.8T  0 part
└─nvme1n1p1 259:8    0  14.9G  0 part [SWAP]
nvme2n1     259:1    0   1.9T  0 disk
├─nvme2n1p1 259:10   0  14.9G  0 part [SWAP]
└─nvme2n1p2 259:11   0   1.8T  0 part
nvme3n1     259:2    0   1.9T  0 disk
├─nvme3n1p1 259:12   0  14.9G  0 part [SWAP]
└─nvme3n1p2 259:13   0   1.8T  0 part
nvme4n1     259:3    0   1.9T  0 disk
├─nvme4n1p1 259:14   0  14.9G  0 part [SWAP]
└─nvme4n1p2 259:15   0   1.8T  0 part
nvme0n1     259:4    0   1.9T  0 disk
├─nvme0n1p1 259:5    0  59.6G  0 part [SWAP]
├─nvme0n1p2 259:6    0 126.7G  0 part /
└─nvme0n1p3 259:9    0   1.7T  0 part
```

### Blockchains on HDD

The NVMe drives themselves should provide high performance and low latency for
your ZFS pool, and a separate ZIL or L2ARC might not provide significant
benefits and could even add unnecessary complexity or costs. You can create
tank/slog and tank/L2ARC for performant read and write cache to reach
"balanced disk" like boosted performance. ZIL ~8GB and L2ARC ~128GB.
This can make huge difference in HDD capability of synchronizing Blockchains
when data is first written in NVMe.

We are using HDD purely for storing snapshots as backups due to using striping
raid for our NVMe:s.

Notice that if you running EVM blockchain with small blocks like Ethereum, it might 
be best option to set your recordsize 4K instead before starting syncing.
