---
title: Aave Metis V3
shortDescription: Activation of Aave v3 Metis.
discussions: https://governance.aave.com/t/launch-aave-v3-on-metis/7056
created: 2023-5-27
author: BGD Labs (@bgdlabs)
---

# Summary

This proposal allows the Aave governance to activate the Aave V3 Metis pool (3.0.2) by completing all the initial setup and listing WETH, USDC, USDT, DAI, and METIS as suggested by the risk service providers (Gauntlet and Chaos Labs) on the [governance forum](https://governance.aave.com/t/launch-aave-v3-on-metis/7056/78).
All the Aave Metis V3 addresses can be found in the [aave-address-book](https://github.com/bgd-labs/aave-address-book/blob/main/src/AaveV3Metis.sol).

# Motivation

All the governance procedures for the expansion of Aave v3 to Metis have been finished, said:

- Positive signaling and approval regarding the expansion on the [governance forum](https://governance.aave.com/t/launch-aave-v3-on-metis/7056), [temp check snapshot](https://snapshot.org/#/aave.eth/proposal/0xaba8da3287788ee77013aa6b0584694807dc15304ab5c283fe1fc728bf1d5864), and [final snapshot](https://snapshot.org/#/aave.eth/proposal/0x7e6175c21342dbd88dc5b0dabf2d0a86339e3ef3f199fc7d778a9a6f05ed0df9).
- Positive technical evaluation done by BGD Labs of the Metis network, as described in the [forum](https://governance.aave.com/t/bgd-aave-metis-infrastructure-technical-evaluation/11374) in detail.
- Positive risk analysis and assets/parameters recommendation by the risk providers Chaos Labs and Gauntlet, as commented on the [forum](https://governance.aave.com/t/launch-aave-v3-on-metis/7056/78).

# Specification

This proposal's payload does the following: grants `POOL_ADMIN` permissions to all the asset listing Stewards created inside the `constructor()` of the payload via `ACL_MANAGER.addPoolAdmin(stewards[i])`

The Steward pattern is taken from [V3-listing stewards](https://github.com/bgd-labs/aave-v3-listing-stewards/blob/feat/v3-ethereum-tests/src/contracts/common/StewardBase.sol#L8), already used for the activation of Aave V3 Ethereum. Each Steward will handle the listing of one specific asset and then renounce to the granted `POOL_ADMIN` role. This process is needed as otherwise, the proposal's gas limit would be really high.

The pool activation will be done via the cross-chain governance with the help of cross-chain forwarder on Ethereum, which on a successful vote by the community, will trigger queuing of the payload action on Metis, which later could be executed by anyone.

## Configuration snapshot

What you can see here is a formatted excerpt of the configuration snapshot with the relevant configurations after proposal execution. Although stable borrowing is disabled for all the respective assets, interest rate parameters for stable borrowing have been configured according to the values set in [Aave V3 Ethereum](https://github.com/bgd-labs/aave-v3-ethereum-proposal/blob/main/src/contracts/AaveV3EthereumRateStrategiesDefinition.sol). You can find the complete snapshot in the proposal [repository](https://github.com/bgd-labs/aave-v3-metis-proposal/blob/main/reports/post-stewards-aave-v3-metis.json).

### Reserve Configurations

| symbol | ltv | liqThreshold | liqBonus | liqProtocolFee | reserveFactor | borrowingEnabled | collateralEnabled | stableBorrowing | borrowableInIsolation | supplyCap | borrowCap | isFlashloanable |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [WETH](https://andromeda-explorer.metis.io/address/0x420000000000000000000000000000000000000A) | 80.00% | 82.50% | 7.50% | 10% | 15% | true | true | false | false | 50 WETH | 30 WETH | true |
| [USDC](https://andromeda-explorer.metis.io/address/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21) | 80.00% | 85.00% | 5.00% | 10% | 10% | true | true | false | true | 1'200'000 USDC | 1'200'000 USDC | true |
| [DAI](https://andromeda-explorer.metis.io/address/0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0) | 75.00% | 80.00% | 5.00% | 10% | 10% | true | true | false | false | 950'000 DAI | 950'000 DAI | true |
| [USDT](https://andromeda-explorer.metis.io/address/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC) | 75.00% | 80.00% | 5.00% | 10% | 10% | true | true | false | true | 1'400'000 USDT | 1'400'000 USDT | true |
| [METIS](https://andromeda-explorer.metis.io/address/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000) | N/A | N/A | N/A | N/A | 15% | true | false | false | false | 7'500 METIS | 4'000 METIS | true |

### InterestRateStrategies

| assets | baseVariableBorrowRate | variableRateSlope1 | variableRateSlope2 | optimalUsageRatio |
| --- | --- | --- | --- | --- |
| WETH | 1% | 3.80% | 80.00% | 80.00% |
| USDC | 0% | 4.00% | 60.00% | 90.00% |
| DAI | 0% | 7.00% | 75.00% | 80.00% |
| USDT | 0% | 4.00% | 75.00% | 80.00% |
| METIS | 0% | 7.00% | 300.00% | 45.00% |

## Security procedures

The proposal execution is simulated [within the tests](https://github.com/bgd-labs/aave-v3-metis-proposal/blob/main/tests/AaveV3MetisPool.t.sol) and the resulting pool configuration is tested for correctness.

The deployed pool and other permissions have been programmatically verified.

In addition, we have also checked the code diffs of the deployed metis contracts with the deployed contracts on Ethereum and other networks.

As a matter of caution, the `POOL_ADMIN` role will be given for the first weeks to the Aave Guardian multisig.

## Deployed Contracts

- [ProposalPayload](https://andromeda-explorer.metis.io/address/0xF7780A54Ee6f99EE9C028ae552149CFbDDbaDfc4)

## References

- [Discussion: asset listings & parameters](https://governance.aave.com/t/launch-aave-v3-on-metis/7056/77)
- [Code: ProposalPayloadActivation](https://github.com/bgd-labs/aave-v3-metis-proposal/)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).