---
title: BUSD Offboarding Plan
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: BUSD Offboarding Plan
discussions: https://governance.aave.com/t/arfc-busd-offboarding-plan/12170
created: 2022-03-09
updated: 2022-03-09
---

## Simple Summary

This AIP proposes to change the InterestRate Strategy the BUSD reserve on the Aave V2 Ethereum pool and increase ReserveFactor

## Motivation

Recently, Paxos stopped minting BUSD due to recent developments with the SEC. This means that the circulating supply of BUSD will trend towards zero over time. As a result, it is necessary to implement an offboarding plan for BUSD on the Aave V2 Ethereum market.

The current APR cost of the plan, if enforced today, would be 101.25% for current borrowers, signaling them to repay without significant impact on their positions. If the reserve utilization reaches 100%, the resulting APR cost will be 210%.

The ACI has analyzed the vBUSD debt token holders and found that most top positions are relatively active addresses and are expected to manage their positions actively.

This AIP aims to provide a smooth transition for Aave V2 BUSD users, while also providing a clear path for the offboarding of BUSD on Aave.

## Specification

Ticker: BUSD (BUSD)

Contract Address: 0x4Fabb145d64652a948d72533023f6E7A623C7C53

The offboarding plan will be carried out With the current AIP with the following parameters:

- Decrease uOptimal from 80% to 20%.
- Increase reserveFactor from 10% to 99.9%.
- Increase base rate from 0% to 3%.
- Increase slope 1 from 4% to 7%.
- Increase slope 2 from 100% to 200%.

```solidity
contract AaveV2BUSDPayload is IProposalGenericExecutor {
  address public constant INTEREST_RATE_STRATEGY = 0x67a81df2b7FAf4a324D94De9Cc778704F4500478;
  uint256 public constant RESERVE_FACTOR = 99_90; 
  function execute() external {
    AaveV2Ethereum.POOL_CONFIGURATOR.setReserveInterestRateStrategyAddress(
      AaveV2EthereumAssets.BUSD_UNDERLYING,
      INTEREST_RATE_STRATEGY
    );
    AaveV2Ethereum.POOL_CONFIGURATOR.setReserveFactor(
      AaveV2EthereumAssets.BUSD_UNDERLYING,
      RESERVE_FACTOR
    );
  }
}
```

## References

- [Tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/mainnet/AaveV2BUSDETHPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV2BUSDPayload.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
