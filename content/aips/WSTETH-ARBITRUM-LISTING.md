---
title: Add wstETH to Arbitrum Aave v3
discussion: https://governance.aave.com/t/arc-add-support-for-wsteth-on-arbitrum-aave-v3/11387
shortDescription: Add wstETH to Arbitrum Aave v3 deployment as collateral, with borrowing enabled and an Ethereum eMode.
author: Llama, DeFi_Consulting & efecarranza
dated: 2023-02-20
---

# Summary

This ARFC presents the community with the opportunity to add wstETH to the Arbitrum V3 Liquidity Pool.

# Abstract

Across the Aave Liquidity Pools, stETH is listed on Aave v2 Ethereum and wstETH is listed on Aave v3 Ethereum and recently Optimism. This proposal seeks to list wstETH on the Arbitrum Liquidity Pool as Collateral, with Borrowing enabled and an Ethereum eMode.  

The stETH/wETH rewards-maximising loop on Aave v2 is the main source of borrowing demand for wETH and the wETH reserve generates a material portion of Aave’s revenue, more than $281k in January 2023. By listing wstETH on Arbitrum users will be able to enter the same recursive strategy creating borrowing demand for wETH and revenue for Aave.
 
The risk parameters have been provided by Gauntlet, Chaos Labs and Llama, with this post using the parameters agreed between the two service providers.

# Motivation

The stETH reserve on Aave v2 is the largest reserve across all Aave deployments with $1.65B in deposits, exceeding USDC ($0.86B) and ETH ($1.47B). This is partially due to several communities having built products that deposit stETH and borrow ETH as part of a rewards-maximising strategy. 

Demand for borrowing wETH on Aave v2 Ethereum increased significantly when stETH was listed as collateral. InstaDapp, Index Coop, Galleon DAO, CIAN and others have all built products on top of Aave v2 that utilise the rewards-maximising stETH/ETH strategy. By adding wstETH to the Arbitrum Liquidity Pool, Aave moves closer towards enabling developers to deploy similar products on Arbitrum. This is expected to create borrowing demand for wETH and boost Aave’s revenue.

The charts below show the effect of stETH has had on the Aave v2 Ethereum liquidity pool. stETH drives most of the wETH borrowing demand and resulting wETH fee-revenue. The wETH reserve generated approximately $217k in revenue during December and generated $281k by late January.

![](https://i.imgur.com/gjsCIuk.png)
![](https://i.imgur.com/EbBLhI5.png)

Listing of stETH by Aave has enabled Aave to offer the best return on wETH, in wETH terms, across major lending markets, continually outperforming Compound. By listing wstETH on Arbitrum, the Aave community is helping create an environment capable of replicating the success of the Aave v2 Ethereum Liquidity Pool.

# Specification

This section presents the risk parameters and interest rates parameters as discussed on the governance forum. The parameters shown below are a combination of Gauntlet’s and Llama’s work.


Gauntlet’s and Chaos Lab's Risk Assessment can be found [here](https://governance.aave.com/t/arc-add-support-for-wsteth-on-arbitrum-aave-v3/11387/7).

## Risk Parameters

|Parameter|Value|
| --- | --- |
|Isolation Mode|No|
|Borrowable|Yes|
|Collateral Enabled| Yes|
|Supply Cap (wstETH)| 1,200|
|Borrow Cap (wstETH)| 190|
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

# Implementation

Test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/arbitrum/AaveV3ArbWSTETHListingPayloadTest.t.sol)

Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/arbitrum/AaveV3ArbWSTETHListingPayload.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer-v3/blob/main/script/DeployContract.s.sol)

Proposal Payload deployed address can be found [here](https://arbiscan.io/address/0x80cb7e9e015c5331bf34e06de62443d070fd6654)

Interest Rate Strategy deployed address can be found [here](https://arbiscan.io/address/0x4b8D3277d49E114C8F2D6E0B2eD310e29226fe16)

# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arc-add-support-for-wsteth-on-arbitrum-aave-v3/11387), [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0x402647b83c436aecbe2fe404870f08767b5509225cbe606913e50801f87f5db8) and [Risk Service Provider feedback](https://governance.aave.com/t/arc-add-support-for-wsteth-on-arbitrum-aave-v3/11387/7).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

