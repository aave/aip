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

After two successful quarters of Aave Grants DAO, we are looking to renew the program for the next two quarters by providing $6 million dollars in AAVE ($3 million per quarter). Our initial proposal was made in May 2021 and our renewal proposal was made in November 2021.

## Motivation

Aave Grants DAO is a community-led grants program, focused on growing a thriving ecosystem of contributors within Aave through funding ideas, projects and events that benefit the ecosystem. We aim to drive development on top of Aave and ensure a constant influx of talented builders to maintain Aave’s long term growth. We help build culture and community around the Aave ecosystem that in turn attracts the best contributors.

## Test Cases

The full test of this proposal can be found here: https://github.com/llama-community/aave-grants-update-and-renewal

## Implementation

In order to transfer funds from the Aave Ecosystem Reserve, the proposal will target the contract ControllerAaveEcosystemReserve and call the function `transfer(IERC20 token, address recipient, uint256 amount)`.

**Target Contract**

ControllerAaveEcosystemReserve = [0x1E506cbb6721B83B1549fa1558332381Ffa61A93](
https://etherscan.io/address/0x1e506cbb6721b83b1549fa1558332381ffa61a93)

**Transfer Parameters**

token = the aave token [0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9](
https://etherscan.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9)

recipient = the grants dao multi-sig = [0x89C51828427F70D77875C6747759fB17Ba10Ceb0](
https://etherscan.io/address/0x89C51828427F70D77875C6747759fB17Ba10Ceb0)

amount = $6 million / ($145.47 / aave) = 41245.62 adjust for decimals = 41245620000000000000000

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
