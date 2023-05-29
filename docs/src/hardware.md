## Hardware

### Bootnode

#### CPU
[AMD Ryzen 9 7950X R9 7950X CPU Processor 16-Core 32-Thread 5NM L3=64M Socket AM5](https://www.amd.com/en/products/cpu/amd-ryzen-9-7950x)

The Ryzen 9 7950X has a 16-core, 32-thread architecture, which excels at multi-threading processes,
a crucial requirement for blockchain operations. This CPU supports PCI Express® 5.0 and DDR5 memory,
both delivering exceptional data transfer and data retrieval speeds, key for efficient blockchain transactions.

With its large 64MB L3 cache, rapid data access is facilitated, a boon for swift
data manipulations typical in blockchain operations.
Moreover, this CPU has shown excellent performance in cryptographic operations,
scoring 1.59 GiBs in BLAKE2-256 and 822.88 KiBs in SR25519-Verify, surpassing Polkadot's
current requirements by 158.2% and 123.6%, respectively. These high scores demonstrate its superior
capacity to handle the essential cryptographic operations of blockchain technology.

Additionally, this CPU offers flexibility with its overclocking feature, enabling us to scale its performance
during peak transaction periods. Compatibility with a variety of operating systems offers the freedom to select
an OS that best aligns with our blockchain infrastructure needs.

##### CPU Cooler
[TDP95W for 1U server 27mm height 1UA27](https://www.aliexpress.com/i/4001296934524.html)

High-quality construction, individual wireless induction connection for each fan, and
the ability to support up to 95 Watts of heat dissipation, offers optimal cooling
efficiency for our AMD® Ryzen Processor.

#### Motherboard
[AsRock Rack B650D4U-2L2T/BCM Micro-ATX Server Motherboard for AMD Ryzen 7000 Series Processors (LGA 1718) B650E PCIe 5.0 Dual 10G LAN](https://www.amazon.com/dp/B0BXRFHDQT)

This motherboard is a masterpiece of engineering and design, a testament to AsRock's ability to merge
the high-performance aspects of the consumer world with the robustness and dependability of
server-grade hardware. The Rack B650D4U-2L2T is a Micro-ATX motherboard that fully supports DDR5
ECC UDIMM memories, a feature that provides increased data integrity and system reliability -
essential elements in server environments.

Its dual 10G LAN functionality makes it an excellent choice for environments with high network traffic.
This not only ensures swift and efficient data transfer but also minimizes latency, providing a smooth,
unbroken service for end users.

The motherboard comes with full PCIe 5.0 support, which is crucial for tackling demanding tasks
and ensuring optimal performance. It features an M.2 slot, a x16 slot, and a x4 slot, which provides
the flexibility to cater to various expansion needs. With the ability to support up to 7 M.2 slots,
the Rack B650D4U-2L2T is well-suited for high-performance NVMe storage, significantly boosting data
access and transfer speeds.

In essence, the AsRock Rack B650D4U-2L2T is an optimal choice that promises a perfect blend of speed,
reliability, and scalability, capable of serving the demanding needs of modern server applications.

#### Memory
[4x Server Memory Module|MICRON|DDR5|32GB|UDIMM/ECC|4800MHz|CL 40|1.1V|MTC20C2085S1EC48BA1R](https://www.amazon.com/Server-Memory-Module-4800MHz-MTC20C2085S1EC48BA1R)

Our server setup employs four modules of 32GB DDR5 server memory. These memory modules ensure
substantial bandwidth, which is paramount in maintaining smooth and efficient server operations.
Furthermore, these memory modules come equipped with ECC (Error-Correcting Code) technology,
an invaluable feature that ensures the accuracy and integrity of data, a critical aspect in
preserving the trustworthiness of our transactions and operations.

In high-performance computing, latency is as crucial as speed. Lower latency leads to faster data
processing, resulting in more efficient and responsive system performance. Our memory modules have
demonstrated impressive low-latency performance in our extensive testing.

##### Test results
```
|----------+----------------+-------------+-------------+-------------------|
|  Memory  | Copy | 22.24 GiBs | 14.32 GiBs |        ✅ Pass (155.3 %)      |
|----------+----------------+-------------+-------------+-------------------|
```

These results speak volumes about the high-quality performance offered by our chosen
memory modules. Their low latency will ensure that data is processed rapidly and efficiently,
contributing to the overall performance and responsiveness of our server.

#### SSD Expansion Cards
[NVMe SSD Expansion Card NVMe PCIe RAID Adapter 4 Ports NVME SSD To PCI-E 4.0 X16 Expansion Card]()

Our selection of this SSD expansion card is an integral part of our data management strategy.
The card facilitates the incorporation of state-of-the-art NVMe SSDs, which are renowned for
their superlative speed and efficiency in storage and data retrieval. By enabling faster
access to stored data, this card aids in optimizing overall system performance,
significantly enhancing our server's responsiveness.

#### Storage
[7x 2TB nvme 7000mb/s](https://www.amazon.co.jp/Hanye-%E3%80%90PS5%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D%E6%B8%88%E3%81%BF%E3%80%91-PCIe-Gen4x4-DRAM%E6%90%AD%E8%BC%89/dp/B0B58JXNXG)

As part of our robust storage solution, we have chosen to implement six 2TB NVMe SSDs.
Collectively, these drives contribute a sizable 14TB of storage space, facilitating
expansive data collection and management. Known for their rapid read/write speeds,
these SSDs play a crucial role in maintaining an efficient and high-performing network
infrastructure. Their presence will enable faster data access, reduce latency, and
ensure a seamless experience in our network operations.

##### Test results
```
|----------+----------------+-------------+-------------+-------------------|
| Disk     | Seq Write      | 2.56 GiBs   | 450.00 MiBs | ✅ Pass (582.0 %) |
|----------+----------------+-------------+-------------+-------------------|
| Disk     | Rnd Write      | 1.05 GiBs   | 200.00 MiBs | ✅ Pass (535.3 %) |
+----------+----------------+-------------+-------------+-------------------+
```

IOPS 745388.087064
99.99th Percentile Read Latency: 310 ns

##### Backup storage
Our motherboard has 4x SATA3 slots for harddisks. We could partition small L2ARC cache section
out of nvme disk and setup 4x16TB harddisks for backups for 800e price range providing us 
RAIDZ1 48TB backup space for weekly archive backups.

#### Chassis

For chassis we first tried fitting the build into 650mm 1U:s but it turned out to be 
challenging to fit Micro-ATX with ricers to PCI-E x16 and PCI-E x4 so going
for 2U fit our needs better.

#### Power Supply Unit
[T.F.SKYWINDINTL 1U MINI Flex ATX Power Supply Unit 400W Modular PSU]()

Power supply unit is the T.F.SKYWINDINTL 1U MINI Flex ATX 400W PSU.
This efficient unit comes equipped with a built-in cooling fan and a comprehensive
range of protective measures, including overcurrent, overvoltage, and
short-circuit protection. These features augment the stability and dependability
of our server system. 

The AMD Ryzen 9 7950X, with its Thermal Design Power (TDP) of 170W and peak power
consumption of 230W for the AM5 socket, requires a resilient and reliable power
supply unit. Given that the PSU is ideally operated at approximately 50% of its
maximum capacity during full load for optimum efficiency and durability, the
T.F.SKYWINDINTL 1U MINI Flex ATX PSU is an apt choice. Rated at 350W, this PSU
will operate within its most effective efficiency zone while sufficiently catering
to the power demands of the processor.

#### KVM
[BliKVM CM4 "KVM over IP" Raspberry Pi CM4 HDMI CSI PiKVM v3](https://www.aliexpress.com/item/1005003262886521.html)

A modern, highly secure, and programmable KVM solution running on Arch Linux,
which provides exceptional control over your server, akin to physical access.
With an easy build process, it boasts minimal video latency (about 100 ms) and
a lightweight Web UI accessible from any browser. It emulates mass storage drives
and allows ATX power management, secure data transmission with SSL, and local
Raspberry Pi health monitoring. You can also manage GPIO and USB relays via its web interface.
The PiKVM OS is production-ready, supports a read-only filesystem to prevent memory card damage,
offers extensible authorization methods, and enables automation with macros.

##### Features of PiKVM:

- **Fully-featured and modern IP-KVM:** PiKVM is up-to-date with the latest KVM technologies.
- **Easy to build:** PiKVM offers ready-to-use OS images and a friendly build environment.
- **Low video latency:** With approximately 100 milliseconds of video latency, it provides
one of the smallest delays of all existing solutions.
- **Lightweight Web UI and VNC:** The user interface is accessible through any browser,
with no proprietary clients required. VNC is also supported.
- **Mass Storage Drive Emulation:** On Raspberry Pi 4 and ZeroW, PiKVM can emulate a virtual
CD-ROM or Flash Drive. A live image can be uploaded to boot the attached server.
- **ATX power management:** PiKVM supports simple circuits for controlling the power
button of the attached server.
- **Security:** PiKVM is designed with strong security, using SSL to protect traffic.
- **Local monitoring:** PiKVM monitors the health of the Raspberry Pi board and provides
warnings for potential issues.
- **GPIO management:** Control GPIO and USB relays via the web interface.
- **Production-ready:** PiKVM OS is based on Arch Linux ARM and can be customized for any needs.
- **Read-only filesystem:** The OS runs in read-only mode to prevent damage to the memory
card due to a sudden power outage.
- **Extensible authorization methods:** PiKVM supports integration into existing
authentication infrastructure.
- **Macro scripts:** Repetitive actions can be automated with keyboard & mouse action macros.
- **Open & free:** PiKVM is open-source software, released under the GPLv3.

##### Links
[PiKVM docs](https://docs.pikvm.org/)
[PiKVM github](https://github.com/pikvm/pikvm)
