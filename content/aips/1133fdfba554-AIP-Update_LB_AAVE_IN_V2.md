---
title: Update the Liquidation Bonus of AAVE in Aave V2 Market
status: Proposed
author: Author's Name (@GitHubUsername)
shortDescription: Update LB of AAVE in V2
discussions: <governance forum thread>
created: 2021-09-07
---


## Simple Summary

A proposal to increase the Liquidation Bonus of AAVE in V2 Market.

## Abstract

Recent investigations highlighted the importance of optimizing liquidation bonuses. The current Liquidation Bonus of AAVE reserve is misaligned with the liquidation bonuses of others reserves.

## Motivation

The current liquidation bonus of AAVE drives to multiple issues. The change of the parameter will help to prevent and avoid future problems of the system related to this reserve.

## Specification

- Current Liquidation Bonus of AAVE: 8%
- Recommended Liquidation Bonus Update of AAVE: 10%


## Implementation

The proposal sets the liquidation bonus by calling `configureReserveAsCollateral` on the `PoolConfigurator` contract at `0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756`, using the address and parameters specific to `AAVE` token.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).