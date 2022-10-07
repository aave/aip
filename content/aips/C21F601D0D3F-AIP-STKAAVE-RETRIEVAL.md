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

Balancer DAO seeks to retrieve around 1,500 stkAAVE from several Linear Pools. Balancer DAO accrued this stkAAVE after it deposited liquidity into Aave while Liquidity Mining incentives were being distributed, [1,2]. 

The proposal is to implement the changes required to enable Balancer DAO to retrieve the stkaAAVE from the Linear Pools within the Balancer Boosted Aave Pool.

# Motivation

Three Linear Pools within the Balancer Boosted Aave Pool have accrued around 1,500 stkAAVE from Liquidity Mining rewards, [3]. 

The Linear Pool holds the aTokens and receives the stkAAVE liquidity mining rewards but can not call the `claimRewards` function or manage any stkAAVE if it was received.

The Linear Pools unable to call `getUnclaimedRewards()` with [`0xba12222222228d8ba445958a75a0704d566bf2c8`](https://etherscan.io/address/0xba12222222228d8ba445958a75a0704d566bf2c8) are detailed below:

[0x02d60b84491589974263d922d9cc7a3152618ef6](https://etherscan.io/address/0x02d60b84491589974263d922d9cc7a3152618ef6)
[0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de](https://etherscan.io/address/0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de)
[0xf8fd466f12e236f4c96f7cce6c79eadb819abf58](https://etherscan.io/address/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58)

Aave enables other addresses to claim on behalf of smart contracts using the `claimOnBehalfOf()` function. 

In order to do this, a specified address must be declared the valid owner of the contract.

# Specification

Set the StkAave Retrieval contract as the cliamer for Balancer in the incentives controller contract, [4].

Snapshot and forum discussion can be found at reference [6] and [7].

# Test Cases

This proposal has been tested and peer reviewed by Bored Ghost Developing, [5].

Test cases, payload, and retrieval contract can be found at reference [8], [9] & [10] respectively.

# Implementation
 
1) Proposal: Call setClaimer(0xba12222222228d8ba445958a75a0704d566bf2c8, RETRIEVAL_CONTRACT_ADDR) for Balancer contracts on [Incentives Controller Proxy](https://etherscan.io/address/0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5#readProxyContract) 

2) Balancer calls retrieve() on the retrival contract, which claims stkAave they have accruied in the following pools:
- Balancer DAI-aDAI Linear Pool[0x02d60b84491589974263d922d9cc7a3152618ef6](https://etherscan.io/address/0x02d60b84491589974263d922d9cc7a3152618ef6)
- Balancer USDC-aUSDC Linear Pool [0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de](https://etherscan.io/address/0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de)
- Balancer USDT-aUSDT Linear Pool
[0xf8fd466f12e236f4c96f7cce6c79eadb819abf58](https://etherscan.io/address/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58)


# References

[1](https://docs.balancer.fi/products/balancer-pools/boosted-pools#linear-pools)
[2](https://governance.aave.com/t/arc-continue-liquidity-mining-program-on-aave-v2-ethereum-market-and-introduce-liquidity-mining-on-aave-arc-market/7189)
[3](https://app.balancer.fi/#/pool/0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe)
[4](https://etherscan.io/address/0x10a19e7ee7d7f8a52822f6817de8ea18204f2e4f)
[5](https://twitter.com/bgdlabs)
[6](https://snapshot.org/#/aave.eth/proposal/0xdaa660ea59f8678748d6f133d7d7ed70b941798aa9a0044a16a1285d09e26bf5)
[7](https://governance.aave.com/t/arc-whitelist-balancer-s-liquidity-mining-claim/9724)
[8](https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/test/StkAaveRetrievalE2E.t.sol)
[9](https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/ProposalPayload.sol)
[10](https://github.com/llama-community/aave-stkaave-retrieval/blob/main/src/StkAaveRetrieval.sol)

# Copyright

Copyright and related rights waived via CC0. 