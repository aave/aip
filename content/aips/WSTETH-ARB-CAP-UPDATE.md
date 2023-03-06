---
title: increase supply cap for wstETH Aave Arbitrum V3
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: increase supply cap for wstETH Aave Arbitrum V3
discussions: https://governance.aave.com/t/arfc-increase-supply-cap-for-wsteth-aave-arbitrum-v3/12163
created: 2023-03-05
updated: 2023-03-05
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to increase wstETH supply cap on the Arbitrum v3 Liquidity Pool.

## Motivation

wstETH has reached approximately 95% of its supply cap on Aave V3 Arbitrum.

Increasing this supply cap will enable new Aave users to utilize Aave V3 and allow current users to increase the size of their positions.

The proposed increase is set at a level that allows the market to find a new equilibrium while maintaining a conservative approach.

## Specification

Ticker: wstETH (wstETH)

Contract Address: 0x5979d7b546e38e414f7e9822514be443a4800529

| Parameter | Current | Proposed |
| --- | --- | --- |
| Supply Cap | 1200 | 2400 |


```solidity
contract AaveV3ArbwstETHCapsPayload is IProposalGenericExecutor {
  uint256 public constant WSTETH_CAP = 2_400;

  function execute() external {
    AaveV3Arbitrum.POOL_CONFIGURATOR.setSupplyCap(
      AaveV3ArbitrumAssets.wstETH_UNDERLYING,
      WSTETH_CAP
    );
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-increase-supply-cap-for-wsteth-aave-arbitrum-v3/12163)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV3ArbwstETHSupplyCapsPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/arbitrum/AaveV3ArbwstETHSupplyCapsPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Deployed Contracts

- [AaveV3ArbwstETHCapsPayload: ProposalPayload](https://arbiscan.io/address/0xcdb9ea7f9443fa9e8ba6ebc9ef41c3ed75939663#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
