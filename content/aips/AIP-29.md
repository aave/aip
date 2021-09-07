---
aip: 29
title: Add FRAX to Aave V2
status: Proposed
author: Jason Huan (@jasonhuan_)
shortDescription: Create a new Aave V2 market for the FRAX stablecoin
discussions: https://governance.aave.com/t/proposal-add-support-for-frax/2621
created: 2021-08-25
---

## Simple Summary

Frax is the first algorithmic-stablecoin protocol, backed through on-chain collateral and algorithmically. Frax has two tokens, the FRAX stablecoin pegged at $1 and the FXS governance + seigniorage token, and aims to be a decentralized crypto-native unit of account with the upcoming Frax Price Index (FPI). FRAX has stayed at $1 for its entire existence, being the only non-traditional stablecoin to keep its peg perfectly in 8 months of release.

## Abstract

The FRAX stablecoin is partially backed with on-chain collateral and partially backed algorithmically, according to a collateral ratio (CR) parameter that the system adjusts according to market conditions. In Frax v2, the protocol is able to mint FRAX into lending markets using [Algorithmic Market Operations](https://docs.frax.finance/amo/overview) (AMOs), smart contracts which have the ability to print FRAX up to certain thresholds adjustable by governance.

## Motivation

As the value of Aave's TVL increases, borrow liquidity for stablecoins against volatile assets lent to Aave is one of the key benefits that is offered to lenders of the protocol. The flow of newly minted stablecoins to their decentralized lending market destination such as Aave is not always direct, and may face market inefficiencies through layers of actors.

By [deploying an AMO for Aave](https://docs.frax.finance/amo/frax-lending), the Frax protocol is able to mint FRAX to be borrowed by lenders of Aave, and thus offer an active and competitive alternative to other stablecoins such as USDC, USDT, and DAI. By allowing for responsive stablecoin liquidity, we aim to benefit lenders and the Aave ecosystem as a whole.

Additionally, With no collateral factor, there is 0 risk for Aave's money market in terms of the FRAX peg. Furthermore, if the FRAX peg broke and fell below $1, Aave borrowers would have less debt in dollar terms.

## Specification

1. What is the link between the author of the AIP and the Asset?

	- Co-founder of Frax.

2. Provide a brief high-level overview of the project and the token

	- FRAX is the world's first fractionally-algorithmic stablecoin, stabilized with parts on-chain collateral and parts algorithmically.

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

	- Frax's AMOs are able to mint FRAX into the Aave lending market, allowing for highly competitive stablecoin borrowing rates for lenders.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?

	- FRAX launched at the end of 2020 and currently has over $300M in circulating FRAX. FRAX has never once broken the peg of $1, even through sharp market downturns such as in March 2021. Frax's governance token FXS has maintained governance functionality since inception through a fork of Compound's GovernorAlpha.

5. How is the asset currently used?

	- FRAX is currently used as a stablecoin in decentralized exchanges and other lending markets such as Rari's Fuse Protocol, where it is currently the most-borrowed and most-supplied stablecoin in several pools through Frax's AMOs.

6. Emission schedule

	- There is no emission schedule; FRAX is mintable by anyone anytime by depositing corresponding amounts of collateral and FXS into the system's contracts.

7. Token & protocol permissions and upgradability

	- The protocol is highly modular in terms of system parameters such as oracle addresses and AMO additions. The core contracts such as the token contract itself are non-proxy deployed and permissioned through governance's 2-day timelock, with a backup multisig admin address managed by the core Frax team.

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

    - Market Cap: $307M
    - 24h Volume: $15M
    - Volatility: Extremely Low
    - Maturity: Early-Mid

9. Social channels data (Size of communities, activity on Github)

	- 13K followers on Twitter, 6.2K members on Telegram, Github is updated frequently.

10. Contracts date of deployments, number of transactions, number of holders for tokens

    - Date of Deployment: December 20th, 2020
    - Number of Transactions: 110,000+
    - Number of Holders: 1,600+

## Rationale

Frax's design rationale came as a synthesis of a crypto-native stablecoin with capital efficiency, allowing it to perform algorithmic market operations while managed by on on-chain DAO. As Frax expands, it can compound on its own network effects by being a highly liquid routing asset on DEXes and a default borrowing option for many lending market pools. To keep decentralization at the forefront, the USDC collateral is spread out through other lending markets and DEXes, and is planned to be rotated to ETH and ETH-equivalent collateral as the protocol matures. Furthermore, the Frax Price Index (FPI) allows for a shift away from the USD unit-of-account into the first major stable crypto-native unit-of-account.

## Implementation

The FRAX price oracle will be served via [ChainLink](https://chain.link/), which includes the [FRAX/ETH feed](https://docs.chain.link/docs/ethereum-addresses).

FRAX will only be used for depositing and lending and not as collateral, with a Loan-to-Value (LTV) value of 0%. The other parameters are as such:


  - Strategy: rateStrategyStableTwo
  - Base LTV As Collateral: 0
  - Liquidation Threshold: 0
  - Liquidation Bonus: 0
  - Borrowing Enabled: true
  - Stable BorrowRate Enabled: false
  - Reserve Decimals: 18
  - Reserve Factor: 2000

Following the steps from the [Aave governance docs](https://docs.aave.com/developers/protocol-governance/governance/propose-your-token-as-new-aave-asset), the following contracts were generated:

- Interest bearing aFRAX address: 0x6efD37b3015AeA0E19418f98661488A4D2D3C377
- Variable Debt variableDebtFRAX address: 0x08FFf652bEF777634585707B17627c9274E3dB11
- Stable Debt stableDebtFRAX address: 0x7E3Ddfceef69bEC3A38Fc9AE8D7A8c46D7788C6b
- Strategy Implementation for FRAX address: 0xb0a73aC3B10980A598685d4631c83f5348F5D32c

## Audits/Security Reviews

[Trail of Bits Audit](https://github.com/trailofbits/publications/blob/master/reviews/FraxFinance.pdf)

[CertiK Audit](https://www.certik.org/projects/fraxfinance)

**Note that the risk assessment was performed in May 2021, when FRAX's market cap was $110M**

**FRAX Smart Contract Risk**: **C**

Frax has been live on the Ethereum mainnet for over 8 months.

**FRAX Counterparty Risk**: **C+**

Currently the Frax protocol can be paused or modified by a multisig. The protocol is meant to be governance minimized with a gradual transition to DAO + comptrollers.

**FRAX Market Risk**: **B**

The current FRAX market cap is over $307,000,000 USD. The average 24H trading volume in the past month has been over $14,000,000 USD. FRAX's volatility is negligible on Curve and Uniswap v3.

**FRAX Overall Risk**: **B-**

## References

Whitepaper - https://github.com/FraxFinance/frax-solidity/blob/master/frax_whitepaper_v1.pdf

Website - https://frax.finance/

Twitter - https://twitter.com/fraxfinance

Docs - https://docs.frax.finance/

Github - https://github.com/FraxFinance

Token Contract - https://etherscan.io/token/0x853d955aCEf822Db058eb8505911ED77F175b99e

## Test Cases

## Implementation

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).