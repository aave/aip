---
title: Freeze BUSD on Aave v2 ETH
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Freeze BUSD on Aave v2 ETH
discussions: https://governance.aave.com/t/arfc-freeze-busd-on-aave-v2/11842
created: 2022-02-21
updated: 2022-02-21
---

## Simple Summary

This AIP proposes to freeze the BUSD reserve on the Aave V2 Ethereum pool 

## Motivation

While BUSD is not an asset with borrowing power, and recent development does not present risks of excess debt, From Feb 2023, the circulating supply of this asset will eventually go toward zero.

As there’s no real prospect of growth and the inability to mint new BUSD might hurt peg arbitrage opportunity and asset peg. It seems that the most reasonable path for Aave is to freeze this reserve and invite users to switch to another stablecoin among the diversity present in Aave.

## Specification

Ticker: BUSD (BUSD)

Contract Address: 0x4Fabb145d64652a948d72533023f6E7A623C7C53
.
The proposal payload simply executes `freezeReserve()` on the [Aave v2 Ethereum LendingPoolConfigurator]https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) for BUSD.

## References

- [Proposal payload implementation](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/mainnet/AaveV2EthFreezeBUSD.sol)
- [Tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV2EthBUSDFreezeTest.t.sol)
- [Deployed payload](https://etherscan.io/address/0x9c4bf756e2d8da301121b036958f6b3fcd0fe801#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
