---
title: Renew allowance of the Aave Safety Module
status: Proposed
author: BGD Labs (@bgdlabs)
shortDescription: Increase allowance of AAVE from the Ecosystem's Reserve to stkAAVE and stkABPT
discussions: N/A
created: 2022-06-10
---

## Simple Summary

This proposal aims to extend the allowance of AAVE for safety incentives on the Aave Safety Module for two years at the current emission, pending eventual review of the emission rate by the community.

## Abstract

This proposal extends the ability for the Safety Module contracts (stkAAVE and stkABPT) to transfer the AAVE rewards out of the Aave Ecosystem's Reserve for the next two years onwards (401'500 AAVE each; 802'300 AAVE in total).

Doing so will allow the technical continuation of the safety incentives for at least two years, but submitted to any change of the community at any moment, as this proposal doesn't modify the emission per second currently configured.

This continues the strategy for which changing the emission requires an on demand emission review when the community deems necessary. Only one yearly review will be required.
**This update represents a purely technical update to allow the continuation of the incentives and to stackers that have rewards left to claim to receive their incentives.**

## Relevant links

- AIP-19 postponing the end of safety incentives: [https://app.aave.com/governance/14-QmTYMox4aBpyQH53LwMzTuJY2z7Df7ANUSakeeeWWUoXmJ](https://app.aave.com/governance/14-QmTYMox4aBpyQH53LwMzTuJY2z7Df7ANUSakeeeWWUoXmJ)
- Aavenomics : [https://docs.aave.com/aavenomics/](https://docs.aave.com/aavenomics/)

## Implementation

This proposal exclusively increases the allowance of AAVE from the AAVE Ecosystem's reserve (owner) to stkAAVE and stkABPT (spenders).
In order to comply with the requirements of the Controller of the Reserve, there is a previous reset of allowance to 0, before the increase.

**Target Contracts**

AllowanceRenewalSMPayload = [https://etherscan.io/address/0x83fba23163662149b33dbc05cf1312df6dcba72b#code](
https://etherscan.io/address/0x83fba23163662149b33dbc05cf1312df6dcba72b#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
