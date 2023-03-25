---
title: Add LUSD to Aave Optimism V3 pool
author: Marc Zeller (@marczeller), Aave-Chan initiative, Alyra Promo Satoshi
shortDescription: Onboard LUSD on Aave OP V3
discussions: https://governance.aave.com/t/arfc-add-lusd-to-optimism-v3-market/12113
created: 2023-03-25
updated: 2023-03-25
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to onboard LUSD to the Optimism v3 Liquidity Pool.

## Motivation
Supporting stablecoin diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Liquity or any entity to present this AIP.

The risk parameters provided introduce LUSD as a non-collateral asset.

Supply and borrow caps are suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: LUSD

Contract Address: [0xc40f949f8a4e094d1b49a23ea9241d289b7b2819](https://optimistic.etherscan.io/address/0xc40f949f8a4e094d1b49a23ea9241d289b7b2819)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|NO|
|Enable Borrow|YES|
|Enable Collateral|NO|
|Loan To Value|N/A|
|Liquidation Threshold|N/A|
|Liquidation Bonus|N/A|
|Reserve Factor|10%|
|Liquidation Protocol Fee|10%|
|Borrow Cap|1,210k|
|Supply Cap|3,000K|
|Debt Ceiling|N/A|
|Base|0%|
|Slope1|4%|
|Uoptimal|80%|
|Slope2|87%|

The proposal payload uses the GenericListingEngine to perform a new asset listing with the following parameters:

```solidity
IGenericV3ListingEngine.Listing({
      asset: LUSD,
      assetSymbol: 'LUSD',
      priceFeed: LUSD_USD_FEED,
      rateStrategy: 0x15C1638A1e674Af9957F3de2E7bF140278Ee51B7,
      enabledToBorrow: true,
      stableRateModeEnabled: false,
      borrowableInIsolation: false,
      withSiloedBorrowing: false,
      flashloanable: false,
      ltv: 0,
      liqThreshold: 0,
      liqBonus: 0,
      reserveFactor: 10_00,
      supplyCap: 3_000_000,
      borrowCap: 1_210_000,
      debtCeiling: 0,
      liqProtocolFee: 10_00,
      eModeCategory: 0
    });
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-add-lusd-to-optimism-v3-market/12113)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/optimism/AaveV3OPLUSDPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/optimism/AaveV3OptLUSDPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
