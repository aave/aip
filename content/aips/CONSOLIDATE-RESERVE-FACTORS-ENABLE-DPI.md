---
title: Consolidate Reserve Factors and Enable Borrowing DPI
status: Proposed
author: Llama - Matthew Graham (@Matthew_Graham_), Dydymoon (@dydymoon1), Austin Green (@AustinGreen), Noah Citron (@NoahCitron)
shortDescription: Consolidate Aave Mainnet V1 and V2 Reserve Factors and Enable Borrowing DPI
discussions: https://governance.aave.com/t/arc-consolidate-aave-v1-v2-amm-reserve-factors-purchase-cvx-and-deploy-to-earn-yield/6797
created: 2022-05-30
---

## Simple Summary

This is a copy of [Proposal 76](https://app.aave.com/governance/proposal/76/) ([IPFS](https://gateway.pinata.cloud/ipfs/QmaqqGyP76hDi5ywqSoF5r63jVrG7TdZVNzcm8Zdwa4PeM)). It expired before execution so we need to re-propose it to the Aave community.

This AIP is the combination of two ARCs presented on the Aave Governance Forum. This proposal performs the initial step of the [Llama treasury management strategy](https://governance.aave.com/t/arc-consolidate-aave-v1-v2-amm-reserve-factors-purchase-cvx-and-deploy-to-earn-yield/6797) and also includes [Index Coop’s enable borrowing of DPI](https://governance.aave.com/t/arc-enable-borrowing-of-dpi-on-aave-markets/6976) proposal. 

The Llama proposal entails re-routing the current and future revenue from the mainnet V1 Reserve Factor to the mainnet V2 Reserve Factor. The Index Coop proposal re-enables users to borrow DPI after it was disable by [AIP-44](https://app.aave.com/#/governance/44-QmNVWrrm3ieyRRVD4f77zdxrvSUj1W4HDCojLKNcxmVQhr). 

## Abstract

The Llama Community recommends consolidating revenue earned on all Aave markets on mainnet into a single Reserve Factor (RF). This proposal consolidates past and future Aave mainnet V1 market revenue into the mainnet V2 RF. In the future, other aspects of the Llama treasury management proposal will be implemented through separate AIPs.

This proposal is broken into two parts, the second part is to enable borrowing of DPI. The borrowing of DPI was disabled via [AIP-44](https://app.aave.com/#/governance/44-QmNVWrrm3ieyRRVD4f77zdxrvSUj1W4HDCojLKNcxmVQhr) along with xSUSHI. Shortly after enacting AIP-44, DPI was found to be safe. This proposal is to reinstate DPI as an asset that can be borrowed on the Aave markets.

## Motivation

### Part A - Consolidate Aave Mainnet V1and V2 Reserve Factors

The legacy V1 market continues to generate mostly flash loan fee revenue and this has slowed down in recent times. There is only ~$102.7M of TVL remaining in the V1 market, and at the rate of which revenue is generated is expected to continue declining as more and more users move to V2 or V3 over time. 

This proposal recommends consolidating the Aave V1, V2, and AMM market revenue into a single location before deploying the capital to earn additional yield. The V1 RF holds around [~$435K](https://etherscan.io/address/0xe3d9988f676457123c5fd01297605efdd0cba1ae) of assets at the time of writing, whereas the Ethereum V2 + AMM market holds [$26.88M](https://etherscan.io/address/0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c) of assets. Consolidating the RF balance would increase the mainnet treasury to around $27.32M.

## Specification

### Part A - Consolidate Aave Mainnet V1 and V2 Reserve Factors

Within this proposal, the assets held with the Aave mainnet V1 RF are to be transferred to the Aave mainnet V2 RF. All future revenue from the V1 deployment will now automatically accrue in the V2 RF upon implementation of this proposal. Post implementation of this proposal, the V1 RF is not expected to accrue any future revenue.

A detailed breakdown of the consolidated constituents can be found on the [Aave Treasury Finances by Llama Dune Dashboard](https://dune.com/llama/Aave-Treasury-Finances-by-Llama?Trailing%20Num%20Time-Series=60).

### Part B - Enable Borrowing DPI

The recommendation is to enable borrowing and although there are a number of extrinsic use cases for DPI emerging, starting with a utilisation rate of 45%. For Variable Interest Rate parameters, a Base of 0, Slope 1 of 7% and Slope 2 of 300% was selected which is similar to the constituents within DPI. At this point in time, there is no ask for Stable Interest Rate borrowing. 

The details outlining the original specification for listing DPI can be found here, [AIP-31](https://app.aave.com/#/governance/27-Qme2d9yZ81j3JkQ4ecr7BSZv4Rvh5NyU36um48f5S75CQG). For any additional information see Index Coop’s website: https://www.indexcoop.com/dpi.

## Test Cases

The full test of this proposal can be found here: https://github.com/llama-community/refactor-aave-rf/

## Implementation

Aave mainnet V1 Reserve Factor: `0xE3d9988F676457123C5fD01297605efdD0Cba1ae`
Aave mainnet V2 Reserve Factor: `0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c`

By calling `function execute()` and `function distributeTokens()` on the ProposalPayload contract, the token distributor will be upgraded to send all funds to the `Aave mainnet V2 Reserve Factor`, the AAVE protocol v1's token distributor will be set to `Aave mainnet V2 Reserve Factor`, DPI borrowing will be enabled and all large balances from the `Aave mainnet V1 Reserve Factor` will be distributed to `Aave mainnet V2 Reserve Factor`. The new token distributor implementation was deployed to [0x55c559730cbCA5deB0bf9B85961957FfDf502603](
https://etherscan.io/address/0x55c559730cbCA5deB0bf9B85961957FfDf502603).

**Target Contracts**

ProposalPayload = [0x43D2A74c55eE4DB917251eC934b2fD03E3069bd6](
https://etherscan.io/address/0x43D2A74c55eE4DB917251eC934b2fD03E3069bd6)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).