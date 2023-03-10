---
title: Activate Emode for cbETH Aave Ethereum V3
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Activate Emode for cbETH Aave Ethereum V3
discussions: https://governance.aave.com/t/arfc-activate-emode-for-cbeth-aave-ethereum-v3/12074
created: 2023-03-10
updated: 2023-03-10
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to activate emode for cbETH on the Ethereum v3 Liquidity Pool.

## Motivation

Supporting LSDs diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

cbETH is currently the second largest ETH Liquid staking derivative of the V3 market.

Allowing the activation of emode has a clear use-case for leveraged strategies based on cbETH as collateral to both “long” cbETH currently at a small discount on secondary markets and increased staking yield via loops strategies.

With the current supply and borrowing caps, this activation can be done while keeping a conservative approach.

The ACI does not have any link nor is paid by Coinbase or any entity to present this AIP.

## Specification

Ticker: cbETH

Contract Address: 0xbe9895146f7af43049ca1c1ae358b0541ea49704

|Risk Parameter| Current Value| Proposed Value|
| --- | --- | --- |
|Emode Category|0| 1 |



```solidity
contract AaveV3EthCBETHEmodeActivation is IProposalGenericExecutor {
  address public constant CBETH = AaveV3EthereumAssets.cbETH_UNDERLYING;

  uint8 public constant EMODE_CATEGORY = 1;

  function execute() external {
    AaveV3Ethereum.POOL_CONFIGURATOR.setAssetEModeCategory(CBETH, EMODE_CATEGORY);
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-activate-emode-for-cbeth-aave-ethereum-v3/12074)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV3EthCBETHEmodeActivationTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV3EthCBETHEmodeActivation.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
