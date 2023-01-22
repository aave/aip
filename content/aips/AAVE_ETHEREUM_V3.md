---
title: Aave Ethereum V3
author: BGD Labs (@bgdlabs)
shortDescription: Activation of Aave v3 Ethereum
discussions: https://governance.aave.com/t/bgd-aave-v3-ethereum-new-deployment-vs-aave-v2-upgrade/9990/16
created: 2023-01-20
---

# Simple Summary

This governance proposal activates the Aave V3 Ethereum pool (3.0.1), by completing all the initial setup and listing WBTC, WETH, wstETH, USDC, DAI, LINK, and AAVE, already pre-approved by the community.
All the Aave Ethereum V3 addresses can be found in the [aave-address-book](https://github.com/bgd-labs/aave-address-book/blob/main/src/AaveV3Ethereum.sol).

# Motivation

While AAVE V3 was deployed to various networks right after the release, the Ethereum pool was still running V2.
After careful consideration, the community [decided to deploy a fresh V3](https://snapshot.org/#/aave.eth/proposal/0x584eb4e0f79e1d9dcdd99b3a0c831bfc3c654af3f8f619d5f68eae23cd9cb149) instead of upgrading the V2 pool, for increased compatibility between the V3 pools and less general complexity.
The assets to be listed & respective configurations have been discussed in [the governance forum](https://governance.aave.com/t/arc-aave-v3-ethereum-deployment-assets-and-configurations/10238) and been decided in the following [snapshot](https://snapshot.org/#/aave.eth/proposal/0xc31254fac1369090cea7c0105cbc6381b72189c038391996f855708ff2e0c02e).

# Specification

This proposal's payload does the following:

1. Create the eMode category for eth correlated assets via `POOL_CONFIGURATOR.setEModeCategory(1, 90_00, 93_00, 10_100, address(0), 'ETH correlated')`
2. Swap of emergency admin to Aave Guardian via `ACL_MANAGER.removeEmergencyAdmin(AaveGovernanceV2.SHORT_EXECUTOR)` followed by `ACL_MANAGER.addEmergencyAdmin(GUARDIAN_ETHEREUM)`
3. grant `POOL_ADMIN` permissions to all the asset listing stewards created inside the `constructor()` via `ACL_MANAGER.addPoolAdmin(stewards[i])`

The Steward pattern is taken from [V3-listing stewards](https://github.com/bgd-labs/aave-v3-listing-stewards/blob/feat/v3-ethereum-tests/src/contracts/common/StewardBase.sol#L8). Each Steward will handle the listing of one specific asset and then renounce to the granted POOL_ADMIN role. This process is needed as otherwise, the proposal's gas limit would be really gas-expensive.

## Configuration snapshot

What you can see here is a formatted excerpt of the configuration snapshot with the relevant configurations after proposal execution.
You can find the full snapshot in the proposal [repository](https://github.com/bgd-labs/aave-v3-ethereum-proposal/blob/main/reports/0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2_post-stewards-aave-v3-ethereum.md).

### Reserve Configurations

| symbol                                                                                 |    ltv | liqThreshold | liqBonus | liqProtocolFee | reserveFactor | borrowingEnabled |          supplyCap |          borrowCap |  eModeCategory | isFlashloanable |
| -------------------------------------------------------------------------------------- | -----: | -----------: | -------: | -------------: | ------------: | ---------------: | -----------------: | -----------------: | -------------: | --------------- |
| [WBTC](https://etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599#code)   | 70.00% |       75.00% |    6.25% |            10% |           20% |             true |         43'000 BTC |         28'000 BTC |              - | true            |
| [WETH](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2#code)   | 80.00% |       82.50% |    5.00% |            10% |           15% |             true |     1'800'000 WETH |     1'400'000 WETH | ETH correlated | true            |
| [wstETH](https://etherscan.io/address/0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0#code) | 68.50% |       79.50% |    7.00% |            10% |           15% |             true |     200'000 wstETH |       3'000 wstETH | ETH correlated | true            |
| [USDC](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48#code)   | 74.00% |       76.00% |    4.50% |            20% |           10% |             true | 1'760'000'000 USDC | 1'580'000'000 USDC |              - | true            |
| [DAI](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F#code)    | 64.00% |       77.00% |    4.00% |            20% |           10% |             true |    338'000'000 DAI |    271'000'000 DAI |              - | true            |
| [LINK](https://etherscan.io/address/0x514910771AF9Ca656af840dff83E8264EcF986CA#code)   | 50.00% |       65.00% |    7.50% |            10% |           20% |             true |    24'000'000 LINK |    13'000'000 LINK |              - | true            |
| [AAVE](https://etherscan.io/address/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9#code)   | 60.00% |       70.00% |    7.50% |            10% |            0% |            false |     1'850'000 AAVE |                  - |              - | false           |

### InterestRateStrategies

| strategy                                                                                                                   | BaseVariableBorrowRate | VariableRateSlope1 | VariableRateSlope2 | optimalUsageRatio | maxExcessUsageRatio | assets           |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------: | -----------------: | -----------------: | ----------------: | ------------------: | ---------------- |
| [0x24701A6368Ff6D2874d6b8cDadd461552B8A5283](https://etherscan.io/address/0x24701A6368Ff6D2874d6b8cDadd461552B8A5283#code) |                     0% |              7.00% |            300.00% |            45.00% |              55.00% | WBTC, LINK, AAVE |
| [0x53F57eAAD604307889D87b747Fc67ea9DE430B01](https://etherscan.io/address/0x53F57eAAD604307889D87b747Fc67ea9DE430B01#code) |                  1.00% |              3.80% |             80.00% |            80.00% |              20.00% | WETH             |
| [0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D](https://etherscan.io/address/0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D#code) |                  0.25% |              4.50% |             80.00% |            45.00% |              55.00% | wstETH           |
| [0xD6293edBB2E5E0687a79F01BEcd51A778d59D1c5](https://etherscan.io/address/0xD6293edBB2E5E0687a79F01BEcd51A778d59D1c5#code) |                     0% |              4.00% |             60.00% |            90.00% |              10.00% | USDC             |
| [0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2](https://etherscan.io/address/0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2#code) |                     0% |              4.00% |             75.00% |            80.00% |              20.00% | DAI              |

### EMode categories

| label          |    ltv | liqThreshold | liqBonus |
| -------------- | -----: | -----------: | -------: |
| ETH correlated | 90.00% |       93.00% |    1.00% |

## Security procedures

The proposal execution is simulated [within the tests](https://github.com/bgd-labs/aave-v3-ethereum-proposal/blob/main/tests/AaveV3EthereumActivation.t.sol) and the resulting pool configuration is tested for correctness.

In addition this proposal has been tested one the [aave interface](https://github.com/aave/interface) using forks.

Aave Companies have reviewed the proposal code.

## Deployed Contracts

- [GenericV3ListingEngine](https://etherscan.io/address/0xC51e6E38d406F98049622Ca54a6096a23826B426#code)
- [ProposalPayload](https://etherscan.io/address/0xc5a0ba13a3749c5d4a21934df8fd64821ac3fce7#code)

## References

- [Discussion: upgrade vs fresh deployment](https://governance.aave.com/t/bgd-aave-v3-ethereum-new-deployment-vs-aave-v2-upgrade/9990)
- [Discussion: asset listings & parameters](https://governance.aave.com/t/arc-aave-v3-ethereum-deployment-assets-and-configurations/10238)
- [Code: ListingEngine](https://github.com/bgd-labs/aave-helpers/tree/master/src/v3-listing-engine)
- [Code: ProposalPayload](https://github.com/bgd-labs/aave-v3-ethereum-proposal)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
