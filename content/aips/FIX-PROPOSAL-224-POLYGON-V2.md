---
title: Fix rate strategies issue on Aave v2 Polygon
author: BGD Labs (@bgdlabs)
shortDescription: Applies correct interest rate strategies to fix the issue caused by 224 proposal
discussions: https://governance.aave.com/t/arfc-aave-v2-interest-rate-curve-recommendations-from-gauntlet-2023-04-21/12846/11
created: 2023-05-19
---

## Simple Summary

This proposal fixes an issue created by proposal 224 on WETH, WTBC, USDT and WMATIC of Aave v2 Polygon, by connecting new rate strategy contracts with exactly the same approved parameters on 224, but this time fully compatible with v2 Polygon.

## Motivation

Proposal 224 updated the interest rate strategies of different assets on Aave v2 Ethereum and Polygon. Even if this worked perfectly fine on Ethereum, due to legacy reasons, Aave v2 Polygon requires slightly different interface on the rates strategy contracts, for them to be compatible with the LendingPool.
The new rate strategies connected on proposal 224 for WETH, WMATIC, WBTC and USDT lacked this compatibility, which doesn't allow for user actions to be performed, when involving those assets.
Even if not putting any funds at risk, this is a problem for users and integrators of Aave v2 Polygon, so this new proposal applies a patch.

## Specification

This is a cross-chain governance proposal, targeting Aave v2 Polygon.

Upon execution, the proposal will:

- call `POOL_CONFIGURATOR.setReserveInterestRateStrategyAddress(ASSET)` for each of the assets WETH, WBTC, WMATIC and USDT, on Aave v2 Polygon

## Security and additional considerations

The following verification/test have been made on this proposal:

- Diff reports on configuration parameters of all Aave v2 Polygon listed assets: everything should be exactly the same as before, as parameters don't change; only the Solidity code of the interest rate strategies.

- Diff reports on the Solidity code of the new interest rate strategies, to check that compared with the current interest rate strategies of the affected assets (wrong), the new ones have an extra function, which is the required by the LendingPool:

```
function calculateInterestRates(
    address reserve,
    address aToken,
    uint256 liquidityAdded,
    uint256 liquidityTaken,
    uint256 totalStableDebt,
    uint256 totalVariableDebt,
    uint256 averageStableBorrowRate,
    uint256 reserveFactor
  ) external view override returns (uint256, uint256, uint256)
```

- Post-execution actions tests, more specifically supplying liquidity on WETH, WBTC, WMATIC and USDT. The revert() caused by proposal 224 boils down to `ReserveLogic.updateInterestRates()`, function used on all pool actions to retrieve the current rate from the rate strategy. `deposit()` working implies the logic of calling the new rate strategy works for all actions.

## References

**Proposal 224 creating the problem**

[https://app.aave.com/governance/proposal/224/](https://app.aave.com/governance/proposal/224/)

**Disclosure of the issue**

[https://governance.aave.com/t/arfc-aave-v2-interest-rate-curve-recommendations-from-gauntlet-2023-04-21/12846/11](https://governance.aave.com/t/arfc-aave-v2-interest-rate-curve-recommendations-from-gauntlet-2023-04-21/12846/11)

**Tests**

[https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2PolygonIR_20230519/AaveV2PolygonIR_20230519.t.sol](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2PolygonIR_20230519/AaveV2PolygonIR_20230519.t.sol)

**Diffs**

[https://github.com/bgd-labs/aave-proposals/tree/main/src/AaveV2PolygonIR_20230519/current-new.md](https://github.com/bgd-labs/aave-proposals/tree/main/src/AaveV2PolygonIR_20230519/current-new.md)


**Proposal payload (Polygon)**

[https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2PolygonIR_20230519/AaveV2PolygonIR_20230519.sol](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV2PolygonIR_20230519/AaveV2PolygonIR_20230519.sol)

[Payload: 0x7e1f23bdFc7287AF276F77B5A867e85cf0377a31](https://polygonscan.com/address/0x7e1f23bdFc7287AF276F77B5A867e85cf0377a31#code)


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
