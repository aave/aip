---
aip: 28
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

The intention of this AIP is to test a cross-chain transaction workflow that would enable the Ethereum based smart contract for governance for the Aave Protocol (the "Aave Ethereum Governance") to control the deployment of the Aave Protocol on Polygon (the "Aave Polygon market"). The proposal is written as a transaction that would make updates to a **mock** Aave Polygon market. If approved, the transaction would trigger a cross-chain message, flowing from Aave's Ethereum Governance, to a new contract - the `PolygonBridgeExecutor`. The `PolygonBridgeExecutor` would store the proposed market updates for a delay window, and then allow for the updates to be executed on the **mock** Aave Polygon market.

This proposal will allow testing the end-to-end crosschain transaction workflow for Polygon market governance using both the Ethereum and Polygon mainnet contracts in a way that cannot be replicated in another manner. This test will support the case in the future to transfer ownership of the Aave Polygon Market to Aave's Ethereum  governance.

**In-Scope:**
A test of the governance cross-chain bridge functionality on a **mock** Aave Polygon market.

**Out-of-Scope:**
Transferring ownership of the Aave Polygon Market to the Aave Ethereum Governance 

## Abstract

Test an implementation of a cross-chain governance workflow, allowing Aave's Ethereum Governance to execute a transaction updating a **mock** Aave market deployed on Polygon.

## Motivation

Before anyone in the community or otherwise can make a proposal to transfer ownership of the Aave Polygon market to a cross-chain bridge workflow, it is necessary that any smart contracts be tested as thoroughly as possible. This AIP is a `real world` test using the Aave Ethereum Governance contract to test the cross-chain bridge contracts on a **mock** Aave Polygon Market. The main reasons for testing to this extent are:

+ Cross-chain / bridge transactions are relatively new and complex
+ The risk of this workflow being deployed and not operating correctly would have a HIGH impact

The transfer of ownership of the Aave Polygon Market to Aave's Ethereum Governance is **not** in-scope of this AIP, but understanding the motivation behind that desired change is important to understanding the motivation for this test.

The current owner of the Aave Polygon Market a multi-sig wallet due to the time needed to build a cross-chain governance platform, as well as ensuring security for a new deployment on a new network.

Given the overarching goal that any deployment of the Aave Protocol be owned by decentralized governance, transferring ownership of the Aave Polygon market contracts to Aave Ethereum Governance, is an important next step. Additionally, we have developed and deployed a cross-chain governance platform aimed at providing a broad solution for cross-chain governance. After appropriate testing (including this AIP) and auditing of the cross-chain bridge contract, anyone can create a future AIP to remove the multi-sig over the Aave Polygon market and transfer ownership of those smart contracts to Aave Ethereum Governance.

## Specification

A detailed specification of the crosschain-bridge contract and workflow is outlined in the repo here

https://github.com/Aave/governance-crosschain-bridges

For this test specifically, the test would flow from Aave Ethereum Governance, through a cross chain transaction to the `PolygonBridgeExecutor` contract. Then after a delay, the proposal would be executed on Polygon to make updates to the **mock** Aave Polygon market.

The general flow of this test will be

1. Propose cross-chain test transactions (Aave governance-v2)
2. Vote on cross-chain test transactions (Aave governance-v2)
3. Queue test transactions
4. Execute cross-chain test transactions\
4a. Execute transaction from Aave Governance (Aave governance-v2)\
4b. Bridge the test transactions to Polygon  (Polygon fxPortal and Polygon Inherent Bridge Functionality)\
4c. Receive bridged message on Polygon       (Polygon fxPortal and Polygon Inherent Bridge Functionality)\
4d. Queue transactions for execution in PolygonBridgeExecutor (Aave governance-crosschain-bridges)\
5. Wait for delay
6. Execute queued transactions in the PolygonBridgeExecutor   (Aave governance-crosschain-bridges)\
6a. Turn off borrowing for the **mock** Dai reserve\
6b. Transfer POOL_ADMIN rights to a dummy address\
6c. Transfer ownership of the **mock** Aave market to a dummy address\
7. Confirm the expected updates have been made on **mock** Aave market

Related Contracts:

Polygon Bridge Executor Contracts\
PolygonBridgeExecutor: `0x60966EA42764c7c538Af9763Bc11860eB2556E6B`\
https://polygonscan.com/address/0xd63b6b5e0f043e9779c784ee1c14ffcbffb98b70#code \

Mock Polygon Market Contracts\
LendingPoolAddressProviderAddress = `0x240de965908e06a76e1937310627b709b5045bd6`\
https://polygonscan.com/address/0x240de965908e06a76e1937310627b709b5045bd6#code \
LendingPoolConfiguratorAddress (proxy)= `0xd63B6B5E0F043e9779C784Ee1c14fFcBffB98b70` \
https://polygonscan.com/address/0xd63b6b5e0f043e9779c784ee1c14ffcbffb98b70#writeContract#code \
LendingPoolConfiguratorAddress (implementation)= `0xADA061366575324945c7a097F829349acA6C9aB9` \
https://polygonscan.com/address/0xADA061366575324945c7a097F829349acA6C9aB9#code

Polygon Bridge Contracts\
FxRoot: `0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2` \
https://etherscan.io/address/0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2#code \
StateSender: `0x28e4F3a7f651294B9564800b2D01f35189A5bFbE` \
https://etherscan.io/address/0x28e4f3a7f651294b9564800b2d01f35189a5bfbe#code \
FxChild: `0x8397259c983751DAf40400790063935a11afa28a` \
https://polygonscan.com/address/0x8397259c983751DAf40400790063935a11afa28a#code \

## Rationale

This AIP will not make any actual changes in the current Aave Polygon market ecosystem or in any other deployment of the Aave Protocol. It is merely a test of a contract and workflow that, in the future, could enable the Aave Ethereum Governance to control the Aave Polygon Market.

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
