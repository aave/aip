---
title: Add CVX to Aave V2
status: WIP
author: Llama (Matthew Graham, Dydymoon, Jean Brasse and Austin Green)
shortDescription: Add CVX as a collateral asset to Aave v2
discussions: https://governance.aave.com/t/arc-add-support-for-cvx-convex-finance-token/7319
created: 2022-05-12
---

## Simple Summary

The Llama Community would like to ask for your support in listing CVX as a collateral asset. CVX is the governance token of the Convex Finance protocol.

## Abstract

The Llama Community recommends consolidating revenue earned on all Aave markets on mainnet into a single Reserve Factor (RF). This proposal consolidates past and future Aave mainent V1 market revenue into the mainnet V2 RF. In the future, other aspects of the Llama treasury management proposal will be implemented through separate AIPs.

This proposal is broken into two parts, the second part is to enable borrowing of DPI. The borrowing of DPI was disabled via [AIP-44](https://app.aave.com/#/governance/44-QmNVWrrm3ieyRRVD4f77zdxrvSUj1W4HDCojLKNcxmVQhr) along with xSUSHI. Shortly after enacting AIP-44, DPI was found to be safe. This proposal is to reinstate DPI as an asset that can be borrowed on the Aave markets.

## Motivation

Listing CVX on the Aave V2 market would allow Aave to benefit from the first mover advantage as CVX is not currently listed on any major lending market. This asset listing has the potential to be a meaningful high vol asset revenue source. CRV is currently the fifth highest earning asset on the Aave V2 Market and has generated 190.33k aCRV tokens in revenue worth around [$744k](https://etherscan.io/address/0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c) at the time of writing.

In addition to the lending and borrowing demand, the aCVX revenue can be used to support directing CRV and CVX incentives distribution to those who stake Curve Liquidity Provider tokens on Convex Finance. Further details can be found [here](https://governance.aave.com/t/arc-consolidate-aave-v1-v2-amm-reserve-factors-purchase-cvx-and-deploy-to-earn-yield/6797).

## Specification

This proposal initialises the CVX reserve, enables variable borrowing, sets a reserve factor and configures the reserve as collateral. As needed, it also connects a price source on the AaveOracle.

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of the whole proposal lifecycle.

## Implementation

We recommend the following risk parameters.
Risk Parameters:
LTV 					45%
Liquidation Threshold	60%
Liquidation Bonus		8.5%
Reserve Factor			20%

Variable Interest Rate Parameters:
UOptimal 50%
R_0      0%
R_s1     7%
R_s2     200%

The governance forum proposal discussing Add CVX on Aave V2 mainnet market can be found [here](https://governance.aave.com/t/arc-add-support-for-cvx-convex-finance-token/7319) and the snapshot vote can be found [here](https://snapshot.org/#/aave.eth/proposal/0x399300d33120f63cdda37068b46e5da8485dbeeb1100dab0367a223124798f5b). The payload can be found here.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).