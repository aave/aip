---
title: Chaos Labs Risk Platform Proposal
status: Proposed
author: Omer Goldberg (@arieg419)
shortDescription: Chaos Labs will build risk tooling to support Aave v3.
discussions: https://governance.aave.com/t/updated-proposal-chaos-labs-risk-simulation-platform/10025
created: 20222-10-20
---

## Simple Summary

This proposal outlines a 12-month engagement for Chaos Labs to build and utilize risk and simulation tooling to help optimizations and protect Aave v3 markets.

## Abstract

This proposal acts as a mandate from the Aave community to engage with Chaos for the work defined on the Aave governance forum [here](https://governance.aave.com/t/updated-proposal-chaos-labs-risk-simulation-platform/10025) and pre-approved by the Aave community via Snapshot [here](https://snapshot.org/#/aave.eth/proposal/0xad105e87d4df487bbe1daec2cd94ca49d1ea595901f5773c1804107539288b59).

## Motivation

Chaos Labs is eager to collaborate with Aave to ensure it maintains its position as a best-in-class DeFi protocol with one of the most serious and intentional risk operations. Aave v3 has over $1b in locked TVL and will shortly be launching on Ethereum, drastically increasing the assets controlled and the users engaging with it. Chaos has previously built a [v3 Risk Dashboard](http://aave.chaoslabs.xyz/ccar) to help monitor these positions and is excited to expand that capability using its proprietary on-chain simulation engine.

Chaos Labs will focus on risk management and parameter recommendations for all v3 markets.

This includes:

- Borrow & lending caps recommendations
- Collateral factors recommendations
- Interest rates recommendations
- Asset listing risk analytics & tooling
- Open-sourced agent access
- Extending the AAVE v3 Risk Analytics App
- Community Risk Calls

While incorporating feedback from the community, we have committed to building trust between the Aave community and Chaos Labs. To this end, the payment streams will not start until 6 months after AIP approval with two incentive-based payments not included in this proposal but will be submitted after delivery. The DAO may terminate our engagement after 6 months prior to this stream initializing.

## Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Chaos Labs Github [here](https://github.com/ChaosLabsInc/aave-chaos-v3-risk-proposal).

In summary, the proposal creates a 6-month stream of 500,000 aUSDC ($0.5 Million) to the Chaos-controlled address starting at block height equivalent to the 6-month anniversary of on-chain approval.

## Test Cases

The Proposal Payload has been tested and peer-reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs), including simulations on mainnet of the whole proposal lifecycle.

Link to Test Cases: [Here](https://github.com/ChaosLabsInc/aave-chaos-v3-risk-proposal/tree/main/src/test)

## Implementation

Link to Payload Implementation: [Here](https://github.com/ChaosLabsInc/aave-chaos-v3-risk-proposal/blob/main/src/ProposalPayload.sol)

**Deployed Contracts** ProposalPayload = 0x691B41805f7Ef2D7De6165bC42295b035a31600D

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
