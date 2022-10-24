---
title: Add Assets to Aave Polygon Market and Update WMATIC Risk Parameters
status: Proposed
author: Coder Dan (@coderdannn), MatthewGraham, tomuky
shortDescription: Update Polygon Market
discussions: https://governance.aave.com/t/arc-list-aavegotchi-ghst-token-as-collateral-on-matic-aave-network/3619
  https://governance.aave.com/t/listing-proposal-add-v2-market-assets-to-polygon-market-that-are-relevant-to-polygon-network/5511
  https://governance.aave.com/t/arc-polygon-market-wmatic-risk-parameter-changes/6021
created: 2021-12-14
---

## Simple Summary

This AIP would list BAL, CRV, DPI, GHST, LINK, and SUSHI from the AAVE V2 market on the Aave Polygon Market, and list GHST as a new asset to the Polygon market as collateral. WMATIC risk parameters are also being updated.

## Rationale

BAL, CRV, DPI, LINK, and SUSHI have been voted in by governance to be added to the Polygon market. These tokens are already listed in the V2 market.
  
WMATIC parameters are being updated to maintain the overall risk tolerance of the protocol while making risk trade-offs between specific assets.

GHST is the token that powers the Aavegotchi universe. Aavegotchi (Playable DeFi-backed NFTs) utilizes Aave aTokens in game as collateral assets for Aavegotchis “playable bank”. Given Aave’s recent launch onto Polygon (where Aavegotchi is deployed) the Aavegotchi community believes it would be a great idea to have GHST token as collateral on Matic Aave. If GHST gets listed as an collateral on Aave, users of Aavegotchi will be able to use aGHST as collateral within their Aavegotchis.

## Motivation

With the availability of cross chain governance, it's time to make long overdue updates to the Polygon market.

## Specifications
  
The risk parameters for the assets coming from the V2 market to the Polygon market are as follows:

#### BAL
- LTV: 20%
- Liquidation Threshold: 45%
- Liquidation Bonus: 10%
- Reserve Factor: 20%
#### CRV
- LTV: 20%
- Liquidation Threshold: 45%
- Liquidation Bonus: 10%
- Reserve Factor: 20%
#### DPI
- LTV: 20%
- Liquidation Threshold: 45%
- Liquidation Bonus: 10%
- Reserve Factor: 20%
- Not borrowable
#### LINK
- LTV: 50%
- Liquidation Threshold: 65
- Liquidation Bonus: 7.5%
- Reserve Factor: 10%
#### SUSHI
- LTV: 20%
- Liquidation Threshold: 45%
- Liquidation Bonus: 10%
- Reserve Factor: 35%
- Not borrowable

## Adding GHST to the Polygon Market

1. Aavegotchis are crypto-collectibles (NFT). Aavegotchis are pixelated ghosts living on the Matic blockchain, backed by the ERC-721 standard. Their value is determined by rarity level 2, which is calculated via multiple factors, such as base traits, amount of staked collateral 2, and equipped wearables. GHST token is the backbone of Aavegotchi Realm. GHST is an in-game asset, used in all operations in-game (excluding usage of GHST as a collateral for summoning your Aavegotchi, which are aTokens powered by Aave) such as buying portals (opened\closed), wearable items, potions and etc.

2. Users of Aavegotchi will borrow GHST, to use it as an in-game asset, to speculate on in-game values or for other in-game purposes. Users of Aavegotchi will use it as a collateral to summon their gotchis with it because aTokens are another backbone of the game. To summon your Aavegotchi you need to have a specific amount of aTokens to make it possible.

3. GHST token has been live on Ethereum Mainnet since September, when it was launched via a continuous bonding curve DAICO sale (still live today at aavegotchi.com/curve 5). The token was launched at 0.2 DAI / GHST and currently sits at around 1.2 DAI. The all-time high is around 1.9 DAI / GHST. GHST is priced in DAI because unlike most tokens in crypto, it is actually backed by a DAI reserve at a 33% connecting weight. This makes the price more stable because it takes more in/out to change the price.

A significant challenge for Aavegotchi as a project was deciding to migrate our ecosystem from Ethereum to Polygon (then known as Matic). Expensive gas fees would have made it impossible for our players to use Aavegotchi NFTs (which require constant onchain attention). However, from January to March, we were able to complete the migration and launch successfully onto Polygon.

4. GHST is the official utility token of the Aavegotchi ecosystem and can be used to purchase portals, wearables, and consumables.

5. The inflation of GHST tokens through purchases on the bonding curve is positively correlated to the GHST price. The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.

6. The bonding curve has minting and burning permissions, but these permissions are governed by the AavegotchiDAO which exists on Ethereum Mainnet. GHST tokens are not arbitrarily minted or burned. The supply is determined by inputs via the bonding curve.

#### Market Data

