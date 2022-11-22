---
title: Risk Parameter Updates for Ethereum Aave v2 Market
author: Llama - Matthew_Graham & defijesus + 3SE Holdings & oneski22
shortDescription: Risk Parameter Updates for Ethereum Aave v2 Market
discussions: https://governance.aave.com/t/arc-freeze-renfil-for-aave-v2-eth-market/10727
created: 2022-11-23
---

## Simple Summary

In response to Ren 1.0 Network winding down, this ARC proposes disabling Deposits, disabling Borrowing and routing 100% of the interest paid by renFIL borrowers to the Collector Contract.

## Abstract

The Ren community is sunsetting Ren 1.0 and seeking new funding prior to launching Ren 2.0 Network. The Ren team is currently funded by Alameda up until the end of Q4, recently filed for Chapter 11 Bankruptcy. In response the Ren team published an article on Medium outlining there intentions to do the following:

- Disable minting through Ren 1.0, while keeping burns enables (bridged assets backed 1:1)
- After 30 days, shut down Ren 1.0

As a result, the proposal seeks to disable Deposits and Disable Borrowing which is known as Freezing the renFIL Reserve. We also propose to increase the Reserve Factor to 100%. This proposal is similar to the freezing of the FEI Reserve in response to the events that transpired at Tribe DAO.


## Motivation

Given that Ren 1.0 was run under Alameda leadership which is now in bankruptcy proceedings, the Ren development team believes it is best to sunset the Ren 1.0 network. The details around how Ren 1.0 is sunsetting in preparation for launching v2 can be found [here](https://medium.com/renproject/moving-on-from-alameda-da62a823ce93).

Due to time and an abundance of caution, this proposal has not been submitted to Snapshot, instead going directly to AIP. 


## Specification

This proposal will freeze the renFIL Reserve lending market. 

Borrowing Enabled → Disable 
DepositsLending Enabled → Disable 

Also,

Reserve Factor 35% → 100%


## Test Cases
This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Test cases can be found: [here](https://github.com/defijesus/aave-v2-freeze-renfil/blob/main/src/test/ValidationRenfilRiskParamUpdate.sol)

## Implementation

The proposal calls freezeReserve on the LendingPoolConfigurator (0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) targeting renFIL (0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5).

The proposal calls the setReserveFactor function on the LendingPoolConfigurator (0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) for the renFIL (0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5) market with the new reserve Factor set to 10000 (100%).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
