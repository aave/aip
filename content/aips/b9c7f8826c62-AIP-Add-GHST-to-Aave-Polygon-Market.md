---
aip: <to-be-assigned>
title: Add GHST to Aave Polygon Market
status: WIP
author: Coder Dan (@coderdannn)
shortDescription: List GHST token as collateral on Aave Polygon Market
discussions: https://governance.aave.com/t/arc-list-aavegotchi-ghst-token-as-collateral-on-matic-aave-network/3619/3
created: 2021-11-11
---

## Simple Summary

This AIP would list Aavegotchi GHST token on the Aave Polygon Market with the following risk parameters:

- LTV: 25%
- Liquidation Threshold: 45%
- Liquidation Bonus: 12.5%\*
- Reserve Factor: 20%

## Rationale

Aavegotchi (Playable DeFi-backed NFTs) utilizes Aave aTokens in game as collateral assets for Aavegotchis “playable bank”. Given Aave’s recent launch onto Polygon (where Aavegotchi is deployed) the Aavegotchi community believes it would be a great idea to have GHST token as collateral on Matic Aave. If GHST gets listed as an collateral on Aave, users of Aavegotchi will be able to use aGHST as collateral within their Aavegotchis.

## Motivation

Increasing traffic flow, usability and user base for both Aave and Aavegotchi projects.

## Specifications

- Author of the AIP is a summoner of Aavegotchi.

1. Aavegotchis are crypto-collectibles (NFT). Aavegotchis are pixelated ghosts living on the Matic blockchain, backed by the ERC-721 standard. Their value is determined by rarity level 2, which is calculated via multiple factors, such as base traits, amount of staked collateral 2, and equipped wearables. GHST token is the backbone of Aavegotchi Realm. GHST is an in-game asset, used in all operations in-game (excluding usage of GHST as a collateral for summoning your Aavegotchi, which are aTokens powered by Aave) such as buying portals (opened\closed), wearable items, potions and etc.

2. Users of Aavegotchi will borrow GHST, to use it as an in-game asset, to speculate on in-game values or for other in-game purposes. Users of Aavegotchi will use it as a collateral to summon their gotchis with it because aTokens are another backbone of the game. To summon your Aavegotchi you need to have a specific amount of aTokens to make it possible.

3. GHST token has been live on Ethereum Mainnet since September, when it was launched via a continuous bonding curve DAICO sale (still live today at aavegotchi.com/curve 5). The token was launched at 0.2 DAI / GHST and currently sits at around 1.2 DAI. The all-time high is around 1.9 DAI / GHST. GHST is priced in DAI because unlike most tokens in crypto, it is actually backed by a DAI reserve at a 33% connecting weight. This makes the price more stable because it takes more in/out to change the price.

A significant challenge for Aavegotchi as a project was deciding to migrate our ecosystem from Ethereum to Polygon (then known as Matic). Expensive gas fees would have made it impossible for our players to use Aavegotchi NFTs (which require constant onchain attention). However, from January to March, we were able to complete the migration and launch successfully onto Polygon.

4. GHST is the official utility token of the Aavegotchi ecosystem and can be used to purchase portals, wearables, and consumables.

5. The inflation of GHST tokens through purchases on the bonding curve is positively correlated to the GHST price. The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.

6. The bonding curve has minting and burning permissions, but these permissions are governed by the AavegotchiDAO which exists on Ethereum Mainnet. GHST tokens are not arbitrarily minted or burned. The supply is determined by inputs via the bonding curve.

## Market Data

- Market Cap - \$140,000,000
- 24hr Trading volume - \$29,209,070
- Currently listed on 14 exchanges: Binance, Okex, Poloniex, Uniswap, Gate.io, LBank, Bilaxy, Hoo, MXC, BiBox, 0x, BamBoo Relay, QuickSwap, 1ich Exchange;
- Maturity - 15 months.

## Socials

- Telegram group: - Telegram: Contact @aavegotchi 8 - 12,000+ members;
- Discord - https://discord.gg/aavegotchi 16,000+ members
- https://twitter.com/aavegotchi - twitter 67,000 followers;
- Active forum https://dao.aavegotchi.com/
- Governance Snapshot https://snapshot.org/#/aavegotchi.eth
- Active code development - https://github.com/aavegotchi

## Token Stats

- Contract’s date of deployments: 14 September 2020 (Ethereum)
- Number of transactions:
  - Ethereum: 143,397
  - Polygon: 2,507,992
- Number of holders for tokens:
  - Ethereum: 6,427
  - Polygon: 68,943
- Currently circulating Supply - 66,419,514
- Current total supply - 66,419,514

## Full Disclosure

Stani Kulechov is an official advisor of Aavegotchi, and Aave has invested into Pixelcraft Studios, the development team behind Aavegotchi.
