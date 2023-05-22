---
title: Activate Emode for rETH Aave Ethereum V3
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Activate Emode for rETH Aave Ethereum V3
discussions: https://governance.aave.com/t/arfc-activate-emode-for-reth-aave-ethereum-v3-pool/13034
created: 2023-05-22
---

## Simple Summary

This AIP proposal presents Aave with the opportunity to activate emode for rETH on the Ethereum v3 Liquidity Pool.

## Motivation

rETH is a decentralized Liquid Staking Token minted by Rocket Pool operators.

rETH is minted by Rocket Pool protocol when users Stake ETH via mini-pools or directly by depositing in the Deposit Pool.

Allowing the activation of emode has a clear use-case for leveraged strategies based on rETH as collateral to both “long” rETH on secondary markets and increased staking yield via loops strategies.

With the current supply and borrowing caps, this activation can be done while keeping a conservative approach.
For more information about rETH please refer to [rETH V3 ARC](https://governance.aave.com/t/arc-onboard-reth-rocket-pool-eth-to-aave-v3-ethereum-market/11371)

## Specification

Ticker: rETH (rETH)

Contract Address: 0xae78736Cd615f374D3085123A210448E74Fc6393

|Risk Parameter| Current Value| Proposed Value|
| --- | --- | --- |
|Emode Category|0| 1 |

This AIP leverage `AaveV3PayloadEthereum` and `collateralsUpdates()` to set the `eModeCategory` to 1 (ETH-correlated assets category).

```solidity
contract AaveV3ETHrETHEmode_20230522 is AaveV3PayloadEthereum {
  function collateralsUpdates() public pure override returns (IEngine.CollateralUpdate[] memory) {
    IEngine.CollateralUpdate[] memory collateralUpdate = new IEngine.CollateralUpdate[](1);

    collateralUpdate[0] = IEngine.CollateralUpdate({
      asset: AaveV3EthereumAssets.rETH_UNDERLYING,
      ltv: EngineFlags.KEEP_CURRENT,
      liqThreshold: EngineFlags.KEEP_CURRENT,
      liqBonus: EngineFlags.KEEP_CURRENT,
      debtCeiling: EngineFlags.KEEP_CURRENT,
      liqProtocolFee: EngineFlags.KEEP_CURRENT,
      eModeCategory: 1
    });
    return collateralUpdate;
  }
}
```

## Disclaimer

The Aave-Chan Initiative is not linked nor paid by Rocket Pool to publish this AIP.

The ACI supports LST diversity as part of its delegate platform

At the time of Writing, Marc Zeller, ACI's founder, does not hold any rETH but owns a small amount of RPL with the intention to use them to deploy Mini-pools in the future.

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-activate-emode-for-reth-aave-ethereum-v3-pool/13034)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3EthrETHEmode_20230522/AaveV3ETHrETHEmode_20230522test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3EthrETHEmode_20230522/AaveV3ETHrETHEmode_20230522.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
