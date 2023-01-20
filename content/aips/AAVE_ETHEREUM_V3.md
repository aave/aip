---
title: Aave Ethereum V3
author: BGD Labs (@bgdlabs)
shortDescription: Listing WBTC, WETH, wstETH, USDC, DAI, LINK, AAVE and activating Ethereum V3 Pool
discussions: https://governance.aave.com/t/bgd-aave-v3-ethereum-new-deployment-vs-aave-v2-upgrade/9990/16
created: 2023-01-20
---

# Simple Summary

This governance proposal activates the Aave v3 Ethereum pool (3.0.1), by completing all the initial setup and listing WBTC, WETH, wstETH, USDC, DAI, LINK, and AAVE, already pre-approved by the community.

# Motivation

While AAVE V3 was deployed to various networks right after the release, the Ethereum pool was still running V2.
After careful consideration, the community [decided to deploy a fresh V3](https://snapshot.org/#/aave.eth/proposal/0x584eb4e0f79e1d9dcdd99b3a0c831bfc3c654af3f8f619d5f68eae23cd9cb149) instead of upgrading the V2 pool, for increased compatibility between the V3 pools and less general complexity.
The assets to be listed & respective configurations have been discussed in [the governance forum](https://governance.aave.com/t/arc-aave-v3-ethereum-deployment-assets-and-configurations/10238) and been decided in the following [snapshot](https://snapshot.org/#/aave.eth/proposal/0xc31254fac1369090cea7c0105cbc6381b72189c038391996f855708ff2e0c02e).

# Specification

This proposal's payload does the following:

1. activate the pool via `POOL_CONFIGURATOR.setPoolPause(false)`
2. create the eMode category via `POOL_CONFIGURATOR.setEModeCategory(1, 90_00, 93_00, 10_100, address(0), 'ETH correlated')`
3. Grant POOL_ADMIN permissions to the following contracts:
   - TBA
   - TBA
   - TBA

Each of these addresses follows the Steward pattern used in [v3-listing stewards](https://github.com/bgd-labs/aave-v3-listing-stewards/blob/feat/v3-ethereum-tests/src/contracts/common/StewardBase.sol#L8). Each Steward will handle the listing of one specific asset and then renounce to the granted POOL_ADMIN role. This process is needed as otherwise, the proposal's gas limit would be really gas-expensive.

## Configuration snapshot

### Reserve Configurations

| symbol | underlying                                 | aToken                                     | stableDebtToken                            | variableDebtToken                          | decimals | ltv  | liquidationThreshold | liquidationBonus | liquidationProtocolFee | reserveFactor | usageAsCollateralEnabled | borrowingEnabled | stableBorrowRateEnabled | supplyCap  | borrowCap  | debtCeiling | eModeCategory | interestRateStrategy                       | isActive | isFrozen | isSiloed | isBorrowableInIsolation | isFlashloanable |
| ------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | -------- | ---- | -------------------- | ---------------- | ---------------------- | ------------- | ------------------------ | ---------------- | ----------------------- | ---------- | ---------- | ----------- | ------------- | ------------------------------------------ | -------- | -------- | -------- | ----------------------- | --------------- |
| WBTC   | 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599 | 0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8 | 0x102633152313C81cD80419b6EcF66d14Ad68949A | 0xeA51d7853EEFb32b6ee06b1C12E6dcCA88Be0fFE | 8        | 7000 | 7500                 | 10625            | 1000                   | 2000          | true                     | true             | false                   | 43000      | 28000      | 0           | 0             | 0x24701A6368Ff6D2874d6b8cDadd461552B8A5283 | true     | false    | false    | false                   | true            |
| WETH   | 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 | 0x0B925eD163218f6662a35e0f0371Ac234f9E9371 | 0x39739943199c0fBFe9E5f1B5B160cd73a64CB85D | 0xC96113eED8cAB59cD8A66813bCB0cEb29F06D2e4 | 18       | 8000 | 8250                 | 10500            | 1000                   | 1500          | true                     | true             | false                   | 1800000    | 1400000    | 0           | 1             | 0x165e90Bd0a41d08fA1891CcDCEe315D7b83B3419 | true     | false    | false    | false                   | true            |
| wstETH | 0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0 | 0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8 | 0xA1773F1ccF6DB192Ad8FE826D15fe1d328B03284 | 0x40aAbEf1aa8f0eEc637E0E7d92fbfFB2F26A8b7B | 18       | 6850 | 7950                 | 10700            | 1000                   | 1500          | true                     | true             | false                   | 200000     | 3000       | 0           | 1             | 0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D | true     | false    | false    | false                   | true            |
| USDC   | 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 | 0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c | 0xB0fe3D292f4bd50De902Ba5bDF120Ad66E9d7a39 | 0x72E95b8931767C79bA4EeE721354d6E99a61D004 | 6        | 7400 | 7600                 | 10450            | 2000                   | 1000          | true                     | true             | false                   | 1760000000 | 1580000000 | 0           | 0             | 0xD6293edBB2E5E0687a79F01BEcd51A778d59D1c5 | true     | false    | false    | false                   | true            |
| DAI    | 0x6B175474E89094C44Da98b954EedeAC495271d0F | 0x018008bfb33d285247A21d44E50697654f754e63 | 0x413AdaC9E2Ef8683ADf5DDAEce8f19613d60D1bb | 0xcF8d0c70c850859266f5C338b38F9D663181C314 | 18       | 6400 | 7700                 | 10400            | 2000                   | 1000          | true                     | true             | false                   | 338000000  | 271000000  | 0           | 0             | 0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2 | true     | false    | false    | false                   | true            |
| LINK   | 0x514910771AF9Ca656af840dff83E8264EcF986CA | 0x5E8C8A7243651DB1384C0dDfDbE39761E8e7E51a | 0x63B1129ca97D2b9F97f45670787Ac12a9dF1110a | 0x4228F8895C7dDA20227F6a5c6751b8Ebf19a6ba8 | 18       | 5000 | 6500                 | 10750            | 1000                   | 2000          | true                     | true             | false                   | 24000000   | 13000000   | 0           | 0             | 0x24701A6368Ff6D2874d6b8cDadd461552B8A5283 | true     | false    | false    | false                   | true            |
| AAVE   | 0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9 | 0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9 | 0x268497bF083388B1504270d0E717222d3A87D6F2 | 0xBae535520Abd9f8C85E58929e0006A2c8B372F74 | 18       | 6000 | 7000                 | 10750            | 1000                   | 0             | true                     | false            | false                   | 1850000    | 0          | 0           | 0             | 0x24701A6368Ff6D2874d6b8cDadd461552B8A5283 | true     | false    | false    | false                   | false           |

### InterestRateStrategies

| strategy                                   | getBaseStableBorrowRate    | getStableRateSlope1        | getStableRateSlope2          | optimalStableToTotal        | maxStabletoTotalExcess      | getBaseVariableBorrowRate  | getVariableRateSlope1      | getVariableRateSlope2        | optimalUsageRatio           | maxExcessUsageRatio         |
| ------------------------------------------ | -------------------------- | -------------------------- | ---------------------------- | --------------------------- | --------------------------- | -------------------------- | -------------------------- | ---------------------------- | --------------------------- | --------------------------- |
| 0x24701A6368Ff6D2874d6b8cDadd461552B8A5283 | 90000000000000000000000000 | 70000000000000000000000000 | 3000000000000000000000000000 | 200000000000000000000000000 | 800000000000000000000000000 | 0                          | 70000000000000000000000000 | 3000000000000000000000000000 | 450000000000000000000000000 | 550000000000000000000000000 |
| 0x165e90Bd0a41d08fA1891CcDCEe315D7b83B3419 | 78000000000000000000000000 | 40000000000000000000000000 | 800000000000000000000000000  | 200000000000000000000000000 | 800000000000000000000000000 | 10000000000000000000000000 | 48000000000000000000000000 | 800000000000000000000000000  | 800000000000000000000000000 | 200000000000000000000000000 |
| 0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D | 75000000000000000000000000 | 40000000000000000000000000 | 800000000000000000000000000  | 200000000000000000000000000 | 800000000000000000000000000 | 2500000000000000000000000  | 45000000000000000000000000 | 800000000000000000000000000  | 450000000000000000000000000 | 550000000000000000000000000 |
| 0xD6293edBB2E5E0687a79F01BEcd51A778d59D1c5 | 50000000000000000000000000 | 5000000000000000000000000  | 600000000000000000000000000  | 200000000000000000000000000 | 800000000000000000000000000 | 0                          | 40000000000000000000000000 | 600000000000000000000000000  | 900000000000000000000000000 | 100000000000000000000000000 |
| 0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2 | 50000000000000000000000000 | 5000000000000000000000000  | 750000000000000000000000000  | 200000000000000000000000000 | 800000000000000000000000000 | 0                          | 40000000000000000000000000 | 750000000000000000000000000  | 800000000000000000000000000 | 200000000000000000000000000 |

### EMode categories

| id  | label          | ltv  | liquidationThreshold | liquidationBonus |
| --- | -------------- | ---- | -------------------- | ---------------- |
| 1   | ETH correlated | 9000 | 9300                 | 10100            |

## Security procedures

<!-- TODO: replace with repo link when pr is merged -->

The proposal execution is simulated [within the tests](https://github.com/bgd-labs/aave-v3-ethereum-proposal/blob/c2b41bad8c658fbcfcfc17eafa0adcfa9590ab2b/tests/AaveV3EthereumActivation.t.sol) and the resulting pool configuration is tested for correctness.

In addition this proposal has been tested one the [aave interface](https://github.com/aave/interface) using forks.

AaveCompanies have reviewed the proposal code.

## Deployed Contracts

- [GenericV3ListingEngine](https://etherscan.io/address/0xC51e6E38d406F98049622Ca54a6096a23826B426#code)

## References

- [Discussion: upgrade vs fresh deployment](https://governance.aave.com/t/bgd-aave-v3-ethereum-new-deployment-vs-aave-v2-upgrade/9990)
- [Discussion: asset listings & parameters](https://governance.aave.com/t/arc-aave-v3-ethereum-deployment-assets-and-configurations/10238)
- [Code: ListingEngine](https://github.com/bgd-labs/aave-helpers/tree/master/src/v3-listing-engine)
- [Code: Proposal](https://github.com/bgd-labs/aave-v3-ethereum-proposal)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
