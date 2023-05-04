---
title: Update price feeds for WBTC on Aave V2 and wstETH on Aave V3 Optimism and Arbitrum
author: BGD Labs (@bgdlabs)
shortDescription: Swap WBTC price feed on Aave V2 and wstETH feed on Aave V3 Optimism and Arbitrum
discussions: https://governance.aave.com/t/bgd-generalised-price-sync-adapters/11416
created: 2023-05-04
---

## Simple Summary

This proposal changes the current price feed for WBTC to the custom WBTC / BTC / ETH price adapter on Aave V2 Ethereum. wstETH price feeds are swapped for the custom wstETH / ETH / USD adapters on Aave V3 Optimism and Arbitrum.

## Motivation

The current price feeds for wstETH on Aave V3 Optimism and Arbitrum (`wstETH/USD`) can result in artificial volatility due to de-synchronization between different asset/ETH feeds. To address this problem and enhance the stability of the Aave platform, we propose to change the price feeds for wstETH to a [custom price adapter](https://github.com/bgd-labs/cl-synchronicity-price-adapter/blob/main/src/contracts/CLSynchronicityPriceAdapterPegToBase.sol) that calculates the `wstETH / ETH / USD` price and is based on Cahinlink's feeds under the hood. The same issue applies to the `WBTC` on Aave v2.

This approach is already used for the wstETH on Polygon and WBTC on Aave V3.

## Specification

Upon execution, the proposal will:

- call `ORACLE.setAssetSources([0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599], [xxx])` to replace the price source for `WBTC` on Aave v2
- use Config Engine to update `wstETH` price feed to [0x05225Cd708bCa9253789C1374e4337a019e99D56](https://optimistic.etherscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56) on Optimism
- use Config Engine to update `wstETH` price feed to [0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211) on Arbitrum

## Security and additional considerations

Custom price adapters are already widely used in the system for price-correlated assets and were [reviewed by the auditors](https://github.com/bgd-labs/cl-synchronicity-price-adapter).

## References

Tests: [Ethereum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PriceFeedsUpdate_20230504/AaveV2PriceFeedsUpdate_20230504_PayloadTest.t.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PriceFeedsUpdate_20230504/AaveV3OptPriceFeedsUpdate_20230504_PayloadTest.t.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PriceFeedsUpdate_20230504/AaveV3ArbPriceFeedsUpdate_20230504_PayloadTest.t.sol)

Proposal payload implementation: [Ethereum](AaveV3PriceFeedsUpdate_20230504/AaveV2PriceFeedsUpdate_20230504_Payload.sol), [Optimism](AaveV3PriceFeedsUpdate_20230504/AaveV3OptPriceFeedsUpdate_20230504_Payload.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PriceFeedsUpdate_20230504/AaveV3ArbPriceFeedsUpdate_20230504_Payload.sol)

Price Adapters: [WBTC](), [wstETH Optimism](https://optimistic.etherscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56), [wstETH Arbitrum](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
