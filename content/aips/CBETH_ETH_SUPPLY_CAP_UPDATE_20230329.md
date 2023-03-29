---
title: increase supply cap for cbETH Aave Ethereum V3
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: increase supply cap for cbETH Aave Ethereum V3
discussions: https://governance.aave.com/t/arfc-increase-cbeth-supply-cap-03-26/12480
created: 2023-03-29
---

## Simple Summary
This AIP proposal presents Aave with the opportunity to increase cbETH supply cap on the Ethereum v3 Liquidity Pool.

## Motivation

Supporting LSDs diversity is part of the Aave-Chan Initiative (ACI) delegate platform.

The ACI does not have any link nor is paid by Coinbase or any entity to present this AIP.

Supply cap is suggested for this asset to limit risk exposure, the caps have been proposed by a join collaboration between Gauntlet & Chaos Labs.

## Specification

Ticker: cbETH

Contract Address: [0xbe9895146f7af43049ca1c1ae358b0541ea49704](https://etherscan.io/address/0xbe9895146f7af43049ca1c1ae358b0541ea49704)

|Risk Parameter| Current Value| Proposed Value|
| --- | --- | --- |
|Supply Cap|30K| 60K|



```solidity
contract AaveV3EthCBETHSupplyCapUpdate_20230328 is AaveV3PayloadEthereum {
  function capsUpdates() public pure override returns (IEngine.CapsUpdate[] memory) {
    IEngine.CapsUpdate[] memory capsUpdate = new IEngine.CapsUpdate[](1);

    capsUpdate[0] = IEngine.CapsUpdate({
      asset: AaveV3EthereumAssets.cbETH_UNDERLYING,
      supplyCap: 60_000,
      borrowCap: EngineFlags.KEEP_CURRENT
    });

    return capsUpdate;
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-increase-cbeth-supply-cap-03-26/12480)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3ETHCBETHSupplyCapUpdate_20230328/AaveV3EthCBETHSupplyCapUpdate_20230328_test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3ETHCBETHSupplyCapUpdate_20230328/AaveV3EthCBETHSupplyCapUpdate_20230328.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
