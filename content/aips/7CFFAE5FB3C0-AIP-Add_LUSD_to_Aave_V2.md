---
title: Add LUSD to Aave V2
status: Proposed
author: ßingen (@bingen)
shortDescription: List LUSD as borrowing asset on the Aave V2 pool
discussions: https://governance.aave.com/t/arc-add-support-for-lusd-liquity/8443
created: 2022-08-19
---

## Simple Summary

Add LUSD as a borrowable asset on Aave (0% LTV), helping the protocol diversify its stablecoin offering away from centralized stablecoins.

## Abstract

LUSD is stablecoin minted directly by the protocol users by opening a Trove and depositing ETH as collateral. Loans are interest-free, with a 0.5% base initiation fee. All the contracts of the Liquity protocol are immutable, which makes LUSD the most trustless stablecoin currently available on the Ethereum mainnet.

LUSD is overcollateralized by ETH with two main mechanisms helping it keep its peg: first, LUSD can be redeemed for ETH at face value (i.e., 1 LUSD for $1 of ETH). Secondly, there is a minimal collateral ratio of 110%. Both mechanisms respectively create a price floor and ceiling through arbitrage opportunities.

Since the protocol is immutable, no additional developments are planned, yet the Liquity team is working on another project that will prove synergetic with LUSD.

LUSD’s resilience makes it a highly sought-after stablecoin for DAOs and protocols looking to diversify their treasury and users looking for cost-effective leverage on ETH. The current focus is to grow the DeFi ecosystem around LUSD to enable more diverse use cases.

## Motivation

Most of the stablecoins available for borrowing on Aave are centralized or relying heavily on centralized collateral, apart from FEI, sUSD and RAI. Adding LUSD as a borrowable asset on Aave would enable the protocol to further diversify away from centralized stablecoins.

## Specification

The technical specification should describe the syntax and semantics of any new feature.

## Rationale

LUSD will be added as a borrowable asset only (0% LTV) to ensure the safest onboarding possible. If the demand for borrowing is sufficient, the LTV could later be raised and once mainnet v3 is available, efficiency mode could also be enabled. 

## Test Cases

Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation

The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
