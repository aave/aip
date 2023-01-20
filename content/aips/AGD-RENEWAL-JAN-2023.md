---
title: Renew Aave Grants DAO
status: Proposed
author: Bill (0xbilll) and Llama
shortDescription: Provide funding to expand the budget and scope of Aave Grants DAO
discussions: https://governance.aave.com/t/aave-grants-dao-update-renewal/11118
created: 2023-01-18
updated: 2023-01-19
---

## Simple Summary

Provide Aave Grants DAO (AGD) with $3.25m for the next two quarters (Q1 and Q2 2023) to fund more projects that benefit AAVE.

## Abstract

Since launching in May 2021, Aave Grants DAO has awarded over $4,395,000 in grants to teams building on Aave or contributing to the ecosystem. Aave Grants has also been a key driver of growth by awarding over $120k in Aave bounties across ten different hackathons, hosting three rAAVEs, and making other sponsorships to help proliferate the ghost. We are proposing to renew the program for the next two quarters by providing $3.25 million dollars ($1.625 million per quarter).

## Motivation

Aave Grants DAO is a community-led grants program, focused on growing a thriving ecosystem of contributors within Aave through funding ideas, projects and events that benefit the ecosystem. We aim to drive development on top of Aave and ensure a constant influx of talented builders to maintain Aave’s long term growth. We help build culture and community around the Aave ecosystem that in turn attracts the best contributors.

## Test Cases

The full test of this proposal can be found [here.](https://github.com/llama-community/aave-proposals/blob/main/src/test/proposals/aave-grants-dao-renewal/ProposalPayloadE2E.t.sol)

## Implementation

This proposal includes a $3.25M approval of funds from the AaveEcosystemReserve and CollectorContract to the grants DAO multisig.
The funds are divided as follows:


This will allow the grants DAO to withdraw funds as needed and let the V2Collector to continue to earn interest in the meantime. The proposal payload will target the contract AaveEcosystemReserveController and call the function `function transfer(address collector, IERC20 token, address recipient, uint256 amount)` and `approve(address collector, IERC20 token, address recipient, uint256 amount)`.

## References

Forum Post: [https://governance.aave.com/t/updated-proposal-aave-grants-dao-renewal/11289](https://governance.aave.com/t/updated-proposal-aave-grants-dao-renewal/11289)

Snapshot: [https://snapshot.org/#/aave.eth/proposal/0x194b68a5319b074065e38fcb0bd96e8e8b6ce15870844593e79750605a609109](https://snapshot.org/#/aave.eth/proposal/0x194b68a5319b074065e38fcb0bd96e8e8b6ce15870844593e79750605a609109)

**Target Contracts**

ProposalPayload = [0xe4621dfd503a533f42bb5a45162ea3e5233acd5f](
https://etherscan.io/address/0xe4621dfd503a533f42bb5a45162ea3e5233acd5f)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
