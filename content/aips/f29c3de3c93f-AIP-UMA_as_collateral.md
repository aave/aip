---
aip: AIP-38
title: Adding UMA as a collateral currency on AAVE
status: WIP
author: Tommy 
shortDescription: Aave governance proposal to enable UMA as a collateral asset
discussions: View [here](https://governance.aave.com/t/listing-proposal-add-uma-as-collateral-to-lend-borrow-on-aave/6196)
created: 2021-11-15
updated: 2021-11-17
---

## Simple Summary

UMA is a popular and essential asset for securing contracts that use UMA Protocol. It is not currently possible to be utilized UMA token as collateral to obtain a loan on Aave. 

UMA Protocol is a community-led optimistic oracle that enables anyone to obtain a price on anything. UMA's Optimistic Oracle enables a suite of products such as [KPI Options](https://umaproject.org/kpi-options.html), cross-chain bridges such as [across.to](https://across.to/), [Range tokens](https://umaproject.org/range-tokens.html), [Success Tokens](https://umaproject.org/success-tokens.html) and [Call/Put Options](https://umaproject.org/call-put.html0). 

UMA protocol has a current TVL of $85.2 million. AAVE will obtain a first mover advantage for enabling users to use UMA token as collateral in loans. 

## Abstract
Add UMA as a collateral currency on AAVE v2 and v3

## Motivation

Aave would be the first lending platform to support UMA. 

UMA holders could use their existing UMA as collateral to obtain over-collatearlized loans. 

UMA has a market cap of $1,024,092,720 and is listed on decentralized and centralized exchanges (Coinbase, Binance, Gemini, OKEx, Huobi, etc.). 

## Specification

Add UMA token as a collateral currency on AAVE. 

Add Token address: 0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828

https://etherscan.io/token/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828

Chainlink Oracle - [UMA / ETH](https://docs.chain.link/docs/ethereum-addresses/) [0xf817B69EA583CAFF291E287CaE00Ea329d22765C](https://etherscan.io/address/0xf817B69EA583CAFF291E287CaE00Ea329d22765C)

## Rationale

UMA and AAVE are both major driving forces in enabling decentralized financial services to anyone with an internet connect. 

The rationale for adding UMA to the AAVE V2/V3 market is simple; UMA is a popular defi token and an essential asset for securing contracts built on UMA. UMA is not currently possible to be utilized as collateral in loans on Aave. 

## Implementation

Allow users to use UMA token as collateral to borrow WETH (0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2).

Use the Chainlink Oracle to obtain the price of UMA - [UMA / ETH](https://docs.chain.link/docs/ethereum-addresses/) [0xf817B69EA583CAFF291E287CaE00Ea329d22765C](https://etherscan.io/address/0xf817B69EA583CAFF291E287CaE00Ea329d22765C)

### Test Cases

1. Use 300 UMA tokens to obtain a loan of 1 WETH
2. Borrowers cannot borrow UMA tokens, only WETH
________
1. Use 280 UMA tokens to obtain a loan of .8 WETH
2. Borrowers cannot borrow UMA tokens, only WETH

## Security Considerations

A security concern to consider is that someone could use Aave to attempt to obtain 51% or more of the UMA tokens to corrupt a vote and extract value from UMA. As a result of this we propose to only add UMA as a collateral asset whereby borrowers cannot borrow UMA tokens with UMA as collateral.

## References
[UMA Protocol Website Site](https://umaproject.org)
[UMA Protocol Doc Site](https://docs.umaproject.org/)
[Projects on UMA](https://projects.umaproject.org/)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

