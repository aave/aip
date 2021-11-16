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

UMA is a popular and essential asset for securing contracts that use UMA Protocol. It is not currently possible to be utilized for borrowing or lending. UMA Protocol is a community-led optimistic oracle that enables anyone to obtain a price on anything. UMA's Optimistic Oracle enables a suite of products such as [KPI Options](https://umaproject.org/kpi-options.html), cross-chain bridges such as [across.to](https://across.to/), [Range tokens](https://umaproject.org/range-tokens.html), [Success Tokens](https://umaproject.org/success-tokens.html) and [Call/Put Options](https://umaproject.org/call-put.html0). 

UMA protocol has a current TVL of $85.2 million. AAVE will obtain a first mover advantage for enabling lending and borrowing services for UMA token. 

## Abstract
Add UMA as a collateral currency on AAVE v2 and v3

## Motivation

Aave would be the first lending platform to support UMA. 

UMA holders could use their existing UMA as collateral to obtain over-collatearlized loans. 

UMA has a market cap of $1,024,092,720 and is listed on decentralized and centralized exchanges (Coinbase, Binance, Gemini, OKEx, Huobi, etc.). 

## Specification

Add UMA token as a collateral currency on AAVE. 

Token address: 0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828

https://etherscan.io/token/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828

Chainlink Oracle - [UMA / ETH](https://docs.chain.link/docs/ethereum-addresses/) [0xf817B69EA583CAFF291E287CaE00Ea329d22765C](https://etherscan.io/address/0xf817B69EA583CAFF291E287CaE00Ea329d22765C)

## Rationale

UMA and AAVE are both major driving forces in enabling decentralized financial services to anyone with an internet connect. 

The rationale for adding UMA to the AAVE V2/V3 market is simple; UMA is a popular defi token and an essential asset for securing contracts built on UMA. It is not currently possible to be utilized for borrowing or lending.

## Implementation

Chainlink Oracle - [UMA / ETH](https://docs.chain.link/docs/ethereum-addresses/) [0xf817B69EA583CAFF291E287CaE00Ea329d22765C](https://etherscan.io/address/0xf817B69EA583CAFF291E287CaE00Ea329d22765C)


## Security Considerations

Contracts built on UMA leverage economic guarantees from UMA protocol whereby the cost to corrupt (i.e. obtain 51% of UMA tokens) must remain greater than the profit from corruption (i.e. the total amount you could steal from contracts on UMA). View here 1 for more information regarding these economic guarantees.

Some security concerns to consider are that someone could use Aave to attempt to obtain 51% or more of the UMA tokens to corrupt a vote and extract value from UMA. If someone does obtain 51% of UMA tokens via a loan on Aave and successfully corrupt a vote the price of UMA token would decrease and so would the bad actor’s debt. Being able to use UMA as collateral to obtain more capital also helps secure the value locked on UMA. Disputers on UMA could have a credit line against UMA tokens in the event they needs to perform very large liquidations but do not have the non-UMA capital on hand to do so. Borrowing is a clean operational approach to obtaining capital and securing the value locked on UMA.

## References
[UMA Protocol Website Site](https://umaproject.org)
[UMA Protocol Doc Site](https://docs.umaproject.org/)
[Projects on UMA](https://projects.umaproject.org/)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

