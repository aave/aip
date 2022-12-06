---
title: Freeze Aave V1
author: BGD Labs (@bgdlabs)
shortDescription: Freeze all reserves on Aave v1 Ethereum and v1 Ethereum AMM
discussions: https://governance.aave.com/t/arc-strategy-on-sunsetting-of-aave-v1/9450
created: 2022-12-05
---

## Simple Summary

This proposal will perform the next step in sunsetting Aave v1 by freezing all reserves on the `Aave Ethereum v1` and `Aave Ethereum Amm V1` pool.

## Motivation

Aave V1 was deployed on the Ethereum network back in January 2020, being the first step of everything that would come afterward on the Aave ecosystem. Since then, countless developments happened in the community, amongst them, 2 more iterations of the protocol: Aave v2 and Aave v3.
After the deployment of Aave v2 Ethereum, almost 2 years ago (December 2020), the general approach of the community was to progressively sunset Aave v1, with steps like enabling a migration tool v1 → v2 and disabling stable borrowing on v1 (more information [here](https://governance.aave.com/t/aave-protocol-v1-v2-migration-tool-and-transition-plan/2053)).
Therefore the next step that was decided upon in this [snapshot vote](https://snapshot.org/#/aave.eth/proposal/0xe4d1c311dcd4a4e392e0333494d3aac8a2521071097e85eeedc34994fa6ed72e) is to freeze all the `v1` reserves.
With this change in place, users can still repay & withdraw, but no longer supply and borrow.

## Specification

The proposal fetches the `LendingPoolCore` and `LendingPoolConfigurator` from the respective [Aave ethereum](https://etherscan.io/address/0x24a42fD28C976A61Df5D00D0599C34c4f90748c8) and [Aave ethereum amm](https://etherscan.io/address/0x7fd53085B9A29D236235D6FC593b47C9C33429F1) LendingPoolAddressesProviders via `getLendingPoolCore()` & `getLendingPoolConfigurator()`.
As the next step it fetches all `reserves` via `lendingPoolCore.getReserves()` and freezes them one by one, by iterating though the list and calling `lendingPoolConfigurator.freezeReserve(reserve)`.

## References

- [Deployed implementation](https://etherscan.io/address/0x6f02253c80a041a773efa35c98d4bc14a0f6ef9e#code)
- [E2E test suite](https://github.com/bgd-labs/aave-proposal-freeze-v1/blob/master/tests/ProposalPayloadAaveFreezeV1.t.sol)
- [ProposalPayloadAaveFreezeV1](https://github.com/bgd-labs/aave-proposal-freeze-v1/blob/master/src/contracts/ProposalPayloadAaveFreezeV1.sol)
- [Original discussion](https://governance.aave.com/t/arc-strategy-on-sunsetting-of-aave-v1/9450)
- [Related discussion](https://governance.aave.com/t/arfc-aave-dao-policy-change-halt-listings-on-all-aave-v1-v2-non-permissioned-deployments/10831/6)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
