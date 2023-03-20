---
title: increase supply cap for cbETH Aave Ethereum V3
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: increase supply cap for cbETH Aave Ethereum V3
discussions: https://governance.aave.com/t/arfc-increase-supply-cap-for-cbeth-aave-ethereum-v3-20230317/12334
created: 2023-03-20
updated: 2023-03-20
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to increase cbETH supply cap on the Ethereum v3 Liquidity Pool.

## Motivation

Supporting LSDs diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Coinbase or any entity to present this AIP.

Supply cap is suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: cbETH

Contract Address: 0xbe9895146f7af43049ca1c1ae358b0541ea49704

|Risk Parameter| Current Value| Proposed Value|
| --- | --- | --- |
|Supply Cap|20K| 30K|



```solidity
contract AaveV3EthCbETHCapsPayload is IProposalGenericExecutor {
  address public constant CBETH = AaveV3EthereumAssets.cbETH_UNDERLYING;

  uint256 public constant CBETH_SUPPLY_CAP = 30_000;

  function execute() external {
    IPoolConfigurator configurator = AaveV3Ethereum.POOL_CONFIGURATOR;

    configurator.setSupplyCap(CBETH, CBETH_SUPPLY_CAP);
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-increase-supply-cap-for-cbeth-aave-ethereum-v3-20230317/12334)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/cbethV3EthSupplyCapsPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV3EthCBETHSupplyCapsPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
