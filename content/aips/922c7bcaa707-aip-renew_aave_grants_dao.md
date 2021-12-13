---
title: Renew Aave Grants DAO
status: Proposed
author: Shreyas Hariharan (@hello-shreyas), Austin Green (@austingreen)
shortDescription: Provide funding to expand the budget and scope of Aave Grants DAO
discussions: https://governance.aave.com/t/aave-grants-update-and-renewal/6371
created: 2021-12-11
---

## Simple Summary

Provide Aave Grants DAO (AGD) with a $2m per quarter budget to fund more projects that benefit Aave.

## Abstract

[AIP 17](https://app.aave.com/governance/13-QmURZNW6PT4z3e4DZqxHMAW1bWRFvxZjtyQZqhnhgdLB6R) established Aave Grants DAO on May 4, 2021 with the goal of funding ideas and builders in the Aave ecosystem. The two quarter pilot program had a grants budget of $1 million and an operating budget of $250,000 per quarter. The pilot program has awarded $1.17m to 38 grant recipients and made the initial steps to put the grants process and the protocol in the hands of the community.

Moving forward we propose renewing Aave Grants DAO with an increased grants budget of $2 million and an operations budget of $2 million per quarter. With the increased budget we will increase the number of larger community grants, fund non-developer grants including sponsorship and community events, and work to decentralize the grants process.

## Motivation

AGD’s mission is to build a thriving ecosystem of contributors for Aave. We provide grants to projects, ideas, and events that benefit Aave and its ecosystem. We hope to be at the forefront of ecosystem development at Aave. Ensuring a constant influx of talented builders is critical to Aave’s growth.

## Test Cases

The full test of this proposal can be found here: https://github.com/aave/aave-grants-update-and-renewal

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

amount = $2 million / ($189.67 / aave) = 10544.63 adjust for decimals = 10544630000000000000000

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).