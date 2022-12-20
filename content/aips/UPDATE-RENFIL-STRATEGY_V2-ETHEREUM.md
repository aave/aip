---
title: Update renFIL rate strategy on Aave v2 Ethereum
author: BGD Labs (@bgd-labs)
shortDescription: Update the interest rate strategy of renFIL on Aave v2 Ethereum
discussions: https://governance.aave.com/t/update-renfil-interest-rate-strategy-on-aave-v2-ethereum/11049
created: 2022-12-19
updated: 2022-12-19
---


## Simple Summary

Proposal to replace the rate strategy smart contract of renFIL on Aave v2 Ethereum with one returning constant zero rates, to avoid further accrual of variable borrow debt.

## Motivation

As explained on [https://medium.com/renproject/moving-on-from-alameda-da62a823ce93](https://medium.com/renproject/moving-on-from-alameda-da62a823ce93), the mint/burn dynamics of renTokens have been affected, with minting already disabled, and burning to be disabled on the following days.

Even if renFIL is only listed as borrowing asset on Aave v2 Ethereum (not collateral), fundamental changes on the creation/destruction of the asset creates a situation where the variable borrow and liquidity rate are not meaningful anymore, and should probably be set as constant 0.

Additional information can be found on the [Aave governance forum](https://governance.aave.com/t/update-renfil-interest-rate-strategy-on-aave-v2-ethereum/11049).

## Specification

From a technical standpoint, the proposal payload only calls `setReserveInterestRateStrategyAddress()` on the Aave v2 Ethereum PoolConfigurator contract, passing as parameters the address of renFIL and the address of the new rate strategy smart contract.

## References

- [Aave v2 Zero rate strategy](https://github.com/bgd-labs/aave-v2-zero-rate-strategy/blob/main/src/contracts/AaveV2ZeroInterestRateStrategy.sol)
- [Proposal payload implementation](https://github.com/bgd-labs/aave-v2-zero-rate-strategy/blob/main/src/contracts/RENFILZeroStrategyPayload.sol)
- [Deployed proposal payload](https://etherscan.io/address/0xbfcf7a2d4a91e91c72cdcf07ec65de6bf507daab#code)
- [Deployed rate strategy](https://etherscan.io/address/0x311c866d55456e465e314a3e9830276b438a73f0#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
