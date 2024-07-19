# Networking

## Bandwidth
<img src="images/networking/bandwidth.webp" alt="Scaling bandwidth" style="width: 100%; margin-top: 2em; object-fit: cover;">

3x 10G uplink connections are used to connect to WAN utilizing BGP routing
protocol.

## Routing

| BGP Peer          | Capacity      | Prepend Level | MED Value | Route Filter Chain   | Configuration Rule                                          |
|-------------------|---------------|---------------|-----------|----------------------|-------------------------------------------------------------|
| BKNIX             | 10G           | 0             | 50        | LOCAL-BKNIX          | `{set med=50; accept;}`                                     |
| AMS-IX Bangkok    | 1G            | 0             | 100       | LOCAL-AMSIX-BKK      | `{set med=100; accept;}`                                    |
| IPTX Singapore    | 500M (paid)   | 1             | 150       | REGIONAL-IPTX-SG     | `{set bgp-path-prepend=1; set med=150; accept;}`            |
| IPTX Hong Kong    | 500M (paid)   | 1             | 150       | REGIONAL-IPTX-HK     | `{set bgp-path-prepend=1; set med=150; accept;}`            |
| AMS-IX Hong Kong  | 200M          | 2             | 200       | REGIONAL-AMSIX-HK    | `{set bgp-path-prepend=2; set med=200; accept;}`            |
| AMS-IX Europe     | 100M          | 3             | 300       | REMOTE-AMSIX-EU      | `{set bgp-path-prepend=3; set med=300; accept;}`            |
