---
title: Supply/Borrow Cap Updates V3 Arbitrum, Optimism, Polygon
shortDescription: Update Supply and Borrow Caps on Arbitrum, Optimism and Polygon on Aave V3 
author: Chaos Labs (@ori-chaoslabs, @yhayun)
discussions: https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-2023-02-24/12048
created: 2023-2-24
---

# Simple Summary

A proposal to adjust twenty-three (23) total risk parameters, including Supply Cap and Borrow Cap, across fourteen (14) assets on Aave V3 Polygon, Arbitrum,and Optimism.

# Motivation

The objective of this proposal is to recommend updated supply and borrow caps for:

1. V3 stablecoins that have excessive supply caps set and/or have no set borrow cap.
- The caps are intended to allow for substantial growth compared to the current supply while not set too excessively.
- The recommendations for the supply caps are set to up to 40% of the circulating supply for most assets and no more than 60%. You can find the exact number for each asset in the tables below. Borrow caps are set to ~65% of the supply cap.
2. V3 assets that have reached over 75% utilization of either cap.
- The recommendations provided in this proposal were derived using Chaos Labs’ [Updated Supply and Borrow Cap Methodology](https://governance.aave.com/t/chaos-labs-updated-supply-and-borrow-cap-methodology/11602). Below are the data and considerations for the assets and recommended caps for these assets.
3. Assets with a supply cap that is >50% of the asset's total on-chain circulating supply.

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

| Asset | Current Supply Cap | Recommended Supply Cap | Current Borrow Cap | Recommended Borrow Cap | Notes |
| --- | --- | --- | --- | --- | --- | 
| DAI | 2,000,000,000 | 50,000,000 |  N/A | 30,000,000 | 38% of the circulating supply |
| EURS |  N/A | 60,000 |  N/A | 45,000 | 60% of the circulating supply |
| USDC |  2,000,000,000 | 150,000,000 |  N/A | 100,000,000 | 16% of the circulating supply |
| USDT |  2,000,000,000 | 50,000,000 |  N/A | 35,000,000 | 20% of the circulating supply |
|AAVE  |  2,500 | 1,850 |  N/A | N/A |freezes supply|



### Optimism

| Asset |  Current Supply Cap | Recommended Supply Cap |  Current Borrow Cap | Recommended Borrow Cap | Notes |
| --- | --- | --- | --- | --- | --- | 
| DAI |  2,000,000,000 | 25,000,000 |  N/A | 16,000,000 | 35% of the circulating supply |
| sUSD |  20,000,000 | No Change |  N/A | 13,000,000 | 25% of the circulating supply |
| USDC |  2,000,000,000 | 150,000,000 |  N/A | 100,000,000 | 43% of the circulating supply |
| USDT |  2,000,000,000 | 25,000,000 |  N/A | 16,000,000 | 47% of the circulating supply |
| AAVE |  100,000 | 45,000 |  N/A | N/A | freezes supply|
| LINK | 258,000 | 160,000 | 141,900 | 84,000 | |
| WBTC |  1,100 | 620 |  605 | 250 | freezes supply |


### Polygon

| Asset | Current Supply Cap | Recommended Supply Cap |  Current Borrow Cap | Recommended Borrow Cap |
| --- | --- | --- | --- | --- | 
| WETH |  26,900 | 50,000 |  14,795 | No Change |
| AAVE |  36,820 | 70,000 |  N/A | N/A |




# References
[Forum Post](https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-2023-02-24/12048)

Tests: [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/arbitrum/AaveV3ArbBorrowCapsPayload-Feb26.t.sol), [Polygon](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/AaveV3PolCapsPayload-Feb26.t.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/optimism/AaveV3OptCapsPayload-Feb26.t.sol)


Proposal payload implementation: [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/arbitrum/AaveV3ArbBorrowCapsPayload-Feb26.sol), [Polygon](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/AaveV3PolCapsPayload-Feb26.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/optimism/AaveV3OptCapsPayload-Feb26.sol)



# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
