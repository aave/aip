---
aip: 11
title: desactivation of Aave V1 stable rate borrowing
status: Proposed
author: Marc Zeller (@marczeller), Emilio Frangella (@The3D_)
shortDescription: Disable Aave V1 Stable Rates
discussions: https://governance.aave.com/t/aave-protocol-v1-v2-migration-tool-and-transition-plan/2053
created: 2021-04-02
updated: 2021-04-02
---

## AIP rationale

The Aave Protocol V2 was launched in Dec 2020 and is now concentrating the majority of the Aave protocol Liquidity
Aave V1 users have the option to upgrade their position seamleslly into V2 with the native Aave migration tool

With significant reserves in, the community has the opportunity to implement a plan to transition the remaining reserves from V1 to v2.
The community has the opportunity to bring about this change to ease the borrowing pressure on V1, to address high transaction feesthat exist now, and may increase further upon the implementationof Berlin hardfork.
The migration can benefit not only Aave users, but also the Aave ecosystem as a whole because it will allow protocols integrating with Aave to have additional stablecoins liquidity available(due to the ecosystem wide stablecoin liquidity crush).

if this proposal is approved by the Aave governance, Stable rates loans will be disabled for Aave V1.

the rebalancing mechanism will also be updated to an enforced swap to variable rates. Which means, in case of extremely high borrowing pressure on the stablecoins reserves, users at stable rate will be migrated to variable until rebalancing conditions are not satisfied anymore.


## AIP content in short

Desactivation of the ability to open new stable rate borrowing positions on Aave V1

## Implementations details

[TBA]

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
