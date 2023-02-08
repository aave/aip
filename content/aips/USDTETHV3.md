---
title: Add USDT to Aave Ethereum V3 pool
author: Marc Zeller (@marczeller), Aave-Chan Inititative
shortDescription: Onboard USDT Aave Eth V3
discussions: https://governance.aave.com/t/arfc-add-usdt-to-ethereum-v3-market/11536
created: 2023-02-07
updated: 2023-02-07
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to onboard USDT to the Ethereum v3 Liquidity Pool.

## Motivation
Supporting stablecoin diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Tether or any entity to present this ARC.

The risk parameters provided introduce USDT as a non-collateral asset.

The Interest rate Strategy curve is the same as for USDT in V2. for now.
The ACI is supportive of onboarding USDT as it was in V2.
For now, the ACI doesn’t consider V3 mature enough to activate a USD stablecoins emode and consider USDT in it.
Also, supply and borrow caps are suggested for this asset to limit risk exposure.

## Specification

Ticker: USDT

Contract Address: [0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7)

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
|Borrow Cap|185M|
|Supply Cap|200M|
|Debt Ceiling|N/A|
|Base|0%|
|Slope1|4%|
|Uoptimal|90%|
|Slope2|72%|

The proposal payload uses the [GenericListingEngine](https://etherscan.io/address/0xC51e6E38d406F98049622Ca54a6096a23826B426#code) to perform a new asset listing with the following parameters:

```solidity
IGenericV3ListingEngine.Listing({
      asset: USDT,
      assetSymbol: 'USDT',
      priceFeed: USDT_USD_FEED,
      rateStrategy: 0xdd1BAC6A713c5b0EC42bA39D0c5e4582975DE6D6,
      enabledToBorrow: true,
      stableRateModeEnabled: false,
      borrowableInIsolation: false,
      withSiloedBorrowing: false,
      flashloanable: true,
      ltv: 0,
      liqThreshold: 0,
      liqBonus: 0,
      reserveFactor: 10_00,
      supplyCap: 200_000_000,
      borrowCap: 185_000_000,
      debtCeiling: 0,
      liqProtocolFee: 10_00,
      eModeCategory: 0
    });
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-add-usdt-to-ethereum-v3-market/11536)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV3USDTETHPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/mainnet/AaveV3EthUSDTPayload.sol)

## Security Considerations

The proposal Payload was reviewed by[Bored Ghost Developing](https://bgdlabs.com/).

## Deployed Contracts

- [AaveV3EthUSDTPayload: ProposalPayload](https://etherscan.io/address/0x3b45bbc2b69fafab95fd91b10f39ccb5dd92facb#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).