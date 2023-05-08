---
title: Add MAI to Aave Arbitrum V3 pool
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Onboard MAI on Aave ARB V3
discussions: https://governance.aave.com/t/arfc-add-mai-to-arbitrum-aave-v3-market/12759
created: 2023-04-26
---

## Simple Summary

This AIP proposal presents Aave with the opportunity to onboard MAI to the Arbitrum v3 Liquidity Pool.

## Motivation

Supporting stablecoin diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by QiDAO or any entity to present this AIP.

The risk parameters provided introduce MAI as a collateral asset.

Supply and borrow caps are suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: MAI

Contract Address: [0x3F56e0c36d275367b8C502090EDF38289b3dEa0d](https://arbiscan.io/address/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d)

Risk Parameter|Value|
|---|---|
|Isolation Mode|YES|
|Enable Borrow|YES|
|Enable Collateral|YES (in isolation mode)|
|Loan To Value|75%|
|Liquidation Threshold|80%|
|Liquidation Bonus|5%|
|Reserve Factor| 20%|
|Liquidation Protocol Fee|10%|
|Borrow Cap|2,400k|
|Supply Cap|4,800k|
|Debt Ceiling|1,200k|
|Base|0%|
|Slope1|4%|
|Uoptimal|80%|
|Slope2|75%|

The proposal payload uses the IEngine to perform a new asset listing with the following parameters:

```solidity
IEngine.Listing({
      asset: MAI,
      assetSymbol: 'MAI',
      priceFeed: MAI_USD_FEED,
      rateStrategyParams: Rates.RateStrategyParams({
        optimalUsageRatio: _bpsToRay(80_00),
        baseVariableBorrowRate: 0,
        variableRateSlope1: _bpsToRay(4_00),
        variableRateSlope2: _bpsToRay(75_00),
        stableRateSlope1: _bpsToRay(4_00),
        stableRateSlope2: _bpsToRay(75_00),
        baseStableRateOffset: _bpsToRay(1_00),
        stableRateExcessOffset: _bpsToRay(8_00),
        optimalStableToTotalDebtRatio: _bpsToRay(20_00)
      }),
      enabledToBorrow: EngineFlags.ENABLED,
      stableRateModeEnabled: EngineFlags.DISABLED,
      borrowableInIsolation: EngineFlags.DISABLED,
      withSiloedBorrowing: EngineFlags.DISABLED,
      flashloanable: EngineFlags.DISABLED,
      ltv: 75_00,
      liqThreshold: 80_00,
      liqBonus: 7_50,
      reserveFactor: 20_00,
      supplyCap: 4_800_000,
      borrowCap: 2_400_000,
      debtCeiling: 1_200_000,
      liqProtocolFee: 10_00,
      eModeCategory: 0
    });
```

## References

A list of relevant links for this proposal

- [forum discussion](https://governance.aave.com/t/arfc-add-mai-to-arbitrum-aave-v3-market/12759)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3OPARBMAIListings_20230425/AaveV3ARBMAIListing_20230425_test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3OPARBMAIListings_20230425/AaveV3ARBMAIListing_20230425.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
