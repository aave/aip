---
title: Risk Parameter Updates Aave V3 Polygon
shortDescription: Risk Parameter Updates Aave V3 Polygon
author: Chaos Labs (@ori-chaoslabs)
discussions: https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-aave-v3-polygon-2023-04-23/12828/2
created: 2023-4-27
---

## Simple Summary

A proposal to adjust nine (9) total risk parameters, including Loan-to-Value, Liquidation Threshold, and Liquidation Bonus, across four (4) Aave V3 Polygon assets.

## Abstract

This proposal acts as a mandate from the Aave community to engage with Chaos for the work defined on the Aave governance forum [here](https://governance.aave.com/t/updated-proposal-chaos-labs-risk-simulation-platform/10025) and pre-approved by the Aave community via Snapshot [here](https://snapshot.org/#/aave.eth/proposal/0xad105e87d4df487bbe1daec2cd94ca49d1ea595901f5773c1804107539288b59).

## Motivation

Chaos Labs’ Parameter Recommendation Platform runs hundreds of thousands of agent-based off-chain and on-chain simulations to examine how different Aave V3 risk parameters configurations would behave under adverse market conditions - and find the optimal values to maximize protocol borrow usage while minimizing losses from liquidations and bad debt.

*Note: As a general guideline, we limit the proposed changes by +-3% for all parameters as a high/low bound for a given proposal. This ensures more controlled changes and allows us to analyze their effect on user behavior before recommending further amendments to the parameters if the optimal configuration is outside this range.*

Please find more information on the parameter recommendation methodology [here](https://community.chaoslabs.xyz/aave/recommendations/methodology).

You can also view the simulation results and breakdown for the different assets by clicking on them on this [page](https://community.chaoslabs.xyz/aave/recommendations).

The output of our simulations reveals an opportunity to increase LTVs and LTs for WBTC, DAI, LINK and wMATIC on V3 Polygon, resulting in improved capital efficiency of the system, with no effect on the projected VaR (95th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours) and EVaR (Extreme VaR, the 99th percentile of the protocol losses that will be accrued due to bad debt from under-collateralized accounts over 24 hours)

Simulating all changes jointly yields a projected borrow increase of ~400,000$, with no increase in VaR and Extreme VaR compared to simulations with the current parameters.

## Specification

| Asset | Parameter | Current | Recommended | Change |
| --- | --- | --- | --- | --- |
| WBTC | Liquidation Threshold | 75% | 78% | +3% |
| WBTC | Loan-to-Value | 70% | 73% | +3% |
| DAI | Liquidation Threshold | 80% | 81% | +1% |
| DAI | Loan-to-Value | 75% | 76% | +1% |
| LINK | Liquidation Threshold | 65% | 68% | +3% |
| LINK | Loan-to-Value | 50% | 53% | +3% |
| wMATIC | Liquidation Threshold | 70% | 73% | +3% |
| wMATIC | Loan-to-Value | 65% | 68% | +3% |
| wMATIC | Liquidation Penalty | 10% | 7% | -3% |

# References

[Forum Post](https://governance.aave.com/t/arfc-chaos-labs-risk-parameter-updates-aave-v3-polygon-2023-04-23/12828)

[Test](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PolRiskParams_20230423/AaveV3PolRiskParams_20230423_Test.t.sol)

[Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PolRiskParams_20230423/AaveV3PolRiskParams_20230423.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
