---
title: Add SEBA Bank as a whitelister on Aave Arc
status: WIP
author: Diego Garcia [@diego-g](URL "https://github.com/diego-G")
reviewer: Jose Ramirez [@jozer-rami](URL "https://github.com/jozer-rami")
shortDescription: Proposal to add SEBA, a regulated Swiss Bank, as a “whitelister” on the Aave Arc market.
discussions: https://governance.aave.com/t/arc-adding-seba-bank-as-a-whitelister-to-aave-arc/6661
created: 2022-01-31
---

## Simple Summary

SEBA asks the Aave Governance community to approve the appointment, adoption, and authorization of SEBA Bank , a regulated Swiss Bank, as a “whitelister” on the Aave Arc market.

## Abstract


## Motivation


## Specification


## Rationale

The Aave community voted on the [Snapshot proposal](https://snapshot.org/#/aave.eth/proposal/QmNfumVDA2GkmyA3xWC12HhDFGBUybSAHUpvygqkMnV34V) with Yes 324K AAVE (100%) and No 3.3 AAVE (0%).

## Implementation
### Proposal

An execution proposal was deployed at:

[https://etherscan.io/address/0x____SEBA_EXECUTION_PROPOSAL____#code](https://etherscan.io/address/____SEBA_EXECUTION_PROPOSAL____#code)

The proposal includes the following:
- Add [SEBA](https://etherscan.io/address/0x____SEBA_ETH_ADDRESS____) as Permission Admin by calling _addPermissionAdmins_ on the [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) contract.

`IPermissionManager(0xF4a1F5fEA79C3609514A417425971FadC10eCfBE).addPermissionAdmins([0x____SEBA_ETH_ADDRESS____]);`

- Unpause the pool by calling _setPoolPause_ on the [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) contract.

`ILendingPoolConfigurator(0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA).setPoolPause(false);`

- Transfer the _EmergencyAdmin_ role of the system to [ArcTimelock's Veto DAO](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557).

`provider.setEmergencyAdmin(ARC_TIMELOCK_VETO_DAO_ADDRESS);`

- Transfer ownership of the system to [ARC Market Multisig](https://etherscan.io/address/0x23c155C1c1ecB18a86921Da29802292f1d282c68) temporarily until handed over to Aave Governance.

`provider.transferOwnership(ARC_MARKET_MULTISIG_ADDRESS);`

### Aave Arc Timelock

Aave Arc Timelock gives a guardian address the opportunity to cancel an approved governance action prior to its execution. The timelock implementation can be found [here](https://github.com/aave/arc-timelock).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
