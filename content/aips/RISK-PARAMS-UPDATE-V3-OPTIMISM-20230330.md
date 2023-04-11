---
title: Risk Parameter Updates Aave V3 Optimism
shortDescription: Update risk parameters on Aave V3 Optimism
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-aave-v3-optimism-2023-03-22/12421
created: 2023-03-30
---

# Simple Summary

A proposal to adjust five (5) total risk parameters, including Loan-to-Value, Liquidation Threshold, and Liquidation Bonus, across two (2) Aave V3 Optimism assets.

# Motivation

Chaos Labs’ Parameter Recommendation Platform runs hundreds of thousands of agent-based off-chain and on-chain simulations to examine how different Aave V3 risk parameters configurations would behave under adverse market conditions - and find the optimal values to maximize protocol borrow usage while minimizing losses from liquidations and bad debt.

Note: As a general guideline, we limit the proposed changes by ±3% for all parameters as a high/low bound for a given proposal. This ensures more controlled changes and allows us to analyze their effect on user behavior before recommending further amendments to the parameters if the optimal configuration is outside this range.

Please find more information on the parameter recommendation methodology [here](https://community.chaoslabs.xyz/aave/recommendations/methodology).

You can also view the simulation results and breakdown for the different assets by clicking on them on this [page](https://community.chaoslabs.xyz/aave/recommendations).

The output of our simulations reveals an opportunity to increase LTVs and LTs for WBTC and DAI on V3 Optimism, resulting in improved capital efficiency of the system, with no effect on the projected VaR (95th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours) and EVaR (Extreme VaR, the 99th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours)

Simulating all changes jointly yields a projected borrow increase of ~$155,000, with no increase in VaR and Extreme VaR compared to simulations with the current parameters.

# Specification

The following risk parameter proposal is presented below:

| Asset | Parameter             | Current | Recommended | Change |
| ----- | --------------------- | ------- | ----------- | ------ |
| WBTC  | Liquidation Threshold | 75%     | 78%         | +3%    |
| WBTC  | Loan-to-Value         | 70%     | 73%         | +3%    |
| WBTC  | Liquidation Penalty   | 9.4%    | 8.5%        | -0.9%  |
| DAI   | Liquidation Threshold | 80%     | 83%         | +3%    |
| DAI   | Loan-to-Value         | 75%     | 78%         | +3%    |

# References

[Forum Post](https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-aave-v3-optimism-2023-03-22/12421)

[Tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3OPRiskParams_20230330/AaveV3OPRiskParams_20230330_Test.t.sol)

[Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3OPRiskParams_20230330/AaveV3OPRiskParams_20230330.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
