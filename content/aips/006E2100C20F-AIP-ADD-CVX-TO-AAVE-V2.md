---
title: Add CVX to Aave V2
status: WIP
author: Llama (Matthew Graham, Dydymoon, Jean Brasse and Austin Green)
shortDescription: Add CVX as a collateral asset to Aave v2
discussions: https://governance.aave.com/t/arc-add-support-for-cvx-convex-finance-token/7319
created: 2022-05-12
---

## Simple Summary

Llama proposes listing CVX, the governance token of the Convex Finance protocol, on Aave v2 mainnet as collateral with borrowing enabled. The risk parameters detailed within have been provided by Gauntlet.

## Abstract

Convex Finance allows Curv.fi liquidity providers to earn trading fees, CVX liquidity mining and boosted CRV rewards without having to lock and use their boosting power with veCRV. Convex Finance intends to add support for other tokens like FXS in the future.

Listing CVX on Aave v2 will enable lenders to receive yield and borrowers of CVX to partake in Convex Finance’s tokenomics model to earn yield. As CVX has a different, but similar tokenomics model to CRV, Llama expects there to be similar demand for CVX. aCRV is one of the highest earning assets on Aave v2 and Llama hopes CVX will become a significant source of revenue for the community.

The Aave community also benefits from being able to use the aCVX revenue to participate in Convex Finance’s tokenomics and vote CRV rewards to Curve pools that contain aTokens.

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