---
title: Upgrade the safety module to v1.5 PART 2
discussions: https://governance.aave.com/t/bgd-aave-safety-module-v1-5/12148
shortDescription: Upgrades the stkABPT contract implementation.
author: BGD labs
---

# Summary

This AIP presents the community with the opportunity to upgrade the safety module to v1.5 which introduces:

- a new slashing mechanism
- new cooldown mechanism

The new version also adds some convenience features like permit support or the ability to claim and stake in a single transaction.

# Motivation

On September 2020, the Aave Safety Module was introduced into the ecosystem, to improve the protection of the liquidity protocol, adding an extra utility for the AAVE token: AAVE or AAVE/WETH BPT holders stake their assets to act as a defensive layer in front of any shortfall event.

Since then, apart from really minor upgrades, the contracts have remained the same and in parallel, the system has been adopted by other communities.

As part of our engagement with Aave, we identified that the Safety Module is a clear area of improvement in the ecosystem, from 2 different standpoints:

- Technical. Improving the basic existing mechanisms of the contracts, but without disrupting radically the current design of the SM.
- Conceptual. Making more efficient the SM dynamics (e.g. slashing, rewards distribution rules, etc), by modifying the whole design.

## New slashing mechanism

On the running SM v1, in order to slash, an ad-hoc governance proposal is required, involving important development overhead, which is not ideal.

The new SM v1.5 adds an enhanced mechanism to facilitate slashing of the underlying by tracking an exchange rate between the staked AAVE and the stkAAVE received by stakers. The mechanism is simple: when somebody stakes AAVE, they receive a certain amount of stkAAVE, which no longer is 1:1 equivalent, as it keeps track of slashing (meaning with the same stkAAVE, stakers are able to claim less AAVE).

## New cooldown mechanism

The current cooldown on SM v1 consists of a time delay of 10 days to be respected whenever anybody wants to redeem the staked AAVE. At the moment, this cooldown is affected by in/outflows of stkAAVE, both via transfer() and stake()/redeem(), in order to protect the system from being gamed. Even with this protection mechanism the mechanism is currently gamable, by staking aave within the active cooldown window to [extend the window](https://github.com/bgd-labs/aave-stk-v1-5/issues/6).

This mechanism is not really optimal and adds important complexity, so on v1.5 has been changed to the following: after activation of cooldown, a staker will be able to redeem the minimum balance he will hold between cooldown activation and redeem window. Apart from the user-level cooldown new mechanics, we also propose to increase the cooldown period from 10 days to 20 days.

## Misc

The upgrade also allowed us to add some smaller ux improvements:

- `preview*()` methods have been added to follow the `4626` standard more closely, even if there's no objective to be compliant

# Specification PART 2

The proposal is split in two parts, as currently the `stkAAVE` is controlled by the `LONG_EXECUTOR` where `stkABPT` is controlled by the `SHORT_EXECUTOR`. As there's a single executor per proposal `Part 1` upgrades the `stkAAVE` implementation and targets the `LONG_EXECUTOR`. `Part 2` upgrades the `stkABPT` implementation and targets the `SHORT_EXECUTOR`.

The proposal will:

- transfer ownership of `stkABPT` to a `ProxyAdmin` controlled by the `SHORT_EXECUTOR`.

```solidity
IInitializableAdminUpgradeabilityProxy(STK_ABPT).changeAdmin(
  address(AaveMisc.PROXY_ADMIN_ETHEREUM)
);
```

- deploy the new implementation while maintaining the current values:

```solidity
StakedAaveV3 newImpl =new StakedTokenV3(
  IERC20(ABPT),
  IERC20(AaveV2EthereumAssets.AAVE_UNDERLYING),
  GenericProposal.UNSTAKE_WINDOW,
  GenericProposal.REWARDS_VAULT,
  GenericProposal.EMISSION_MANAGER,
  GenericProposal.DISTRIBUTION_DURATION
);
```

- upgrade `stkABPT` implementation. The `SLASHING_ADMIN`, `COOLDOWN_ADMIN` and `CLAIM_HELPER` are all initialized as the `SHORT_EXECUTOR`. `MAX_SLASHING` is set to `30%`, `COOLDOWN_SECONDS` is increased to `20 days`:

```solidity
ProxyAdmin(AaveMisc.PROXY_ADMIN_ETHEREUM).upgradeAndCall(
  TransparentUpgradeableProxy(payable(STK_ABPT)),
  address(newImpl),
  abi.encodeWithSignature(
  'initialize(address,address,address,uint256,uint256)',
  GenericProposal.SLASHING_ADMIN,
  GenericProposal.COOLDOWN_ADMIN,
  GenericProposal.CLAIM_HELPER,
  GenericProposal.MAX_SLASHING,
  GenericProposal.COOLDOWN_SECONDS
  )
);
```

# References

A list of relevant links like for this proposal:

- [ProposalPayloads](https://github.com/bgd-labs/aave-stk-v1-5/blob/main/src/contracts/ProposalPayload.sol)
- [StakedTokenV3](https://github.com/bgd-labs/aave-stk-v1-5/blob/main/src/contracts/StakedTokenV3.sol)
- [StakedAaveV3](https://github.com/bgd-labs/aave-stk-v1-5/blob/main/src/contracts/StakedAaveV3.sol)
- [sigma prime audit](https://github.com/bgd-labs/aave-stk-v1-5/blob/main/audits/Sigma_Prime_Aave_Safety_Module_Security_Assessment_Report_v2.pdf)
- [Certora audit](https://github.com/bgd-labs/aave-stk-v1-5/blob/main/audits/Certora_FV_Report.pdf)
- [Certora specs](https://github.com/bgd-labs/aave-stk-v1-5/tree/main/certora/specs)
- [Test Cases](https://github.com/bgd-labs/aave-stk-v1-5/tree/main/tests)
- [Technical review by aave companies](https://governance.aave.com/t/technical-review-aave-safety-module-v1-5/12436)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
