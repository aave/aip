---
title: Supply/Borrow Cap Updates V3 Arbitrum
shortDescription: Update Supply and Borrow Caps on Aave V3 Arbitrum
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-03-30-2023/12532
created: 2023-3-30
---

# Simple Summary

A proposal to adjust three (3) total risk parameters, including Supply Cap and Borrow Cap, across two (2) Aave V3 Arbitrum assets.

# Motivation

The objective of this proposal is to recommend updated supply and borrow caps for V3 assets that have reached high utilization of either cap. The recommendations provided in this proposal were derived using Chaos Labs’ Updated Supply and Borrow Cap Methodology

The respective governance forum discussion is linked below:

- [[ARFC] Chaos Labs Supply and Borrow Cap Updates - 03.30.2023](https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-03-30-2023/12532)

# Specification

The following risk parameter proposal is presented below:

### Arbitrum

| Asset | Current Supply Cap | Recommended Supply Cap | Current Borrow Cap | Recommended Borrow Cap |
| ----- | ------------------ | ---------------------- | ------------------ | ---------------------- |
| WBTC  | 2,100              | 4,200                  | 1,115              | No Change              |
| WETH  | 45,000             | 70,000                 | 11,165             | 22,000                 |

# References

Forum Post: [Arbitrum Post](https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-03-30-2023/12532)

Test: [Arbitrum Test](https://github.com/bgd-labs/aave-proposals/blob/master/src/AaveV3ArbSupplyCapsUpdate_20230330/AaveV3ArbSupplyCapsUpdate_20230330_test.t.sol)

Proposal payload implementation: [Arbitrum Payload](https://github.com/bgd-labs/aave-proposals/blob/master/src/AaveV3ArbSupplyCapsUpdate_20230330/AaveV3ArbSupplyCapsUpdate_20230330.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
