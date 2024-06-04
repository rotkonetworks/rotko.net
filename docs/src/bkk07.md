## BKK07 - Bootnode/RPC
![BKK07](./images/BKK07/BKK07.webp)

# BKK07 - High-Performance Bootnode/RPC Server

The BKK07 server stands at the vanguard of our infrastructure, specifically tailored to
function as a bootnode and RPC server. It's built around the AMD EPYC™ 9654 CPU and designed
to deliver unmatched performance for blockchain and high-computational tasks.

### CPU
**Model:** [AMD EPYC™ 9654](https://www.amd.com/en/product/12191)
- **Core Count:** 96 cores
- **Threads:** 192
- **Max. Boost Clock:** Up to 3.7GHz
- **Base Clock:** 2.4GHz
- **L3 Cache:** 384MB
- **TDP:** 360W (Configurable TDP 320-400W)

#### Cooler
***Model:*** COOLSERVER AMD SP5 S21 Server CPU Cooler 350W 6 Copper Tubes

**Capabilities:** Tailored to handle high-concurrency workloads, the EPYC™ 9654 is perfect
for bootnode operations and RPC handling, offering rapid data processing and low-latency networking.

### Motherboard
**Model:** [Supermicro H13SSL-N](https://www.supermicro.com/en/products/motherboard/h13ssl-n)
- **Chipset:** System on Chip
- **Form Factor:** ATX
- **Memory Slots:** 12 x DIMM slots supporting DDR5

**Capabilities:** With 12 memory channels and support for up to 24 DDR5 ECC memory modules,
the motherboard is currently populated with 6 x SuperMicro 64GB ECC Registered DDR5 memory
modules in a 6-channel configuration, primed for an upgrade to a full 12-channel setup to
enhance data throughput and server responsiveness.

### Memory
**Model:** SuperMicro 64GB ECC Registered DDR5 4800
- **Capacity:** Currently 6 modules (to be expanded to 12)
- **Technology:** ECC Registered for increased reliability
- **Speed:** 4800MHz (running at 57600MHz for full 12-channel bandwidth)

***Note:*** Under the SuperMicro brand, actual chip running is HMCG94MEBRA109N AA SKhynix DDR5 64GB SKhynix-Montage 2Rx4 1.1v 4800MHz ECC Registered 288-pin.

### Storage
**Primary Storage:** 5x [SAMSUNG 990 PRO M.2 2280 4TB NVMe](https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-ssd-4tb-mz-v9p4t0b-am/)
- **Sequential Read/Write Speeds:** Up to 7,450/6,900 MB/s
- **Random Read/Write Speeds (IOPS):** Up to 1,600K/1,550K for 4TB
- **Interface:** PCI-Express Gen 4.0 x4
- **Technology:** NVMe 2.0 V-NAND
- **Form Factor:** M.2 2280

**Capabilities:** The Samsung 990 PRO drives are renowned for their swift read/write speeds
and robust endurance, making them ideal for the intensive data demands of a bootnode and
RPC server. +400K R/W IOPS per Terabyte is something ANY cloud provider ain't capable provide
for whatever price you were willing to pay.

### Connectivity
- **LAN:** Dual 10Gb/s BASE-T LAN ports (Broadcom® BCM57416)
- **Management Port:** 1 x Dedicated management port

### Board Management Controller (BMC)
- **BMC Model:** Aspeed® AST2600
- **Capabilities:** Integrated BMC with Aspeed® AST2600 GPU offers comprehensive remote management
capabilities, including KVM over IP, enabling administrators to manage the server efficiently and securely.

### Chassis and Power Supply Unit (PSU)
- **Chassis:** Ultra Short 2U rackmount Server Chassis S24306 with six 2.5 ssd bays support eatx dual processor board
- **PSU:** Greatwall Dual PSU 2U 1+1 CRPS redundant 800W
