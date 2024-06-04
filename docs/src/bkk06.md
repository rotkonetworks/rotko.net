## BKK06 - Bootnode/RPC
![BKK06](./images/bkk06/bkk06.webp)

# BKK06 - High-Performance Bootnode/RPC Server

The BKK06 server stands at the vanguard of our infrastructure, specifically
tailored to function as a bootnode and RPC server. It's built around the
AMD EPYC™ 7742 CPU and designed to deliver fine performance for RPC, bootnode
and computational tasks.

### CPU
**Model:** [AMD EPYC™ 7742](https://www.amd.com/en/products/cpu/amd-epyc-7742)
- **Core Count:** 64 cores
- **Threads:** 128
- **Max. Boost Clock:** Up to 3.4GHz
- **Base Clock:** 2.25GHz
- **L3 Cache:** 256MB
- **TDP:** 225W

#### Cooler
**Model:** COOLSERVER AMD SP5 S21 Server CPU Cooler 350W 6 Copper Tubes

**Capabilities:** Tailored to handle high-concurrency workloads, the EPYC™ 7742
  is perfect for bootnode operations and RPC handling, offering rapid data
  processing and low-latency networking.

### Motherboard
**Model:** [Supermicro H11SSL-i](https://www.supermicro.com/en/products/motherboard/H11SSL-i)
- **Chipset:** System on Chip
- **Form Factor:** E-ATX
- **Memory Slots:** 8 x DIMM slots supporting DDR4

**Capabilities:** With 8 memory channels and support for up to 8 DDR4 ECC memory
  modules, the motherboard is currently populated with 8 x Micron 32GB ECC Registered
  DDR4 memory modules, providing a total of 256GB of memory.

### Memory
**Model:** Micron 32GB ECC Registered DDR4 3200
- **Capacity:** 8 modules
- **Technology:** ECC Registered for increased reliability
- **Speed:** 3200MHz

### Storage
**Primary Storage:**
- 2x [Samsung SSD 980 PRO 2TB NVMe](https://www.samsung.com/us/computing/memory-storage/solid-state-drives/980-pro-pcie-4-0-nvme-ssd-2tb-mz-v8p2t0b-am/) (Configured in RAID for boot/root)
- 4x [Samsung SSD 990 PRO 4TB NVMe](https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-ssd-4tb-mz-v9p4t0b-am/) (For data)

**Capabilities:** The Samsung 980 PRO drives ensure reliable boot and root
operations with RAID configuration, while the 990 PRO drives offer swift
read/write speeds and robust endurance for intensive data demands of a bootnode
and RPC server.

### Connectivity
**LAN:**
- eno1: 10Gb/s BASE-T LAN port
- eno2: 10Gb/s BASE-T LAN port

**Management Port:** 1 x Dedicated management port

### Board Management Controller (BMC)
**BMC Model:** Aspeed® AST2500
- **Capabilities:** Integrated BMC with Aspeed® AST2500 GPU offers comprehensive remote management capabilities, including KVM over IP, enabling administrators to manage the server efficiently and securely.

### Chassis and Power Supply Unit (PSU)
**Chassis:** Supermicro Main Server Chassis
**PSU:** Greatwall Dual PSU 2U 1+1 CRPS redundant 800W

This updated configuration should accurately reflect the setup and capabilities
of your BKK06 - High-Performance Bootnode/RPC Server.
