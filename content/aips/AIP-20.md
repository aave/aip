---
aip: 20
title: Safety Incentives Implementation 
status: Proposed 
author: Marc Zeller (@marczeller)
shortDescription: Allow Safety Module AAVE transfer
discussions: https://governance.aave.com/t/proposal-introduce-liquidity-incentives-for-aave-v2/2340
created: 2021-05-07
updated: 2021-05-07
---

## AIP rationale

As a complementary final action following the AIP 18,

This proposal extends the ability for the Safety Module contracts (stkAAVE and stkABPT) to transfer the AAVE rewards out of the Aave Ecosystem Reserve for the next year onwards (200750 AAVE each, 401500 AAVE for both staking contracts).

Doing so will allow continuation of the safety incentives for at least one year.

This will remove the need for periodic quarterly review of the emission scheme, changing the approach to an on demand emission review when the community deems necessary. Only one yearly review will be required.


# ARC content in short

* With the AIP-18 and this proposal, Safety Incentives are maintained until a change is implemented for the next year.

# Relevant Links

* AIP-19 postponing the end of safety incentives: https://app.aave.com/governance/14-QmTYMox4aBpyQH53LwMzTuJY2z7Df7ANUSakeeeWWUoXmJ
* Aavenomics : https://docs.aave.com/aavenomics/

## Implementations details

executes approve(0x4da27a545c0c5B758a6BA100e3a049001de870f5, 200750) and
approve(0xa1116930326D21fB917d5A27F1E9943A9595fb47, 200750) on the Aave ecosystem reserve 0x25f2226b597e8f9514b3f68f00f494cf4f286491. https://etherscan.io/address/0x4da27a545c0c5B758a6BA100e3a049001de870f5 is the stkAAVE contract and https://etherscan.io/address/0xa1116930326D21fB917d5A27F1E9943A9595fb47 is the stkABPT address.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
