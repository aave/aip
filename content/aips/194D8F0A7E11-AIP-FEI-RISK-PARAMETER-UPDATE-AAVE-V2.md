---
title: FEI Risk Parameter Updates for Ethereum Aave v2 Market
status: Proposed
author: Llama (@llama), Matthew_Graham (@Matthew_Graham_), defijesus.eth (@eldefijesus)
shortDescription: FEI Risk Parameter Updates for Ethereum Aave v2 Market
discussions: https://governance.aave.com/t/arc-risk-parameter-updates-for-ethereum-aave-v2-market/9393
created: 2022-08-29
---

# Simple Summary

In response to Tribe DAO’s proposal to enter a terminal state, this ARC proposes disabling Deposits, disabling Borrowing and route 100% of the interest paid by FEI borrowers to the Reserve Factor.

# Abstract

Tribe DAO is dissolving the DAO’s assets and TRIBE governance token. As a result, FEI will become backed 1:1 with DAI and redeemable 1FEI:1DAI. With Tribe DAO transitioning into a terminal state, the FEI stablecoin will overtime be redeemed for DAI.

As FEI is redeemed for DAI, over time FEI’s circulating supply and liquidity will fall away. Without sufficient liquidity, liquidations can not be performed efficiently which creates a risk for the Ethereum Aave v2 market.

In response, this ARC proposes freezing the FEI market which will Disabling Deposits, Disabling Borrowing and increase the Reserve Factor from 20% to 100%. Users will still be able to redeem aFEI and repay debt. 

# Motivation

With the emergence of news that Tribe DAO intends to dissolve FEI and the Protocol Controlled Value (PCV) backing the stablecoin, there is a need to amend the FEI reserve in preparation of the risks to emerge with transition Tribe DAO to a terminal state.

The details around how Tribe DAO will transition from current state to terminal state can be found [here](https://tribe.fei.money/t/tip-121-proposal-for-the-future-of-the-tribe-dao/4475).

Snapshot found [here](https://snapshot.org/#/aave.eth/proposal/0x19df23070be999efbb7caf6cd35c320eb74dd119bcb15d003dc2e82c2bbd0d94). 

## Specification

The proposal will freeze the FEI reserve on the pool, stopping supply of liquidity and borrowing.

Borrowing Enabled → Disable 
Deposits Enabled → Disable 

Also,

Reserve Factor 20% → 100%

## Test Cases

This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Test cases can be found: [Here](https://github.com/llama-community/aave-risk-param-updates-fei/blob/main/src/test/ValidationFeiRiskParamsUpdate.sol)

## Implementation

Deployment of the proposal payload can be found [here](https://etherscan.io/address/0xb8fe2a2104afb975240d3d32a7823a01cb74639f#code)

The repository of the payload can be found [here](https://github.com/llama-community/aave-risk-param-updates-fei)
 
The proposal calls freezeReserve on the LendingPoolConfigurator (0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) targeting FEI (0x956F47F50A910163D8BF957Cf5846D573E7f87CA).

The proposal calls the setReserveFactor function on the LendingPoolConfigurator (0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) for the FEI (0x956F47F50A910163D8BF957Cf5846D573E7f87CA) market with the new reserve Factor set to 10000 (100%).

# Copyright

Copyright and related rights waived via CC0.
