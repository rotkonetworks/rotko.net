## BKK03

### CPU
[AMD Ryzen 9 7950X R9 7950X CPU Processor 16-Core 32-Thread 5NM L3=64M Socket AM5](https://www.amd.com/en/products/cpu/amd-ryzen-9-7950x)

The Ryzen 9 7950X has a 16-core, 32-thread architecture with extremely high
core clock speeds, a crucial requirement for blockchain operations. This CPU
supports PCI Express® 5.0 and DDR5 memory, both delivering exceptional data
transfer and data retrieval speeds, key for efficient blockchain transactions.

With its large 64MB L3 cache, rapid data access is facilitated, a boon for
swift data manipulations typical in blockchain operations. Moreover, this CPU
has shown excellent performance in cryptographic operations, scoring 1.59 GiBs
in BLAKE2-256 and 822.88 KiBs in SRThe Ryzen 9 7950X is a high-performance CPU
characterized by its 16-core, 32-thread architecture and exceptional core clock
speeds. In the realm of blockchain operations, these high core clock speeds
prove more advantageous than a higher number of cores or threads. This is
because many blockchain applications are not optimized for multi-core
processing. High core speeds are fundamental for efficient blockchain syncing,
whereas multiple cores are only needed for running multiple networks and
providing RPC service.

This CPU also supports the advanced PCI Express® 5.0 and DDR5 memory, both of
which contribute to exceptional data transfer and retrieval speeds, a key
factor in efficient blockchain transactions and low latency service.

In addition, the Ryzen 9 7950X comes equipped with a large 64MB L3 cache. This
allows for rapid data access, a boon for swift data manipulations typical in
blockchain operations. This CPU has also demonstrated impressive performance in
cryptographic operations, achieving 1.59 GiBs in BLAKE2-256 and 822.88 KiBs in
SR25519-Verify tests, thereby surpassing Polkadot's current requirements by
158.2% and 123.6%, respectively.25519-Verify, surpassing Polkadot's demanding 
requirements by 158.2% and 123.6%, respectively.

### CPU Cooler
[COOLSERVER R64 AM5 Server CPU Cooler](https://aliexpress.com/item/1005004850411911.html)

The COOLSERVER R64 AM5 Server CPU Cooler, with its 4 high-quality heatpipes and
150W TDP, is perfectly equipped to handle the thermal output of our Ryzen 9
7950X, even under intensive blockchain workloads. Its robust double ball
bearing design ensures longevity and reliability in our 24/7 server operations,
while the 4-pin PWM fan offers energy-efficient, adaptive cooling.

#### Temp cooler
[TDP95W for 1U server 27mm height 1UA27](https://www.aliexpress.com/i/4001296934524.html)

High-quality construction, individual wireless induction connection for each
fan, and the ability to support up to 95 Watts of heat dissipation. This is
currently temporary solution until 2U TDP150W cooler arrives.

### Motherboard
[AsRock Rack B650D4U-2L2T/BCM(LGA 1718) Dual 10G LAN](https://www.amazon.com/dp/B0BXRFHDQT)

This motherboard is a masterpiece of engineering and design, a testament to
AsRock's ability to merge the high-performance aspects of the consumer world
with the robustness and dependability of server-grade hardware. The Rack
B650D4U-2L2T is a Micro-ATX motherboard that fully supports DDR5 ECC UDIMM
memories, a feature that provides increased data integrity and system
reliability - essential elements in server environments.

Its dual 10G LAN functionality makes it an excellent choice for environments
with high network traffic. This not only ensures swift and efficient data
transfer but also minimizes latency, providing a smooth, unbroken service for
end users.

The motherboard comes with full PCIe 5.0 support, which is crucial for tackling
demanding tasks and ensuring optimal performance. It features an M.2 slot, a
x16 slot, and a x4 slot, which provides the flexibility to cater to various
expansion needs. With the ability to support up to 7 M.2 slots, the Rack
B650D4U-2L2T is well-suited for high-performance NVMe storage, significantly
boosting data access and transfer speeds.

In essence, the AsRock Rack B650D4U-2L2T is an optimal choice that promises a
perfect blend of speed, reliability, and scalability, capable of serving the
demanding needs of modern server applications.

### Memory
[4x Server Memory Module|MICRON|DDR5|32GB|UDIMM/ECC|4800MHz|CL 40|1.1V|MTC20C2085S1EC48BA1R](https://www.amazon.com/Server-Memory-Module-4800MHz-MTC20C2085S1EC48BA1R)

Our server setup employs four modules of 32GB DDR5 server memory. These memory
modules ensure substantial bandwidth, which is paramount in maintaining smooth
and efficient server operations. Furthermore, these memory modules come
equipped with ECC (Error-Correcting Code) technology, an invaluable feature
that ensures the accuracy and integrity of data, a critical aspect in
preserving the trustworthiness of our transactions and operations.

In high-performance computing, latency is as crucial as speed. Lower latency
leads to faster data processing, resulting in more efficient and responsive
system performance. Our memory modules have demonstrated impressive low-latency
performance in our extensive testing.

#### Test results
```
|----------+----------------+-------------+-------------+-------------------|
|  Memory  | Copy | 22.24 GiBs | 14.32 GiBs |        ✅ Pass (155.3 %)      |
|----------+----------------+-------------+-------------+-------------------|
```

These results speak volumes about the high-quality performance offered by our
chosen memory modules. Their low latency will ensure that data is processed
rapidly and efficiently, contributing to the overall performance and
responsiveness of our server.

### SSD Expansion Cards
[NVMe SSD Expansion Card NVMe PCIe RAID Adapter 4 Ports NVME SSD To PCI-E 4.0 X16 Expansion Card]()

Our selection of this SSD expansion card is an integral part of our data
management strategy. The card facilitates the incorporation of state-of-the-art
NVMe SSDs, which are renowned for their superlative speed and efficiency in
storage and data retrieval. By enabling faster access to stored data, this card
aids in optimizing overall system performance, significantly enhancing our
server's responsiveness.

### Storage
[6x 2TB Hanye ME70 NVMe PCI-E4.0 7200mb/s](https://www.amazon.co.jp/Hanye-%E3%80%90PS5%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D%E6%B8%88%E3%81%BF%E3%80%91-PCIe-Gen4x4-DRAM%E6%90%AD%E8%BC%89/dp/B0B58JXNXG)

Our system utilizes six 2TB High Performance ME70 M.2 NVMe SSDs, offering a
total of 12TB high-speed storage, tailored for professionals needing quick data
access and load times. Utilizing Gen4 PCIe tech, these SSDs deliver sequential
read speeds of 7200 MB/s, combined with a powerful error correction algorithm,
LDPC (Low Density Parity Check), and DRAM cache for improved response times and
data integrity - making them an essential asset in our high-demand network
operations.

#### Test results with 3 cards
```
|----------+----------------+-------------+-------------+-------------------|
| Disk     | Seq Write      | 2.56 GiBs   | 450.00 MiBs | ✅ Pass (582.0 %) |
|----------+----------------+-------------+-------------+-------------------|
| Disk     | Rnd Write      | 1.05 GiBs   | 200.00 MiBs | ✅ Pass (535.3 %) |
+----------+----------------+-------------+-------------+-------------------+
```

IOPS 745388.087064
99.99th Percentile Read Latency: 310 ns

#### Backup storage

Our motherboard has 4x SATA3 slots for hard disks. We could partition
small L2ARC cache section out of nvme disk and setup 4x16TB hard disks for
backups for 800e price range providing us RAIDZ1 48TB backup space for weekly
archive backups.

### Chassis

[TGC-24550 2U](https://www.pcgallery.co.th/product/tgc-24550-3-0/)

We are still in process of finding correct parts to fit this build into 1U chassis,
but for a first build we decided to go for 550mm 2U chassis due to the
challenge of fitting Micro-ATX with ricers to PCI-E x16 and PCI-E x4 so going
for 2U fit our needs better. These slots are really required to provide
low latency NVME storage for RPC nodes.

TGC-24550-3.0 chassis, a 2U rackmount model providing ample space and
versatility. It has an efficient airflow design, with a middle fan wall of
four 80mm fans. This setup ensures steady airflow across essential components,
effectively mitigating thermal issues under heavy loads.

### Power Supply Unit
[T.F.SKYWINDINTL 1U MINI Flex ATX Power Supply Unit 400W Modular PSU]()

Power supply unit is the T.F.SKYWINDINTL 1U MINI Flex ATX 400W PSU. This
efficient unit comes equipped with a built-in cooling fan and a comprehensive
range of protective measures, including overcurrent, overvoltage, and
short-circuit protection. These features augment the stability and
dependability of our server system. 

The AMD Ryzen 9 7950X, with its Thermal Design Power (TDP) of 170W and peak
power consumption of 230W for the AM5 socket, requires a resilient and reliable
power supply unit. Given that the PSU is ideally operated at approximately 50%
of its maximum capacity during full load for optimum efficiency and durability.
Rated at 350W, this PSU will operate within its most effective efficiency zone
while sufficiently catering to the power demands of the processor.

### KVM
[BliKVM CM4 "KVM over IP" Raspberry Pi CM4 HDMI CSI PiKVM v3](https://www.aliexpress.com/item/1005003262886521.html)

A modern, highly secure, and programmable KVM solution running on Arch Linux,
which provides exceptional control over your server, akin to physical access.
With an easy build process, it boasts minimal video latency (about 100 ms) and
a lightweight Web UI accessible from any browser. It emulates mass storage
drives and allows ATX power management, secure data transmission with SSL, and
local Raspberry Pi health monitoring. You can also manage GPIO and USB relays
via its web interface. The PiKVM OS is production-ready, supports a read-only
filesystem to prevent memory card damage, offers extensible authorization
methods, and enables automation with macros.

#### Features of PiKVM:

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

#### Links
[PiKVM docs](https://docs.pikvm.org/)
[PiKVM github](https://github.com/pikvm/pikvm)
