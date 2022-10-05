---
title: Llama <> Aave
status: Proposed
author: Llama (@llama)
shortDescription: Approve Llama <> Aave Proposal
discussions: https://governance.aave.com/t/updated-proposal-llama-aave/9924
created: 2022-09-28
---

# Simple Summary

Llama outlines a 12-month proposal to work with Aave on treasury management, protocol upgrades, growth, and analytics.

# Abstract

This proposal acts as a mandate from the Aave community to engage with Llama for the work defined on the Aave governance forum [here](https://governance.aave.com/t/updated-proposal-llama-aave/9924) and pre-approved by the Aave community via Snapshot [here](https://snapshot.org/#/aave.eth/proposal/0x9f65a598bee69a1dd84127d712ffedbc0795f0647e89056a297cae998dd18bf1).

# Motivation

[Llama](https://www.llama.xyz/) is one of the most active contributors to Aave. We hope to deepen our engagement with the community and ensure that Aave is a market-leading protocol for many decades to come.

Aave currently has $9 billion of liquidity locked across 7 networks and over 13 pools, with more in the works. To continue its rate of growth, the community needs to onboard proven contributors who can drive value to the Aave ecosystem. Skilled teams have the knowledge, trust, and alignment to meaningfully contribute to growing Aave.

Llama has received grants from Aave Grants DAO over the past 12 months for work that includes treasury management, protocol upgrades, DAO to DAO partnerships, and analytics. Aave Grants has recommended that we move from short-term grants to a longer-term work scope funded through governance, allowing us to drive more impact to the Aave ecosystem. It should be noted that many of the deliverables in this proposal require substantial smart contract engineering, data engineering, and financial expertise.

Llama charges a $1.5 million base fee plus a bonus of upto $500k based on completion of deliverables. 70% of the total fee will be in aUSDC and 30% in AAVE. Note that the bonus payment is not included in this proposal but will be included in a separate proposal towards the end of our 12-month period.

We will provide regular updates on the forum with details of our work and will solicit feedback from the community to ensure we continue to uphold the commitments outlined in our forum post. Towards the end of the 12-month period, a renewal proposal will be shared with Aave governance.

## Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Llama Github [here](https://github.com/llama-community/aave-llama-proposal).

In summary, the proposal:
1. Transfers upfront 350,000 aUSDC ($0.35 Million) to the Llama-controlled address.
2. Transfers upfront 1,813.68 AAVE ($0.15 Million using 30 day TWAP on day of proposal) to the Llama-controlled address.
3. Creates a 12-month stream of 700,000 aUSDC ($0.7 Million) to the Llama-controlled address.
4. Creates a 12-month stream of 3,627.35 AAVE ($0.3 Million using 30 day TWAP on day of proposal) to the Llama-controlled address.

## Test Cases

The Proposal Payload has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs), including simulations on mainnet of the whole proposal lifecycle.

Link to Test Cases: [Here](https://github.com/llama-community/aave-llama-proposal/blob/main/src/test/ProposalPayload.t.sol)

## Implementation

Link to Payload Implementation: [Here](https://github.com/llama-community/aave-llama-proposal/blob/main/src/ProposalPayload.sol)

**Deployed Contracts**
ProposalPayload = [0xbDd286d4b9BfbD10319f3FCd1c76e9ECA12a80Ee](https://etherscan.io/address/0xbdd286d4b9bfbd10319f3fcd1c76e9eca12a80ee)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
