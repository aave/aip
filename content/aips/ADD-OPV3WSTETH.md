---
title: onboard WSTETH to Aave Optimism V3 pool
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: add WSTETH to Aave Op V3 pool
discussions: https://governance.aave.com/t/arc-add-wsteth-to-aave-v3-on-optimism/10932
created: 2023-02-17
updated: 2023-02-17
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to onboard wstETH to the optimism v3 Liquidity Pool.

## Motivation
Supporting LSD diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Optimism or any entity to present this AIP.

The risk parameters provided introduce wstETH as a collateral asset.

Supply and borrow caps are suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: wstETH

Contract Address: [0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb](https://optimistic.etherscan.io/address/0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|NO|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|70%|
|Liquidation Threshold|79%|
|Liquidation Bonus|7.2%|
|Reserve Factor|15%|
|Liquidation Protocol Fee|10%|
|Borrow Cap|940|
|Supply Cap|6000|
|Debt Ceiling|N/A|
|Base|0.25%|
|Slope1|4.5%|
|Uoptimal|45%|
|Slope2|80%|

The proposal payload uses the [GenericListingEngine](https://optimistic.etherscan.io/address/0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D#code) to perform a new asset listing with the following parameters:

```solidity
IGenericV3ListingEngine.Listing({
      asset: WSTETH,
      assetSymbol: 'wstETH',
      priceFeed: WSTETH_USD_FEED,
      rateStrategy: https://optimistic.etherscan.io/address/0x6ba97468e2e6a3711a6dd05f0075d48e878c910e,
      enabledToBorrow: true,
      stableRateModeEnabled: false,
      borrowableInIsolation: false,
      withSiloedBorrowing: false,
      flashloanable: false,
      ltv: 70_00,
      liqThreshold: 79_00,
      liqBonus: 7_20,
      reserveFactor: 15_00,
      supplyCap: 6_000,
      borrowCap: 940,
      debtCeiling: 0,
      liqProtocolFee: 10_00,
      eModeCategory: 0
    });
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arc-add-wsteth-to-aave-v3-on-optimism/10932)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/optimism/AaveV3OPWSTETHPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/optimism/AaveV3OPWSTETHPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Deployed Contracts

- [AaveV3OPWSTETHPayload: ProposalPayload](https://optimistic.etherscan.io/address/0x84893ee84e773e4a7a5738bd903dbe2a6e636b9e)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
