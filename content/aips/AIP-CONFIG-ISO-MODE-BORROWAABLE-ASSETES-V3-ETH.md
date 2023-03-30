---
title: Configure Isolation Mode Borrowable Assets on V3 Ethereum
shortDescription: Configure Isolation Mode Borrowable Assets on V3 Ethereum
author: Chaos Labs (@ori-chaoslabs, @Maltmark)
discussions: https://governance.aave.com/t/arfc-configure-isolation-mode-borrowable-assets-v3-ethereum/12420/1
created: 2023-3-28
---

# Simple Summary

At the time of the launch of V3 Ethereum, no assets were configured as borrowable in Isolation Mode. In this proposal, Chaos Labs recommends enabling all stablecoins listed on V3 Ethereum as borrowable in isolation mode 3.

# Motivation

The motivation to list the stablecoins as borrowable assets in Isolation Mode is similar to previous deployments and is derived mainly from the low volatility of those assets. Given that Isolation Mode assets are susceptible to high volatility, we find it paramount to maintain the other side of the position stable in order to reduce liquidations and resulting bad debt.
The respective governance forum discussion is linked below:

- [[ARFC] - Configure Isolation Mode Borrowable Assets - V3 Ethereum](https://governance.aave.com/t/arfc-configure-isolation-mode-borrowable-assets-v3-ethereum/12420/1)

# Implementation

We recommend listing USDC, USDT, DAI, and LUSD as assets allowed for borrowing in Isolation Mode on Ethereum V3.

This proposal aims to implement a single AIP, which will simply call setBorrowableInIsolation() on the list of assets (USDC, DAI, USDT, LUSD) on the PoolConfigurator contract.

# References

- [Forum Post](https://governance.aave.com/t/arfc-configure-isolation-mode-borrowable-assets-v3-ethereum/12420/1)
- [Tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3ETHIsoMode_20230330/AaveV3ETHIsoMode_20230330_Test.t.sol)
- [Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3ETHIsoMode_20230330/AaveV3ETHIsoMode_20230330.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
