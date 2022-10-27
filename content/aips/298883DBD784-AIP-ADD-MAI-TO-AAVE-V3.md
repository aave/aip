---
title: Add MAI to Aave V3 on Polygon
status: Proposed
author: Pablo Peillard (@itspublu)
shortDescription: Add MAI Stablecoin to Aave V3 on Polygon
discussions: https://governance.aave.com/t/add-mai-on-aave-v3/7630
created: 2022-08-16
---

## Author: 
QiDao Protocol core team

## Forum post: 

https://governance.aave.com/t/add-mai-on-aave-v3/7630
Proposal to add support for MAI (aka miMatic) on Aave V3 (On Polygon)

## Summary

MAI is the first and largest native stablecoin project on Polygon and a variety of other chains. It is an overcollateralized stablecoin that is non-custodial. All MAI is backed by collateral locked in user-managed vaults. MAI minting is available on 8 chains, and bridging to 18 chains.

All accepted collaterals are priced using Chainlink price feeds. MAI has stayed within its peg through several market downturns.

There’s around 250M MAI minted, with liquidity on all top DEXs in which MAI is present. A significant portion of liquidity for MAI is on Curve. MAI hosts the largest pool on Curve Polygon.

## Risk Parameters

V3 Efficiency mode: stablecoins
V3 Isolation mode: 75% LTV, 80% liquidation threshold, 10% reserve factor, $2M initial debt ceiling per chain

## Specifications
**What is the link between the author of the AIP and the Asset?**

Core team at QiDao Protocol.

**Provide a brief high-level overview of the project and the token**

MAI is the first and largest stablecoin protocol on Polygon. It allows users to lock their tokens and use them as collateral to mint MAI at 0% interest.

MAI is an overcollateralized CDP stablecoin on Polygon, Avalanche, Fantom, Arbitrum, Harmony, Moonriver, and Gnosis Chain. MAI is one of the most crosschain assets in DeFi, currently on 18 chains through Multichain. Accepted collateral includes interest-bearing assets like Aave Market Tokens. Users are not charged interest for borrowing MAI - instead, they are charged a 0.5% fee upon repayment.

Despite market downturns during its existence, MAI has maintained its peg.

MAI currently has a TVL of around $90M, and has around 70M MAI outstanding.

**Explain positioning of the token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?**

Being the largest native stablecoin on Polygon and Fantom, MAI has a wide reach within the native projects on those chains. Listing MAI would connect Aave to most communities in these chains through the integrations already made by MAI.
MAI is one of the most crosschain assets, available on 18 chains through canonical bridging. As a result, users will be drawn to borrow MAI to bridge value to other chains and take advantage of the many yield opportunities that MAI has.

MAI’s risk profile is low. It is used by large institutions. MAI has also received grants from several blockchains, including Polygon, Metis, Optimism, Arbitrum, and Gnosis.

**Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?**

MAI is governed by the QiDao Protocol, a community-run DAO around the QI token.
Several other projects have participated in our DAO through proposals and bribing, including Frax Finance, Stake DAO, Celsius, * PolygonDAO, SpiritSwap, SpookySwap, Gotchi Vault, and Beefy Finance
The Polygon Alliance was recently set up to participate in QiDao.

**How is the asset currently used?**

Lending (Market.xyz, Impermax, Tarot)
Listed on several DEXs on 18 chains. Main DEXs are Curve, Balancer, QuickSwap, SpookySwap, SpiritSwap, Solidly, Saber, and TombSwap
Top two pools on Curve Fantom and Polygon
MAI is used by Celsius to borrow against their AUM
MAI has been used by Polygon to award bounties
MAI offers low-cost leverage to strategies on Stake DAO, Yearn, Beefy, and Aave

**Emission schedule**

Users can mint MAI by locking up their assets and borrowing against that value at 0% interest. Temporary debt ceilings serve as the a supply mitigation.

**Token (& Protocol) permissions (minting) and upgradability.**

**Is there a multisig? What can it do? Who are the signers?**

All funds stored as collateral are fully controlled by users
There is a 3/5 multisig, comprised by the QiDao team. Team members are doxxed and regularly appear on podcasts, live streams, and crypto conferences
The multisig executes the results of Snapshot votes: liquidation ratios for new collaterals, partnerships, and debt ceilings. There have been over 70 votes since the start of the DAO: see votes here 1.
Since the protocol uses canonical bridging, QiDao retains the power to mint MAI on chains it is bridged to.

## Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

- Market Cap: ~$70M
- 24h Volume: >$40M
- Volatility: Low
- Exchanges: Curve, Balancer, QuickSwap, SpookySwap, SpiritSwap, Saber, Beethoven, Solidly, TombSwap, Solarbeam, Trader Joe, Crodex, ZoomSwap, PaintSwap, Elk Finance, and Rose
- Maturity: Launched 5/4/21
- Social channels data (Size of communities, activity on Github)
- Project: https://www.mai.finance/
- Defillama: https://defillama.com/protocol/qidao
- Whitepaper: https://docs.mai.finance/
- Document portal: https://docs.mai.finance/
- Source code for the system(s) that interact with the proposed asset: https://github.com/0xlaozi
- Twitter: 17k followers: https://twitter.com/QiDaoProtocol
- Telegram: 2,130 members: @QiDaoProtocol
- Discord: 8,987 members: https://discord.com/qidaoprotocol
- Contracts date of deployments, number of transactions, number of holders for tokens
MAI token

- Date of deployment: May 4, 2021
- Number of transactions: +3M
- Number of crosschain token holders: 16k+

## Security Considerations
MAI has undergone 2 thorough audits (linked below). Constant internal reviews are performed to ensure MAI’s economic and technical safety.

The protocol currently has around $90M TVL.

- First audit: https://uploads-ssl.webflow.com/606120c25fb119221b762612/60bd3b9a1366549deb6a1cf7_Mai_Finance_Audit_Bramah.pdf

- Second audit: https://cloakwire.com/qi-dao-security-audit/

## Other links

Contract addresses: https://docs.mai.finance/functions/smart-contract-addresses

Chainlink Oracle: 0xd8d483d813547CfB624b8Dc33a00F2fcbCd2D428 (Polygon)

## Proposal's technical implementation

This asset listing will be executed via Aave's cross-chain governance module, described here [https://github.com/bgd-labs/aave-v3-crosschain-listing-template](https://github.com/bgd-labs/aave-v3-crosschain-listing-template). The listing of miMATIC via cross-chain is one of the examples included there, together with tests.

Proposal Payload on Polygon: [https://polygonscan.com/address/0x83fba23163662149b33dbc05cf1312df6dcba72b#code](https://polygonscan.com/address/0x83fba23163662149b33dbc05cf1312df6dcba72b#code)

BGD Labs has provided support on the technical aspects of the listing and Certora has reviewed the proposal's payload.
