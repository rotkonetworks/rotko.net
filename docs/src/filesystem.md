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


We propose following settings in general for blockchains with variation in recordsize:
```bash
# Create the pool (replace tank and device with your pool name and device path)
zpool create -o ashift=12 tank device /dev/nvme0to5

# Set the primary cache to only metadata, as ParityDb relies on the OS page cache
zfs set primarycache=metadata tank

# Set recordsize to 16K as most values in the ParityDb are small and values over 16K are rare
zfs set recordsize=16K tank

# Enable compression as it can provide both space and performance benefits
zfs set compression=lz4 tank

# Disable access time (atime) as it can negatively impact performance
zfs set atime=off tank

# Set redundant metadata to most to protect against data corruption
zfs set redundant_metadata=most tank

# Synchronous writes (sync) should be set to standard to ensure data integrity in case of an unexpected shutdown
zfs set sync=standard tank

# Given that we are prioritizing latency, leave logbias at its default setting (latency)
zfs set logbias=latency tank

# Enable snapshots for better data protection
# TODO: Set up daily with cron
zfs snapshot tank@daily
```

The NVMe drives themselves should provide high performance and low latency for
your ZFS pool, and a separate ZIL or L2ARC might not provide significant
benefits and could even add unnecessary complexity or costs.

Notice that if you running EVM blockchain with small blocks like Ethereum, it might 
be best option to set your recordsize 4K instead before starting syncing.
