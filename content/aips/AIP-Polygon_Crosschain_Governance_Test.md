---
aip: <to be assigned>
title: Polygon Cross-chain Governance Test
status: WIP
author: Steven Valeri (@stevenvaleri)
shortDescription: Test the Aave Polygon governance bridge contract prior to setting it as owner of the Aave Polygon market
discussions: Github Issues
created: 2021-07-30
updated (*optional): N/A
requires (*optional): N/A
---

## Simple Summary

The intention of this AIP is to test a cross-chain transaction workflow that would enable Aave's Ethereum based governance to control the Aave Polygon market. The proposal is a transaction that would make updates to a **mock** Aave market on Polygon. If approved, the transaction would trigger a cross-chain message, flowing from Aave's Ethereum Governance contract, to a new contract - the `PolygonBridgeExecutor`. The `PolygonBridgeExecutor` would store the proposed market updates for a delay window, and then allow for the updates to be executed on the **mock** Aave market on Polygon.

This proposal will allow testing the end-to-end crosschain transaction workflow for Polygon market governance using both the Ethereum and Polygon mainnet contracts in a way that cannot be replicated in another manner. This test will support the case in the future to transfer ownership of the Aave Polygon Market to Aave's Ethereum based governance.

**In-Scope:**
A test of the governance cross-chain bridge functionality on a **mock** Aave Polygon market.

**Out-of-Scope:**
Transferring ownership of the Aave Polygon Market

## Abstract

Test an implementation of a cross-chain governance workflow, allowing Aave's Ethereum based governance to execute a transaction updating a **mock** Aave market deployed on Polygon.

## Motivation

Before suggesting transferring ownership of the Aave Polygon market to a cross-chain bridge workflow, testing the contracts involved as thoroughly as possible is a necessity. This AIP is a `real world` test using the Aave Ethereum based governance contract to test the cross-chain bridge contracts on a **mock** Aave Polygon Market. The main reasons for testing to this extent are:

+ Cross-chain / bridge transactions are relatively new and complex.
+ The risk of this workflow being deployed and not operating correctly would have a HIGH impact

The transfer of ownership of the Aave Polygon Market to Aave's Ethereum based governance is **not** in-scope of this AIP, but understanding the motivation behind that desired change is important to understanding the motivation for this test.

The current owner of the Aave Polygon Market a multi-sig wallet. Two factors went into this initial decision to not have the market controlled by the Aave governance process to begin with:

1. The ability to rapidly address any issues in the market's initial deployment
2. The technical complexities of implementing a cross-chain governance platform

Given Aave's goal of decentralized ownership of deployed markets, transferring the Aave Polygon market ownership from a multi-sig to Aave governance, is an obvious next step. The Polygon market has matured to the point that immediate intervention is less likely to be required. Additionally, the Aave core team has developed a deployed a cross-chain governance platform aimed at providing a broad solution for cross-chain governance. With the two initial impediments of having the Aave Polygon market owned by Aave governance on Ethereum removed, it likely makes sense in a future AIP, to remove the multi-sig and transfer ownership to Aave governance, once testing (including this AIP) and auditing  of the cross-chain bridge contract is complete.

## Specification

A detailed specification of the crosschain-bridge contract and workflow is outlined in the repo here

https://github.com/Aave/governance-crosschain-bridges

For this test specifically, the test would flow from Aave governance on Ethereum, through a cross chain transaction to the `PolygonBridgeExecutor` contract. Then after a delay, the proposal would be executed on Polygon to make updates to the **mock** Aave Polygon market.

The general flow of this test will be

1. Propose cross-chain test transactions (Aave governance-v2)
2. Vote on cross-chain test transactions (Aave governance-v2)
3. Queue test transactions
4. Execute cross-chain test transactions 
4a. Execute transaction from Aave Governance (Aave governance-v2)
4b. Bridge the test transactions to Polygon  (Polygon fxPortal and Polygon Inherent Bridge Functionality)
4c. Receive bridged message on Polygon       (Polygon fxPortal and Polygon Inherent Bridge Functionality)
4d. Queue transactions for execution in PolygonBridgeExecutor (Aave governance-crosschain-bridges)
5. Wait for delay
6. Execute queued transactions in the PolygonBridgeExecutor   (Aave governance-crosschain-bridges)
6a. Turn off borrowing for the **mock** Dai reserve
6b. Transfer POOL_ADMIN rights to a dummy address
6c. Transfer ownership of the **mock** Aave market to a dummy address
7. Confirm the expected updates have been made on **mock** Aave market

## Rationale

This AIP is not actually changing anything in the ecosystem. It is merely a test of a contract and workflow that, in the future, could enable the Aave Ethereum based governance to control the Aave Polygon Market.

Testing the contracts that enable this cross-chain bridging as thoroughly as possible, including via this proposed test are rationale, despite their cost, given the critical role the cross-chain bridging will play if deployed and used for cross-chain governance.

## Test Cases

A full suit of tests with 100% coverage is included in the repo https://github.com/Aave/governance-crosschain-bridges. The cross-chain workflow has also successfully been tested on the Goerli-Mumbai test networks.

## Implementation

A mock implementation of this proposed test can be found here:

https://github.com/Aave/governance-crosschain-bridges/tree/feat/mainnet-test

After setting up the repository: 

`npm run hardhat mock-mainnet-proposal`
runs on Ethereum fork to makes sure everything is encoded correctly to be submitted for the proposal


`npm run hardhat mock-Polygon-test`
set a .env variable `Polygon_FORK = "true"` to run the test updating the Polygon market via the mainnet PolygonBridgeExecutor on a Polygon fork

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).