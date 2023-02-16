---
title: Ethereum v2 - wETH Interest Rate Curve Upgrade
shortDescription: Upgrade wETH interest rate on Ethereum v2 to match Ethereum v3 Liquidity Pool
discussion: https://governance.aave.com/t/arfc-weth-wsteth-interest-rate-curve-ethereum-network/11372
author: Llama, DeFi_Consulting, defijesus & efecarranza
created: 2023-02-16
---

# Simple Summary

[Llama](https://twitter.com/llama) recommends aligning the wETH interest rate parameters across the Aave v2 and v3 Ethereum Liquidity Pools.

# Abstract

Since the recent wETH parameter upgrade on v2, Aave has experienced improved overall revenue. However, TVL and daily revenue are gradually declining. 

This proposal intends to adjust the v2 wETH interest rate curve to match the v3 wETH interest rate curve which is expected to lead to high utilization of the v2 wETH reserve and partially offset the emerging declining week on week revenue trend.

# Motivation

Since AIP 131 was implemented, the amount of stETH deposited as collateral to borrow wETH has been fairly consistent. However, the amount of wETH borrowed by users who deposited stETH as collateral has reduced from 515.21K to 413.74K between 18th December 2022 and 15th January 2023 (pre Aave v3 launch). The tapering of borrowing demand is reflected in Aave’s wETH nominated revenue figures as shown below.

![](https://i.imgur.com/T2Q2eFt.png)

The market is indicating that there is insufficient demand for borrowing wETH. Three possible reasons are shown below:

* Structured products charge a fee
* Additional smart contract risk
* Elevated exposure to DEX liquidity

Our analysis indicates the Slope1, 5.75%, is most likely the primary causes of the reduced wETH demand. Lowering the Slope1 parameter will enable users to achieve a higher return from entering the recursive loop strategy. The chart below shows how users that deposit stETH and borrow wETH have behaved to date. The date highlighted below is the date AIP131 was executed.

![](https://i.imgur.com/Kylzpy7.png)

This proposal intends to reduce the Slope1 parameters on the v2 market to 3.8% and introduce a Base of 1%. The borrowing rate at the Upotimal point is reduced from 5.75% to 4.8% (Base + Slope1). Introducing a Base, with a Lower Slope1 (4.8% < 5.75%) parameter, acts to reduce the gradient between 0% < Utilization < Uoptimal compared to having a Slope1 = Base + Lower Slope1. 

The graphic below shows the current and proposed wETH interest rate curves. 

![](https://i.imgur.com/LoYlee2.png)

The graphic below shows the proposed interest rate with Base, Slope1 and Slope2 parameters detailed. 

![](https://i.imgur.com/a7WZRKR.png)

It is worth noting that borrowing wETH becomes slightly more expensive at lower utilization compared to the current wETH interest rate. When utilization is less than 41% borrowing costs are higher, ranging 0 to 0.98%, and when utilization is greater than 41% borrowing costs are lower, ranging 0 to 0.95%. Current utilization is 46% on the v2 deployment which means the borrowing costs would be reduced.

The chart below shows the relative change in borrowing costs for users, comparing the current versus the proposed interest rate curve.

![](https://i.imgur.com/UnKydnQ.png)

# Specification

The below table shows the current and proposed wETH interest rate curve for the Ethereum v2 deployment.

|Parameter|Current (%)|Proposed (%)|
| --- | --- | --- |
|Uoptimal|80.00|80.00|
|Base|0.00|1.00|
|Variable Slope1|5.75|3.80|
|Variable Slope2|80.00|80.00|
|Reserve Factor|15.00|15.00|
|Stable Slope1|4.00|4.00|
|Stable Slope2|80.00|80.00|

# Implementation

Test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV2wETHIRPayloadTest.t.sol)

Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV2wETHIRPayload.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/tree/main/script)

Proposal Payload deployed address can be found [here](https://etherscan.io/address/0xfb2a7eb134fa2d03d9a2c8fe0a9758132fe15357)

Interest Rate Strategy deployed address can be found [here](https://etherscan.io/address/0xb8975328Aa52c00B9Ec1e11e518C4900f2e6C62a)

# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arfc-weth-wsteth-interest-rate-curve-ethereum-network/11372), [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0x9ae28e9c82c5fc0d24cf1df788094e959d99f906d11b89e455a60ee16b071d6f) and [Risk Service Provider feedback](https://governance.aave.com/t/arfc-weth-wsteth-interest-rate-curve-ethereum-network/11372/4).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


