---
title: Add ENS to Aave V2
status: Proposed
author: Fire Eyes DAO (@fireeyesdao)
shortDescription: List ENS as collateral and borrowing asset on the Aave V2 pool
discussions: https://governance.aave.com/t/arc-add-ens-as-collateral/6342
created: 2022-02-24
---


## Simple Summary

ENS (Ethereum Name Service) is an critical piece of infrastructure for the Ethereum ecosystem with over 400,000 names registered and hundreds of intergrations across the ecosystem.

$ENS is the governance token providing ownership over the ENS protocol. $ENS governs the direction of the ENS treasury as well as controlling crucial protocol parameters via the ENS registrar controller.

This proposal looks to onboard $ENS as a collateral asset to Aave.

## Motivation

Following conversations with Aave and ENS communities, we’ve found that ENS is a prime candidate for Aave, already having gathered over $1B in circulating market cap and millions of dollars in liquidity across the ecosystem.

The addition of ENS to Aave will unlock additional liquidity and optionality for all ENS holders.

## Specification

This proposal initialises the ENS reserve, enables variable borrowing, sets a reserve factor and configures the reserve as collateral. As needed, it also connects a price source on the AaveOracle.

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of the whole proposal lifecycle.

## Implementation

- [ProposalPayload](https://etherscan.io/address/0xf42d0a1b03c0795021272a4793cd03dcb97581d3#code)
- [aENS implementation](https://etherscan.io/address/0xB2f4Fb41F01CdeF7c10F0e8aFbeB3cFA79d1686F#code)
- [Variable Debt ENS implementation](https://etherscan.io/address/0x2386694b2696015dB1a511AB9cD310e800F93055#code)
- [Stable Debt ENS implementation](https://etherscan.io/address/0x5746b5b6650dd8d9b1d9d1bbf5e7f23e9761183f#code)
- [Interest rate strategy](https://etherscan.io/address/0xb2eD1eCE1c13455Ce9299d35D3B00358529f3Dc8#code) 
- [EnsUsdToEnsEth price feed](https://etherscan.io/address/0xd4641b75015E6536E8102D98479568D05D7123Db#code)
- LTV: 50%
- Liquidation threshold: 60%
- Liquidation bonus: 8%
- Reserve Factor: 20%

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).