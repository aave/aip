---
aip: <to be assigned>
title: Add BarnBridge BOND to AAVE
status: WIP
author: Troy Murray (@DannyDesert)
shortDescription: Create an AAVE market for the BOND token
discussions: https://governance.aave.com/t/proposal-add-support-for-bond-barnbridge/4486
created: 2021-21-06
updated: 2021-21-06
---

## Simple Summary

We are proposing to add BarnBridge (BOND) to AAVE as collateral.

## Abstract

BarnBridge was built with the mission of helping to facilitate the transition to a decentralized financial system. BarnBridge is working to make the decentralized financial system more efficient, risk-flexible, and attractive to a wider range of participants through their fluctuation derivative protocol. BOND, the native token of BarnBridge, is an ERC-20 token that can be used to stake on their system and for governance once the governance module is launched. 

## Motivation

There seems to have been good support from the community to add BOND and as we get ready to launch our products in Q1 of 20201 we think BOND is a good candidate to strengthen the AAVE ecosystem.  There is also deep synergies between the two projects and we would like to offer tranching of AAVE LPs in the future.

## Specification

1. What is the link between the author of the AIP and the Asset?
  
  - I'm one of the co-founders of BarnBridge

2. Provide a brief high-level overview of the project and the token
  
  - BarnBridge is a risk tokenizing protocol. It aims to reduce the risks associated with DeFi, such as inflation risk, market price risk, and cash-flow volatility   risk. By letting users select a risk profile, BarnBridge can redistribute risk via tokenized, liquid tranches. BarnBridge does this with its SMART Yield, SMART   Exposure, and SMART Alpha products, all of which address a specific DeFi risk category.

  - BOND token is a governance token that powers the BarnBridge DAO protocol. BOND is an ERC-20 token. Token holders have the ability to govern the network by       staking their holdings in return for the right to participate in on-chain voting and make decisions on the protocol development.

  - BOND total supply: 10,000,000 (minting function is disabled).
  - Token contract address: 0x0391D2021f89DC339F60Fff84546EA23E337750f

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?
  
  - By adding BOND as collateral, the DAO and individual BOND holders can borrow against their position, increasing stablecoin demand and utilization on Aave v2. Additionally, BOND holders can lend out their position for a yield on Aave v2. Given BarnBridge’s direct role as an Aave liquidity provider, the addition of BOND to Aave v2 creates more synergies between AAVE and BOND holders.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?
  
  - BarnBridge was founded in September 2020. Since that time, BarnBridge succeed in launching the BarnBridge DAO and delivering a SMART Yield product which currently holds $250M+ in TVL with $157M providing to Aave. With the upcoming SMART Yield and SMART Exposure launch on Polygon, followed by the product we call SMART Secret and SMART Alpha (later) BarnBridge will be a full-established protocol with plenty of products and potentially with 1B+ in TVL after all our products launch.

5. How is the asset currently used?
  
  - BOND token is currently used for:

     - Staking in BarnBridge DAO to get exposure to voting rights in the DAO.
     - Liquidity providing on Uniswap, Sushiswap, and Bancor.
     - Lending on Cream finance.

6. Emission schedule
  
  ![alt text](https://github.com/BarnBridge/BarnBridge-Whitepaper/blob/master/images/emission.png)

7. Token & protocol permissions and upgradeability
  
  - Protocol is upgraded by the BarnBridge DAO.  We used the Diamond Standard on a couple parts of the protocol so we could do seemless upgrades.  A users token "power" determines their vote weight and control they have in the DAO.

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)
  
  - Market cap: $94M
  - 24h Volume: $4.5M
  - Volatility: low
  - Exchanges: Uniswap, Gemini, Gate io

9. Social channels data (Size of communities, activity on Github)
  
  - Twitter: 18.8K
  - Discord: 5,9K
  - Medium: 4.1K

10. Contracts date of deployments, number of transactions, number of holders for tokens
  
  - Transactions: 108K
  - Token holders: 5.9k

## Rationale

We consider ourselves Yield Maximalist and anywhere there is yield we are going to follow and tranche it out.  The synergies between AAVE and BOND are strong and we are complimentary products.  We look forward to adding AAVE LPs into our system and think this is a great first step to align the projects. 

## Test Cases

Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation

The BOND price oracle will be served via [ChainLink](https://chain.link/), which includes the [BOND/ETH](https://docs.chain.link/docs/ethereum-addresses) feed, [here](https://etherscan.io/address/0xdd22A54e05410D8d1007c38b5c7A3eD74b855281).

- LTV 40%
- Liquidation Threshold 55%
- Liquidation Bonus 15%
- Reserve Factor 20%

Interest Rate Model

- UOptimal 45%

Variable:

- R_0 0%
- R_s1 7%
- R_s2 300%

Stable:

- R_s1 10%
- R_s2 300%

![](../assets/AIP-23/rate.png)

## References

- *Website*: https://www.BarnBridge.com
- *DAPP*: https://app.barnbridge.com/
- *Whitepaper*: https://github.com/BarnBridge/BarnBridge-Whitepaper
- *Project Management Portal*: https://github.com/BarnBridge/BarnBridge-PM
- *Youtube*: https://www.youtube.com/c/BarnBridge
- *Twitter*: https://twitter.com/Barn_Bridge
- *BOND token contract*: https://etherscan.io/address/0x0391D2021f89DC339F60Fff84546EA23E337750f

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
