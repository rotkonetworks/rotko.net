# BKK04 - Bootnode

## CPU

<img src="images/bkk04/amdryzen9-2.webp" alt="CPU" style="width: 45%; margin-right: 1em; object-fit: cover;">
<img src="images/bkk04/amdryzen9.webp" alt="CPU" style="width: 45%; margin-left: 1em; object-fit: cover;">

[AMD Ryzen 9 7950X R9 7950X CPU Processor 16-Core 32-Thread 5NM L3=64M Socket AM5](https://www.amd.com/en/products/cpu/amd-ryzen-9-7950x)

At the core of our server operations sits the impressive AMD Ryzen 9 7950X.
With a 16-core, it's tailored to manage multiple tasks with ease - enabling
multiple networks to be run simultaneously. The high core clock speeds are
paramount in blockchain applications, enabling efficient sync of chains and
reliable endpoint service.

Supporting cutting-edge PCI Express® 5.0 and DDR5 memory technologies, this CPU
ensures rapid data transfer and retrieval - essential for efficient and low
latency blockchain transactions. Its large 64MB L3 cache further enhances
performance by allowing quick access to frequently used data.

The Ryzen 9 7950X excels in cryptographic operations, crucial for blockchain
processing. Benchmarking at 1.59 GiBs in BLAKE2-256 and 822.88 KiBs in
SR25519-Verify, it comfortably outperforms Polkadot's stringent requirements,
reinforcing its suitability for our blockchain-centric operations.

### CPU Cooler
[COOLSERVER R64 AM5 Server CPU Cooler](https://aliexpress.com/item/1005004850411911.html)

The COOLSERVER R64 AM5 Server CPU Cooler, with its 4 high-quality heatpipes and
150W TDP, is perfectly equipped to handle the thermal output of our Ryzen 9
7950X, even under intensive blockchain workloads. Its robust double ball
bearing design ensures longevity and reliability in our 24/7 server operations,
while the 4-pin PWM fan offers energy-efficient, adaptive cooling.

[Thermalright aluminium alloy AM5 frame](https://aliexpress.com/item/1005004904430608.html)
Boost cooling capability we use Thermalright AM5 frame to increase performance.

### Motherboard
<img src="images/bkk04/asrockrack.webp" alt="CPU" style="width: 45%; margin-right: 1em; object-fit: cover;">
<img src="images/bkk04/asrockrack-2.webp" alt="CPU" style="width: 45%; margin-left: 1em; object-fit: cover;">

[AsRock Rack B650D4U(LGA 1718)](https://www.asrockrack.com/general/productdetail.asp?Model=B650D4U#Specifications)

This motherboard is a masterpiece of engineering and design, a testament to
AsRock's ability to merge the high-performance aspects of the consumer world
with the robustness and dependability of server-grade hardware. The Rack
B650D4U is a Micro-ATX motherboard that fully supports DDR5 ECC UDIMM
memories, a feature that provides increased data integrity and system
reliability - essential elements in server environments.

The motherboard comes with full PCIe 5.0 support, which is crucial for tackling
demanding tasks and ensuring optimal performance. It features an M.2 slot, a
x16 slot, and a x4 slot, which provides the flexibility to cater to various
expansion needs. With the ability to support up to 7 M.2 slots, the Rack
B650D4U-2L2T is well-suited for high-performance NVMe storage, significantly
boosting data access and transfer speeds.

In essence, the AsRock Rack B650D4U is an optimal choice that promises a
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
[6x 2TB Samsung SSD Pro 980](https://www.amazon.co.jp/-/en/SAMSUNG-PCIe-Internal-Gaming-MZ-V8P2T0B/dp/B08RK2SR23/)

#### Test results with 6 nvme cards
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

Our motherboard has 4x SATA3 slots for hard disks. For chain backups we are
using 3x 16TB disks in ZFS RAIDZ delivering us 32TB storage allowing 1 disk
to break. We have reserved small partitions in each 6 nvme for ZLOG and L2ARC
for improved performance for read/write operations thanks to ZFS.

### Chassis

[TGC-24550 2U](https://www.pcgallery.co.th/product/tgc-24550-3-0/)

We are still in process of designing correct parts for a 1U chassis build, so
for the first build we decided to go for 550mm 2U chassis. The challenge of
fitting Micro-ATX with ricers to PCI-E x16 and PCI-E x4 as well as 170W TDP
cooling solution into 1U is not that trivial. These slots are really required
to provide low latency NVME storage for RPC nodes.

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
[Asrock Rack BCM/IPMI]

AsRock Rack motherboard comes with BCM for remote control.
