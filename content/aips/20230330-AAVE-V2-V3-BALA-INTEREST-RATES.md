---
title: BAL Interest Rate Upgrade
discussions: https://governance.aave.com/t/arfc-bal-interest-rate-upgrade/12423
shortDescription: Update BAL Interest Rate Parameters
author: Llama - TokenLogic
created: 2023-03-30
---

# Summary

This publication proposes amending the BAL interest rate parameters across all BAL Reserves.

# Abstract

Previously, Aave implemented the first stage of increasing the BAL interest rate across all deployments. This was performed with the intention of monitoring the market response and revising the rates higher at a later date.

This publication presents the next BAL interest rate increase.

# Motivation

At the time of writing the utilisation and borrowing rate for BAL on the Polygon v3 deployment is nearing the Uoptimal value, 80%. With utilisation at 77.34% and the borrow APY 17.98%, the market is signalling strong demand for borrowing BAL.

![|602x264](https://lh3.googleusercontent.com/19l1mSPDDfwqZjucfpmkcoaRWQICKqoCFCrlKM8dNf0ZCb6DQUgdyLKhYXtkJ4GdDrg1e3zEQ4-Mg5LB8QfyM9QRLpbWKOutsBAiGG-gFXnkbZz28U49aCuGLp0hk078r0LsJ8nMJONNfYPbpIQwotA)

The table below presents the current APY for various tokenised B-80BAL-20WETH wrappers deposited into their respective liquidity pools:

||Description|APY|TVL|Network|
| --- | --- | --- | --- | --- |
|Aura Finance (Aura Gauge)|B-80BAL-20WETH / auraBAL|58.21%|$21,380,000|Ethereum|
|Tetu (Balancer Gauge)|B-80BAL-20WETH / tetuBAL|88.77%|$10,220,000|Polygon|
|Stake DAO (Balancer Gauge)|B-80BAL-20WETH / sdBAL|18.25% - 45.35%|$637,221|Ethereum|

The APY for each of the pools above exceeds the Uoptimal borrow rate APR, Base + Slope1, 17% APR or 18.53% APY, compounded interest rate over time. Previous commentary from Gauntlet supported a Base + Slope1 total of 40% at the time Aura Finance was offering around 60%. Tetu is deployed on Polygon and is currently offering a notably higher 88.77% yield for depositing and locking the B-80BAL-20WETH / tetuBAL.

Previous discussion within the community centred around increasing the borrowing rates gradually over time and monitoring the market's response. 

The previous proposal increased the Borrow rate at the Uoptimal point from 7% to 17%. This publication seeks to increase the borrow rate by a similar 10%. This is to be achieved by increasing the Base from 3% to 5% and Slope1 from 14% to 22%. Pending how the market responds, this interest rate can be further increased. This approach keeps true to the previous communication of gradually increasing the borrow rates rather than all at once.

![|602x372](https://lh3.googleusercontent.com/NP5xMf8IuxxR5xVN525978OIUofs1twCOJgYQPCrkuQtoJq7oYx2Lh4SrU7I1nDYVfB5EM2wt9tQMig4pfCM8AnSSbwpWTw9IjrfcaWanBwc9Rya84lH2sSa-dlxlxHC-4jgi1PJ4Ya_Tlj5EXCCxTg "Chart")

# Specification

Update the following parameters as per below table:

|Parameter|Current (%)|Proposed (%)|
| --- | --- | --- |
|Uoptimal|80.00|80.00|
|Base|3.00|5.00|
|Slope1|14.00|22.00|
|Slope2|150.00|150.00|
|Stable Borrowing|Disabled|Disabled|
|Stable Slope1|0.00|22.00|
|Stable Slope2|0.00|150.00|
|Base Stable Rate Offset|2.00|5.00|
|Stable Rate Excess Offset|5.00|5.00|
|Optimal Stable To Total Debt Ratio|20.00|20.00|

This is to be implemented across all BAL reserves, Polygon v2, v3, Ethereum v2 and v3.

# Implementation

Payload for AAVE V3 Ethereum can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV3EthRatesUpdates_20230328.sol)

Tests can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV3MultiRatesUpdates_20230328Test.t.sol)

Payload for AAVE V3 Polygon can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV3PolRatesUpdates_20230328.sol)

Tests can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV3MultiRatesUpdates_20230328Test.t.sol)

Deployment script for interest rate strategy can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/blob/main/script/DeployContract.s.sol)

Payload for AAVE V2 Polygon can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV2PolRatesUpdates_20230328_Payload.sol)

Payload for AAVE V2 Ethereum can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV2EthRatesUpdates_20230328_Payload.sol)

Tests can be found [here](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RatesUpdates_20230328/AaveV2MultiRatesUpdates_20230328_PayloadTest.t.sol)


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
