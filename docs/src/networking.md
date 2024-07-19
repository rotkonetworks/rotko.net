# Networking

## Bandwidth
<img src="images/networking/bandwidth.webp" alt="Scaling bandwidth" style="width: 100%; margin-top: 2em; object-fit: cover;">

3x 10G uplink connections are used to connect to WAN utilizing BGP routing
protocol.

## Routing

| Name              | Speed         | Path Prepend  | MED       | Description          | Edge Router | Chain Name              | Rule                                                      |
|-------------------|---------------|---------------|-----------|----------------------|-------------|-------------------------|-----------------------------------------------------------|
| BKNIX             | 10G           | 0             | 50        | LOCAL-BKNIX          | BKK10       | BKNIX-OUT-v4, BKNIX-OUT-v6 | `set bgp-out-med 50; accept;`                               |
| AMS-IX Bangkok    | 1G            | 0             | 100       | LOCAL-AMSIX-BKK      | BKK20       | AMSIX-BAN-OUT-v4, AMSIX-BAN-OUT-v6 | `set bgp-out-med 100; accept;`                              |
| IPTX Singapore    | 500M (paid)   | 1             | 150       | REGIONAL-IPTX-SG     | BKK20       | HGC-SG-OUT-v4, HGC-SG-OUT-v6 | `set bgp-path-prepend 1; set bgp-out-med 150; accept;`      |
| IPTX Hong Kong    | 500M (paid)   | 1             | 150       | REGIONAL-IPTX-HK     | BKK10       | HGC-HK-OUT-v4, HGC-HK-OUT-v6 | `set bgp-path-prepend 1; set bgp-out-med 150; accept;`      |
| AMS-IX Hong Kong  | 200M          | 2             | 200       | REGIONAL-AMSIX-HK    | BKK10       | AMSIX-HK-OUT-v4, AMSIX-HK-OUT-v6 | `set bgp-path-prepend 2; set bgp-out-med 200; accept;`      |
| AMS-IX Europe     | 100M          | 3             | 300       | REMOTE-AMSIX-EU      | BKK20       | AMSIX-EU-OUT-v4, AMSIX-EU-OUT-v6 | `set bgp-path-prepend 3; set bgp-out-med 300; accept;`      |
