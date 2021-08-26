---
aip: TBD
title: Liquidation Bonus Updates for ten Aave V2 assets
status: Proposed
author: Nick Cannon (@inkymaze)
shortDescription: A proposal to reduce the liquidation bonus for ten (10) Aave V2 assets.
discussions: https://governance.aave.com/t/arc-liquidation-bonus-updates/5300
created: 2021-08-26
---


## Simple Summary

A proposal to reduce the liquidation bonus for ten (10) Aave V2 assets. 

## Abstract

In Gauntlet's [Market Risk Assessment](https://gauntlet.network/reports/aave), [Liquidation Retrospective: May 2021](https://medium.com/gauntlet-networks/aave-protocol-liquidation-retrospective-may-2021-67c655fc1b31), and recent ARC for [Dynamic Risk Parameters](https://governance.aave.com/t/proposal-dynamic-risk-parameters/4854) we highlighted the importance of optimizing liquidation bonuses. 

For background, 
> If the bonus is too low, then during extremely volatile or illiquid conditions, liquidators might not be profitable even with the bonus. During these times, there can also be cascading, systemic effects from a lack of liquidations. For each loan that is liquidated, liquidators purchasing the collateral and selling it causes the price to further decrease causing further liquidations. On the other hand, if the bonus is too high, suppliers are losing out on profits to liquidators. Continual monitoring and adjustment of this parameter is crucial for optimizing the security vs. capital efficiency trade-off in Aave.

## Motivation 

Large liquidation bonuses increase the regime in which the incentives are counterproductive. [See section 6.3](https://gauntlet.network/reports/aave). Lower liquidation bonuses for a single week in May would have mitigated $4M in [depositor losses](https://governance.aave.com/t/proposal-dynamic-risk-parameters/4854#mitigating-depositor-losses-4m-usd-13-of-total-liquidation-value-between-may-17-23-2021-7) while maintaining a low risk of insolvency.
![](https://i.imgur.com/bUXZCnB.png)

User experience is another factor worth considering. Depositor losses occurred for 590 distinct users during the week of May 17-23. Mitigating losses without increasing the net insolvent value percentage or the slashing run percentage is possible. 


## Specification

| Asset  | Current Liquidation Bonus | Recommended Liquidation Bonus Update |
| ------ | ------------------------- | ------------------------------------ |
| ZRX    | 10%                       | 8%                                   |
| WBTC   | 10%                       | 9%                                   |
| SNX    | 10%                       | 9%                                   |
| YFI    | 15%                       | 12.5%                                |
| CRV    | 15%                       | 12.5%                                |
| AAVE   | 10%                       | 8%                                   |
| REN    | 10%                       | 9%                                   |
| MANA   | 10%                       | 8%                                   |
| BAT    | 10%                       | 9%                                   |
| XSUSHI | 15%                       | 12.5%                                |
account.

## Implementation





## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
