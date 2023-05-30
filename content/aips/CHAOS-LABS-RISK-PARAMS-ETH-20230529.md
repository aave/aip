---
title: Risk Parameter Updates Aave V3 Ethereum
shortDescription: Risk Parameter Updates Aave V3 Ethereum
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-aave-v3-ethereum-2023-05-18/13128
created: 2023-5-29
---

## Simple Summary

A proposal to adjust fourteen (14) total risk parameters, including Loan-to-Value, Liquidation Threshold, and Liquidation Bonus, across six (6) Aave V3 Ethereum assets.

## Motivation

Chaos Labs’ Parameter Recommendation Platform runs hundreds of thousands of agent-based off-chain and on-chain simulations to examine how different Aave V3 risk parameters configurations would behave under adverse market conditions - and find the optimal values to maximize protocol borrow usage while minimizing losses from liquidations and bad debt.

_Note: As a general guideline, we limit the proposed changes by +-3% for all parameters as a high/low bound for a given proposal. This ensures more controlled changes and allows us to analyze their effect on user behavior before recommending further amendments to the parameters if the optimal configuration is outside this range._

Please find more information on the parameter recommendation methodology [here](https://community.chaoslabs.xyz/aave/recommendations/methodology).

You can also view the simulation results and breakdown for the different assets by clicking on them on this [page](https://community.chaoslabs.xyz/aave/recommendations).

The output of our simulations reveals an opportunity to increase LTVs and LTs for WBTC, WETH, WSTETH, LINK, DAI and USDC on V3 Ethereum, resulting in improved capital efficiency of the system, with a negligible effect on the projected VaR (95th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours) and EVaR (Extreme VaR, the 99th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours)

Simulating all changes jointly yields a projected borrow increase of ~$3.6M, with no increase in VaR and Extreme VaR compared to simulations with the current parameters.

## Specification

| Asset  | Parameter             | Current | Recommended | Change |
| ------ | --------------------- | ------- | ----------- | ------ |
| WETH   | Liquidation Threshold | 82.5%   | 83%         | +0.5%  |
| WETH   | Loan-to-Value         | 80%     | 80.5%       | +0.5%  |
| WBTC   | Liquidation Threshold | 75%     | 78%         | +3%    |
| WBTC   | Loan-to-Value         | 70%     | 73%         | +3%    |
| WBTC   | Liquidation Penalty   | 6.25%   | 5%          | -1.25% |
| DAI    | Liquidation Threshold | 77%     | 80%         | +3%    |
| DAI    | Loan-to-Value         | 64%     | 67%         | +3%    |
| USDC   | Liquidation Threshold | 76%     | 79%         | +3%    |
| USDC   | Loan-to-Value         | 74%     | 77%         | +3%    |
| LINK   | Liquidation Threshold | 65%     | 68%         | +3%    |
| LINK   | Loan-to-Value         | 50%     | 53%         | +3%    |
| LINK   | Liquidation Penalty   | 7.5%    | 7%          | -0.5%  |
| WSTETH | Liquidation Threshold | 79.5%   | 80%         | +0.5%  |
| WSTETH | Loan-to-Value         | 68.5%   | 69%         | +0.5%  |

# References

[Forum Post](https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-aave-v3-ethereum-2023-05-18/13128)

[Test](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3EthRiskParams_20230529/AaveV3EthRiskParams_20230529_Test.t.sol)

[Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3EthRiskParams_20230529/AaveV3EthRiskParams_20230529.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
