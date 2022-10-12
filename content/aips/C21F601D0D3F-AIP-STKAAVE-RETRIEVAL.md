---
title: Whitelist Balancer’s Liquidity Mining Claim
author: Llama, Matthew Graham, Dan Hepworth
shortDescription: Whitelist Balancer’s Liquidity Mining Claim
discussions: https://governance.aave.com/t/arc-whitelist-balancer-s-liquidity-mining-claim/9724
created: 2022-10-10
---

# Simple Summary

This proposal enables Balancer DAO to retrieve the stkAAVE Liquidity Mining incentives distributed to Linear Pools in the Balancer Boosted Aave Pool.

# Abstract

Balancer DAO seeks to retrieve around 1,500 stkAAVE from several Linear Pools. Balancer DAO accrued this stkAAVE after it deposited liquidity into Aave while Liquidity Mining incentives were being distributed [1,2]. 

The proposal is to implement the changes required to enable Balancer DAO to retrieve the stkAAVE from the Linear Pools within the Balancer Boosted Aave Pool.

# Motivation

Three Linear Pools within the Balancer Boosted Aave Pool have accrued around 1,500 stkAAVE from Liquidity Mining rewards, [3]. 

The Linear Pool holds the aTokens and receives the stkAAVE liquidity mining rewards but can not call the `claimRewards` function or manage any stkAAVE if it was received.

The Linear Pools unable to call `getUnclaimedRewards()` with [0xba12222222228d8ba445958a75a0704d566bf2c8](https://etherscan.io/address/0xba12222222228d8ba445958a75a0704d566bf2c8) are detailed below:

1. [0x02d60b84491589974263d922d9cc7a3152618ef6](https://etherscan.io/address/0x02d60b84491589974263d922d9cc7a3152618ef6)
2. [0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de](https://etherscan.io/address/0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de)
3. [0xf8fd466f12e236f4c96f7cce6c79eadb819abf58](https://etherscan.io/address/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58)

Aave enables other addresses to claim on behalf of smart contracts using the `claimOnBehalfOf()` function. 

# Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Llama Github [here](https://github.com/llama-community/aave-stkaave-retrieval)

The Proposal Payload does the following:
1. Sets the claimer of the Balancer DAO contract's stkAAVE rewards to be the Retrieval Contract.

The retrieval contract does the following:
1. It can only be called by the Balancer Multisig: [0x10A19e7eE7d7F8a52822f6817de8ea18204F2e4f](https://etherscan.io/address/0x10A19e7eE7d7F8a52822f6817de8ea18204F2e4f).
2. It claims the stkAAVE rewards on behalf of the Balancer DAO: [0xba12222222228d8ba445958a75a0704d566bf2c8](https://etherscan.io/address/0xba12222222228d8ba445958a75a0704d566bf2c8) from aDAI, aUSDC, and aUSDT Balancer Linear Pools.
3. It transfers the stkAAVE rewards to the Balancer Multisig: [0x10A19e7eE7d7F8a52822f6817de8ea18204F2e4f](https://etherscan.io/address/0x10A19e7eE7d7F8a52822f6817de8ea18204F2e4f).

Snapshot and forum discussion can be found at reference [6] and [7].

## Test Cases

This proposal has been tested and peer reviewed by Bored Ghost Developing [5], including simulations on mainnet of the whole proposal lifecycle.

Test cases can be found at reference [8].

## Implementation
 
Payload Implementation and Retrieval Contract can be found at reference [9] & [10] respectively.

## Deployed Contracts
1. Proposal Payload = [0x9e0f13a2298a879c7834d84c2967fccc7fa42df8](https://etherscan.io/address/0x9e0f13a2298a879c7834d84c2967fccc7fa42df8)
2. Retrieval Contract = [0x0e2d46fe246eb926d939a10efa96fb7d4eb14bb3](https://etherscan.io/address/0x0e2d46fe246eb926d939a10efa96fb7d4eb14bb3)

# References

1. [https://docs.balancer.fi/products/balancer-pools/boosted-pools#linear-pools](https://docs.balancer.fi/products/balancer-pools/boosted-pools#linear-pools)
2. [https://governance.aave.com/t/arc-continue-liquidity-mining-program-on-aave-v2-ethereum-market-and-introduce-liquidity-mining-on-aave-arc-market/7189](https://governance.aave.com/t/arc-continue-liquidity-mining-program-on-aave-v2-ethereum-market-and-introduce-liquidity-mining-on-aave-arc-market/7189)
3. [https://app.balancer.fi/#/pool/0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe](https://app.balancer.fi/#/pool/0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe)
4. [https://etherscan.io/address/0x10a19e7ee7d7f8a52822f6817de8ea18204f2e4f](https://etherscan.io/address/0x10a19e7ee7d7f8a52822f6817de8ea18204f2e4f)
5. [https://twitter.com/bgdlabs](https://twitter.com/bgdlabs)
6. [https://snapshot.org/#/aave.eth/proposal/0xdaa660ea59f8678748d6f133d7d7ed70b941798aa9a0044a16a1285d09e26bf5](https://snapshot.org/#/aave.eth/proposal/0xdaa660ea59f8678748d6f133d7d7ed70b941798aa9a0044a16a1285d09e26bf5)
7. [https://governance.aave.com/t/arc-whitelist-balancer-s-liquidity-mining-claim/9724](https://governance.aave.com/t/arc-whitelist-balancer-s-liquidity-mining-claim/9724)
8. [https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/test/StkAaveRetrievalE2E.t.sol](https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/test/StkAaveRetrievalE2E.t.sol)
9. [https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/ProposalPayload.sol](https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/ProposalPayload.sol)
10. [https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/StkAaveRetrieval.sol](https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/StkAaveRetrieval.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).