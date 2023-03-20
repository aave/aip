---
title: Supply/Borrow Cap Updates V3 Polygon and Arbitrum
shortDescription: Update Supply and Borrow Caps on Aave V3 Polygon and Arbitrum
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-supply-and-borrow-caps-update-wsteth-v3-arbitrum/12309
created: 2023-3-17
---

# Simple Summary

A proposal to adjust five (5) total risk parameters, including Supply Cap and Borrow Cap, across three (3) Aave V3 Polygon and Arbitrum assets.

# Motivation

The objective of this proposal is to recommend updated supply and borrow caps for V3 assets that have reached high utilization of either cap. The recommendations provided in this proposal were derived using Chaos Labs’ Updated Supply and Borrow Cap Methodology

The respective governance forum discussion is linked below:

- [[ARFC] - Supply and Borrow Caps Update - wstETH - V3 Arbitrum](https://governance.aave.com/t/arfc-supply-and-borrow-caps-update-wsteth-v3-arbitrum/12309)
- [[ARFC] - Chaos Labs Supply and Borrow Cap Updates - Aave V3 Polygon - 2023.03.16](https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-polygon-2023-03-16/12310)

# Specification

The following risk parameter proposal is presented below:

### Arbitrum

| Asset  | Current Supply Cap | Recommended Supply Cap | Current Borrow Cap | Recommended Borrow Cap |
| ------ | ------------------ | ---------------------- | ------------------ | ---------------------- |
| wstETH | 2,400              | 4,650                  | 190                | 400                    |

### Polygon

| Asset   | Current Supply Cap | Recommended Supply Cap | Current Borrow Cap | Recommended Borrow Cap |
| ------- | ------------------ | ---------------------- | ------------------ | ---------------------- |
| MAI     | 1,100,000          | 2,200,000              | 600,000            | 1,200,000              |
| stMATIC | 15,000,000         | 21,000,000             | N/A                | N/A                    |

# References

Forum Posts: [Arbitrum](https://governance.aave.com/t/arfc-supply-and-borrow-caps-update-wsteth-v3-arbitrum/12309), [Polygon](https://governance.aave.com/t/arfc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-polygon-2023-03-16/12310)

Tests: [Arbitrum-stETH](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/arbitrum/AaveV3ArbwstETHSupplyCapsPayloadTest-Mar16.t.sol), [Polygon-MAI/stMATIC](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/AaveV3PolCapsPayloadTest-Mar17.t.sol)

Proposal payload implementation: [Arbitrum-stETH](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/arbitrum/AaveV3ArbwstETHSupplyCapsPayload-Mar16.sol), [Polygon-MAI/stMATIC](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/AaveV3PolCapsPayload-Mar17.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
