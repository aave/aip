---
aip: <to be assigned>
title: Adding MATIC on AAVE
status: WIP
author: Mihailo Baelic (@MihailoBjelic) and Sandeep Nailwal (@sandeepnailwal)
shortDescription: Aave governance proposal to enable MATIC as a borrow asset
discussions: https://governance.aave.com/t/proposal-add-support-for-matic-token/3350
created: 2021-04-05
updated: 2021-04-22
---

## AIP rationale

MATIC token is the governance and ecosystem token of Polygon L2 scaling solution. Polygon is one of the premier Ethereum scaling solution projects that currently hosts several blue-chip projects like AAVE, Curve, PoolTogether, Decentraland among many others. 

## References

- Forum proposal: https://governance.aave.com/t/proposal-add-support-for-matic-token/3350
- Project - [Website](http://polygon.technology/)
- Whitepaper - https://polygon.technology/papers/
- document portal - [Official documentation](https://docs.matic.network/)
- Matic Asset codebase - [Github](https://github.com/maticnetwork/contracts)
- Ethereum addresses - [Etherscan](https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0)
- ChainLink Oracle - [latest supported price feeds](https://talk.linkpool.io/t/14-mar-20-mar-chainlink-contract-update/86)
- Audits - [Quantstamp audits](https://drive.google.com/file/d/1jn0pA2OdJ5YOfGy9nSsKLEopFTqSBu6w/view?usp=sharing)
- Communities - [Discord](https://discord.com/invite/XvpHAxZ), [Reddit](https://www.reddit.com/r/maticnetwork/), [Official forum](https://forum.matic.network/)

## MATIC Overview
MATIC is the ecosystem token of Polygon Network (previously Matic) - a 100% EVM compatible L2 scaling solution with current TVL of more than $500M and 200+ dapps deployed across DeFi, NFT, Gaming and DAO space. With the recent rebranding Matic has now expanded in scope and vision and have transformed into Polygon with the aim of becoming an L2 aggregator - thereby providing a developer with all L2 solutions - POS/Plasma chain (mainnet launched April 2020), zk and Optimistic Rollups and Validum chains (part of the roadmap - as seen on [website](https://polygon.technology/technology/)).

The MATIC token lies at the heart of the Polygon ecosystem with multiple use-cases. Primarily the MATIC token is used for paying gas fees on the Polygon network. It runs the ecosystem, supporting top Dapps. Additionally you can participate in the Proof-of-Stake consensus of the blockchain as a validator node and earn 12-14% APY in MATIC tokens.

MATIC token’s emission schedule can be found here - courtesy [Binance](https://research.binance.com/en/projects/matic-network)

## Motivation
MATIC can play a unique role in the AAVE ecosystem in following ways -

1. **Lending MATIC**
Since MATIC is primarily a CEX traded coin, most of the speculation and activity remains confined there. Holders don’t have an additional source of revenue other than price speculation. With MATIC as a collateral on AAVE, holders will rush to seek yields, in turn boosting AAVE’s liquidity.
2. **Borrow MATIC**
In today’s high gas fees environment Ether is becoming scarcer by the day. DEX traders can depost Ether on Aave and can borrow Matic on lucrative interest rates. The borrowed Matic can be then provided in single pool dexes like Bancor on L1 and QuickSwap/ComethSwap on L2 to capture liquidity pools of a growing DeFi ecosystem on Polygon.

### Specifications

1. What is the link between the author of the AIP and the Asset?

Co-founder, Co-founder

2. Provide a brief high-level overview of the project and the collateral token
See Summary

3. Explain positioning of token in the AAVE ecosystem: which market?

The asset will be listed in the current AAVE V2 market.

4. Provide a brief history of the project and how it overcame stressed conditions

Polygon team has been making valuable contributions to the Ethereum ecosystem for a long time, even before it’s public surfacing as Matic Network. This includes working on implementations of Plasma MVP, developing the WalletConnect protocol and the Ethereum event notification engine Dagger.
MATIC token has now been listed over 30 exchanges globally (most recently Coinbase), and is trading against more than 50 base pairs. In terms of market cap MATIC is valued at $1.63B and FDV of $3.26B. 24H trading volumes of >$250M make it one of top 30 traded coins across DEXs and CEXs

5. How is the asset currently used?

The MATIC token lies at the heart of the Polygon ecosystem with multiple use-cases. Primarily the MATIC token is used for paying gas fees on the Polygon network. It runs the ecosystem, supporting top Dapps. Additionally you can participate in the Proof-of-Stake consensus of the blockchain as a validator node and earn 12-14% APY in MATIC tokens.

6. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

https://www.coingecko.com/en/coins/polygon#markets

7. Social channels data (Size of communities, activity on Github)

Links above

8. Risk Assessment and Parameter suggestions

Matic token has undergone extensive security audits by [Quantstamp](https://drive.google.com/file/d/1jn0pA2OdJ5YOfGy9nSsKLEopFTqSBu6w/view?usp=sharing).
Here is an analysis based on Aave’s Asset Risk Framework 3 to quantify MATIC’s risks and the resulting model parameters suggestions

**MATIC’s Overall Risk is B

![MATIC token risk](https://imgur.com/lqZ0n1E)


MATIC Smart Contract Risk: B-
CRV token was introduced to Curve in August 2020 through liquidity mining. The code has 3 audits from ToB, Quantstamp and MixBytes. It is central in the DAO operations enabling stakers to vote and boost their yields with the locking of CRV. This model has generated half a billion transactions in half a year, with around 15,000 holders

MATIC Counterparty Risk: B
The Curve DAO operates as a fully decentralised organisation with community proposals and votes. The ecosystem is funded by fees of the Curve Exchange generated by the $40m of daily volume

MATIC Market Risk: C
Curve is one of the leading DeFi projects. The token is available on top exchanges with nearly $100m market capitalisation and nearly as much average daily volume though a large share of CRV’s supply is locked. CRV experienced volatility in the last month with the rest of the market having yet to recover CRV’s risk profile is close to YFI’s leading to the same model parameters

### Risk Parameters 

LTV 25%

Liquidation Threshold 45%

Liquidation Bonus 10%

Reserve Factor 20%

### Variable Interest Rate Model ~ Collaterals

(https://camo.githubusercontent.com/7900d43db70cb08fcd28bd1336b499ad783ab9e5063a567b8541e50b83f463a5/68747470733a2f2f692e696d6775722e636f6d2f33356b504775432e706e67)

UOptimal 45%

R_0 0%

R_s1 7%

R_s2 300%
