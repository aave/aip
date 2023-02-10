---
title: Update xSushi price feed on Aave V2
author: BGD Labs (@bgdlabs)
shortDescription: Swap xSushi price feed on Aave V2 pool on Mainnet
discussions: TBA
created: 2023-02-10
---

## Simple Summary

This proposal changes the current price feed for xSushi to ChainLink's oracle for Aave V2 on Mainnet.

## Motivation

Currently, the custom [price feed](https://etherscan.io/address/0x9b26214bEC078E68a394AaEbfbffF406Ce14893F) is used for xSushi, which calculates the price based on `SUSHI / ETH` oracle and `SUSHI / xSUSHI` ratio on-chain. It would be way more effective in terms of technical support and gas cost to use the [feed](https://etherscan.io/address/0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB) deployed by Chainlink, which does this calculations off-chain.

## Specification

Upon execution the proposal will:

- call `ORACLE.setAssetSources(0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272, 0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB)` to replace the price source for xSushi

## Security and additional considerations

We applied the following security procedures for this upgrade:

- **Historical Feeds Comparison**: Comparing the answers from the current feed with the new one for the last year with a 2-hour step gave the following results:
  - 24.88% of results differ for less than 0.1%
  - 55.63% have between 0.1% and 1% difference
  - 19.49% is between 1% and 2%

## References

- [AaveV2SwapxSushiPriceFeedPayload](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/mainnet/AaveV2SwapxSushiPriceFeedPayload.sol)
- [Test suite](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV2SwapxSushiPriceFeedPayloadTest.t.sol)

## Contracts

- [xSushi](https://etherscan.io/token/0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272)
- [Current price feed](https://etherscan.io/address/0x9b26214bEC078E68a394AaEbfbffF406Ce14893F)
- [Chainlink's price feed](https://etherscan.io/address/0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB)
- [AaveV2SwapxSushiPriceFeedPayload: ProposalPayload](TBA)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
