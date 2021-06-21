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

2. Provide a brief high-level overview of the project and the token

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?

5. How is the asset currently used?

6. Emission schedule

7. Token & protocol permissions and upgradeability

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

9. Social channels data (Size of communities, activity on Github)

10. Contracts date of deployments, number of transactions, number of holders for tokens

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

![](../assets/AIP-draft_BOND_listing/rate.png)

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
