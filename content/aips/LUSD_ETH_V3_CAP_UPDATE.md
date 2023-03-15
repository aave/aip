---
title: Supply and Borrow Caps Update - LUSD - v3 Ethereum
shortDescription: Increase supply and borrow caps for LUSD on Aave Ethereum V3
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-supply-and-borrow-caps-update-lusd-v3-ethereum/12289
created: 2023-03-15
---

# Summary

A proposal to increase the LUSD supply cap to 6M and the borrow cap to 2.4M.

# Motivation

LUSD is currently at ~96% of its supply cap and ~89% of its borrow cap on Aave V3 Ethereum. This increase in supply and borrow has happened over the past few days following the de-peg events of several stablecoins, including LUSD.

Given the on-chain liquidity levels, current conservative caps set, and the fact that LUSD is a non-collateral asset, we recommend doubling the supply and borrow cap.

The proposal represents a 100% increase from the current caps, making this ARFC compliant with the “direct-to-AIP” framework.

# Specification

Ticker: LUSD (LUSD)

Contract Address: [0x5f98805A4E8be255a32880FDeC7F6728C6568bA0](https://etherscan.io/address/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0)

| Parameter  | Current | Proposed |
| ---------- | ------- | -------- |
| Supply Cap | 3M      | 6M       |
| Borrow Cap | 1.2M    | 2.4M     |

# References

- [Forum Post](https://governance.aave.com/t/arfc-supply-and-borrow-caps-update-lusd-v3-ethereum/12289)

- [Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV3EthLusdCapsPayload-Mar15.sol)

- [Tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV3EthLusdCapsPayload-Mar15.t.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
