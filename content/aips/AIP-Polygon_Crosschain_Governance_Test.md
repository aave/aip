---
aip: <to be assigned>
title: <Polygon Cross-chain Governance Test>
status: WIP
author: Steven Valeri (@stevenvaleri)
shortDescription: Test the AAVE Polygon governance bridge contract prior to setting it as owner of the AAVE Polygon market
discussions: Github Issues
created: 2021-07-30
updated (*optional): N/A
requires (*optional): N/A
---

## Simple Summary

Aave's Polygon Market is currently owned by a multi-sig. The goal is to shift ownership of the Polygon Market to Aave's ethereum based Governance Contract. This shift requires a cross-chain bridge contract to take proposals that are passed via ethereum based governance and execute them on AAVE's polygon market.

The Aave core team has developed an deployed an implementation of this cross-chain governance functionality. The team has also deployed a mock AAVE market. This AIP aims at creating a `real-world` test of the functionality in the cross-chain governance contract. The expectation of this AIP is to create, pass, and execute a proposal on AAVE's ethereum based governance contract that will flow through the new cross-chain governance contract, and execute on the **mock** AAVE market on Polygon.

## Abstract

Test an implementation of a cross-chain governance contract, allowing AAVE's ethereum based governance to execute a transaction updating a **mock** AAVE market deployed on Polygon.

## Motivation

Before suggesting transferring ownership of the AAVE Polygon market to the newly deployed cross-chain bridge contract, testing this new contract as thoroughly as possible is a necessity. This AIP is **not** a transfer of ownership of the AAVE Polygon Market to the cross-chain bridge contract, it is a `real world` test using the AAVE Ethereum based governance contract to test the cross-chain bridge contract on a **mock** Aave Polygon Market. The main reasons for testing to this extent are:

+ Cross-chain / bridge transactions are relatively new and complex.
+ The risk of a contract owning a market, not operating correctly would have a HIGH impact

While the transfer of ownership of the AAVE Polygon Market to AAVE's Ethereum based governance is **not** in-scope of this AIP, understanding the motivation behind that desired change is important to understanding the motivation for this test.

The current owner of the AAVE Polygon Market a multi-sig wallet. Two factors went into this initial decision to not have the market controlled by the Aave governance process to begin with:

1. The ability to rapidly address any issues in the market's initial deployment
2. The technical complexities of implementing a cross-chain governance platform

Given AAVE'S goal of decentralized ownership of deployed markets, transferring the AAVE Polygon market ownership from a multi-sig to AAVE governance, is an obvious next step. The Polygon market has matured to the point that immediate intervention is less likely to be required. Additionally, the AAVE core team has developed a cross-chain governance platform aimed at providing a broad solution for cross-chain governance. With the two initial impediments of having the AAVE polygon market owned by AAVE governance on ethereum removed, it makes sense to remove the multi-sig and transfer ownership to AAVE governance once testing (including this AIP) and auditing  of the cross-chain bridge contract is complete.

## Specification

A detailed specification of the crosschain-bridge contract is outlined in the repo here

`https://github.com/aave/governance-crosschain-bridges`

The general flow of this test will be

1. Propose cross-chain test transactions (Aave governance-v2)
2. Vote on cross-chain test transactions (Aave governance-v2)
3. Execute cross-chain test transactions 
3a. Execute transaction from AAVE Governance (Aave governance-v2)
3b. Bridge the test transactions to polygon  (Polygon fxPortal and Polygon Inherent Bridge Functionality)
3c. Receive bridged message on polygon       (Polygon fxPortal and Polygon Inherent Bridge Functionality)
3d. Queue transactions for execution in PolygonBridgeExecutor (AAVE governance-crosschain-bridges)
4. Wait for delay
5. Execute queued transactions in the PolygonBridgeExecutor   (AAVE governance-crosschain-bridges)
5a. Turn off borrowing for the **mock** Dai reserve
5b. Transfer POOL_ADMIN rights to a dummy address
5c. Transfer ownership of the **mock** AAVE market to a dummy address
6. Confirm the expected updates have been made on **mock** AAVE market


## Rationale

This AIP is not actually changing anything in the ecosystem. It is merely a test of a contract that will hopefully in the future enable the AAVE ethereum based governance to control the AAVE Polygon Market.

Testing the contracts that enable this cross-chain bridging as thoroughly as possible, including via this proposed on-chain, main-net test are rationale, despite their cost, given the critical role the cross-chain bridging will play once deployed.

## Test Cases

A full suit of tests with 100% coverage is included in the repo `https://github.com/aave/governance-crosschain-bridges`. The cross-chain functionality has also successfully been tested on the Goerli-Mumbai networks.

## Implementation

A mock implementation of this proposed test can be found here:

`https://github.com/aave/governance-crosschain-bridges/tree/feat/mainnet-test`

After setting up the repository: 

`npm run hardhat mock-mainnet-proposal`
runs on ethereum fork to makes sure everything is encoded correctly to be submitted for the proposal


`npm run hardhat mock-polygon-test`
set a .env variable `POLYGON_FORK = "true"` to run the test updating the polygon market via the mainnet PolygonBridgeExecutor on a polygon fork

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).