---
title: Add LUSD to Aave Ethereum V3 pool
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Onboard LUSD on Aave Eth V3
discussions: https://governance.aave.com/t/arc-add-lusd-to-ethereum-v3-market/11522
created: 2023-02-14
updated: 2023-02-15
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to onboard LUSD to the Ethereum v3 Liquidity Pool.

## Motivation
Supporting stablecoin diversity diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Liquity or any entity to present this AIP.

The risk parameters provided introduce LUSD as a non-collateral asset.

Supply and borrow caps are suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: LUSD

Contract Address: [0x5f98805A4E8be255a32880FDeC7F6728C6568bA0](https://etherscan.io/token/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0)

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

The proposal payload uses the [GenericListingEngine](https://etherscan.io/address/0xC51e6E38d406F98049622Ca54a6096a23826B426#code) to perform a new asset listing with the following parameters:

```solidity
IGenericV3ListingEngine.Listing({
      asset: LUSD,
      assetSymbol: 'LUSD',
      priceFeed: LUSD_USD_FEED,
      rateStrategy: 0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3,
      enabledToBorrow: true,
      stableRateModeEnabled: false,
      borrowableInIsolation: false,
      withSiloedBorrowing: false,
      flashloanable: true,
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

- [forum discussion](https://governance.aave.com/t/arc-add-lusd-to-ethereum-v3-market/11522)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV3EthLUSDPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/mainnet/AaveV3EthLusdPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Deployed Contracts

- [AaveV3EthLUSDPayload: ProposalPayload](https://etherscan.io/address/0x9d4948be10dce66c0f584a6c42fd7d985786b439#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
