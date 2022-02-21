---
title: Add ENS to Aave V2
status: Proposed
author: FirstName LastName (@GitHubUsername)
shortDescription: List ENS as borrowing and collateral asset on the Aave V2 pool
discussions: https://governance.aave.com/t/arc-add-ens-as-collateral/6342
created: 2022-02-11
updated (*optional): 2022-02-11
---


## Simple Summary

ENS (Ethereum Name Service) is an critical piece of infrastructure for the Ethereum ecosystem with over 400,000 names registered and hundreds of intergrations across the ecosystem.

$ENS is the governance token providing ownership over the ENS protocol. $ENS governs the direction of the ENS treasury as well as controlling crucial protocol parameters via the ENS registrar controller.

This proposal looks to onboard $ENS as a collateral asset to Aave.

## Abstract

This proposal initialises the ENS reserve, enables variable borrowing, sets a reserve factor and configures the reserve as collateral. As needed, it also connects a price source on the AaveOracle.

## Motivation

Following conversations with Aave and ENS communities, we’ve found that ENS is a prime candidate for Aave, already having gathered over $1B in circulating market cap and millions of dollars in liquidity across the ecosystem.

The addition of ENS to Aave will unlock additional liquidity and optionality for all ENS holders.

## Specification

The technical specification should describe the syntax and semantics of any new feature.

## Rationale

The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of whole proposal lifecycle.

## Implementation

- Proposal payload: 
- aENS implementation:
- Variable Debt ENS implementation:
- Stable Debt ENS implementation:
- Interest rate strategy: 
- EnsUsdToEnsEth price feed:
- Reserve Factor: 20%
- LTV: 50%
- Liquidation threshold: 60%
- Liquidation bonus: 8%

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).