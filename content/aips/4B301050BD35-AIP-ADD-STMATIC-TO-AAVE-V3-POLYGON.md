---
title: Add stMATIC to Aave v3 pool on Polygon
status: Proposed
author: Llama (@llama), Matthew Graham (@Matthew_Graham_), Rajath Alex (@0xrajath)
shortDescription: Add stMATIC to Aave v3 pool on Polygon
discussions: https://governance.aave.com/t/proposal-add-support-for-stmatic-lido/7677
created: 2022-09-01
---

# Simple Summary

Llama proposes listing stMATIC on the Aave v3 Polygon pool. stMATIC is an ERC20 token that represents the account’s share of the total supply of MATIC tokens inside the Lido system. 

# Abstract

Lido is a DAO governed liquid staking protocol for the Polygon PoS chain. It allows users to stake their MATIC tokens on the Ethereum mainnet and immediately get the representation of their share in the form of stMATIC token without maintaining staking infrastructure. Users will receive staking rewards whilst being able to utilize their stMATIC tokens in secondary pools on Ethereum mainnet and Polygon.

Listing stMATIC as collateral will enable depositors to borrow funds against stMATIC. In addition, a special 'MATIC correlated' eMode will be created for just stMATIC and wMATIC, a $7.5M Supply Cap will be set and borrowing disabled to manage the risk exposure with this asset listing.

# Motivation

Listing stMATIC on the Aave v3 pool would allow Aave DAO to benefit from the first mover advantage and hopefully in time replicate the success of the stETH listing which has generated $1.38B in TVL on the Ethereum Aave v2 pool. 

As with the stETH listing on Ethereum Aave v2 pool, we expect stMATIC to stimulate demand for wMATIC and other assets. With the introduction of eMode on Aave v3, we expect the recursive stMATIC and wMATIC loop to create a significant source of yield for Users. 

## Specification

In supporting the stMATIC asset listing, this proposal creates a pool that reflects the characteristics shown below and connects the Chainlink oracle price source to AaveOracle.

## Test Cases

All the components involved in this proposal (tokens' implementations, interest rate strategy, oracle feed, proposal payload) have been tested and reviewed, including simulations on mainnet of the whole proposal lifecycle.

This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Link to Test Cases: [Here](https://github.com/llama-community/aave-v3-crosschain-stmatic-listing/blob/master/src/test/PolygonStMaticE2E.t.sol)

## Implementation

Llama recommends the following parameter configuration upon listing stMATIC.

Risk Parameters:

Collateral: Yes
Borrowing: No
LTV: 50%
Liquidation Threshold: 65%
Liquidation Bonus: 10%
Reserve Factor: 20%
Chainlink Oracle: [0x97371dF4492605486e23Da797fA68e55Fc38a13f](https://polygonscan.com/address/0x97371dF4492605486e23Da797fA68e55Fc38a13f)

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

NewSupplyCap: $7.5m stMATIC

The governance forum proposal discussing Add stMATIC on Aave v3 Polygon pool can be found [here](https://governance.aave.com/t/proposal-add-support-for-stmatic-lido/7677) and the snapshot vote can be found [here](https://snapshot.org/#/aave.eth/proposal/0xc8646abba01becf81ad32bf4adf48f723a31483dc4dedc773bbb6e3954c3990f). 

Link to Payload Implementation: [Here](https://github.com/llama-community/aave-v3-crosschain-stmatic-listing/blob/master/src/contracts/polygon/StMaticPayload.sol)

**Deployed Contracts**
ProposalPayload = [0xc730008C64783a283988b0fA3b5eE6b6F997922A](https://polygonscan.com/address/0xc730008C64783a283988b0fA3b5eE6b6F997922A)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
