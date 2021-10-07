---
title: Add Fireblocks as a whitelister on Aave Arc
status: WIP
author: Idan Ofrat (@idan-fb)
shortDescription: Proposal to add Fireblocks LLC, a Fireblocks company, as a “whitelister” for one or more deployments of Aave Arc.
discussions: https://governance.aave.com/t/add-fireblocks-as-a-whitelister-on-aave-arc/5753
created: 2021-10-02
---

## Simple Summary

Fireblocks asks the Aave Governance community to approve the appointment, adoption, and authorization of Fireblocks LLC, a Fireblocks company, as a “whitelister” for one or more deployments of Aave Arc.

## Abstract

Aave Arc is a “permissioned” version of the software underlying V2 of the Aave protocol that employs an additional smart contract layer to only allow “whitelisted” or “permissioned” users to engage with the protocol.

Each Aave Arc deployment will launch with one or more “whitelisters". Only regulated entities that (a) employ KYC/KYB principles in accordance with FATF guidelines to identify and accept their clients; (b) have robust AML/CFT compliance programs; and (c) are currently in good standing with an active license/registration in the entity’s operating jurisdiction will be accepted as “whitelisters” on deployments of the Aave Arc.

We believe that Fireblocks LLC, a Fireblocks company, satisfies all the qualification requirements to be a whitelister. We have performed a detailed analysis and documented it [here](https://governance.aave.com/t/add-fireblocks-as-a-whitelister-on-aave-arc/5753) for the consideration of the Aave Governance community.

## Motivation

DeFi is considered by institutional users to be one of the more complex markets to navigate across security, compliance, and risk perspectives. We are eager to be at the forefront of this transformational opportunity with Aave Arc by extending access to even our most compliance-conscious customers, who would otherwise avoid DeFi over compliance or regulatory concerns.

Approval of Fireblocks LLC can potentially also facilitate the integration of other “whitelisters” and institutions into instances of the Aave protocol. This may have multiple benefits, including the creation of sustainable governance practices for Aave Arc whitelisters and whitelister customers, as well as the enablement of benefits to the ecosystem, such as the onboarding of regulated fiat on/off ramps and protocol deployments connected to debit cards, high yield savings accounts and other innovative fintech products.

## Specification

### Whitelisting and the Permissined Manager contract
“Whitelisting” is the gatekeeping function performed by whitelisters on users of Aave Arc. The term refers specifically to the process of:
1. Conducting KYC/KYB checks on the user;
2. Onboarding the user with appropriate disclosures, terms, and conditions; and, Granting specific permissions (e.g., borrow, supply, liquidate) to the Ethereum wallet address(es) provided by the user.

Aave Arc whitelisters are granted “guardian” status like the Aave protocol V2 guardian role with the ability to collectively, make and enforce decisions around gatekeeping parameters.

The whitelisting is managed via a Permission Manager contract (TBD: Etherscan link, once deployed), in which whitelisters are designated as Permission Admins.  Permission Admins are permitted to add or remove wallets grants to the Aave Arc market by calling `addPermissions()` and `removePermissions()` contract methods, respectively. 

#### The proposal payload
TBD. Still under development.

## Rationale

The Aave community voted on the [Snapshot proposal](https://snapshot.org/#/aave.eth/proposal/QmYQEh4vstJADjSK2b8nyK1otFG6R4rh9VHszU5xUEw26S) with Yes 149.2k AAVE (98.33%) and No 2.54k AAVE (1.67%).

## Test Cases

Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation

The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).