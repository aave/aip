---
aip: AIP-38
title: Adding UMA as a collateral currency on AAVE
status: Proposed
author: Tommy 
shortDescription: Aave governance proposal to enable UMA as a collateral asset
discussions: View [here](https://governance.aave.com/t/listing-proposal-add-uma-as-collateral-to-lend-borrow-on-aave/6196) and [here](https://snapshot.org/#/aave.eth/proposal/0x1d4f6d9f376761409669ce498889d688ddada33c87796b14d9d646aebd86dbdd)
created: 2021-11-15
updated: 2022-02-07
---

## Simple Summary

I would like to propose AAVEngers to support the listing of UMA Token as an asset to be used as collateral on AAVE v2/v3.

## Abstract
Add UMA as a collateral currency on AAVE v2 and v3

## Motivation

UMA holders could use their existing UMA as collateral to obtain over-collatearlized loans. 

UMA has a market cap of $438,195,129 and is listed on decentralized and centralized exchanges (Coinbase, Binance, Gemini, etc.)

## Specification

Add UMA token as a collateral currency on AAVE. 

Add Token address: 0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828

https://etherscan.io/token/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828

Chainlink Oracle - [UMA / ETH](https://docs.chain.link/docs/ethereum-addresses/) [0xf817B69EA583CAFF291E287CaE00Ea329d22765C](https://etherscan.io/address/0xf817B69EA583CAFF291E287CaE00Ea329d22765C)

**Risk Parameters**

1. LTV - 55%

2. Liquidation Threshold - 65%

3. Liquidation Bonus - 15%

4. Reserve Factor - 35%

## Rationale

UMA and AAVE are both major driving forces in enabling decentralized financial services to anyone with an internet connect. 

The rationale for adding UMA to the AAVE V2/V3 market is simple; UMA is a popular Defi token and an essential asset for securing UMA's Optimistic Oracle. This will expand the utility of UMA for UMA tokenholders. 

Community consensus & conversations can be found [here](https://governance.aave.com/t/listing-proposal-add-uma-as-collateral-on-aave/6196) and [here](https://snapshot.org/#/aave.eth/proposal/0x1d4f6d9f376761409669ce498889d688ddada33c87796b14d9d646aebd86dbdd). 



## Implementation

Allow users to use UMA token as collateral to borrow WETH.   

WETH - 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2


Use the Chainlink Oracle to obtain the price of UMA - [UMA / ETH](https://docs.chain.link/docs/ethereum-addresses/) [0xf817B69EA583CAFF291E287CaE00Ea329d22765C](https://etherscan.io/address/0xf817B69EA583CAFF291E287CaE00Ea329d22765C)

### Test Cases

1. Use 150 UMA tokens as collateral to obtain a loan of .2 WETH
2. Borrowers cannot borrow UMA tokens, only WETH


## Security Considerations

A security concern to consider is that someone could use Aave to attempt to obtain 51% or more of the UMA tokens to corrupt a vote and extract value from UMA. As a result of this we propose to only add UMA as a collateral asset whereby borrowers cannot borrow UMA tokens with UMA as collateral.

## References
[UMA Protocol Website Site](https://umaproject.org)
[UMA Protocol Doc Site](https://docs.umaproject.org/)
[Projects on UMA](https://projects.umaproject.org/)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

