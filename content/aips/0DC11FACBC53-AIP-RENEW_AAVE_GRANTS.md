---
title: Renew Aave Grants DAO
status: Proposed
author: Shreyas Hariharan (@hello-shreyas), Austin Green (@austingreen)
shortDescription: Provide funding to expand the budget and scope of Aave Grants DAO
discussions: https://governance.aave.com/t/aave-grants-dao-update-and-renewal/7842
created: 2022-05-02
---

## Simple Summary

Provide Aave Grants DAO (AGD) with $6m ($3m per quarter budget) to fund more projects that benefit Aave.

## Abstract

After two successful quarters of Aave Grants DAO, we are looking to renew the program for the next two quarters by providing $3 million dollars in AAVE and $3 million dollars in aUSDC ($3 million per quarter). By partially funding the AGD with stablecoins, budgeting will be easier. The aUSDC will be funded through an approval and the AAVE will be funded with a transfer. Our initial proposal was made in May 2021 and our renewal proposal was made in November 2021.

## Motivation

Aave Grants DAO is a community-led grants program, focused on growing a thriving ecosystem of contributors within Aave through funding ideas, projects and events that benefit the ecosystem. We aim to drive development on top of Aave and ensure a constant influx of talented builders to maintain Aave’s long term growth. We help build culture and community around the Aave ecosystem that in turn attracts the best contributors.

## Test Cases

The full test of this proposal can be found here: https://github.com/llama-community/renew-aave-grants

## Implementation

This proposal includes a $3M transfer of AAVE from the AaveEcosystemReserve to the grants DAO multisig and the AaveV2Collector approving $3M of aUSDC to the grants DAO multisig. This will allow the grants DAO to withdraw funds as needed and let the V2Collector to continue to earn interest in the meantime. The proposa payload will target the contract AaveEcosystemReserveController and call the function `function transfer(address collector, IERC20 token, address recipient, uint256 amount)` and `approve(address collector, IERC20 token, address recipient, uint256 amount)`.

**Target Contracts**

ProposalPayload = [0x8e7df91fed22c192a3aa1bb6143879295ee91295](
https://etherscan.io/address/0x8e7df91fed22c192a3aa1bb6143879295ee91295)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
