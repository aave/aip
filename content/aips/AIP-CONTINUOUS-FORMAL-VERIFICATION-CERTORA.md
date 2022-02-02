---
title: Continuous Formal Verification
status: WIP
author: Shelly Grossman (@shellygr)
shortDescription: A proposal for integrating formal verification and path coverage tools for continuous securing of the Aave Protocol. 
discussions: https://governance.aave.com/t/continuous-formal-verification/6308
created: 2022-02-03
updated (*optional): N/A
---

## Simple Summary

A proposal for significantly and continuously improving the security of the Aave platform and the dApps built on top of it, by offering our formal verification and path coverage tooling service to the Aave Platform contributors and the Aave Protocol dApp developers. The initial proposal is for 6 months starting January 2022. A discount price is given for an annual contract.

## Abstract

Certora proposes two approaches to significantly increase the confidence in the platform itself and in the smart contracts built on top of it, even when the code is evolving.

First, we propose to change the project-based relationship of Aave and Certora, to an ongoing relationship, where we will provide ongoing support and rule-writing for Certora Prover on Aave’s code. This service will be provided to all who contribute to Aave’s ecosystem: Aave’s in-house developers, community contributors and dApp developers. This will ensure that the constantly-evolving code of Aave’s platform remains secure, protecting its users’ assets.

Second, we will develop a new symbolic execution tool (path coverage) which will significantly increase the coverage of code areas where we look for bugs, complementing the more focused nature of the Certora Prover. This tool’s results will be visible to all via a unique dashboard we will build. In addition, it will be open-source, so the community could contribute to its development.

## Motivation

One of the major risks in managing a complex system of smart contracts such as Aave's is that it is harder to ensure that changes introduced via governance are safe, and that they do not break the behavior of the protocol.

These risks were highlighted by a recent incident in which a bug was introduced in a Compound governance proposal, leading to huge nonrecoverable financial losses. Of course, such bugs are not exclusive to Compound— they have been affecting many DeFi protocols.

Detecting vulnerabilities before they are deployed is difficult because of the lack of good security tools for smart contract development. Smart contract developers often rely on manual auditing to prevent bugs, but audits are difficult to employ in the setting of ongoing, time-controlled governance proposals. Moreover, even the best auditor can miss critical bugs due to the complexity of the code.

## Rationale

See `discussions` for further information.

## Implementation

This AIP implements the proposal for its 6 months period. According to the forum discussion, the price is $1,700,000, where:
1. $1,000,000 is paid in USDC. Every month a sum of $166,666 will be transfered from the Aave treasury using USDC. As no stablecoins were paid as of yet from the Aave treasury, we will first enable stablecoin transfers, in particular USDC.
2. $700,000 is paid in Aave. Every month, Aave tokens of value $116,666 will be transferred from the Aave treasury. The Aave tokens will be vested linearly over a year period.
3. A one-time payment of $200,000 in Aave tokens will be transferred to a special multi-sig wallet owned by the Aave Governance, an elected member from the Aave community, and a Certora delegate. The wallet will serve as a special fund for paying decentralized community rule writers.

In all cases, the Aave price will be fetched at the time of the payment to compute the number of Aave tokens to transfer.
[Sablier](https://docs.sablier.finance/) will be used to implement a streaming vesting payment for the Aave tokens in (2).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).