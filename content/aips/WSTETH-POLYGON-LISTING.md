---
title: Add wstETH to Polygon Aave v3
discussions: https://governance.aave.com/t/arc-add-support-for-wsteth-on-polygon-v3/12266
shortDescription: Add wstETH to Polygon Aave v3 deployment as collateral, with borrowing enabled and an Ethereum correlated eMode.
author: Llama - TokenLogic & efecarranza
created: 2023-04-17
---

# Summary

This AIP presents the community with the opportunity to add wstETH to the Polygon v3 Liquidity Pool.

# Abstract

Across the Aave v3 Liquidity Pools, wstETH is listed on Ethereum, Arbitrum and Optimism. This proposal seeks to list wstETH on the Polygon Liquidity Pool as Collateral, with Borrowing enabled and an Ethereum correlated eMode. wETH will also be added to this Ethereum correlated eMode. The parameters are listed below.

The stETH/wETH rewards-maximising loop on Aave v2 Ethereum is the main source of borrowing demand for wETH. The wETH reserve generates a material portion of Aave’s revenue, more than [$294k](https://dune.com/llama/Aave-ETH-Market-Parameters-Simulation) during March 2023. 

By listing wstETH on Polygon users will be able to enter the same yield maximising strategy creating borrowing demand for wETH and revenue for Aave.

# Motivation

The stETH reserve on Aave v2 is the largest reserve across all Aave deployments with $1.90B in deposits, exceeding USDC ($0.62B) and ETH ($1.41B). This is partially due to several communities having built products that deposit stETH and borrow ETH as part of a rewards-maximising strategy. 

Demand for borrowing wETH on Aave v2 Ethereum increased significantly when stETH was listed as collateral. InstaDapp, Index Coop, Galleon DAO, CIAN and others have all built products on top of Aave v2 that utilise the rewards-maximising stETH/ETH strategy. By adding wstETH to the Polygon Liquidity Pool, Aave moves closer towards enabling developers to deploy similar products on Polygon. This is expected to create borrowing demand for wETH and boost Aave’s revenue.

The charts below show the effect of stETH has had on the Aave v2 Ethereum liquidity pool. stETH drives most of the wETH borrowing demand and resulting wETH fee-revenue. The wETH reserve generated approximately $244k and $294k during Fabruary and March respectively.

![](https://i.imgur.com/RaduU68.png)

Listing of stETH by Aave has enabled Aave to offer the best return on wETH, in wETH terms, across major lending markets, continually outperforming Compound. By listing wstETH on Polygon, the Aave community is helping create an environment capable of replicating the success of the Aave v2 Ethereum Liquidity Pool.

# Specification

This section presents the risk parameters and interest rates parameters presented by [Gauntlet and Chaos Labs](https://governance.aave.com/t/arc-add-support-for-wsteth-on-polygon-v3/12266/4) on the governance forum.


|Parameter|Value|
| --- | --- |
|Isolation Mode|No|
|Borrowable|Yes|
|Collateral Enabled| Yes|
|Supply Cap (wstETH)| 1,800|
|Borrow Cap (wstETH)| 285|
|Debt Ceiling| 0|
|LTV| 70.00%|
|LT| 79.00%|
|Liquidation Bonus| 7.20%|
|Liquidation Protocol Fee |10.00%|
|Variable Base|0.25%|
|Variable Slope1|4.50%|
|Variable Slope2|80.00%|
|Uoptimal|45.00|
|Reserve Factor|15.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|4.50%|
|Stable Slope2|80.00%|
|Base Stable Rate Offset|1.00%|
|Stable Rate Excess Offset|8.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

eMode category: ETH Correlated Strategy

|Parameter|Value|
| --- | --- |
| LT | 93% |
| LTV | 90% |
| LB | 1% |

# Implementation

A list of relevant links like for this proposal:

  * [Test Cases](https://github.com/bgd-labs/aave-proposals/tree/main/src/AaveV3Listings_20230413/AaveV3Listings_20230413_PayloadTest.t.sol)
  * [Payload Implementation](https://github.com/bgd-labs/aave-proposals/tree/main/src/AaveV3Listings_20230413/AaveV3Listings_20230413_Payload.sol)

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

Aave [governance forum discussion](https://governance.aave.com/t/arc-add-support-for-wsteth-on-polygon-v3/12266)and [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0x9d7296b06a66d6d6b4c9e85051477a4d62d066e3f56c248bcc85cbea00f7c7a4).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

