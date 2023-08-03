# FastTracking

## **Efficient Routing and Firewall Management with MikroTik Routers**

### **Introduction**

In a network environment, especially when handling significant amounts of
traffic, efficiency in routing and firewall management is critical. This
document outlines best practices for configuring MikroTik routers to achieve
optimal performance, with a particular focus on FastTrack and efficient
firewall rule ordering.

### **FastTrack Configuration**

FastTrack is a performance optimization in MikroTik routers that allows certain
packets to bypass several layers of handling, reducing CPU load and increasing
throughput.

#### **Why Use FastTrack?**

FastTrack significantly reduces the load on the router's CPU, allowing for more
connections and higher throughput. This is especially beneficial for
Peer-to-Peer (P2P) connections, such as those used by Polkadot nodes.

#### **Configuring FastTrack**

1. **Identify the Connections**: Determine the connections you want to
   FastTrack. Common scenarios include established and related connections,
specific P2P ports, etc.
2. **Create the FastTrack Rule**: Place the FastTrack rule at the top of the
   firewall filter rules. Example:

   ```shell
   /ip firewall filter add chain=forward action=fasttrack-connection connection-state=established,related 
   ```

3. **Create a Corresponding Accept Rule**: FastTracking a connection doesn't
   automatically allow it, so you'll need a corresponding 'accept' rule below
the FastTrack rule.

   ```shell
   /ip firewall filter add chain=forward action=accept connection-state=established,related 
   ```

### **Ordering Firewall Rules**

The order of firewall rules is crucial, as rules are processed in sequence.
Here is the general recommended order:

1. **Essential Drop Rules**: Block known malicious IPs or unwanted traffic.
2. **FastTrack Rules**: As described above.
3. **General Allow and Deny Rules**: These include standard protocols and
   services you want to allow or block.

### **NAT Rules and Efficiency**

For Destination NAT (dstnat) rules, efficiency can be enhanced by grouping
similar rules together. However, MikroTik doesn't support multiple port
destination NAT directly, so the rules often appear verbose. Always ensure that
the necessary port forwards are appropriately configured.

### **Monitoring and Optimization**

MikroTik provides various tools to monitor the performance of your router:

- **Resource Monitoring**: Use `/system resource print` to view CPU, memory
usage.
- **Connection Tracking**: View FastTrack connections with `/ip firewall
connection tracking print`.

Regular monitoring helps identify bottlenecks and opportunities for further
optimization.

### **Conclusion**

Optimizing the configuration of a MikroTik router involves understanding and
appropriately using features like FastTrack and carefully ordering firewall
rules. Regular monitoring and review of the router's performance will help
maintain an efficient and secure network environment.

Always test changes in a controlled environment before deploying them in
production, as incorrect configurations can lead to unexpected behaviors and
potential network vulnerabilities.
