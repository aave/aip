---
aip: 6
title: Adding GUSD on AAVE
status: Implemented
author: Gemini (@Gemini)
discussions: https://governance.aave.com/t/proposal-add-support-for-gemini-gusd/384
created: 2020-12-23
updated: 2020-12-23
---
## Simple Summary
The Gemini dollar is a cryptographic token that is issued by Gemini, strictly pegged 1:1 to the U.S. dollar, and built on the Ethereum network according to the ERC20 standard for tokens.


## Abstract
Add GUSD to the AAVE V2 market.

## Motivation
GUSD is an additional fiat on-ramp into the DeFi ecosystem that will help diversify fiat sources inside of AAVE markets.

## Specification
GUSD can be exchanged for USD at a fixed 1:1 rate on the Gemini exchange. I have personally tested this out and was impressed with the results: withdraw of GUSD from Gemini exchange was sent within 1 minute using fast gas, and deposit back into Gemini was credited within ~17 block confirmation. It should be possible for liquidators (who are willing/able to KYC) to flip GUSD collateral directly through Gemini for the time being. GUSD also has a few trading pairs on other centralized exchanges such as OKEx, HitBTC, and ZB. I plan on submitting a proposal to create a GUSD Curve pool in the near future as well, if this is supported by veCRV voters the on-chain liquidity for GUSD should improve substantially.

## Rationale
Benefits for Aave:

Diversification of centralized assets: GUSD relies on a different issuer and custodian compared to USDC, TUSD, USDT, or BUSD. Credit, custody, or regulatory risks may be less correlated across these assets, which could reduce risk to Aave security module stakers.
New DeFi on/off ramp: Gemini has good linkage with US bank wire and ACH networks, comparable to Coinbase as a fiat ramp.
While Coinbase have played nice so far, it’s dominance in regulated crypto liquidity and USDC on/off ramp has huge influence over the space. I see Gemini and GUSD as a viable competitor. From an industrial economics standpoint, Aave and other Defi protocols like Maker may benefit from breaking down monopolies of their key counter-parties.

## Risk Analysis

The Risk Team has applied Aave’s Risk Framework to GUSD leading to an overall risk rating of B-

GUSD is issued by Gemini Trust Company. It has been created for practical use in innovative applications, among which to facilitate Gemini’s institutional solutions and exchange operations.

GUSD Smart contract Risk: C+

GUSD was launched in September 2018 – at the same time then USDC – yet it has only experienced 120k blockchain transactions.

The GUSD smart contract only supports 2 decimals meaning that interest accrual can only occur for more than 1 cent.

USDC Counterparty Risk: C+ cannot use as collateral (centralisation D-)

As it is backed by real US dollars, GUSD is centralised. Moreover it has few holders with most of the transactions off-chain on the centralised Gemini environment.

An independent accountant’s audit report is published at the end of each month on the website. GUSD is regulated bringing trust to the token. Still, the infrastructure is based on the Ethereum blockchain where regulators have little power.

GUSD Market Risk: B -

GUSD has a small market capitalisation at less than 20m with a small trading volume. The price has diverged from 1 a few times in the last 3 months with up to 3% price variation.
Given the reduced market capitalization and the possibility of market price manipulation, the oracle will fix the price of GUSD to $1. This does not bring additional risk because the asset cannot be used as collateral and even if the market price swings considerably, the asset is still redeemable 1:1 for USD. The risk team will reevaluate the asset periodically to validate the viability of an actual market based oracle as the GUSD supply grows.  

Risk Parameters ~ BUSD sUSD
Not a collateral
Reserve Factor 10%

Variable Interest Rate Model ~ BUSD sUSD
UOptimal 80%

R_0 0%

R_s1 4%

R_s2 100%

## References

- *Whitepaper*: https://gemini.com/static/dollar/gemini-dollar-whitepaper.pdf
- *Website*: https://gemini.com/dollar
- *Twitter*: https://twitter.com/Gemini
- *Source Code*: https://github.com/gemini/dollar
- *GUSD token contract*: https://etherscan.io/token/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd
- *Accountant’s reports at bottom of page*: https://gemini.com/dollar#reports
- *Trail of bits contract audit*: https://gemini.com/static/dollar/gemini-dollar-trailofbits-audit.pdf

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
