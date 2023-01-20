---
title: Freeze agEUR on Aave v3 Polygon
author: BGD Labs (@bgd-labs)
shortDescription: Following the Midas protocol incident, temporarily freeze agEUR
discussions: https://governance.aave.com/t/jeur-incident-plan-of-action/11379
created: 2022-01-18
updated: 2022-01-18
---

## Simple Summary

Following the exploit on Midas Protocol, slightly affecting the collateralization of agEUR, this proposal temporarily freezes agEUR. 

## Motivation

Even if agEUR collateralization doesn't seem threatened by the loss on Midas protocol exploit, it is important for the community to decide if a freezing should be executed, for caution.

## Specification

This is a cross-chain governance proposal for Aave v3 Polygon.
The proposal payload simply executes `setReserveFreeze()` on the [Aave v3 Polygon PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) for agEUR.

## References

- [Proposal payload implementation](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/polygon/AaveV3PolFreezeAGEUR.sol)
- [Tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/polygon/AaveV3PolJEURAGEURFreeze.t.sol)
- [Deployed payload](https://polygonscan.com/address/0x7b8fa4540246554e77fcff140f9114de00f8bb8d#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
