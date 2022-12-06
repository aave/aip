---
title: Rewards controller update across V3 pools
author: BGD Labs (@bgdlabs)
shortDescription: Updates rewards controllers on all v3 deployments
discussions: https://governance.aave.com/t/bgd-upgrade-of-aave-v3-periphery-to-3-0-1-across-networks/10744/6
created: 2022-12-06
---

## Simple Summary

This proposal updates the rewardsController to it's newest version improving the DX by adding new getters and resolving some minor issues:

1. soften solidity versions to `^0.8.0` [here](https://github.com/aave/aave-v3-periphery/pull/102)
2. adding a getter to fetch the current index [here](https://github.com/aave/aave-v3-periphery/pull/101)
3. replacing totalSupply with totalScaledSupply on `setEmissionPerSecond` [here](https://github.com/aave/aave-v3-periphery/pull/104)
4. pumping revision from `1` to `2` [here](https://github.com/aave/aave-v3-periphery/pull/107)
5. fixing `getUserReward` to return correct rewards for users with 0 balance [here](https://github.com/aave/aave-v3-periphery/pull/112)
6. remove unnecessary `constructor` that sets state on a contract always used behind a proxy [here](https://github.com/aave/aave-v3-periphery/pull/118)
7. consistently uppercase license pragma `agpl`->`AGPL` [here](https://github.com/aave/aave-v3-periphery/pull/120)
8. improving documentation on various structs [here](https://github.com/aave/aave-v3-periphery/pull/121)
9. removing constructor of RewardsDistributor and RewardsController [here](https://github.com/aave/aave-v3-periphery/pull/118/files)

## Motivation

The Aave v3 codebase is divided into 2 different parts, Aave v3 core, and Aave v3 periphery. While usually the concept of “protocol” is more related to the Aave v3 core, there are some complementary components of Aave v3 living on the periphery codebase, for example, the system managing external teams configuring rewards for Aave v3 activity (e.g. supply/borrow assets).

Similar to the majority of other Aave smart contracts, the ones on the periphery are upgradeable and controlled by the Aave governance, which means they are designed to be improved over time.

Given that the community has approved a new Aave v3 Ethereum, we have used the occasion to introduce light improvement/fixes on the periphery smart contracts and now will submit the upgrade to be approved via governance and it only makes sense to apply them to already existing v3 pools.

## Specification

This proposal executes `PoolAddressesProvider.setAddressAsProxy(keccak256("INCENTIVES_CONTROLLER"), rewardsControllerImpl)` on `Polygon V3 pool`.

If this proposal succeeds, this will be seen as positive signaling to upgrade implementations on networks controlled by guardians as well.

The `RewardsController` contracts are deployed and initialized already:

- [Polygon:RewardsController](https://polygonscan.com/address/0x723a9d120ed2cd90ac550d779375f6178bfd86e3#code)
- [Polygon:UpgradeRewardsControllerPayload](https://polygonscan.com/address/0x6f02253c80A041a773efa35c98D4bc14A0f6EF9e)
- [Avalanche:RewardsController](https://snowtrace.io/address/0x723A9d120Ed2CD90AC550d779375F6178BFD86E3#code)
- [Optimism:RewardsController](https://optimistic.etherscan.io/address/0x723A9d120Ed2CD90AC550d779375F6178BFD86E3#code)
- [Arbitrum:RewardsController](https://arbiscan.io/address/0x723a9d120ed2cd90ac550d779375f6178bfd86e3#code)
- [Fantom:RewardsController](https://ftmscan.com/address/0x723a9d120ed2cd90ac550d779375f6178bfd86e3#code)
- [Harmony:RewardsController](https://explorer.harmony.one/address/0x5f5c02875a8e9b5a26fbd09040abcfdeb2aa6711?activeTab=7) (note: harmony has a different address as it not supported on the `create2` factory that we rely on as it's enforcing EIP-155, also verification does not work)

For guardian controlled pools the transactions are executed via gnosis, so instead of deploying a payload the guardians will just sign the `setAddressAsProxy(keccak256("INCENTIVES_CONTROLLER"), rewardsControllerImpl)` transactions.

The calldata for all pools except harmony:

- `0x5dcc528c000000000000000000000000723a9d120ed2cd90ac550d779375f6178bfd86e3`

The calldata for harmony:

- `0x5dcc528c0000000000000000000000005f5c02875a8e9b5a26fbd09040abcfdeb2aa6711`

## References

- [Deployed Polygon payload](https://polygonscan.com/address/0x6f02253c80A041a773efa35c98D4bc14A0f6EF9e)
- [Test suite](https://github.com/bgd-labs/rewards-controller-update/tree/main/tests)
- [UpgradeRewardsControllerPayload](https://github.com/bgd-labs/rewards-controller-update/blob/main/src/contracts/UpgradeRewardsControllerPayload.sol)
- [Original discussion](https://governance.aave.com/t/bgd-upgrade-of-aave-v3-periphery-to-3-0-1-across-networks/10744)
- [Updated RewardsController contract](https://github.com/aave/aave-v3-periphery/blob/master/contracts/rewards/RewardsController.sol)
- [Update diffs](https://github.com/bgd-labs/rewards-controller-update/tree/main/diffs)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
