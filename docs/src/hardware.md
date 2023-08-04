# Hardware

![Machines at rack](./images/rack/machines_at_rack.webp)

Our primary goal is to deliver a high-performance and secure blockchain
infrastructure that fosters trust and reliability. We aim to achieve this by
focusing on the critical elements of blockchain technology - namely, ensuring
high single-thread performance for validator services, and low latency for RPC
services, among others.

Validator services in blockchain infrastructures demand high single-thread
performance due to the nature of their operations. Validators, in essence,
validate transactions and blocks within the blockchain. They act as the
arbitrators of the system, ensuring the veracity and accuracy of the
information being added to the blockchain. This is an intensive process that
involves complex computations and encryption, thus requiring a
high-performance, single-thread system to maintain efficiency.

The low latency required for our RPC services is another vital factor in our
hardware design. RPC, or Remote Procedure Call, is a protocol that allows a
computer program to execute a procedure in another address space, usually on
another network, without the programmer needing to explicitly code for this
functionality. In simpler terms, it's a way for systems to talk to each other.
Low latency in these operations is crucial to ensure a smooth and seamless
dialogue between various systems within the blockchain. A delay or a lag in
these communications can cause bottlenecks, leading to a slowdown in overall
operations.

The hardware components and their configurations we have selected are
specifically designed to address these needs. By leveraging advanced
technologies like the AMD Ryzen 9 7950X for its superior single-thread
performance, DDR5 memory for fast data retrieval, and NVMe SSDs for their
exceptional speed in data storage and retrieval, we aim to provide an
infrastructure that can effectively handle the demands of blockchain
technology.

Our infrastructure is also designed to ensure scalability and flexibility. As
the demands of the blockchain ecosystem grow, so too should our capacity to
handle these increasing demands. Hence, our hardware design also incorporates
elements that will allow us to easily scale up our operations when necessary.

In essence, our hardware is purpose-built to deliver high-performance
blockchain operations that are secure, reliable, and capable of scaling with
the demands of the evolving blockchain ecosystem.
