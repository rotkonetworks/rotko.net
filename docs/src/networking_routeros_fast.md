# FastTracking

## **Efficient Routing and Firewall Management with MikroTik Routers**

Efficiency in routing and firewall management is paramount in a network
environment, especially when tasked with handling substantial traffic volumes.
This document elucidates best practices for configuring MikroTik routers to
realize optimal performance, concentrating on FastTrack technology and
judicious firewall rule arrangement.

## **FastTrack Configuration**

MikroTik routers offer FastTrack, a performance optimization feature that
enables specific packets to bypass various handling layers. The benefit of this
bypass is twofold: reduced CPU load and increased throughput.

### **The Advantage of FastTrack**

FastTrack substantially lightens the burden on the router's CPU, thereby
accommodating more connections and amplifying throughput. This efficiency is
particularly invaluable for Peer-to-Peer (P2P) connections, such as those
utilized by Polkadot nodes.

### **Implementing FastTrack**

FastTrack can be implemented with precision to enhance the performance of
Polkadot P2P ports.

1. **Identify the Connections**: Ascertain the connections you desire to
   FastTrack. Typically, for Polkadot nodes, the FastTrack would be applied to
the P2P ports (e.g., `30333`) responsible for inter-node communication.

2. **Construct the FastTrack Rule**: Position the FastTrack rule at the zenith
   of the firewall filter rules. The following example demonstrates a FastTrack
rule for Polkadot P2P port `30333`, targeting the IP address `192.168.42.101`:

   ```shell
   /ip firewall filter add chain=forward action=fasttrack-connection dst-address=192.168.42.101 protocol=tcp dst-port=30333 connection-state=established,related
   ```

3. **Formulate a Corresponding Accept Rule**: FastTracking a connection does
   not automatically validate it, necessitating a corresponding 'accept' rule
subsequent to the FastTrack rule:

   ```shell
   /ip firewall filter add chain=forward action=accept dst-address=192.168.42.101 protocol=tcp dst-port=30333 connection-state=established,related
   ```

4. **Configure Port Forwarding**: Accurate port forwarding is fundamental for
   channeling traffic to the Polkadot node. An example of a Destination NAT
rule for directing traffic on port `30333` to the internal address
`192.168.42.101` is as follows:

   ```shell
   /ip firewall nat add chain=dstnat action=dst-nat to-addresses=192.168.42.101 to-ports=30333 protocol=tcp dst-address=27.131.160.106 dst-port=30333
   ```

## **Ordering Firewall Rules**

The sequencing of firewall rules is pivotal, as rules are processed linearly.
The advised general order is:

1. **Essential Drop Rules**: Intercept known malicious IPs or undesired
   traffic.
2. **FastTrack Rules**: As detailed above.
3. **General Allow and Deny Rules**: These encompass standard protocols and
   services either to be permitted or obstructed.

## **Monitoring and Refinement**

MikroTik offers diverse tools to observe your router's performance:

- **Resource Monitoring**: Utilize `/system resource print` to inspect CPU and
memory usage.
- **Connection Tracking**: Examine FastTrack connections with `/ip firewall
connection tracking print`.

Consistent monitoring is instrumental in detecting performance restrictions and
avenues for further enhancement.

## **Conclusion**

The optimization of a MikroTik router's configuration is a nuanced process that
requires comprehension of features like FastTrack and meticulous ordering of
firewall rules. Regular scrutiny and evaluation of the router's functionality
will aid in sustaining a network environment that is both efficient and secure.

Adherence to best practices, such as testing modifications in a controlled
setting before full deployment, will mitigate the risks of unforeseen behaviors
and potential network vulnerabilities.
