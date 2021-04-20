---
aip: 15
title: Upgrade Aave V1 repayment for migration tool
status: Proposed
author: Marc Zeller (@marczeller), Emilio (@The-3D)
shortDescription: Aave v1 LendingPool implementation upgrade
discussions: https://governance.aave.com/t/aave-protocol-v1-v2-migration-tool-and-transition-plan/2053
created: 2021-04-21
updated: 2021-04-21
---

## AIP rationale

During the last months, some steps have been taken via governance to promote migration of liquidity from the version 1 of the protocol to the v2.

Progressively, some changes have been needed on the v1 contracts and configuration to be in line with the migrations ethos, and this proposal helps by improving the mechanism of repayment on behalf in the v1 LendingPool smart contract.


## AIP content in short

Upgrade Aave V1 lendingPool implementation Contract

## Implementations details

Call setLendingPoolImpl(newLendingPoolImplementation) with newLendingPoolImplementation being the smart contract on `0xC1eC30dfD855c287084Bf6e14ae2FDD0246Baf0d`

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
