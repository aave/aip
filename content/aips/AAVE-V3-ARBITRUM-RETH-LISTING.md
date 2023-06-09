---
title: Add rETH to Arbitrum Aave v3
discussions: https://governance.aave.com/t/arfc-add-reth-to-aave-v3-arbitrum-liquidity-pool/12810
shortDescription: Add rETH to Arbitrum Aave v3 deployment as collateral, with borrowing enabled.
author: Llama (Fermin Carranza, TokenLogic)
created: 2023-05-24
---

# Summary

This publication presents the community with the opportunity to add rETH to Aave Arbitrum v3. 

# Abstract

This proposal will add rETH to the Aave Arbtirum v3  deployment as collateral, with borrowing enabled and no isolation mode. 

rETH can be used for creating a range of yield maximising and lower carry cost leveraged trading strategies. Given the typically low borrowing cost for LSTs, users are able to borrow the LST and participate in yield strategies beyond the Aave protocol.

# Motivation

rETH is listed on Aave v3 Ethereum and has over $20M of deposits. Rocket Pool is expanding its support for rETH across the L2 ecosystem, first Optimism, now Arbitrum and soon Polygon. There are currently only Chainlink Oracles for Arbitrum and Ethereum. This AIP focusses on listing rETH on Arbitrum.

LST collateral types drive material borrowing revenue to Aave as users deposit the LST and borrow the corresponding network token. This is most evident on Ethereum where the LST-wETH-yield-maximising loop is the source of the vast majority of wETH borrowing demand.

By providing LST diversification, Aave presents itself as a neutral platform offering users the choice between various LSTs. An added benefit of offering a variety of LSTs is the respective communities may elect to compete for user acquisition via Aave through offering incentives. This is currently happening on Aave v3 Polygon and Aave’s TVL has meaningfully increased from a relatively small base.

# Specification

The parameters shown below are the [combined recommendation](https://governance.aave.com/t/arfc-add-reth-to-aave-v3-arbitrum-liquidity-pool/12810/2) of Gauntlet and Chaos Labs.

Ticker: rETH

Contract Address: [`arbitrum: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8`](https://arbiscan.io/address/0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8)

Chainlink Oracle rETH/ETH [`0xF3272CAfe65b190e76caAF483db13424a3e23dD2`](https://arbiscan.io/address/0x0411D28c94d85A36bC72Cb0f875dfA8371D8fFfF)

Newly deployed Oracle rETH/ETH/USD [`0x04c28D6fE897859153eA753f986cc249Bf064f71`](https://arbiscan.io/address/0x04c28D6fE897859153eA753f986cc249Bf064f71)


|Parameter|Value|
| --- | --- |
|Isolation Mode|No|
|Borrowable|Yes|
|Collateral Enabled|Yes|
|Supply Cap|325 units|
|Borrow Cap|85 units|
|LTV|67.00%|
|LT|74.00%|
|Liquidation Bonus|7.50%|
|Liquidation Protocol Fee|10.00%|
|Reserve Factor|15.00%|
|Variable Base|0.00%|
|Variable Slope 1|7.00%|
|Variable Slope 2|300.00%|
|Uoptimal|45.00%|
|Stable Borrowing|Disabled|
|Stable Slope 1|13.00%|
|Stable Slope 2|300.00%|
|Base Stable Rate Offset|3.00%|
|Stable Rate Excess Offset|5.00%|
|Optimal Stable to Total Debt Ratio|20.00%|
|Flahloanable|Yes|
|Siloed Borrowing|No|
|Borrowed in Isolation|No|

# Implementation

A list of relevant links like for this proposal:

* [Governance Forum Discussion](https://governance.aave.com/t/arfc-add-reth-to-aave-v3-arbitrum-liquidity-pool/12810)
* [Snapshot](https://snapshot.org/#/aave.eth/proposal/0xa7bc42ca1f658655e9998d22d616133da734bad0e6caae9c7d016ad97abf1451)
* [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3Listings_20230524/AaveV3ArbListings_20230524_PayloadTest.t.sol)
* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3Listings_20230524/AaveV3ArbListings_20230524_Payload.sol)

Chaos Labs and Gauntlet both contributed to the development of the risk parameters presented above. 

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
