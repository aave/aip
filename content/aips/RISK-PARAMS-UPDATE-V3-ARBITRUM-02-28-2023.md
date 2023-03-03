---
title: Risk Parameter Updates Aave V3 Arbitrum
shortDescription: Update risk parameters on AAVE V3 Arbitrum 
author: Chaos Labs (@ori-chaoslabs, @yhayun)
discussions: https://governance.aave.com/t/arc-chaos-labs-risk-parameter-updates-aave-v3-arbitrum-2023-02-20/11986
created: 2023-02-28
---

# Simple Summary

A proposal to adjust nine (9) total risk parameters, including Loan-to-Value, Liquidation Threshold, and Liquidation Bonus, across four (4) Aave V3 Arbitrum assets.

# Motivation
Chaos Labs’ Parameter Recommendation Platform runs hundreds of thousands of agent-based off-chain and on-chain simulations to examine how different Aave V3 risk parameters configurations would behave under adverse market conditions - and find the optimal values to maximize protocol borrow usage while minimizing losses from liquidations and bad debt.

Note: As a general guideline, we limit the proposed changes by ±3% for all parameters as a high/low bound for a given proposal. This ensures more controlled changes and allows us to analyze their effect on user behavior before recommending further amendments to the parameters if the optimal configuration is outside this range.

Please find more information on the parameter recommendation methodology [here](https://community.chaoslabs.xyz/aave/recommendations/methodology).

You can also view the simulation results and breakdown for the different assets by clicking on them on this [page](https://community.chaoslabs.xyz/aave/recommendations).

The output of our simulations reveals an opportunity to increase LTVs and LTs for WBTC, WETH, USDC, and DAI on V3 Arbitrum, resulting in improved capital efficiency of the system, with a negligible effect on the projected VaR (95th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours) and EVaR (Extreme VaR, the 99th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours)

Simulating all changes jointly yields a projected borrow increase of ~$510,000, with no increase in VaR and Extreme VaR compared to simulations with the current parameters.

# Specification

The following risk parameter proposal is presented below:

| Asset | Parameter | Current | Recommended | Change |
| --- | --- | --- | --- | --- |
| WETH | Liquidation Threshold | 82.5% | 85% | +2.5% |
| WETH | Loan-to-Value | 80% | 82.5% | +2.5% |
| WBTC | Liquidation Threshold | 75% | 78% | +3% |
| WBTC | Loan-to-Value | 70% | 73% | +3% |
| WBTC | Liquidation Penalty | 10% | 7% | -3% |
| DAI | Liquidation Threshold | 80% | 82% | +2% |
| DAI | Loan-to-Value | 75% | 77% | +2% |
| USDC | Liquidation Threshold | 85% | 86% | +1% |
| USDC | Loan-to-Value | 80% | 81% | +1% |



# References
[Forum Post](https://governance.aave.com/t/arc-chaos-labs-risk-parameter-updates-aave-v3-arbitrum-2023-02-20/11986)

[Tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/arbitrum/AaveV3ArbRiskParamsPayload-Feb27.t.sol)

[Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/arbitrum/AaveV3ArbRiskParamsPayload-Feb27.sol)

[Deployed proposal payload](https://arbiscan.io/address/0x3a4f2a6c7e1e641afad6300553a0bb82d6c46a2e#code) 


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
