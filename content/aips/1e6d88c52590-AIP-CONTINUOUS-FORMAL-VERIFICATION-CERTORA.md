---
title: Continuous Formal Verification
status: WIP
author: Shelly Grossman (@shellygr)
shortDescription: A proposal for integrating formal verification and path coverage tools for continuous securing of the Aave Protocol. 
discussions: https://governance.aave.com/t/continuous-formal-verification/6308
created: 2022-02-03
---

## Simple Summary

A proposal for significantly and continuously improving the security of the Aave platform and the dApps built on top of it, by offering our formal verification and path coverage tooling service to the Aave Platform contributors and the Aave Protocol dApp developers. The initial proposal is for 6 months starting from the execution of this proposal.

## Abstract

Certora proposes two approaches to significantly increase the confidence in the platform itself and in the smart contracts built on top of it, even when the code is evolving.

First, we propose to change the project-based relationship of Aave and Certora, to an ongoing relationship, where we will provide ongoing support and rule-writing for Certora Prover on Aave’s code. This service will be provided to all community contributions to core and periphery parts of the Aave ecosystem. This will ensure that the constantly-evolving code of Aave’s platform remains secure, protecting its users’ assets.

Second, we will develop a new symbolic execution tool (path coverage) which will significantly increase the coverage of code areas where we look for bugs, complementing the more focused nature of the Certora Prover. This tool’s results will be visible to all via a unique dashboard we will build. In addition, it will be open-source, so the community could contribute to its development.

## Motivation

One of the major risks in managing a complex system of smart contracts such as Aave's is that it is harder to ensure that changes introduced via governance are safe, and that they do not break the behavior of the protocol.

These risks were highlighted by a recent incident in which a bug was introduced in a Compound governance proposal, leading to huge nonrecoverable financial losses. Of course, such bugs are not exclusive to Compound— they have been affecting many DeFi protocols.

Detecting vulnerabilities before they are deployed is difficult because of the lack of good security tools for smart contract development. Smart contract developers often rely on manual auditing to prevent bugs, but audits are difficult to employ in the setting of ongoing, time-controlled governance proposals. Moreover, even the best auditor can miss critical bugs due to the complexity of the code.

## Rationale

See `discussions` for further information.

## Implementation

This AIP implements the proposal for its 6 months period. According to the forum discussion, the price is $1,700,000, where:
1. $1,000,000 is paid in USDC. These funds will be transferred from the Aave Collector, and will be vested using [Sablier](https://docs.sablier.finance/).
2. $700,000 is paid in Aave, also vested using Sablier.
3. A one-time payment of $200,000 in Aave tokens will be transferred to a special 3/4 multi-sig wallet owned by the Aave Governance, 2 members from the Aave community, and 2 Certora delegates. The wallet will serve as a special fund for paying decentralized community rule writers.

The AAVE price is computed using the [Chainlink AAVE/USD price feed](https://etherscan.io/address/0x547a514d5e3769680Ce22B2361c10Ea13619e8a9) upon execution of the proposal.

The transactions that will be performed are as follows:
1. Transfer a total worth of $900,000 in AAVE tokens from the EcosystemReserve to the ShortExecutor using the Ecosystem Reserve Controller contract at 0x1E506cbb6721B83B1549fa1558332381Ffa61A93.
2. Approve $700,000 worth of AAVE tokens to Sablier.
3. Create a Sablier stream with Certora as the beneficiary, to stream the $700,000 worth of Aave over 6 months.
4. Transfer $200,000 worth of AAVE to a multisig co-controlled by Aave and Certora teams.
5. Transfer USDC 1,000,000 from the Aave Collector to the ShortExecutor, first transfering aUSDC and then withdrawing them from the pool.
6. Approve USDC 1,000,000 to Sablier.
7. Create a Sablier stream with Certora as the beneficiary, to stream the USDC 1,000,000 over 6 months.

The source code for the proposal payload contract is available [here](https://github.com/Certora/aave-proposal-test).
The contract is deployed at [0x879A89D30b04b481Bcd54f474533d3D6A27cFd7D](https://etherscan.io/address/0x879a89d30b04b481bcd54f474533d3d6a27cfd7d).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
