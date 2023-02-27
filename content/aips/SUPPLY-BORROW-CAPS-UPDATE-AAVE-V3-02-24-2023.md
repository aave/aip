---
title: Supply/Borrow Cap Updates V3 Arbitrum, Optimism, Polygon
shortDescription: Update Supply and Borrow Caps on Arbitrum, Optimism and Polygon on Aave V3 
author: Chaos Labs (@ori-chaoslabs, @yhayun)
discussions: https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-2023-02-24/12048
created: 2023-2-24
---

# Simple Summary

A proposal to adjust seventeen (17) total risk parameters, including Supply Cap and Borrow Cap, across ten (10) assets on Aave V3 Polygon, Arbitrum,and Optimism.

# Motivation

The objective of this proposal is to recommend updated supply and borrow caps for:

1. V3 stablecoins that have excessive supply caps set and/or have no set borrow cap.
- The caps are intended to allow for substantial growth compared to the current supply while not set too excessively.
- The recommendations for the supply caps are set to up to 40% of the circulating supply for most assets and no more than 60%. You can find the exact number for each asset in the tables below. Borrow caps are set to ~65% of the supply cap.
2. V3 assets that have reached over 75% utilization of either cap.
- The recommendations provided in this proposal were derived using Chaos Labs’ [Updated Supply and Borrow Cap Methodology](https://governance.aave.com/t/chaos-labs-updated-supply-and-borrow-cap-methodology/11602). Below are the data and considerations for the assets and recommended caps for these assets:

There following assets are at >75%. However, we do not recommend increasing their caps at this time due to current liquidity levels:

GHST (V3 Polygon)
SUSHI (V3 Polygon)
BAL (V3 Polygon)
AAVE (V3 Arbitrum)


The respective governance forum discussion is linked below:
- [[ARC] - Chaos Labs Supply and Borrow Cap Updates - Aave V3 - 2023.02.24](https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-2023-02-24/12048)


# Specification

The following risk parameter proposal is presented below:

### Arbitrum

**Updated Caps for Stables**

| Asset | Current Supply | Current Supply Cap | Recommended Supply Cap | Current Borrow | Current Borrow Cap | Recommended Borrow Cap | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DAI | 3,530,000 | 2,000,000,000 | 50,000,000 | 1,940,000 | N/A | 30,000,000 | 38% of the circulating supply |
| EURS | 36,590 | N/A | 60,000 | 24,242 | N/A | 45,000 | 60% of the circulating supply |
| USDC | 34,700,000 | 2,000,000,000 | 150,000,000 | 17,410,000 | N/A | 100,000,000 | 16% of the circulating supply |
| USDT | 3,720,000 | 2,000,000,000 | 50,000,000 | 3,060,000 | N/A | 35,000,000 | 20% of the circulating supply |

### Optimism

**Updated Caps for Stables**

| Asset | Current Supply | Current Supply Cap | Recommended Supply Cap | Current Borrow | Current Borrow Cap | Recommended Borrow Cap | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DAI | 2,620,000 | 2,000,000,000 | 25,000,000 | 1,210,000 | N/A | 16,000,000 | 35% of the circulating supply |
| sUSD | 1,510,000 | 20,000,000 | No Change | 783,150 | N/A | 13,000,000 | 25% of the circulating supply |
| USDC | 48,510,000 | 2,000,000,000 | 150,000,000 | 15,870,000 | N/A | 100,000,000 | 43% of the circulating supply |
| USDT | 3,880,000 | 2,000,000,000 | 25,000,000 | 3,100,000 | N/A | 16,000,000 | 47% of the circulating supply |


### Polygon

**High Utilization**

| Asset | Current Supply | Current Supply Cap | Recommended Supply Cap | Current Borrow | Current Borrow Cap | Recommended Borrow Cap |
| --- | --- | --- | --- | --- | --- | --- |
| WETH | 22,250 | 26,900 | 50,000 | 2,695 | 14,795 | No Change |
| AAVE | 34,300 | 36,820 | 70,000 | N/A | N/A | N/A |




# References
[Forum Post](https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-2023-02-24/12048)

Tests: [Arbitrum](TO BE ADDED, [Polygon](TO BE ADDED, [Optimism](TO BE ADDED)


Proposal payload implementation: [Arbitrum](TO BE ADDED, [Polygon](TO BE ADDED, [Optimism](TO BE ADDED)

Deployed proposal payload: [Arbitrum](TO BE ADDED, [Polygon](TO BE ADDED, [Optimism](TO BE ADDED)


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
