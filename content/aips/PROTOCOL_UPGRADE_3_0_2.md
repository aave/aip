---
title: Upgrade Aave V3 pools to Aave V3.0.2
author: BGD Labs (@bgdlabs)
shortDescription: Upgrade various contracts to V3.0.2 to align Aave Deployments
discussions: https://governance.aave.com/t/bgd-aave-v3-ethereum-new-deployment-vs-aave-v2-upgrade/9990/13
created: 2023-02-10
---

## Simple Summary

This proposal upgrades the Aave v3 instances on Ethereum, Polygon, Optimism and Arbitrum to the v3.0.2 version.
The v3.0.2 is an upgrade based on the v3.0.1 version already running on the new Aave v3 Ethereum pool which comes with improvements to the handling of isolation mode, LTV0, and flashBorrower initiated flashloans.
If this proposal succeeds, it will also authorize the upgrade of the V3 pools on Avalanche and Fantom via a delegatecall by the Aave Guardian.

The upgrades to be performed will affect the following contracts:

1. Pool
2. PoolConfigurator
3. aToken/variableDebtToken/stableDebtToken

And replace the `AaveProtocolDataProvider` on the PoolAddressesProvider with it's next iteration.

## Motivation

Aave v3 Ethereum has been activated via Aave governance at the end of January. But in reality, as described [HERE](https://governance.aave.com/t/bgd-aave-v3-ethereum-new-deployment-vs-aave-v2-upgrade/9990/13), the smart contracts on Ethereum are a slightly improved version of v3, the so-called v3.0.1.

In an ecosystem like Aave, with liquidity pool instances spread across multiple networks, it is fundamental to try to keep version consistency, which is not the case at moment, with Polygon, Avalanche, Optimism, Arbitrum, Fantom, and Harmony running still on v3.0.0. Therefore this proposal aligns all pools at v3.0.2.

## Specification

Upon execution on the respective network the proposal will:

- call `POOL_ADDRESSES_PROVIDER.setPoolImpl(NEW_POOL_IMPL)` to replace the Pool implementation (all networks)
- call `POOL_ADDRESSES_PROVIDER.setPoolConfiguratorImpl(NEW_POOL_CONFIGURATOR_IMPL)` to replace the PoolConfigurator implementation (all networks, excluding mainnet)
- call `POOL_ADDRESSES_PROVIDER.setPoolDataProvider(NEW_PROTOCOL_DATA_PROVIDER)` to replace the AaveProtocolDataProvider (all networks, excluding mainnet)
- iterate through all currently listed tokens on the pool (fetched via `POOL.getReservesList()`) (all networks, excluding mainnet)
  - call `POOL_CONFIGURATOR.updateAToken(inputAToken)` to replace the aToken implementation
  - call `POOL_CONFIGURATOR.updateVariableDebtToken(inputVToken)` to replace the vToken implementation
  - call `POOL_CONFIGURATOR.updateStableDebtToken(inputSToken)` to replace the sToken implementation
  - call `POOL_CONFIGURATOR.setReserveFlashLoaning(reserve, true)` to enable flashloaning on the reserve
- call `ACL_MANAGER.grantRole(ISOLATED_COLLATERAL_SUPPLIER_ROLE, SWAP_COLLATERAL_ADAPTER)` to maintain pre-upgrade behavior (all networks, excluding harmony)
- call `ACL_MANAGER.grantRole(ISOLATED_COLLATERAL_SUPPLIER_ROLE, MIGRATION_HELPER)` to maintain pre-upgrade behavior (mainnet, avalanche, polygon)

## Security and additional considerations

We applied the following security procedures for this upgrade:

- **Code diffing**: Comparing the codebase of all v3.0.0 with the one of v3.0.1, more specifically the one on Aave v3 Ethereum, to not have any unexpected logic included.
- **Storage diffing**: Comparing the storage layout of both versions, to verify that there is no misalignment between them, which could create important problems.
- **Assets configurations pre/post upgrade**: In a simulation environment, validating the configurations of the assets pre-upgrade are the same as post-upgrade, only with those changes that are intended (e.g. enabling the new `flashloanable` flag only present on v3.0.1, later explained).
- **Additional E2E tests**: Also in a simulation environment, checking that the main actions available on the pool can be performed (e.g. supply, borrow) on all pools with non-frozen assets.
- **Extra review**: Given their involvement in the development of Aave v3, we have requested AaveCompanies to take a look at the procedure, in order to have multiple parties validating it.
- **Audit**: Certora and SigmaPrime reviewed the v3.0.1 -> v3.0.2 changes

The decision to enable `flashloanable` for all the assets has been taken in order to have the highest possible consistency with the current state of the assets in the pools: currently, all are flashloanable, so by enabling the new flag, they will continue to be so.

## References

- [Payload:Mainnet](https://etherscan.io/address/0x31a239f3e39c5d8ba6b201ba81ed584492ae960f)
- [Payload:Polygon](https://polygonscan.com/address/0xa603ad2b0258bdda94f3dfdb26859ef205ae9244)
- [Payload:Arbitrum](https://arbiscan.io/address/0x209ad99bd808221293d03827b86cc544bca0023b)
- [Payload:Optimism](https://optimistic.etherscan.io/address/0x7748d38a160eeef9559e2b043eaec5cfffce3e4c)
- [Payload:Avalanche](https://snowtrace.io/address/0xd792a3779d3c80baee8cf3304d6aeac74bc432be)
- [Payload:Fantom](https://ftmscan.com/address/0x04a8d477ee202adce1682f5902e1160455205b12)
- [Update diffs](https://github.com/bgd-labs/proposal-3.0.1-upgrade/tree/main/diffs)
- BorrowLogic:
  - [Mainnet](https://etherscan.io/address/0x5d834EAD0a80CF3b88c06FeeD6e8E0Fcae2daEE5#code)
  - [Polygon](https://polygonscan.com/address/0x5d834EAD0a80CF3b88c06FeeD6e8E0Fcae2daEE5#code)
  - [Arbitrum](https://arbiscan.io/address/0x5d834EAD0a80CF3b88c06FeeD6e8E0Fcae2daEE5#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x5d834EAD0a80CF3b88c06FeeD6e8E0Fcae2daEE5#code)
  - [Avalanche](https://snowtrace.io/address/0x5d834EAD0a80CF3b88c06FeeD6e8E0Fcae2daEE5#code)
  - [Fantom](https://ftmscan.com/address/0x5d834ead0a80cf3b88c06feed6e8e0fcae2daee5#code)
- BridgeLogic:
  - [Mainnet](https://etherscan.io/address/0x57572C9e795F4B6A748EFBeAB7E0a1B9996A0A24#code)
  - [Polygon](https://polygonscan.com/address/0x57572C9e795F4B6A748EFBeAB7E0a1B9996A0A24#code)
  - [Arbitrum](https://arbiscan.io/address/0x57572C9e795F4B6A748EFBeAB7E0a1B9996A0A24#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x57572C9e795F4B6A748EFBeAB7E0a1B9996A0A24#code)
  - [Avalanche](https://snowtrace.io/address/0x57572C9e795F4B6A748EFBeAB7E0a1B9996A0A24#code)
  - [Fantom](https://ftmscan.com/address/0x57572C9e795F4B6A748EFBeAB7E0a1B9996A0A24#code)
- ConfiguratorLogic:
  - [Mainnet](https://etherscan.io/address/0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0#code)
  - [Polygon](https://polygonscan.com/address/0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0#code)
  - [Arbitrum](https://arbiscan.io/address/0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0#code)
  - [Avalanche](https://snowtrace.io/address/0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0#code)
  - [Fantom](https://ftmscan.com/address/0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0#code)
- EModeLogic:
  - [Mainnet](https://etherscan.io/address/0xeAbd65827E91Ac3aE5471C11A329fbc675cA46d6#code)
  - [Polygon](https://polygonscan.com/address/0xeAbd65827E91Ac3aE5471C11A329fbc675cA46d6#code)
  - [Arbitrum](https://arbiscan.io/address/0xeAbd65827E91Ac3aE5471C11A329fbc675cA46d6#code)
  - [Optimism](https://optimistic.etherscan.io/address/0xeAbd65827E91Ac3aE5471C11A329fbc675cA46d6#code)
  - [Avalanche](https://snowtrace.io/address/0xeAbd65827E91Ac3aE5471C11A329fbc675cA46d6#code)
  - [Fantom](https://ftmscan.com/address/0xeAbd65827E91Ac3aE5471C11A329fbc675cA46d6#code)
- FlashLoanLogic:
  - [Mainnet](https://etherscan.io/address/0x0A62276bFBF1Ad8443f37Da8630d407408085c8b#code)
  - [Polygon](https://polygonscan.com/address/0x0A62276bFBF1Ad8443f37Da8630d407408085c8b#code)
  - [Arbitrum](https://arbiscan.io/address/0x0A62276bFBF1Ad8443f37Da8630d407408085c8b#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x0A62276bFBF1Ad8443f37Da8630d407408085c8b#code)
  - [Avalanche](https://snowtrace.io/address/0x0A62276bFBF1Ad8443f37Da8630d407408085c8b#code)
  - [Fantom](https://ftmscan.com/address/0x0A62276bFBF1Ad8443f37Da8630d407408085c8b#code)
- LiquidationLogic:
  - [Mainnet](https://etherscan.io/address/0xe175De51F29d822b86e46A9A61246Ec90631210D#code)
  - [Polygon](https://polygonscan.com/address/0xe175De51F29d822b86e46A9A61246Ec90631210D#code)
  - [Arbitrum](https://arbiscan.io/address/0xe175De51F29d822b86e46A9A61246Ec90631210D#code)
  - [Optimism](https://optimistic.etherscan.io/address/0xe175De51F29d822b86e46A9A61246Ec90631210D#code)
  - [Avalanche](https://snowtrace.io/address/0xe175De51F29d822b86e46A9A61246Ec90631210D#code)
  - [Fantom](https://ftmscan.com/address/0xe175De51F29d822b86e46A9A61246Ec90631210D#code)
- PoolLogic:
  - [Mainnet](https://etherscan.io/address/0xD5256981e08492AFc543aF2a779Af989E9f9F7e7#code)
  - [Polygon](https://polygonscan.com/address/0xD5256981e08492AFc543aF2a779Af989E9f9F7e7#code)
  - [Arbitrum](https://arbiscan.io/address/0xD5256981e08492AFc543aF2a779Af989E9f9F7e7#code)
  - [Optimism](https://optimistic.etherscan.io/address/0xD5256981e08492AFc543aF2a779Af989E9f9F7e7#code)
  - [Avalanche](https://snowtrace.io/address/0xD5256981e08492AFc543aF2a779Af989E9f9F7e7#code)
  - [Fantom](https://ftmscan.com/address/0xD5256981e08492AFc543aF2a779Af989E9f9F7e7#code)
- SupplyLogic:
  - [Mainnet](https://etherscan.io/address/0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128#code)
  - [Polygon](https://polygonscan.com/address/0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128#code)
  - [Arbitrum](https://arbiscan.io/address/0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128#code)
  - [Avalanche](https://snowtrace.io/address/0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128#code)
  - [Fantom](https://ftmscan.com/address/0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128#code)
- PoolImpl:
  - [Mainnet](https://etherscan.io/address/0xF1Cd4193bbc1aD4a23E833170f49d60f3D35a621#code)
  - [Polygon](https://polygonscan.com/address/0xb77fc84a549ecc0b410d6fa15159c2df207545a3#code)
  - [Arbitrum](https://arbiscan.io/address/0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x764594f8e9757ede877b75716f8077162b251460#code)
  - [Avalanche](https://snowtrace.io/address/0xcf85ff1c37c594a10195f7a9ab85cbb0a03f69de#code)
  - [Fantom](https://ftmscan.com/address/0x84B08568906ee891de1c23175E5B92d7Df7DDCc4#code)
- PoolConfiguratorImpl:
  - [Polygon](https://polygonscan.com/address/0xadf86b537ef08591c2777e144322e8b0ca7e82a7#code)
  - [Arbitrum](https://arbiscan.io/address/0x04a8d477ee202adce1682f5902e1160455205b12#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x29081f7ab5a644716efcdc10d5c926c5fee9f72b#code)
  - [Avalanche](https://snowtrace.io/address/0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93#code)
  - [Fantom](https://ftmscan.com/address/0x7CB7fdeEB5E71f322F8E39Be67959C32a6A3aAA3#code)
- ATokenImpl:
  - [Polygon](https://polygonscan.com/address/0xcf85ff1c37c594a10195f7a9ab85cbb0a03f69de#code)
  - [Arbitrum](https://arbiscan.io/address/0x1be1798b70aee431c2986f7ff48d9d1fa350786a#code)
  - [Optimism](https://optimistic.etherscan.io/address/0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b#code)
  - [Avalanche](https://snowtrace.io/address/0x1E81af09001aD208BDa68FF022544dB2102A752d#code)
  - [Fantom](https://ftmscan.com/address/0x8f30ADaA6950b31f675bF8a709Bc23F55aa24735#code)
- STokenImpl:
  - [Polygon](https://polygonscan.com/address/0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30#code)
  - [Arbitrum](https://arbiscan.io/address/0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x6b4e260b765b3ca1514e618c0215a6b7839ff93e#code)
  - [Avalanche](https://snowtrace.io/address/0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9#code)
  - [Fantom](https://ftmscan.com/address/0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B#code)
- VTokenImpl:
  - [Polygon](https://polygonscan.com/address/0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93#code)
  - [Arbitrum](https://arbiscan.io/address/0x5e76e98e0963ecdc6a065d1435f84065b7523f39#code)
  - [Optimism](https://optimistic.etherscan.io/address/0x04a8d477ee202adce1682f5902e1160455205b12#code)
  - [Avalanche](https://snowtrace.io/address/0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24#code)
  - [Fantom](https://ftmscan.com/address/0x61637B1EF7e9A102e50B661D3d7dbe19ef93347e#code)
- AaveProtocolDataProvider:
  - [Polygon](https://polygonscan.com/address/0x9441b65ee553f70df9c77d45d3283b6bc24f222d#code)
  - [Arbitrum](https://arbiscan.io/address/0x6b4e260b765b3ca1514e618c0215a6b7839ff93e#code)
  - [Optimism](https://optimistic.etherscan.io/address/0xd9ca4878dd38b021583c1b669905592eae76e044#code)
  - [Avalanche](https://snowtrace.io/address/0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30#code)
  - [Fantom](https://ftmscan.com/address/0x764594F8e9757edE877B75716f8077162B251460#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
