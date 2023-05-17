---
title: Update price feeds for WBTC on Aave V2 and wstETH on Aave V3 Optimism and Arbitrum
author: BGD Labs (@bgdlabs)
shortDescription: Swap WBTC price feed on Aave V2 and wstETH feed on Aave V3 Optimism and Arbitrum
discussions: https://governance.aave.com/t/bgd-generalised-price-sync-adapters/11416
created: 2023-05-04
---

## Simple Summary

This proposal changes the current price feed for WBTC to the custom WBTC / BTC / ETH price adapter on Aave V2 Ethereum. wstETH price feeds are swapped for the custom wstETH / ETH / USD adapters on Aave V3 Optimism and Arbitrum. It also sets the price oracle sentinel on Aave V3 Optimism.

## Motivation

The current price feeds for wstETH on Aave V3 Optimism and Arbitrum (`wstETH/USD`) can result in artificial volatility due to de-synchronization between different asset/ETH feeds. To address this problem and enhance the stability of the Aave platform, we propose to change the price feeds for wstETH to a [custom price adapter](https://github.com/bgd-labs/cl-synchronicity-price-adapter/blob/main/src/contracts/CLSynchronicityPriceAdapterPegToBase.sol) that calculates the `wstETH / ETH / USD` price and is based on Chainlink's feeds under the hood. The same issue applies to the `WBTC` on Aave v2.

This approach is already used for the wstETH on Polygon and WBTC on Aave V3.

As the Chainlink sequencer feed is available for Optimism, it also makes sense to configure the price oracle sentinel for Aave V3 Optimism, so that all L2 Aave V3 markets where the the Chainlink feed is available, are in sync.

## Specification

Upon execution, the proposal will:

- call `ORACLE.setAssetSources([0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599], [0xFD858c8bC5ac5e10f01018bC78471bb0DC392247])` to replace the price source for `WBTC` on Aave v2
- call `AaveV3Optimism.POOL_ADDRESSES_PROVIDER.setPriceOracleSentinel(0xB1ba0787Ca0A45f086F8CA03c97E7593636E47D5)` to set the price oracle sentinel on the pool addresses provider
- use Config Engine to update `wstETH` price feed to [0x05225Cd708bCa9253789C1374e4337a019e99D56](https://optimistic.etherscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56) on Optimism
- use Config Engine to update `wstETH` price feed to [0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211) on Arbitrum

## Security and additional considerations

Custom price adapters are already widely used in the system for price-correlated assets and were [reviewed by the auditors](https://github.com/bgd-labs/cl-synchronicity-price-adapter).

## References

Tests: [Ethereum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV2PriceFeedsUpdate_20230504_PayloadTest.t.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3OptPriceFeedsUpdate_20230504_PayloadTest.t.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3ArbPriceFeedsUpdate_20230504_PayloadTest.t.sol)

Proposal payload implementation: [Ethereum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PriceFeedsUpdate_20230504/AaveV2PriceFeedsUpdate_20230504_Payload.sol), [Optimism](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230504/AaveV3OptPriceFeedsSentinelUpdate_20230504_Payload.sol), [Arbitrum](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3PriceFeedsUpdate_20230504/AaveV3ArbPriceFeedsUpdate_20230504_Payload.sol)

Price Adapters: [WBTC](https://etherscan.io/address/0xFD858c8bC5ac5e10f01018bC78471bb0DC392247), [wstETH Optimism](https://optimistic.etherscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56), [wstETH Arbitrum](https://arbiscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
