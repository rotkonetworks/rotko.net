## Validator as a Service

### Secure key management
Validator as a Service presents a complex problem space. It's akin to
attempting to serve users easily deployable validators while navigating the
treacherous waters of not having access to the users' hot wallet keys. The
Polkadot/substrate ecosystem offers a bit of a reprieve here, introducing [three
different keypairs](https://wiki.polkadot.network/docs/learn-cryptography) - stash, controller, and session keys - for validating.

In essence, this design allows validators to execute their roles without
exposing their actual wallet keys to the internet. Instead, the controller
wallet equips the Polkadot client with permissions to generate session keys.
These keys are exclusively tailored for carrying out tasks necessary for
validating the blockchain. And the beauty of this design lies in its fluidity,
allowing keys to be rotated by making a simple authorship_rotateKeys RPC call.

A potential solution to this security conundrum is the deployment of a Trusted
Execution Environment (TEE) or a secure enclave, which comes equipped with
automated integrity tests. In case attestation fails, we can rotate the keys, and the
validation process halts  the attestation fails. Now, this scenario sounds
like a decent solution to the problem, but the implementation could be like
trying to thread a moving needle.

A promising avenue is the use of Trusted Execution Environments (TEEs) or
secure enclaves that isolate sensitive data and process it securely. However,
they're not immune to threats, with side-channel attacks being particularly
worrisome in a decentralized network where trust is distributed.

Decentralized Trusted Execution Environment (integriTEE) networks, though promising,
amplify potential attack surfaces due to their large number of nodes, each
serving as a potential vulnerability point. The diverse security standards
across participants, resource limitations, and lack of uniform monitoring can
lead to exploitable weak spots and slower response times in case of security
breaches. Hardware vulnerabilities, like those seen in [Intel's SGX](https://sgx.fail/), present
additional risks, as ensuring patched hardware across all nodes is challenging.
Furthermore, mitigation strategies, such as microcode updates (MCUs), are more
complex to coordinate across a myriad of participants. The presence of
potentially malicious actors within the decentralized system further
complicates this landscape, necessitating robust, comprehensive security
strategies to ensure network integrity.

Ultimately, navigating towards a secure Validator as a Service requires a
comprehensive security approach, acknowledging the unique challenges of a
decentralized network, and constant vigilance against potential
vulnerabilities.
