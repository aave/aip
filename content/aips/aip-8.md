---
aip: <to be assigned>
title: Add BarnBridge ($BOND) as collateral in AAVE
status: WIP
author: Troy Murray (@DannyDesert)
discussions: https://governance.aave.com/t/proposal-add-support-for-barnbridge-bond-token/1506
created: 20201-01-13
updated (*optional): <date created on, in ISO 8601 (yyyy-mm-dd) format> or N/A
requires (*optional): <AIP number(s)>
---

## Simple Summary

We are proposing to add BarnBridge (BOND) [0x0391D2021f89DC339F60Fff84546EA23E337750f] to AAVE as colateral.

## Abstract

BarnBridge was built with the mission of helping to facilitate the transition to a decentralized financial system. BarnBridge is working to make the decentralized financial system more efficient, risk-flexible, and attractive to a wider range of participants through their fluctuation derivative protocol. BOND, the native token of BarnBridge, is an ERC-20 token that can be used to stake on their system and for governance once the governance module is launched. 

## Motivation

There seems to have been good support from the community to add BOND and as we get ready to launch our products in Q1 of 20201 we think BOND is a good canidate to strengthen the AAVE ecosystem.  There is also deep synergies between the two projects and we would like to offer tranching of AAVE LPs in the future.

## Specification

Adding the ERC-20 contract [0x0391D2021f89DC339F60Fff84546EA23E337750f] as depositable for collateral in AAVE.

## Rationale

We concider ourselves Yield Maximalist and anywhere there is yield we are going to follow and tranche it out.  The synergies between AAVE and BOND are strong and we are complimentary products.  We look forward to adding AAVE LPs into our system and think this is a great first step to align the projects. 

## Test Cases

Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation

The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## References

- *Whitepaper*: https://github.com/BarnBridge/BarnBridge-Whitepaper
- *Project Management Portal*: https://github.com/BarnBridge/BarnBridge-PM
- *Youtube*: https://www.youtube.com/c/BarnBridge
- *Website*: https://www.BarnBridge.com
- *Twitter*: https://twitter.com/Barn_Bridge
- *Source Code*: https://github.com/gemini/dollar
- *BOND token contract*: https://etherscan.io/address/0x0391D2021f89DC339F60Fff84546EA23E337750f


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