- Market Cap - \$140,000,000
- 24hr Trading volume - \$29,209,070
- Currently listed on 14 exchanges: Binance, Okex, Poloniex, Uniswap, Gate.io, LBank, Bilaxy, Hoo, MXC, BiBox, 0x, BamBoo Relay, QuickSwap, 1ich Exchange;
- Maturity - 15 months.

#### Proposed Risk Parameters
- LTV: 25%
- Liquidation Threshold: 45%
- Liquidation Bonus: 12.5%
- Reserve Factor: 20%  
  
#### Socials

- Telegram group: - Telegram: Contact @aavegotchi 8 - 12,000+ members;
- Discord - https://discord.gg/aavegotchi 16,000+ members
- https://twitter.com/aavegotchi - twitter 67,000 followers;
- Active forum https://dao.aavegotchi.com/
- Governance Snapshot https://snapshot.org/#/aavegotchi.eth
- Active code development - https://github.com/aavegotchi

#### Token Stats

- Contract’s date of deployments: 14 September 2020 (Ethereum)
- Number of transactions:
  - Ethereum: 143,397
  - Polygon: 2,507,992
- Number of holders for tokens:
  - Ethereum: 6,427
  - Polygon: 68,943
- Currently circulating Supply - 66,419,514
- Current total supply - 66,419,514

#### Full Disclosure

Stani Kulechov is an official advisor of Aavegotchi, and Aave has invested into Pixelcraft Studios, the development team behind Aavegotchi.
  
## WMATIC Risk Parameter Update
  
The criteria for assessing market risk, as determined by the market size and changes in fluctuation in demand, is presented by the Aave community here. In line with the criteria, analysis of the MATIC token on Polygon network is presented below:

|Holders:|168,102|B+ to A-|B+|
| --- | --- | --- | --- |
|Transactions|100,240,631|A||
|Mkt Cap|586,568,252|B+ to A-||
|Av. Vol.|$50,675,854|C+ to B-||
|Norm. Vol|0.06579|C+ to B-||

The MATIC token risk score compiled by Index Coop is B+. This matches the risk score cited here 1. However, the volatility score of B- (C+ to B-) is justified by the 0.06579 score compared to 0.064 in the table presented in the documentation 1. Further to this, assets like BAL and BAT on Ethereum have similar vol characteristics to wMATIC on Polygon. The Norm. Vol parameter is the average of the t=30 days and t=90 days as shown in the below table.
  
#### wMATIC Volatility Data (Polygon Network Data)

|Time|S.D Vol|
| --- | --- |
|t=7 days|0.08475|
|t=30 days|0.06535|
|t= 90 days|0.06622|
|t= 180 days|0.09013|
|t= 365 days|NA|

Based upon the volatility data share above, Index Coop suggests changing the Liquidation Threshold and Loan to Value parameters as shown below:

|Parameter|Current Value|Recommended Value|
| --- | --- | --- |
|wMATIC Liquidation Threshold|65%|70%|
|wMATIC Loan to Value|50%|65%| 

## Implementation

This proposal is the first cross chain proposal for AAVE. AAVE holders will vote through the Ethereum mainnet to change parameters on the Polygon market. The proposal makes use of the [cross chain bridge](https://github.com/aave/governance-crosschain-bridges) to send a message to the [Polygon bridge executor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772). The following functions are called on the [lending pool configurator](https://polygonscan.com/address/0x26db2b833021583566323e3b8985999981b9f1f3) from the executor:

For GHST, BAL, DPI, CRV, SUSHI, LINK:
* batchInitReserve((address aTokenImpl, address stableDebtImpl, address variableDebtImpl, uint8 decimals, address interestRateStrategy, address underlyingAsset, address treasury, address incentivesController, string underlyingAssetName, string aTokenName, string aTokenSymbol, string varTokenName, string varTokenSymbol, string stableDebtName, string stableDebtSymbol, bytes params)[])
* setReserveFactor(address asset, uint256 reserveFactor)

For GHST, BAL, CRV, LINK:
* enableBorrowingOnReserve(address asset, bool stableBorrowEnabled)

For GHST, BAL, DPI, CRV, SUSHI, LINK, WMATIC:
* configureReserveAsCollateral(address asset, uint256 ltv, uint256 liquidationThreshold, uint256 liquidationBonus)

And the following function is called on the [Aave Oracle](https://polygonscan.com/address/0x0229f777b0fab107f9591a41d5f02e4e98db6f2d#code) for GHST, BAL, DPI, CRV, SUSHI, LINK:
* setAssetSources(address[] assets, address[] sources)

A payload contract has been created to initiate all the above changes.

[Payload Contract](https://polygonscan.com/address/0x8b97a0B37974Ddec0CB8B8039a4e593457DefE8c)

Tests and implementation are located [here](https://github.com/pakim249CAL/Polygon-Asset-Deployment-Generic-Executor).
