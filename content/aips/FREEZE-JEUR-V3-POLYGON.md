---
title: Freeze jEUR on Aave v3 Polygon
author: BGD Labs (@bgd-labs)
shortDescription: Following the Midas protocol incident, temporarily freeze jEUR
discussions: https://governance.aave.com/t/jeur-incident-plan-of-action/11379
created: 2022-01-18
updated: 2022-01-18
---

## Simple Summary

Following the exploit on Midas Protocol, slightly affecting the collateralization of jEUR, this proposal temporarily freezes jEUR. 

## Motivation

It is important for the community to decide if a freezing should be executed, for caution, given that a meaningful amount of the jEUR supply (5-10%) seems to be affected.

## Specification

This is a cross-chain governance proposal for Aave v3 Polygon.
The proposal payload simply executes `setReserveFreeze()` on the [Aave v3 Polygon PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) for jEUR.

## References

- [Proposal payload implementation](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/polygon/AaveV3PolFreezeJEUR.sol)
- [Tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/polygon/AaveV3PolJEURAGEURFreeze.t.sol)
- [Deployed payload](https://polygonscan.com/address/0x165e90bd0a41d08fa1891ccdcee315d7b83b3419#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
