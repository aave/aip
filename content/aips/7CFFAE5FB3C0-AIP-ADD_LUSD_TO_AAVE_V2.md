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

This proposal initialises the LUSD reserve, enables variable borrowing and sets a reserve factor. As needed, it also connects a price source on the AaveOracle.

## Rationale

LUSD will be added as a borrowable asset only (0% LTV) to ensure the safest onboarding possible. If the demand for borrowing is sufficient, the LTV could later be raised and once mainnet v3 is available, efficiency mode could also be enabled. 

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of the whole proposal lifecycle.

Link to Test Cases: [End-to-end test suite](https://github.com/liquity/example-aave-v2-listing/blob/master/src/test/ValidationLUSDListing.sol)

## Implementation

- [LUSDListingPayload](https://etherscan.io/address/0xe0070f7a961dcb102e3d904a170613be3f3b37a9)
- [aLUSD implementation](https://etherscan.io/address/0x893E606358205AD994e610ad48e8aEF98aEadDbe)
- [Variable Debt LUSD implementation](https://etherscan.io/address/0xEB1cfEF24F5B9d287F702AC6EbD301E606936B54)
- [Stable Debt LUSD implementation](https://etherscan.io/address/0x595c33538215DC4B092F35Afc85d904631263f4F)
- [Interest rate strategy for LUSD](https://etherscan.io/address/0x545Ae1908B6F12e91E03B1DEC4F2e06D0570fE1b)
- [LusdUsdToLusdEth price feed](https://etherscan.io/address/0x60c0b047133f696334a2b7f68af0b49d2F3D4F72)
- [LUSD token](https://etherscan.io/address/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
