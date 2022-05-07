---
title: Renew Aave Grants DAO
status: WIP
author: Shreyas Hariharan (@hello-shreyas), Austin Green (@austingreen)
shortDescription: Provide funding to expand the budget and scope of Aave Grants DAO
discussions: https://governance.aave.com/t/aave-grants-dao-update-and-renewal/7842
created: 2022-05-02
---

## Simple Summary

Provide Aave Grants DAO (AGD) with $6m ($3m per quarter budget) to fund more projects that benefit Aave.

## Abstract

After two successful quarters of Aave Grants DAO, we are looking to renew the program for the next two quarters by providing $3 million dollars in AAVE and $3 million dollars in aUSDC ($3 million per quarter). By partially funding the AGD with stablecoins, budgeting will be easier. Our initial proposal was made in May 2021 and our renewal proposal was made in November 2021.

## Motivation

Aave Grants DAO is a community-led grants program, focused on growing a thriving ecosystem of contributors within Aave through funding ideas, projects and events that benefit the ecosystem. We aim to drive development on top of Aave and ensure a constant influx of talented builders to maintain Aave’s long term growth. We help build culture and community around the Aave ecosystem that in turn attracts the best contributors.

## Test Cases

The full test of this proposal can be found here: https://github.com/llama-community/aave-grants-update-and-renewal

## Implementation

This proposal includes a $3M transfer of AAVE from the ControllerAaveEcosystemReserve to the grants DAO multisig and the V2Collector approving $3M of aUSDC to the grants DAO multisig. This will allow the grants DAO to withdraw funds as needed and let the V2Collector to continue to earn interest in the meantime. The proposal will target the contract ControllerAaveEcosystemReserve and call the function `transfer(IERC20 token, address recipient, uint256 amount)` and the contract ControllerV2Collector and call the function `approve(IERC20 token, address recipient, uint256 amount)`.

**Target Contracts**

ControllerAaveEcosystemReserve = [0x1E506cbb6721B83B1549fa1558332381Ffa61A93](
https://etherscan.io/address/0x1e506cbb6721b83b1549fa1558332381ffa61a93)

ControllerV2Collector = [0x7AB1e5c406F36FE20Ce7eBa528E182903CA8bFC7](
https://etherscan.io/address/0x7AB1e5c406F36FE20Ce7eBa528E182903CA8bFC7)

**Transfer Parameters**

token = the aave token [0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9](
https://etherscan.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9)

recipient = the grants dao multi-sig = [0x89C51828427F70D77875C6747759fB17Ba10Ceb0](
https://etherscan.io/address/0x89C51828427F70D77875C6747759fB17Ba10Ceb0)

amount = $3 million / ($136.74 / aave) = 21939.45 adjust for decimals = 21939450000000000000000

---

token = aUsdc [0xBcca60bB61934080951369a648Fb03DF4F96263C](
https://etherscan.io/address/0xBcca60bB61934080951369a648Fb03DF4F96263C)

recipient = the grants dao multi-sig = [0x89C51828427F70D77875C6747759fB17Ba10Ceb0](
https://etherscan.io/address/0x89C51828427F70D77875C6747759fB17Ba10Ceb0)

amount = $3 million = 3000000.00 adjust for decimals = 3000000000000

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
