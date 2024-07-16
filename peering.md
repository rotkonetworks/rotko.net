# Rotko Networks Peering Policies

Welcome to the Peering Information page of Rotko Networks. Our peering strategy
meticulously optimizes routing decisions based on geographic distinctions and
strategic priorities, ensuring robust and efficient connectivity across our
extensive network infrastructure.

## Community Structure

Our community tagging strategy employs a detailed numbering system to clearly
identify and prioritize routes based on their geographic location and the nature
'of the connectivity, enhancing network performance and management.

### Specific Internet Exchange Points

- **`142108:010`** - BKNIX (Bangkok)
  - Local Bangkok Network Internet Exchange, facilitating efficient data exchange within the city.
- **`142108:011`** - AMSIX Bangkok
  - A crucial peering point in Bangkok, promoting robust regional connectivity.
- **`142108:210`** - AMSIX Singapore
  - Primary peering for Singapore, enhancing our presence in Southeast Asia.
- **`142108:310`** - AMSIX Hong Kong
  - A key hub for our East Asian traffic, ensuring high availability and low latency.
- **`142108:1010`** - AMSIX Amsterdam
  - Our gateway to European traffic, supporting a broad network reach in the continent.

### Local Routing within Thailand

- **`142108:000-099`** - Local routes within Thailand
  - `142108:010` - Direct peers in major Thai cities
  - `142108:020` - Critical infrastructure and service providers
  - `142108:030-099` - Other local ISPs and networks

### Regional Routing in Nearby Countries

- **`142108:100-199`** - Countries neighboring Thailand without submarine cable access
  - `142108:110` - Laos
  - `142108:120` - Cambodia
  - `142108:130` - Myanmar
  - `142108:140-199` - Provision for future regional expansion

### Submarine Cable Routes

- **`142108:200-299`** - Submarine cable routes to Singapore
  - `142108:210` - Main routes to Singapore IXs
  - `142108:220` - Secondary routes for redundancy
  - `142108:230-299` - Reserved for future expansions and specialized services

- **`142108:300-399`** - Submarine cable routes to Hong Kong
  - `142108:310` - Primary connectivity to Hong Kong IXs
  - `142108:320` - Backup and secondary routes
  - `142108:330-399` - Additional capacities and future services

### Global Reach

- **`142108:400-999`** - Routes to other key APNIC regions with significant internet exchanges
  - `142108:410` - Tokyo
  - `142108:420` - Seoul
  - `142108:430-999` - Expansion slots for other major APNIC cities and regions

- **`142108:1000-1999`** - International routes to non-APNIC regions
  - `142108:1010` - Europe
  - `142108:1020` - North America
  - `142108:1030` - Middle East
  - `142108:1040-1999` - Other global regions as needed

## Routing Policy

Rotko Networks adheres to a structured routing policy to maintain network security and efficiency:
- **Traffic Handling:** Only traffic destined for the prefixes we announce is accepted.
- **Route Consistency:** We announce consistent routes at each exchange point.
- **Peering Practices:** We peer at all exchange fabrics we have in common.
- **PeeringDB Maintenance:** An updated PeeringDB profile ensures accurate and current information.
- **Operational Reliability:** A high-availability operational contact is provided to handle issues promptly.
- **Technology Use:** We operate an IPv6 or dual-stack network equipped with a public ASN.
- **Traffic Symmetry:** Traffic is globally symmetrical but regionally more outbound due to provided endpoints.

## Peering Request and Contact Information

For peering requests or additional information about our routing policies,
please contact us through:

- **Email:** [peering@rotko.net](mailto:peering@rotko.net)
- **Phone:** +85281926548

We are committed to maintaining an open and transparent peering environment to
support the growth and stability of the global internet infrastructure.
