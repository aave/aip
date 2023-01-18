---
title: Ethereum v2 Collector Contract Consolidation
author: Llama, DeFi_Consulting, efecarranza, dydymoon
shortDescription: Consolidate the assets held within the v2 Collector Contract
discussion: https://governance.aave.com/t/arfc-ethereum-v2-collector-contract-consolidation/10909
created: 2023-01-17
updated: 2023-01-18
---

# Summary
@llamaxyz proposes consolidating the Aave v2 Collector Contract holdings by swapping a portion of the long tail assets to USDC and redeeming assets from the Aave AMM deployment.

# Abstract
The Aave v2 Collector Contract has accumulated a holding in several assets over time. Assets from the v1, v2, RWA, ARC, and AMM depoloyments all accumulate in the Ethereum v2 Collector Contract. This proposal is the first of several intended to consolidate the various Collector Contracts and Treasury holdings.

This proposal seeks to consolidate 17 assets in the v2 Ethereum Collector Contract to USDC and redeem ammTokens for the underlying assets.

# Motivation
The DAO is currently accumulating over 60 assets in the v2 Collector Contract from various Aave deployments. Many of these holdings are of small economic value, are undercollateralized assets, or exhibit volatile pricing behaviour. Upon consolidating the DAO’s assets into USDC, which most of the DAO’s costs are denominated in, Llama intends to present the community with recommendations for deploying a portion of the larger holdings.

The AMM Liquidity Pool, v2, attracts very little capital and usage relative to other deployments. A number of the assets are frozen and, with v3 being deployed on Ethereum soon, it makes sense for the DAO to relocate this capital away from from the v2 AMM deployment. This proposal enables the following ammTokens, aAmmDAI, aAmmUSDC, aAmmUSDT, aAmmWBTC, and aAmmWETH to be redeemed periodically by calling a contract. Any actor will be able to interact with the contract via Etherscan. Llama, or anyone else, can redeem these ammTokens periodically with the underlying asset to be held within the v2 Collector Contract.

# Specification
Thie following assets held within the Ethereum v2 Collector Contract are to be converted to USDC via swap contract.

![long-tail asssets](https://i.imgur.com/2WY7n0o.png)

Users will be able to deposit USDC and receive the tokens mentioned in the table above, plus a small premium. The premium is expected to reimburse the cost incurred from swapping the applicable token to USDC along with associated gas costs. The methodology enables actors to support Aave in swapping one asset for another by creating an arbitrage opportunity in a decentralized manner.

The following assets are to be redeemed from the AMM deployment.

![amm assets](https://i.imgur.com/e1WHaaM.png)

# Implementation
The below outlines at a high level the flow of events this proposal will achieve:

Redeem aTokens and ammTokens for underlying asset
Deploy a Swap Contract whereby actors can deposit USDC and receive a selected token stated in the above table at the Chainlink Oracle price + premium
v2 Collector Contract receives USDC
Test cases can be found [here](https://github.com/llama-community/aave-v2-collector-consolidation/blob/main/src/test/ProposalPayloadE2E.t.sol)

Payload Implementation can be found [here](https://github.com/llama-community/aave-v2-collector-consolidation/blob/main/src/ProposalPayload.sol)

Proposal Payload = [0xBefcd01681224555b74eAC87207eaF9Bc3361F59](https://etherscan.io/address/0xBefcd01681224555b74eAC87207eaF9Bc3361F59)

# Copyright
Copyright and related rights waived via CC0.
