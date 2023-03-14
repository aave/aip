---
title: Disable agEUR borrows on Aave v3 Polygon
shortDescription: Following the recent exploit on Euler, temporarily disable agEUR borrows on aave v3 polygon
author: Chaos Labs (@ori-chaoslabs, @yhayun, @yonikesel)
discussions: https://governance.aave.com/t/arfc-disable-borrow-of-ageur-on-aave-v3-polygon/12275
created: 2023-03-13
---

# Simple Summary

A proposal to to disable borrows of agEUR on the Aave V3 Polygon market.

# Motivation

Following the recent exploit on Euler, Angle Protocol has announced [having $17.6M of USDC deposited into the protocol](https://twitter.com/AngleProtocol/status/1635293731082612738), leading them to pause the protocol and to uncertainty around the collateralization of agEUR.

**agEUR is not listed as collateral on Aave V3 Polygon and is only borrowable, with utilization currently at nearly 100%**. Still, we think it is reasonable to disable further asset borrowing as an immediate and temporary measure until the backing is restored 1:1.

We continue to follow the situation closely as it develops and will update recommendations and actions accordingly.

# Specification

Ticker: agEUR

Contract Address: 0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4

The proposal payload simply executes setReserveBorrowing(false) on the [Aave V3 Polygon LendingPoolConfigurator](https://polygonscan.com/address/0x8145edddf43f50276641b55bd3ad95944510021e) for agEUR.

# References

- [Forum Post](https://governance.aave.com/t/arfc-disable-borrow-of-ageur-on-aave-v3-polygon/12275)

- [Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/AaveV3PolFreezeAGEURBorrow.sol)

- [Tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/AaveV3PolFreezeAGEURborrow.t.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
