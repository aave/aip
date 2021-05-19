---
aip: <to be assigned>
title: Add RAI to Aave V2
status: WIP
author: Stefan Ionescu (@stefanionescu)
shortDescription: Create a new Aave V2 market for the RAI stablecoin
discussions: https://discord.gg/zCQYcFPEsE
created: 2021-05-19
---

## Simple Summary

Reflexer Labs has designed a new type of stable asset called RAI, an ETH backed stablecoin with a moving peg. RAI aims to become an autonomous, crypto native and stable unit of account for the DeFi industry.

## Abstract

RAI is an asset backed only by ETH, governance-minimized, and programmed to maintain its own price stability without needing to peg to an external price reference like the USD. We believe these qualities make RAI ideal initially as an alternative to pegged-coins for use in DeFi as collateral and as a stable reserve asset, especially for programs where resilience is critical.

## Motivation

Introducing more trustless, stable assets into Aave money markets will benefit both Aave and the ecosystem as a whole. The addition of RAI will diversify the protocol’s exposure to stable assets beyond traditional dollar-pegged stablecoins and provide enough bandwidth to grow the protocols TVL.

Currently, more than $4.56B worth of stable asset liquidity on Aave V1 and V2 is centralised (USDC, USDT, TUSD, BUSD, GUSD) while only $1.25B (~25%) is decentralised (DAI, sUSD). While this isn’t inherently a negative, introducing more decentralised, stable assets adds to Aave’s composability and resilience.

RAI also stands to benefit from being able to expand its utility and liquidity across the largest lending protocol in the space, allowing for more experimentation to occur in the ongoing journey towards entirely trustless and decentralized stable-credit.

## Specification

1. What is the link between the author of the AIP and the Asset?

Co-founder of Reflexer.

2. Provide a brief high-level overview of the project and the token

RAI is a decentralized non-pegged ETH-back stable asset meant to act as pristine collateral in DeFi.

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

Other stablecoins are either centralized or pegged to the dollar. RAI is neither of those and aligns perfectly with the ethos of trust-minimized finance.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?

RAI launched in February and has amassed over $100M in liquidity with $300M in value locked. RAI is governance minimised by design, as well as currently moving towards a grants DAO.

5.How is the asset currently used?

RAI is currently used as a trust-minmized alternative to other stablecoins. The goal is to drive adoption of RAI to be used as collateral in money markets, other synthetic assets, and more.

6. Emission schedule

There is no emission schedule. Similar to DAI, RAI minted on demand when users lock ETH into the protocol.

7. Token & protocol permissions and upgradability

Right now the protocol is almost fully upgradeable. This includes anything from oracles, the contract that collects stability fees, the contract that liquidates positions, the one that auctions collateral etc. This is managed through a multisig with a 6 hour delay on any governance action. Managed by the Reflexer core team. The multisig manages the full system and will do so until rai is gov minimized.

On the other hand, the contract that keeps track of debt and collateral in all Safes (CDPs) cannot be upgraded.

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

    Market Cap: $67M
    24h Volume: $8M
    Volatility: Very Low
    Maturity: Early-Mid

9. Social channels data (Size of communities, activity on Github)

10K followers on Twitter, 4.7K members on Discord, Github is highly active.

10. Contracts date of deployments, number of transactions, number of holders for tokens

    Date of Deployment: February 13th, 2021
    Number of Transactions: 40,000+
    Number of Holders: 2,000+

## Rationale

The decision to design RAI as it is today came from the desire to achieve three main goals.

1. DeFi Lego

- Fork of MakerDAO’s Multi-Collateral DAI (MCD)
- Governance-minimized in the Long Run
- Algorithmic (PI controller) interest rates

2. Self-stabilizing asset-backed credit facility

- Like MakerDAO, users can unlock credit from their ETH
- Unlike MakerDAO, debt/credit is not fixed at $1. Rather, it fluctuates based on supply and demand
- RAI’s PI controller updates the system’s moving peg to balance demand for debt vs. credit

3. Reserve asset for DeFi, alternative to pegged coins

- More decentralized than dollar coins like USDC & USDT
- Independent of USD inflationary monetary policy
- Avoids being targeted by dollar coin regulation like the “Stable Act”
- Backed by pure ETH, no centralized collateral

## References

Whitepaper - https://github.com/reflexer-labs/whitepapers/blob/master/English/rai-english.pdf

Website - https://reflexer.finance/

Twitter - https://twitter.com/reflexerfinance

Docs - https://docs.reflexer.finance/

Github - https://github.com/reflexer-labs

Token Contract - https://etherscan.io/token/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919

## Test Cases

## Implementation

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
