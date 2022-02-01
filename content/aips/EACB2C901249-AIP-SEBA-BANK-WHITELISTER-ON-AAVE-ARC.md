---
title: Add SEBA Bank as a whitelister on Aave Arc
status: WIP
author: Diego Garcia (@diego-g)
shortDescription: Proposal to add SEBA Bank, a licensed and supervised Swiss Bank, as a “whitelister” on the Aave Arc market.
discussions: https://governance.aave.com/t/arc-adding-seba-bank-as-a-whitelister-to-aave-arc/6661
created: 2022-01-31
---

## Simple Summary

SEBA Bank asks the Aave Governance community to approve the appointment, adoption, and authorization of SEBA Bank AG, a licensed and supervised Swiss Bank, as a “whitelister” on the Aave Arc market.

## Abstract

SEBA is a licensed and supervised Swiss Bank providing a seamless and secure bridge between digital and traditional assets. The interest of SEBA’s clients and prospects for crypto earning products has grown substantially overtime. The launch of Aave Arc with its permissioned layer represents a great opportunity for them to access DeFi yields while remaining compliant with their regulatory obligations. At SEBA, we believe that this will directly benefit the Aave community with institutional liquidities accelerating growth in TVL and in protocol revenues.

The Aave Governance reviews and approves Whitelisters that will conduct the requisite level of due diligence on Aave Arc participants. As a Swiss digital asset bank, we believe that SEBA is ideally positioned to provide those investors with the flexible and fully regulated platform that they need to bridge new liquidities in Aave Arc. We have performed a detailed analysis and documented it [here](https://governance.aave.com/t/arc-adding-seba-bank-as-a-whitelister-to-aave-arc/6661) for the consideration of the Aave Governance community.

## Motivation

With an increasing demand from institutional investors for accessing new opportunities in the DeFi space, SEBA has positioned DeFi at the heart of its strategy by developing a suite of products and services in relation with decentralized finance. Recently, SEBA has integrated several DeFi tokens into its proprietary institutional-grade cold storage custody solution, including AAVE.

Beyond innovation and transparency brought by permissionless DeFi, SEBA is a strong believer that Aave Arc represents a thoughtful response to a growing institutional demand, which is subject to anti-money laundering (AML) and combatting the financing of terrorism (CFT) regulations in various jurisdictions. In line with that vision and with innovation at the center of its values, SEBA believes it fulfills the key attributes to perform the role of Whitelister in Aave Arc.

## Specification

[Reference](https://github.com/aave/aip/blob/9da687033ae0536377b822c9196dd783be0e3e65/content/aips/4C7076AA6CC7-AIP-FIREBLOCKS-WHITELISTER-ON-AAVE-ARC.md#specification) to standard.

## Rationale

The Aave community voted on the [Snapshot proposal](https://snapshot.org/#/aave.eth/proposal/QmNfumVDA2GkmyA3xWC12HhDFGBUybSAHUpvygqkMnV34V) with Yes 324K AAVE (100%) and No 3.3 AAVE (0%).

## Implementation
### Proposal

An execution proposal was deployed at:

[https://etherscan.io/address/0x\_**\_SEBA_EXECUTION_PROPOSAL\_\_**#code](https://etherscan.io/address/____SEBA_EXECUTION_PROPOSAL____#code)

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
