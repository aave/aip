---
aip: <to be assigned>
title: Add XSGD support as Collateral
status: WIP
author: Yap Jun Hao (@junhaoyap), Chung Chao (@chung-chao)
shortDescription: Add Support for the Digital Singapore Dollar XSGD
discussions: https://governance.aave.com/t/arc-add-xsgd-support-as-collateral/4260
created: 2021-06-09
updated: 2021-06-09
# requires (*optional): <AIP number(s)>
---

## Simple Summary

The Xfers team would like to submit the following proposal to add XSGD support on Aave.

XSGD is the fully collateralized Singapore Dollar stablecoin, powered by open-source blockchain protocols. All Xfers issued SGD-backed stablecoins have 1:1 parity with the Singapore Dollar.

## Abstract

Add XSGD to the Aave V2 Market.

## Motivation

XSGD is the largest stablecoin in the Asia-Pacific region by market capitalization and its implementation into Aave will introduce the first non-USD backed stablecoin into the Aave ecosystem.

## Specification

Via the StraitsX platform, verified users can tokenize their Singapore Dollars for XSGD and withdraw their XSGD to a supported wallet or exchange. Users can also deposit their XSGD into their Xfers Account and withdraw Singapore Dollars to their bank account. XSGD is issued and burned according to Xfers Singapore customers’ deposits and withdrawals. The settlement time of such a transaction is one business day.

XSGD is currently supported on the following centralised and decentralised exchanges. Decentralised Exchanges include Uniswap, DFX and Zilswap. Centralised Exchanges include Indodax, Liquid Exchange, Tokenize Exchange, Xanpool, Coinut and CEX.IO with the potential for many more to come in the future.

XSGD holders may swap XSGD for other digital assets as well as become liquidity providers.

## Rationale

With most active stablecoins currently denominated in USD, StraitsX believes that this state is not representative of users’ ultimate preferences but rather due to a lack of trusted and compliant alternatives denominated in other fiat currencies.

With Singapore ranked consistently as one of the world’s easiest places to do business by the World Bank, StraitsX believes that there is a desire for businesses in Asia and beyond to transact in a Singapore Dollar denominated stablecoin.

- XSGD will be the largest Southeast Asia fiat-backed stablecoin on the Aave protocol.
- XSGD presents an opportunity for users to hedge the Singapore Dollar against other assets.

## Test Cases

The Aave protocol test cases already cover everything needed to support XSGD as an ERC-2O token.

## Risk Analysis

The StraitsX Team applied Aave’s Risk Framework to XSGD leading to an overall risk rating of C.

XSGD is issued by Xfers. The digital asset space is growing and current use cases for XSGD could be distinct from future use cases.

XSGD can be used as a stable store of value and unit of account denominated in Singapore Dollar in digital assets markets. XSGD removes cross-border transaction fees and serves as a way to move seamlessly between physical and digital assets, or as means of payment for other digital assets.

StraitsX aims to work with ecosystem partners to enable XSGD to be used for both B2B and consumer payments. 

XSGD Smart Contract Risk: C

The first XSGD Smart Contract was deployed on Github on 12 March 2020. Since its inception, XSGD has recorded over 76,000 transactions on-chain. 

XSGD Counterparty Risk: C

XSGD has an estimated 4600 holders and it is a centralised and regulated stablecoin. 
Each XSGD token is backed by one Singapore Dollar that is being held and safeguarded in segregated accounts with a licensed financial institution.

XSGD Market Risk:

- Market Capitalization: C
  - XSGD is the largest Stablecoin by Market Capitalization in Asia Pacific. The Digital Asset landscape is growing at an exponential rate in the region and we believe that getting on Aave would be the catalyst to facilitate this growth.

- Average Volume 1M: C-
  - XSGD users are currently concentrated in Singapore. StraitsX is working closely with partners globally to expand support for XSGD.  XSGD is currently listed on regional exchanges like Indodax and CEX.IO. With more partners supporting XSGD, StraitsX believes that XSGD is a viable alternative to USD stablecoins, leveraging on the strength and stability of the Singapore Dollar.

- Normalised Volatility 1M: B+
  - XSGD has maintained its peg to the Singapore Dollar with great consistency, hence exhibits low normalised volatility.

![image](https://user-images.githubusercontent.com/78942782/121375078-06f3e000-c973-11eb-9343-7dfa3f559c17.png)

## References

**Official Website**: [StraitsX by Xfers](https://www.xfers.com/sg/straitsx)

**Whitepaper**: [StraitsX Whitepaper v1.1](https://assets.website-files.com/600e34cbaf525c42912af8b6/60a4f099acf0ecc4c78965bb_StraitsX%20-%20Whitepaper_V1.1.pdf)

**Source Code**: [StraitsX Github](https://github.com/Xfers/StraitsX-tokens)

**Token Contract**: [Etherscan for XSGD (ERC-20)](https://etherscan.io/token/0x70e8de73ce538da2beed35d14187f6959a8eca96) | [Viewblock for XSGD (ZRC-2)](https://viewblock.io/zilliqa/address/zil180v66mlw007ltdv8tq5t240y7upwgf7djklmwh)

**Community**: [Facebook](https://www.facebook.com/Xfers/) | [Twitter](https://twitter.com/xfers?lang=en) | [LinkedIn](https://linkedin.com/company/xfers)

**Audit**: Smart Contract Security Audit by Quantstamp and a Financial Audit by KPMG 

**ARC Post**: [Add XSGD Support as Collateral](https://governance.aave.com/t/arc-add-xsgd-support-as-collateral/4260/38)

**Chainlink Oracle**: WIP

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).