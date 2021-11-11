---
title: Add Fireblocks as a whitelister on Aave Arc
status: Proposed
author: Idan Ofrat (@idan-fb)
shortDescription: Proposal to add Fireblocks LLC, a Fireblocks company, as a “whitelister” on the Aave Arc market.
discussions: https://governance.aave.com/t/add-fireblocks-as-a-whitelister-on-aave-arc/5753
created: 2021-10-02
---

## Simple Summary

Fireblocks asks the Aave Governance community to approve the appointment, adoption, and authorization of Fireblocks LLC, a Fireblocks company, as a “whitelister” on the Aave Arc market.

## Abstract

Aave Arc is a “permissioned” version of the software underlying V2 of the Aave protocol that employs an additional smart contract layer to only allow “whitelisted” or “permissioned” users to engage with the protocol.

Only regulated ntities that (a) employ KYC/KYB principles in accordance with FATF guidelines to identify and accept their clients; (b) have robust AML/CFT compliance programs; and (c) are currently in good standing with an active license/registration in the entity’s operating jurisdiction will be accepted as “whitelisters” on Aave Arc.

We believe that Fireblocks LLC, a Fireblocks company, satisfies all the qualification requirements to be a whitelister. We have performed a detailed analysis and documented it [here](https://governance.aave.com/t/add-fireblocks-as-a-whitelister-on-aave-arc/5753) for the consideration of the Aave Governance community.

## Motivation

DeFi is considered by institutional users to be one of the more complex markets to navigate across security, compliance, and risk perspectives. We are eager to be at the forefront of this transformational opportunity with Aave Arc by extending access to even our most compliance-conscious customers, who have been searching to engage with DeFi in a way that comports with their own internal requirements.

Approval of Fireblocks LLC can potentially also facilitate the integration of other “whitelisters” and institutions into instances of the Aave protocol. This may have multiple benefits, including the creation of sustainable governance practices for Aave Arc whitelisters and whitelister customers, as well as the enablement of benefits to the ecosystem, such as the onboarding of regulated fiat on/off ramps and protocol deployments connected to debit cards, high yield savings accounts and other innovative fintech products.

## Specification

“Whitelisting” is the gatekeeping function performed by whitelisters on users of Aave Arc. The term refers specifically to the process of:
1. Conducting KYC/KYB checks on the user;
2. Onboarding the user with appropriate disclosures, terms, and conditions;
3. Granting specific permissions (e.g., borrow, supply, liquidate) to the Ethereum wallet address(es) provided by the user.

In addition, Aave Arc whitelisters perform a similar role on Arc as guardians do on Aave V2. Specifically, whitelisters can use a multi-sig veto on governance proposals that add excessive compliance risk on the Aave Arc protocol. For example, existing whitelisters can veto the addition of a privacy coin if such a coin is impermissible in the relevant jurisdiction, or veto the addition of a whitelister that has a poor reputation for compliance.

The whitelisting is managed via a [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) contract, in which whitelisters are designated as Permission Admins.  Permission Admins are permitted to add or remove wallets grants to the Aave Arc market by calling `addPermissions()` and `removePermissions()` contract methods, respectively. 

## Rationale

The Aave community voted on the [Snapshot proposal](https://snapshot.org/#/aave.eth/proposal/QmYQEh4vstJADjSK2b8nyK1otFG6R4rh9VHszU5xUEw26S) with Yes 149.2k AAVE (98.33%) and No 2.54k AAVE (1.67%).

## Test Cases

Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation
### Proposal

Executes the proposal deployed at:

https://etherscan.io/address/0xbdcd4437f785f3e719703822a4e4a52bce738824#code

The proposal executes the following:
- Adds [Fireblocks](https://etherscan.io/address/0x686a12A79008246F4dF2f1Ea30d136BD6DE748B4) as Permission Admin by calling addPermissionAdmins` on the [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) contract.

`IPermissionManager(0xF4a1F5fEA79C3609514A417425971FadC10eCfBE).addPermissionAdmins([0x686a12A79008246F4dF2f1Ea30d136BD6DE748B4]);`

- Unpause the pool by calling setPoolPause on the [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) contract.

`ILendingPoolConfigurator(0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA).setPoolPause(false);`

### Aave Arc Timelock

Aave Arc Timelock gives a guardian address the opportunity to cancel an approved governance action prior to its execution.
The timelock implementation can be found [here](https://github.com/aave/arc-timelock).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).