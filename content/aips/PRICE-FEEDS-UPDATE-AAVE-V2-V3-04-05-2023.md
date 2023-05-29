---
title: Price feeds operational update
author: BGD Labs (@bgdlabs)
shortDescription: Swap price adapters for wbtc and LSTs, and activation of optimism price oracle sentinel
discussions: https://governance.aave.com/t/bgd-operational-oracles-update/13213
created: 2023-05-04
---

## Simple Summary

This proposal changes the following price adapters and price oracle sentinel:

- WBTC on Ethereum v2 to the custom `WBTC / BTC / ETH`
- wstETH on Optimism and Arbitrum v3 to `wstETH / ETH / USD`
- MATICX on Polygon v3 to the custom adapter, which uses `MATIC / USD` CL feed and `MATICX / MATIC` on-chain rate
- stMATIC on Polygon v3 to the custom adapter, which utilizes `MATIC / USD` CL feed and `stMATIC / MATIC` on-chain rate
- price oracle sentinel is configured for Optimism V3

## Motivation

The current price feeds for certain ETH and MATIC LSTs can result in artificial volatility due to de-synchronization between different asset/PEG feeds.
Additionally, the Aave community already pre-approved pricing `WBTC` on Aave v2 based on a WBTC feed, and not assuming that its price is the one provided by BTC/ETH.

To address this problem and enhance the stability of the Aave platform, we propose to change the price feeds for wstETH on Optimism and Arbitrum to a [custom price adapter](https://github.com/bgd-labs/cl-synchronicity-price-adapter/blob/main/src/contracts/CLSynchronicityPriceAdapterPegToBase.sol) that calculates the `wstETH / ETH / USD` price and is based on Chainlink's feeds under the hood. The same approach is already used for the wstETH on Polygon and WBTC on Aave V3.

WBTC price feed will use the same [adapter implementation](https://github.com/bgd-labs/cl-synchronicity-price-adapter/blob/main/src/contracts/CLSynchronicityPriceAdapterPegToBase.sol), but with the `WBTC / BTC / ETH` inside.

MaticX and stMatic price feeds will be swapped for a [special adapter](https://github.com/bgd-labs/cl-synchronicity-price-adapter/blob/main/src/contracts/MaticSynchronicityPriceAdapter.sol), which utilizes on-chain rate.

As the Chainlink sequencer feed is available for Optimism, it also makes sense to configure the price oracle sentinel for Aave V3 Optimism, so that all L2 Aave V3 markets where the the Chainlink feed is available, are in sync.

## Specification

Upon execution, the proposal will:

- call `ORACLE.setAssetSources([0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599], [0xFD858c8bC5ac5e10f01018bC78471bb0DC392247])` to replace the price source for `WBTC` on Aave v2
- call `AaveV3Optimism.POOL_ADDRESSES_PROVIDER.setPriceOracleSentinel(0xB1ba0787Ca0A45f086F8CA03c97E7593636E47D5)` to set the price oracle sentinel on the pool addresses provider
- use Config Engine to update `wstETH` price feed to [0x05225Cd708bCa9253789C1374e4337a019e99D56](https://optimistic.etherscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56) on Optimism
- use Config Engine to update `wstETH` price feed to [0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211) on Arbitrum
- use Config Engine to update `MATICX` price feed to [0x0e1120524e14Bd7aD96Ea76A1b1dD699913e2a45](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211) on Polygon
- use Config Engine to update `stMATIC` price feed to [0xEe96b77129cF54581B5a8FECCcC50A6A067034a1](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211) on Polygon

## Security and additional considerations

Custom price adapters are already widely used in the system for price-correlated assets and were [reviewed by the auditors](https://github.com/bgd-labs/cl-synchronicity-price-adapter).

- **MaticX Historical Feeds Comparison**: Comparing the answers from the current feed with the new one for the last 280 days (since CL feed was deployed) with a 4-hour step gave the following results:

  - 35.91% of results differ for less than 0.1%
  - 62.06% have between 0.1% and 0.5% difference
  - 2.03% is between 0.5% and 1%

We also additionally double-checked all points of centralisation of MaticX to be sure that no on-chain manipulation of rates is possible.

- **stMatic Historical Feeds Comparison**: Comparing the answers from the current feed with the new one for the last 327 days (since CL feed was deployed) with a 4-hour step gave the following results:
  - 95.39% of results differ for less than 0.1%
  - 4.5% have between 0.1% and 0.5% difference
  - 0.11% is between 0.5% and 1%

All points of centralisation of stMatic were also checked to be sure that on-chain manipulation of rates is impossible.

## References

Tests: [Ethereum V2](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV2PriceFeedsUpdate_20230504_PayloadTest.t.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3OptPriceFeedsUpdate_20230504_PayloadTest.t.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3ArbPriceFeedsUpdate_20230504_PayloadTest.t.sol), [Polygon](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3PolPriceFeedsUpdate_20230504_PayloadTest.t.sol)

Proposal payload implementation: [Ethereum V2](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV2PriceFeedsUpdate_20230504_Payload.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3OptPriceFeedsSentinelUpdate_20230504_Payload.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3ArbPriceFeedsUpdate_20230504_Payload.sol), [Polygon](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3PolPriceFeedsUpdate_20230504_Payload.sol)

Price Adapters: [WBTC](https://etherscan.io/address/0xFD858c8bC5ac5e10f01018bC78471bb0DC392247), [wstETH Optimism](https://optimistic.etherscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56), [wstETH Arbitrum](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211), [MaticX](https://polygonscan.com/address/0x0e1120524e14bd7ad96ea76a1b1dd699913e2a45), [stMATIC](https://polygonscan.com/address/0xee96b77129cf54581b5a8fecccc50a6a067034a1)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
