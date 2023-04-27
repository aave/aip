---
title: Supply and Borrow Cap Updates Aave V3 
shortDescription: Update Supply and Borrow Caps on Aave V3 Ethereum, Arbitrum, Optimism and Polygon
author: Chaos Labs (@ori-chaoslabs, @Maltmark)
discussions: https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-04-21-2023/12845
created: 2023-04-27
---

# Simple Summary

A proposal to increase supply and borrow caps for the following caps on Aave V3:

- Ethereum - wstETH
- Arbitrum - WBTC, WETH
- Optimism - WBTC, wstETH
- Polygon - LINK, WBTC


# Motivation

The objective of this proposal is to recommend updated supply and borrow caps for V3 assets that have reached high utilization of either cap. The recommendations provided in this proposal were derived using Chaos Labs’ Updated Supply and Borrow Cap Methodology

The objective of this proposal is to recommend updated supply and borrow caps for V3 assets that have recently reached over 75% utilization of either cap, and our methodologies allow for an increase of the caps.

The recommendations provided in this proposal were derived using Chaos Labs’ [Supply and Borrow Cap Methodology](https://governance.aave.com/t/chaos-labs-supply-cap-methodology/12842). 

The respective governance forum discussion is linked below:

- **[[ARFC] Chaos Labs Supply and Borrow Cap Updates - 04.21.2023](https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-04-21-2023/12845)**

# Specification

The following risk parameter proposal is presented below:

| Chain | Asset | Current Supply Cap | Recommended Supply Cap | Current Borrow Cap | Recommended Borrow Cap |
| --- | --- | --- | --- | --- | --- |
| Ethereum | wstETH | 200,000 | No Change | 6,000 | 12,000 |
| Arbitrum | WBTC | 2,100 | 4,200 | 1,115 | No Change |
| Arbitrum | WETH | 35,280 | 70,000 | 11,170 | 20,000 |
| Optimism | wstETH | 6,000 | 12,000 | 940 | No Change |
| Optimism | WBTC | 620 | 1200 | 250 | No Change |
| Polygon | LINK | 297,640 | 370,000 | 163,700 | No Change |
| Polygon | WBTC | 1,550 | 3,100 | 851 | No Change |


# References
[Forum Post](https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-04-21-2023/12845)

Tests: [Ethereum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3ETHSupplyBorrowUpdate_20230427_test.t.sol), [Polygon](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3POLSupplyBorrowUpdate_20230427_test.t.sol)
, [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3OPSupplyBorrowUpdate_20230427_test.t.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3ARBSupplyBorrowUpdate_20230427_test.t.sol)



Proposal payload implementation: [Ethereum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3ETHSupplyBorrowUpdate_20230427.sol), [Polygon](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3POLSupplyBorrowUpdate_20230427.sol)
, [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3OPSupplyBorrowUpdate_20230427.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3SupplyBorrowUpdate_20230427/AaveV3ARBSupplyBorrowUpdate_20230427.sol)


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
