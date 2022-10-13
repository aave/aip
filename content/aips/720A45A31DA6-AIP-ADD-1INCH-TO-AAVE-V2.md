---
title: Add 1INCH to Aave v2 market
status: Proposed
author: Governance House - [Llama](https://twitter.com/llama), [Matthew Graham](https://twitter.com/Matthew_Graham_), [defijesus.eth](https://twitter.com/eldefijesus)
shortDescription: Add 1INCH as collateral on the Aave V2 market
discussions: https://governance.aave.com/t/arc-add-1inch-as-collateral/8056
created: 2022-07-18
---


## Simple Summary

Llama proposes listing 1INCH, the governance token of the 1inch Network, on Aave v2 mainnet as collateral with borrowing enabled. The risk parameters detailed within have been provided by Gauntlet. 

## Abstract

1inch is a network of decentralized protocols designed to provide the fastest and most efficient operations in the DeFi space. The 1inch Network was launched in May 2019 with the release of its Aggregation Protocol v1. The 1inch Aggregation Protocol is both the oldest and most trusted DEX aggregator in the DeFi space.

Listing 1INCH on Aave v2 will enable lenders to receive yield and borrowers of 1INCH to partake in 1inch’s tokenomics to vote and be reimbursed their gas cost to perform swaps on 1inch’s Aggregation Platform.

## Motivation

Listing 1INCH on the Aave v2 market would allow Aave to benefit from the first mover advantage and recognise the efforts of the 1inch team for being supportive of Aave since before v1.  

Since the original proposal to list 1INCH the team has removed minting roles on the token, introduced a progressive vesting schedule and created use cases for aTokens. The 1INCH token is supported by a Chainlink oracle feed and has favourable on-chain liquidity conditions.

## Specification

This proposal initializes the 1INCH reserve, enables variable borrowing, sets a reserve factor and configures the reserve as collateral. As needed, it also connects a price source on the AaveOracle.

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of the whole proposal lifecycle.

Link to Test Cases: [End-to-end test suite](https://github.com/defijesus/bdg-labs-aave-v2-listings/blob/master/src/test/Validation1InchListing.sol), [aToken/stableDebtToken/variableDebtToken verification](https://github.com/defijesus/bdg-labs-aave-v2-listings/tree/master/diffs), [deployment script](https://github.com/defijesus/bdg-labs-aave-v2-listings/blob/master/scripts/1InchListingPayload.s.sol)

## Implementation

We recommend the following risk parameters.

### Risk Parameters:

LTV 40%

Liquidation Threshold 50%

Liquidation Bonus 8.5%

Reserve Factor 20%

### Variable Interest Rate Parameters:

UOptimal 45%

R_0 0%

R_s1 7%

R_s2 300%


The snapshot vote to add 1INCH on Aave v2 mainnet market can be found [here](https://snapshot.org/#/aave.eth/proposal/0x2ea76814a0dfcad7ea1a7b3c597f059a8d574f8143886b23043918998505f5a7).  


- [ProposalPayload](https://etherscan.io/address/0xd417d07c20e31f6e129fa68182054b641fbec8bd#code)
- [aINCH implementation](https://etherscan.io/address/0x130FBED7dBA2b370f0F93b0Caea2cfD9b811D66D#code)
- [Variable Debt 1INCH implementation](https://etherscan.io/address/0x4d3707566Ee8a0ed6DE424a262050C7587da8152#code)
- [Stable Debt 1INCH implementation](https://etherscan.io/address/0x9C2114Bf70774C36E9b8d6c790c9C14FF0d6799E#code)
- [Interest rate strategy](https://etherscan.io/address/0xb2eD1eCE1c13455Ce9299d35D3B00358529f3Dc8#code) 
- [1INCH/ETH price feed](https://etherscan.io/address/0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).