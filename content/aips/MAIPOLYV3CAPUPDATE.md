---
title: Update MAI Caps Aave Polygon V3 pool
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Update MAI Caps Aave Polygon V3 pool
discussions: https://governance.aave.com/t/arfc-increase-borrow-cap-for-mai-aave-polygon-v3/11547
created: 2023-02-16
updated: 2023-02-16
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to update MAI supply & borrow caps on the Polygon v3 Liquidity Pool.

## Motivation

Supporting stablecoin diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by QiDAO or any entity to present this AIP.

Supply and borrow caps are suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: MiMATIC

Contract Address: [0xa3Fa99A148fA48D14Ed51d610c367C61876997F1](https://polygonscan.com/address/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1)

|Risk Parameter|Value|
| --- | --- |
|Supply Cap|1,100K|
|Borrow Cap|600k|



```solidity
contract MAIV3PolCapsPayload is IProposalGenericExecutor {
  address public constant MAI = 0xa3Fa99A148fA48D14Ed51d610c367C61876997F1;

  uint256 public constant MAI_SUPPLY_CAP = 1_100_000;
  uint256 public constant MAI_BORROW_CAP = 600_000;

  function execute() external {
    IPoolConfigurator configurator = AaveV3Polygon.POOL_CONFIGURATOR;

    configurator.setSupplyCap(MAI, MAI_SUPPLY_CAP);
    configurator.setBorrowCap(MAI, MAI_BORROW_CAP);
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-increase-borrow-cap-for-mai-aave-polygon-v3/11547)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/MaiV3PolCapsPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/MaiV3PolCapsPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Deployed Contracts

- [MaiV3PolCapsPayload: ProposalPayload](https://polygonscan.com/address/0xe6e2e24643581c7118f6cf8fc30a8e236efb493e)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
