---
title: Freeze DPI on V2 Ethereum
shortDescription: Freeze DPI on V2 Ethereum
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-add-dpi-to-v3-ethereum-and-freeze-on-v2-ethereum/12354
created: 2023-3-20
---

# Simple Summary

A proposal to to freeze DPI on the Aave V2 Ethereum market.

# Motivation

DPI is an index token redeemable for a basket of ERC-20s. Due to an extremely low market cap and trading volumes, combined with centralization considerations, we recommend freezing DPI on Aave V2.
Through 2021 DPI held a market cap between $100M and $200M with daily trading volumes in the $Ms. However, throughout 2022 the market cap has decreased drastically, staying between $10M-$30M for the past three months, with daily trading volume rarely crossing the $200K mark. On top of the low market cap and low trading volume, there is also implied centralization risk of DPI compared with the direct holding of the basket of underlying assets.
The respective governance forum discussion is linked below:

- [[ARFC] - Add DPI to V3 Ethereum and Freeze on V2 Ethereum](https://governance.aave.com/t/arfc-add-dpi-to-v3-ethereum-and-freeze-on-v2-ethereum/12354)

# Specification

Ticker: DPI

Contract Address: 0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b

The proposal payload simply executes setReserveBorrowing(false) on the Aave V2 Ethereum LendingPoolConfigurator for DPI.

# References

[Forum Post](https://governance.aave.com/t/arfc-add-dpi-to-v3-ethereum-and-freeze-on-v2-ethereum/12354)

[Tests](https://github.com/ChaosLabsInc/aave-v2-payloads/blob/main/src/tests/AaveV2FreezeDPIPayloadTest.t.sol)

[Proposal payload implementation](https://github.com/ChaosLabsInc/aave-v2-payloads/blob/main/src/payloads/AaveV2FreezeDPIPayload.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
