---
title: Caps Plus Risk Steward
author: BGD Labs (@bgdlabs)
shortDescription: Grant RISK_ADMIN roles to the CapsPlusRiskStewards on the respective networks
discussions: https://governance.aave.com/t/bgd-risk-steward-phase-1-capsplusrisksteward/12602
created: 2023-05-23
---

## Simple Summary

This governance proposal grants the `RISK_ADMIN` role to a `CapsPlusRiskStewards` smart contract on each network with an active instance of Aave v3.
Once the `CapsPlusRiskStewards` has received the `RISK_ADMIN` role, the `RISK_COUNCIL` can adjust asset borrow/supply caps upwards without voting overhead. The `RISK_COUNCIL` is a Gnosis Safe controlled by the DAOs risk-providers (Gauntlet, Chaos Labs).

## Motivation

During the last months, for the broad majority of proposals regarding caps updates, the support of the community has been almost unanimous, with 1 or 2 exceptions.
The rationale of this is pretty clear: caps updates usually simply depend on the “green light” from the risk providers (Gauntlet, Chaos Labs)
As both providers have historically been in agreement with the updates proposed, the community has just followed that recommendation by supporting on-chain.

Therefore, it seems that the community has important voting overhead in this scenario, which could be almost completely automated and simplified. It is quite common to have a proposal with unanimous support on day 1 of voting but given all other time considerations, execution is 3 to 5 days after.

This proposal gives the necessary `RISK_ADMIN` role to the `CapsPlusRiskSteward` introduced in this [governance forum thread](https://governance.aave.com/t/bgd-risk-steward-phase-1-capsplusrisksteward/12602).
After execution, the `RISK_COUNCIL` will be able to perform cap increases through the `CapsPlusRiskStewards` under the following conditions for each asset listed:

- the cap can only be adjusted upwards
- the cap can never be increased by more than 100%
- the cap can only be adjusted once every 5 days

## Specification

This proposal's payload executes `ACL_MANAGER.addRiskAdmin(STEWARD)` where `STEWARD` is the `CapsPlusRiskStewards` pre-deployed on the respective network.

## Security procedures

The `CapsPlusRiskStewards` is [unit tested](https://github.com/bgd-labs/aave-helpers/blob/master/src/test/riskstewards/CapsPlusRiskSteward.t.sol).

The proposal execution is simulated [within the tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RiskSteward_20230404/AaveV3RiskSteward_20230404_Test.t.sol).

## Deployed Contracts

- CapsPlusRiskSteward:
  [arbitrum](https://arbiscan.io/address/0xADf86b537eF08591c2777E144322E8b0Ca7E82a7#code#F1#L1),
  [avalanche](https://snowtrace.io/address/0xd2c92b5a793e196ab11dbefbe3af6bdded6c3dd5#code#F1#L1),
  [mainnet](https://etherscan.io/address/0x82dcCF206Ae2Ab46E2099e663F70DeE77caE7778#code#F1#L1),
  [metis](https://andromeda-explorer.metis.io/address/0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731/contracts#address-tabs),
  [optimism](https://optimistic.etherscan.io/address/0x5E76E98E0963EcDC6A065d1435F84065b7523f39#code#F1#L1),
  [polygon](https://polygonscan.com/address/0xc5de989E0D1BF605d19478Fdd32Aa827a10b464f#code#F1#L1)
- Payloads:
  [arbitrum](https://arbiscan.io/address/0xe79ca44408dae5a57ea2a9594532f1e84d2edaa4#code#F1#L1),
  [avalanche](https://snowtrace.io/address/0x7e1f23bdfc7287af276f77b5a867e85cf0377a31#code#F1#L1),
  [mainnet](https://etherscan.io/address/https://etherscan.io/address/0x90127a46207e97e4205db5ccc1ec9d6d43633fd4#code#F1#L1),
  [metis](https://andromeda-explorer.metis.io/address/0xd91d1331db4F436DaF47Ec9Dd86deCb8EEF946B4/contracts#address-tabs),
  [optimism](https://optimistic.etherscan.io/address/0xA3e44d830440dF5098520F62Ebec285B1198c51E#code#F1#L1),
  [polygon](https://polygonscan.com/address/0x4C0633Bf70fB2bB984A9eEC5d9052BdEA451C70A#code#F1#L1)

## References

- [Snapshot](https://snapshot.org/#/aave.eth/proposal/0xc882bf5f0f0f801591bfd5f0273388ea154654220f472aa4a06fd1fe6b94bb53)
- [Discussion: CapsPlusRiskSteward](https://governance.aave.com/t/bgd-risk-steward-phase-1-capsplusrisksteward/12602/1)
- [Discussion: caps update framework](https://governance.aave.com/t/arfc-aave-v3-caps-update-framework/11937/4)
- [Discussion: fast track process](https://governance.aave.com/t/arc-v3-supply-borrow-cap-management-fast-track-process/8045)
- [Code: ProposalPayload](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RiskSteward_20230404/AaveV3RiskSteward_20230404.sol)
- [Code: Payload Tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3RiskSteward_20230404/AaveV3RiskSteward_20230404_Test.t.sol)
- [Code: CapsPlusRiskSteward](https://github.com/bgd-labs/aave-helpers/blob/master/src/riskstewards/CapsPlusRiskSteward.sol)
- [Code: CapsPlusRiskSteward Tests](https://github.com/bgd-labs/aave-helpers/blob/master/src/test/riskstewards/CapsPlusRiskSteward.t.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
