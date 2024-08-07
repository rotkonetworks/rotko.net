# Network Configuration Documentation

## Overview

This document outlines the BGP routing configuration for our multi-homed network
with connections to various internet exchanges and transit providers in Bangkok,
Hong Kong, Singapore, and Europe. Currently 3x 10G fibers are used for uplinks.

## Bandwidth
<img src="images/networking/bandwidth.webp" alt="Scaling bandwidth" style="width: 100%; margin-top: 2em; object-fit: cover;">

## BGP Community Structure

We use BGP communities to classify and manage routes based on their origin and characteristics. Our community format is `AABBCC`, where:

- `AA`: Region/Type
  - `10`: Local (Bangkok)
  - `20`: Regional
  - `30`: Remote
- `BB`: Provider
  - `10`: BKNIX
  - `20`: AMS-IX
  - `30`: IPTX
  - `40`: Reserved for future use
- `CC`: Connection Identifier
  - `00`: Primary connection
  - `01-99`: Additional connections, ordered by preference

### Key Communities

- 101000: BKNIX Primary (Local 10G - Bangkok)
- 102000: AMS-IX Bangkok Primary (Local 1G - Bangkok)
- 201000: AMS-IX Hong Kong Primary (Regional 200M - Hong Kong)
- 203000: IPTX Singapore Primary (Regional 500M - Singapore)
- 203001: IPTX Hong Kong Secondary (Regional 500M - Hong Kong)
- 302000: AMS-IX Europe Primary (Remote 100M - Amsterdam)

# Network Topology Diagram
```mermaid
graph TD
    BKK50((BKK50 Gateway Router<br>CCR2004-16G-2S+<br>ECMP with 10G connections))
    BKK50 --> |10G| BKK20
    BKK50 --> |10G| BKK10

    subgraph BKK20[BKK20 Edge Router<br>CCR2216-1G-12XS-2XQ]
        B20_AMSIX[AMSIX-LAG<br>10G Physical Port]
    end

    subgraph BKK10[BKK10 Edge Router<br>CCR2116-12G-4S+]
        B10_AMSIX[AMSIX-LAG<br>10G Physical Port]
        B10_BKNIX[BKNIX-LAG<br>10G Physical Port]
    end

    B20_AMSIX --> |VLAN 911<br>1G| AMS_IX_BKK[AMS-IX Bangkok]
    B20_AMSIX --> |VLAN 3994<br>200M| AMS_IX_HK[AMS-IX Hong Kong]
    B20_AMSIX ==> |VLAN 2520<br>500M<br>Active| IPTX_SG[IPTX Singapore]
    B20_AMSIX -.-> |VLAN 2517<br>500M<br>Passive| IPTX_HK[IPTX Hong Kong]

    B10_AMSIX ==> |VLAN 2519<br>500M<br>Active| IPTX_HK
    B10_AMSIX -.-> |VLAN 2518<br>500M<br>Passive| IPTX_SG
    B10_AMSIX --> |VLAN 3995<br>100M| AMS_IX_EU[AMS-IX Europe]
    B10_BKNIX --> |10G| BKNIX[BKNIX]

    AMS_IX_BKK --> INTERNET((Internet))
    AMS_IX_HK --> INTERNET
    AMS_IX_EU --> INTERNET
    IPTX_SG --> INTERNET
    IPTX_HK --> INTERNET
    BKNIX --> INTERNET

    classDef router fill:#1a5f7a,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef ix fill:#4d3e3e,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef internet fill:#0077be,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef active stroke:#00ff00,stroke-width:4px;
    classDef passive stroke:#ff0000,stroke-dasharray: 5 5;

    class BKK50,INTERNET internet;
    class BKK20,BKK10 router;
    class AMS_IX_BKK,AMS_IX_HK,AMS_IX_EU,IPTX_SG,IPTX_HK,BKNIX ix;

    linkStyle default stroke:#ffffff,stroke-width:2px;
```

## Routing Configuration

| Name              | Speed | Path Prepend | MED | Local Pref | Community    | Description        | Edge Router |
|-------------------|-------|--------------|-----|------------|--------------|--------------------| ----------- |
| BKNIX             | 10G   | 0            | 50  | 200        | 142108:101000| LOCAL-BKNIX-PRIMARY | BKK10       |
| AMS-IX Bangkok    | 1G    | 0            | 100 | 190        | 142108:102000| LOCAL-AMSIX-PRIMARY | BKK20       |
| IPTX Singapore    | 500M  | 1            | 150 | 185        | 142108:203000| REGIONAL-IPTX-SG-PRI| BKK20       |
| IPTX Hong Kong    | 500M  | 1            | 150 | 180        | 142108:203001| REGIONAL-IPTX-HK-SEC| BKK10       |
| AMS-IX Hong Kong  | 200M  | 2            | 200 | 170        | 142108:201000| REGIONAL-AMSIX-HK-PRI| BKK10      |
| AMS-IX Europe     | 100M  | 3            | 300 | 160        | 142108:302000| REMOTE-AMSIX-EU-PRI | BKK20       |

## Traffic Engineering Principles

1. Local Preference: Higher values indicate more preferred routes. Local routes are preferred over regional, which are preferred over remote routes.
2. MED (Multi-Exit Discriminator): Lower values are preferred. Used to influence inbound traffic when other attributes are equal.
3. AS Path Prepending: Increases AS path length to make a route less preferred. Used for coarse control of inbound traffic.
