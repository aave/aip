---
title: Appoint Securitize as a Whitelister to Aave Arc
status: Proposed
author: Adan Carreno (@adancspal)
shortDescription: Securitize asks the Aave Governance community to approve Securitize as a Whitelister for Aave Arc
discussions: https://governance.aave.com/t/arc-appoint-securitize-as-a-whitelister-to-aave-arc/6434
created: 2022-06-08
updated: 2022-06-21
---

## Simple Summary

Securitize asks the Aave Governance community to approve the appointment, adoption, and authorization of Securitize as a “whitelister” on the Aave Arc market.

## Abstract

Securitize is the leading digital asset securities company. As a FINRA member Broker-Dealer and the first SEC-registered Transfer Agent operating with digital asset securities, Securitize is one of the most regulated firms in the entire digital assets industry.

Securitize has an excellent track record for providing comprehensive compliance services to a vast array of digital assets companies. Our proprietary investor passport, Securitize iD, is globally recognized and built upon Securitize’s battle-tested KYC/KYB/AML/CFT compliance program, allowing Securitize iD to be trusted by over 450K registered investors and over 200 issuers to date.

We have performed a detailed analysis and documented it [here](https://governance.aave.com/t/arc-appoint-securitize-as-a-whitelister-to-aave-arc/6434) for the consideration of the Aave Governance community. We believe that Securitize satisfies all criteria necessary to be appointed as a whitelister for Aave Arc.


## Motivation

The institutional appetite for DeFi is growing, but that hunger remains mostly unsatisfied due to compliance obstacles. In response, pragmatic DeFi communities like Aave launched permissioned versions of their services, like Aave Arc, and are wisely seeking regulated third parties, like Securitize, to facilitate user credential and access management.

As a whitelister, Securitize will function as one of the trusted gatekeepers for Aave Arc, ensuring that only wallets with verified credentials can access the permissioned liquidity pool. Therefore, institutions can safely leverage the transactional benefits of Aave — e.g., supply, borrow, and liquidate digital assets — while still abiding by their compliance requirements. Securitize believes that this is a monumental first step toward the eventual mass inclusion of institutions in the decentralized economy.

## Specification

“Whitelisting” is the gatekeeping function performed by whitelisters on users of Aave Arc. The term refers specifically to the process of:

Conducting KYC/KYB checks on the user;
Onboarding the user with appropriate disclosures, terms, and conditions;
Granting specific permissions (e.g., borrow, supply, liquidate) to the Ethereum wallet address(es) provided by the user.
In addition, Aave Arc whitelisters perform a similar role on Arc as guardians do on Aave V2. Specifically, whitelisters can use a multi-sig veto on governance proposals that add excessive compliance risk on the Aave Arc protocol. For example, existing whitelisters can veto the addition of a privacy coin if such a coin is impermissible in the relevant jurisdiction, or veto the addition of a whitelister that has a poor reputation for compliance.

The whitelisting is managed via a [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) contract, in which whitelisters are designated as Permission Admins. Permission Admins are permitted to add or remove wallets grants to the Aave Arc market by calling addPermissions() and removePermissions() contract methods, respectively.

## Rationale

The Aave Governance community voted on the Snapshot proposal with “YES” 389K AAVE (99.98%) and “No” 87 AAVE (0.02%)

## Implementation

The implementation is described [here](https://github.com/aave/arc-timelock#adding-a-new-permissionadmin)

## Proposal

The proposal executes a single call to the PermissionManager contract to add [Securitize](https://etherscan.io/address/0x36b8A1D23BDc76092aD88A1c4Ef59fafD4931b03) as PermissionAdmin in Aave ARC market:
`IPermissionManager(0xF4a1F5fEA79C3609514A417425971FadC10eCfBE).addPermissionAdmins([0x36b8A1D23BDc76092aD88A1c4Ef59fafD4931b03]);`

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).