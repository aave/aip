---
title: Certora Continuous Formal Verification
author: Shelly Grossman (@shellygr)
shortDescription: A continuation of proposal 66 to improve the security of smart contracts built on top of Aave using a combination of formal verification and manual code review. 
discussions: https://governance.aave.com/t/security-and-agility-of-aave-smart-contracts-via-continuous-formal-verification/10181
created: 2022-11-08
---

## Simple Summary

In the last six months, Certora has improved the security of the Aave protocol and played a significant role in increasing the security community’s involvement in Aave’s development. We want to continue to improve Aave’s security and enable agile development of new products. This proposal will give a brief overview of Certora and formal verification, outline what we’ve accomplished in the last six months, and discuss our goals for ensuring Aave’s security.

## Abstract

Certora is a security company focused on delivering tools that enable developers to mathematically prove the correctness of DeFi protocols. In the last six months, Certora worked closely with the Aave community, Aave developers, BGD labs, and external communities, including The Secureum 1, to guarantee the security of the Aave protocol and enable massive innovation.

We engaged twenty external security researchers who, along with our team of security engineers and researchers, helped Aave safely develop 16 new products and list 12 new tokens. A total of 51 smart contracts were reviewed which contained over 25,000 lines of Solidity code. One critical and two high-severity bugs were prevented using the hundreds of correctness rules written by the community and the Certora team.

As we continue our collaboration, we plan to improve on the current proposal in five significant ways: 
1. Allocate more resources
2. Improve the Certora Prover
3. Develop new open source technology for automatically checking rules written by the community 
4. Drastically improve the collaboration with auditors and the security research community, and 
5. Develop a monitoring framework for checking the CVL rules before every transaction.

## Motivation

We propose to continue the current engagement. Below are the highlights of what we will accomplish:

- Allocate six R&D personnel to lead the community in specification development for the Aave protocol.
- Write specifications and verify new Aave products and listed tokens.
- Provide free access to our SaaS tooling (Certora Prover) to members of the Aave community.
- Develop and improve our technology to address needs raised by the Aave verification efforts. We will continue to provide new tools to the Aave community as they are developed.
- Develop our education materials and be available to the community to help them learn to use our tools.
- Continue to grow Aave’s security community and incentivize the best of this community to engage with Aave more closely. We propose to award several fellowships to the best security researchers to work closely with Aave and Certora. We have identified leading candidates who contributed to this year’s program.
- Certora will collaborate with Sigma Prime to help them use the Certora Prover as part of their - ongoing security review 1. We will also collaborate with other third parties such as Secureum, who are working to ensure the security of Aave and building the Aave community. Additionally, Code4rena and Spearbit security researchers are proficient in rule writing. For example, Kurt Barry, who works as an independent security researcher through Spearbit, was able to find a 4 year old bug in the MakeDao tool using the Certora Prover. Therefore, for major code revisions, we will conduct Code4rena competitions for finding bugs and writing correctness rules

## Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Certora's Github [here](https://github.com/Certora/aave-certora-nov22-proposal)

The Proposal Payload does the following:
1. Creates a 12-month stream of 1,890,000 aUSDC ($1.89M) to the Certora beneficiary address.
2. Creates a 12-month stream of 9958 AAVE ($810,000) to the Certora beneficiary address.
We've used the 30 days average AAVE price, to calculate the amount of AAVE tokens that corresponds to the $810,000 sum in the proposal. The json file with the price data used is available 
[here](https://github.com/Certora/aave-certora-nov22-proposal/blob/main/data/aave-30d-price-coingecko.json)


## Test Cases

The Proposal Payload has been tested and peer-reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs), including simulations on mainnet of the whole proposal lifecycle.

Link to Test Cases: [Here](https://github.com/Certora/aave-certora-nov22-proposal/tree/main/src/test)

## Implementation

Link to Payload Implementation: [Here](https://github.com/Certora/aave-certora-nov22-proposal/blob/main/src/ProposalPayload.sol)

**Deployed Contracts** ProposalPayload = 0x2D2b1Bf70d98ae9A8CC9A3d7a49C2d321eCC6C04

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
