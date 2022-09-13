---
title: Add MaticX to Aave v3 Polygon Pool
status: Proposed
author: Llama, Matthew Graham, Rajath Alex
shortDescription: Add MaticX to Aave v3 Polygon Pool
discussions: https://governance.aave.com/t/proposal-to-add-maticx-to-aave-v3-polygon-market/7995
created: 2022-09-12
---

# Simple Summary

Llama proposes listing MaticX on the Aave v3 Polygon Pool. MaticX is an ERC20 receipt token which represents staked MATIC and a portion of the staking rewards.

# Abstract

Stader is building a native staking smart contract platform spanning multiple networks that enables users to develop staking-related applications. The MaticX product selects validators based upon performance, safety, decentralisation and the commission terms to ensure users receive the best user experience in supporting the Polygon Network. 

MaticX allows users to stake their MATIC tokens on the Ethereum mainnet or Polygon and immediately get the representation of their share in the form of MaticX token without maintaining staking infrastructure. Users will receive staking rewards whilst being able to utilise their MaticX tokens in secondary markets on Ethereum mainnet and Polygon.

MaticX will be added as collateral and Users will be able to borrow against their MaticX deposits. A SupplyCap of $6M will be implemented, borrowing disabled and Matrix will be added to the 'Matic correlated' eMode. 

# Motivation

Listing MaticX on the Aave v3 Polygon Pool will allow Aave DAO to benefit from the first mover advantage and provide an alternative to Lido’s stMATIC. 

In addition to being able to stake on Ethereum mainnet, MaticX allows users to stake Matic directly on Polygon through a unique instant pool mechanism while remaining on Polygon throughout. This is expected to drive staking penetration higher for MATIC with Users being able to enjoy the cheaper, faster transactions on Polygon to stake.

MaticX offers users a maximum 50 hours withdrawal period, which is shorter than alternatives and is expected to support a tighter secondary spot market price relative to the fundamental value of the receipt token’s claim.

With the introduction of eMode on Aave v3, there exists the potential for users to recursive loop MaticX and wMATIC to create a significant source of yield provided borrowing rates remain accommodative. 

## Specification

In supporting the MaticX asset listing, this proposal creates a liquidity pool that reflects the characteristics shown below and connect the Chainlink oracle price source to AaveOracle.

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of the whole proposal lifecycle.

This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Link to Test Cases: [Here](https://github.com/llama-community/aave-v3-crosschain-maticx-listing/blob/master/src/test/PolygonMaticXE2E.t.sol)

## Implementation

This proposal presents the following parameter configuration upon listing MaticX.

Risk Parameters:

Collateral: Yes
Borrowing: No
LTV: 50%
Liquidation Threshold: 65%
Liquidation Bonus: 10%
Reserve Factor: 20%
Chainlink Oracle: [0x5d37E4b374E6907de8Fc7fb33EE3b0af403C7403](https://polygonscan.com/address/0x5d37E4b374E6907de8Fc7fb33EE3b0af403C7403)

Variable Interest Rate Parameters:

UOptimal: 45%
R_0: 0%
R_s1: 7%
R_s2: 300%

'MATIC correlated' eMode Parameters:

LTV: 92.5%
Liquidation Threshold: 95%
Liquidation Bonus: 1%
 
Supply / Borrow Caps:

NewSupplyCap: $6m MaticX

The governance forum proposal discussing Add MaticX on Aave v3 Polygon pool can be found [here](https://governance.aave.com/t/proposal-to-add-maticx-to-aave-v3-polygon-market/7995) and the snapshot vote can be found [here](https://snapshot.org/#/aave.eth/proposal/0x88e896a245ffeda703e0b8f5494f3e66628be6e32a7243e3341b545c2972857f). 

Link to Payload Implementation: [Here](https://github.com/llama-community/aave-v3-crosschain-maticx-listing/blob/master/src/contracts/polygon/MaticXPayload.sol)

**Deployed Contracts**
ProposalPayload = [0xD417d07c20e31F6e129fa68182054B641FbEC8Bd](https://polygonscan.com/address/0xD417d07c20e31F6e129fa68182054B641FbEC8Bd)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
