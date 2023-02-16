---
title: Update xSushi price feed on Aave V2
author: BGD Labs (@bgdlabs)
shortDescription: Swap xSushi price feed on Aave V2 pool on Mainnet
discussions: https://governance.aave.com/t/bgd-swap-of-price-feed-of-xsushi-on-aave-v2-ethereum/11901
created: 2023-02-10
---

## Simple Summary

This proposal changes the current price feed for xSushi (adapter) to a Chainlink calculated oracle, on Aave V2 Ethereum.

## Motivation

Currently, a custom [price feed](https://etherscan.io/address/0x9b26214bEC078E68a394AaEbfbffF406Ce14893F) is used for xSushi, which calculates the price based on `SUSHI / ETH` oracle and `SUSHI / xSUSHI` ratio on-chain. It is more effective in terms of technical support and gas cost to use the [feed](https://etherscan.io/address/0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB) deployed by Chainlink, which does this calculations off-chain. In addition, any risk of on-chain manipulation, even if not applicable at the moment with the asset not enabled for borrowing, gets removed.

## Specification

Upon execution the proposal will:

- call `ORACLE.setAssetSources(0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272, 0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB)` to replace the price source for xSushi

## Security and additional considerations

To have extra assurances on the feed swap, we did the following:

- **Historical Feeds Comparison**: Comparing the answers from the current feed with the new one for the last year with a 2-hour step gave the following results:
  - 24.88% of results differ for less than 0.1%
  - 55.63% have between 0.1% and 1% difference
  - 19.49% is between 1% and 2%

Price deviation for both feeds is 2%, which means that the price difference is withing the norm.

## References

- [AaveV2SwapxSushiPriceFeedPayload](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/mainnet/AaveV2SwapxSushiPriceFeedPayload.sol)
- [Test suite](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV2SwapxSushiPriceFeedPayloadTest.t.sol)

## Contracts

- [xSushi](https://etherscan.io/token/0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272)
- [Current price feed](https://etherscan.io/address/0x9b26214bEC078E68a394AaEbfbffF406Ce14893F)
- [Chainlink's price feed](https://etherscan.io/address/0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB)
- [AaveV2SwapxSushiPriceFeedPayload: ProposalPayload](https://etherscan.io/address/0x3105c276558dd4cf7e7be71d73be8d33bd18f211)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
