---
title: Add LUSD to Arbitrum Aave V3
discussions: https://governance.aave.com/t/arfc-add-lusd-to-aave-v3-on-arbitrum/12858
shortDescription: Add LUSD to Arbitrum Aave V3 deployment
author: Llama (Fermin Carranza, TokenLogic)
created: 2023-05-24
---

# Summary

This publication presents the community with the opportunity to add LUSD to Aave Arbitrum v3. 

# Abstract

LUSD is decentralised stable coin backed by ETH that is minted on the non-custodial, immutable, and governance-free, Liquidity Protocol.

Adding LUSD to Arbitrum will promote stable coin diversity. All Liquidity Protocol contracts are immutable, which makes LUSD the most trustless stablecoin available.

This publication proposes listing LUSD with collateral disabled (LTV 0%) with borrowing enabled. 

# Motivation

LUSD is currently listed on the following Aave deployments:

* Ethereum V3
* Ethereum V2
* Optimism V3

This publication seeks to list LUSD on Aave v3 Arbitrum.

Past publications, which can be found [here](https://governance.aave.com/t/arc-add-lusd-to-ethereum-v3-market/11522) and [here](https://governance.aave.com/t/arc-add-support-for-lusd-liquity/8443), provide insight and context.

LUSD brings more stable coin diversity to the Aave Protocol and will further empower the support for decentralized stablecoins. The LUSD stable coin mechanism is relatively simple and is in line with the risk averse ethos of the Aave Community.

LUSD is overcollateralised by ETH with two main mechanisms helping it keep its peg: 

* LUSD can be redeemed for ETH at face value (i.e., 1 LUSD for $1 of ETH). 
* Minimal collateral ratio of 110%.
 
Both mechanisms respectively create a price floor and ceiling through arbitrage opportunities.

LUSD on Arbitrum and Optimism relies on users transferring LUSD through each networks respective bridge to arbitrage the price variation across the networks.

This proposal aims to add LUSD as a borrowable asset (LTV 0%).

# Specification

The parameters shown below are the [combined recommendation](https://governance.aave.com/t/arfc-add-lusd-to-aave-v3-on-arbitrum/12858) of Gauntlet and Chaos Labs.

Ticker: LUSD

Contract Address: [`0x93b346b6BC2548dA6A1E7d98E9a421B42541425b`](https://arbiscan.io/token/0x93b346b6bc2548da6a1e7d98e9a421b42541425b)

Chainlink Oracle LUSD/USD [`0x0411D28c94d85A36bC72Cb0f875dfA8371D8fFfF`](https://arbiscan.io/address/0x0411D28c94d85A36bC72Cb0f875dfA8371D8fFfF)

|Parameter|Value|
| --- | --- |
|Isolation Mode|No |
|Borrowable|Yes |
|Collateral Enabled| No |
|Supply Cap | 900,000 units |
|Borrow Cap | 900,000 units|
|Debt Ceiling| 0 |
|LTV| NA |
|LT| NA |
|Liquidation Bonus| NA |
|Liquidation Protocol Fee |NA|
|Variable Base|0.00%|
|Variable Slope1|4.00%|
|Variable Slope2|87.00%|
|Uoptimal|80.00|
|Reserve Factor|10.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|4.00%|
|Stable Slope2|87.00%|
|Base Stable Rate Offset|1.00%|
|Stable Rate Excess Offset|8.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

# Implementation

A list of relevant links like for this proposal:

* [Governance Forum Discussion](https://governance.aave.com/t/arfc-add-lusd-to-aave-v3-on-arbitrum/12858)
* [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3Listings_20230523/AaveV3ArbListings_20230523_PayloadTest.t.sol)
* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3Listings_20230523/AaveV3ArbListings_20230523_Payload.sol)

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Disclaimer

@llamaxyz and contributor, @TokenLogic, are not associated with or compensated by Liquity for publishing this AFRC.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
