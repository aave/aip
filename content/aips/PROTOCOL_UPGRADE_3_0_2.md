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
If this proposal succeeds, it will also authorize the upgrade of the V3 pools on Avalanche, Fantom, and Harmony via a delegatecall by the Aave Guardian.

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
- [Payload:Harmony](https://explorer.harmony.one/address/0x90127a46207e97e4205db5ccc1ec9d6d43633fd4)
- [Test suite](https://github.com/bgd-labs/proposal-3.0.1-upgrade/blob/main/tests/V301UpgradePayloadTest.t.sol)
- [Update diffs](https://github.com/bgd-labs/proposal-3.0.1-upgrade/tree/main/diffs)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
