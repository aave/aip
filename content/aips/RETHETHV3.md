---
title: Add rETH to Aave Ethereum V3 pool
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Onboard rETH on Aave Eth V3
discussions: https://governance.aave.com/t/arc-onboard-reth-rocket-pool-eth-to-aave-v3-ethereum-market/11371
created: 2023-02-08
updated: 2023-02-08
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to onboard rETH to the Ethereum v3 Liquidity Pool.

## Motivation
Supporting Liquid Staking Derivative (LSDs) diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Rocket Pool or any entity to present this AIP.

The risk parameters provided introduce rETH as a collateral asset.

Supply and borrow caps are suggested for this asset to limit risk exposure, the caps have bet proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: RETH

Contract Address: [0xae78736Cd615f374D3085123A210448E74Fc6393](https://etherscan.io/address/0xae78736cd615f374d3085123a210448e74fc6393)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|NO|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|67%|
|Liquidation Threshold|74%|
|Liquidation Bonus|7.5%|
|Reserve Factor|15%|
|Liquidation Protocol Fee|10%|
|Borrow Cap|1200|
|Supply Cap|10K|
|Debt Ceiling|N/A|
|Base|0%|
|Slope1|7%|
|Uoptimal|45%|
|Slope2|300%|

The proposal payload uses the [GenericListingEngine](https://etherscan.io/address/0xC51e6E38d406F98049622Ca54a6096a23826B426#code) to perform a new asset listing with the following parameters:

```solidity
IGenericV3ListingEngine.Listing({
      asset: RETH,
      assetSymbol: 'rETH',
      priceFeed: RETH_USD_FEED,
      rateStrategy: 0x24701A6368Ff6D2874d6b8cDadd461552B8A5283,
      enabledToBorrow: true,
      stableRateModeEnabled: false,
      borrowableInIsolation: false,
      withSiloedBorrowing: false,
      flashloanable: true,
      ltv: 67_00,
      liqThreshold: 74_00,
      liqBonus: 7_50,
      reserveFactor: 15_00,
      supplyCap: 10_000,
      borrowCap: 1_200,
      debtCeiling: 0,
      liqProtocolFee: 10_00,
      eModeCategory: 0
    });
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arc-onboard-reth-rocket-pool-eth-to-aave-v3-ethereum-market/11371)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV3EthrETHPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/mainnet/AaveV3EthrETHPayload.sol)

## Security Considerations

The proposal Payload was reviewed by[Bored Ghost Developing](https://bgdlabs.com/).

## Deployed Contracts

- [AaveV3EthrETHPayload: ProposalPayload](https://etherscan.io/address/0x2dbbb5a1248bbbeddc2adee52a0995ed85f56006#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
