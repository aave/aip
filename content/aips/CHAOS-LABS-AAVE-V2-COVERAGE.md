---
title: Chaos Labs Aave v2 Coverage
status: Proposed
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
shortDescription: Chaos Labs expands its engagement with Aave to support v2 markets
discussions: https://governance.aave.com/t/arc-chaos-labs-aave-v2-coverage/11012
created: 2022-12-21
---

## Simple Summary

This proposal outlines a 5-month engagement for Chaos Labs to expand the scope of its engagement with Aave to include proactive risk analysis and management of the v2 markets while encouraging and supporting a safe migration to the upcoming Ethereum v3 deployment.

## Abstract

This proposal acts as a mandate from the Aave community to engage with Chaos for the work defined on the Aave governance forum [here](https://governance.aave.com/t/arc-chaos-labs-aave-v2-coverage/11012) and pre-approved by the Aave community via Snapshot [here](https://snapshot.org/#/aave.eth/proposal/0xd4df8cd3ef68f787d08cd0f8c529471ed48d70ebc15a562a39dbc0196a9f8e47).

## Motivation

Based on the work done to date in a short time frame and the amount of work ahead to transition from v2 to v3 on Ethereum, Chaos Labs is proposing to extend the scope of the original engagement to support parameter optimization on v2 as well as conduct relevant risk analyses during the transition planning.

Our priority with this added scope would be to methodically update parameters, protect existing user funds, and mitigate new potential risk factors on v2 while ensuring the capital efficiency of v3 is a more attractive option for new users.

This includes topics and considerations such as:

- Methodically amending asset parameters to incentivize new users to open accounts on v3
- Initiating coordination with third-party protocols building on top of v2 to assist in transition planning, communications, and timing
- Helping analyze incentive (both treasury- and parameter-managed) schemes to incite account transitions
- Continued analysis of the impact of market events and risk scenarios for the DAO

This work will be in conjunction with our existing v3 responsibilities and should not materially impact timelines for delivery during the coming months.

Duration: We propose this engagement to align with the 6-month anniversary of our original engagement, thus covering the remaining 5-month period. The intent is to bridge the transition from v2 to v3 during this period with a finite end date and not continue on indefinitely. If there is still material TVL on v2 at the end of this period, we will discuss the appropriate next steps and maintenance/monitoring expectations with the community.

## Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Chaos Labs Github [here](https://github.com/ChaosLabsInc/aave-v2-payloads).

In summary, the proposal creates a 5-month stream of 175,000 aUSDC and 1242 AAVE ($75,000 using 30 day TWAP, calculated on day of proposal) to the Chaos-controlled address.

## Test Cases

The Proposal Payload has been tested and peer-reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs), including simulations on mainnet of the whole proposal lifecycle.

Link to Test Cases: [Here](https://github.com/ChaosLabsInc/aave-v2-payloads/blob/main/src/tests/V2CoveragePaymentPayload.t.sol)

## Implementation

Link to Payload Implementation: [Here](https://github.com/ChaosLabsInc/aave-v2-payloads/blob/main/src/payloads/V2CoveragePaymentPayload.sol)

**Deployed Contracts** ProposalPayload = 0x5B669Dc5A7d9dF4ED06F58a9e79e4641f3C0b846

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
