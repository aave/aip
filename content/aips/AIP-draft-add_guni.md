---
aip: <to be assigned>
title: Add G-UNI to Aave V2 AMM Market
status: WIP
author: Gelato Newtork (@gelatodigital)
shortDescription: Create a new collateral type to Aave's AMM Market with G-UNI stablecoin LP tokens
discussions: https://governance.aave.com/t/arc-add-gelato-s-g-uni-erc20-uniswap-v3-positions-as-collateral-to-aave-s-amm-market/5687/5
created: 2021-11-07
---

## Sentence Rational

Adding Gelato’s G-UNI DAI / USDC and USDC / USDT pools as collateral to Aave’s AMM market

## References

Link to:

* [source code](https://github.com/gelatodigital/g-uni-v1-core)
* [G-UNI docs](https://docs-g-uni.gelato.network/)
* [about gelato](https://gelato.network)
* [gelato whitepaper](https://drive.google.com/drive/folders/1M6i1sa-dRhodw08MCLseytHTdkeFweBH)
* Ethereum addresses contracts
  - [G-UNI DAI / USDC](https://etherscan.io/address/0x50379f632ca68d36e50cfbc8f78fe16bd1499d1e)
  - [G-UNI USDC / USDT](https://etherscan.io/address/0xd2eec91055f07fe24c9ccb25828ecfefd4be0c41)
* ChainLink Oracle
  - [DAI](https://etherscan.io/address/0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9)
  - [USDC](https://etherscan.io/address/0x8fffffd4afb6115b954bd326cbe7b4ba576818f6)
  - [USDT](https://etherscan.io/address/0x3e7d1eab13ad0104d2750b8863b489d65364e32d)
* G-UNI Oracles
  - [G-UNI DAI/USDC Oracle](https://etherscan.io/address/0x7843ea2e3e60b24cc12b56c5627adc7f9f0749d6#code)
  - [G-UNI USDC/USDT Oracle](https://etherscan.io/address/0x399e3bb2bbd49c570aa6edc6ac390e0d0acbbd5e#code)
* [audits](https://drive.google.com/drive/folders/1AGg9HvaRM8SKlONRCv2rehlNkn5UwqJZ?usp=sharing)
* Communities
  - [Discord](https://discord.gg/ApbA39BKyJ)
  - [Telegram](https://t.me/therealgelatonetwork)
  - [Twitter](https://twitter.com/gelatonetwork)

## Paragraph Summary

Based on several discussions with Aave stakeholders and Uniswap v3 Liquidity providers, we believe that the G-UNI DAI / USDC and USDC / USDT pool tokens would provide great value to Aave users as an efficient way of utilizing their USDC, DAI and USDT collateral to borrow other tokens while earning compounding trading fees on Uniswap v3. Moreover, this would enable Aave users to go leverage on their Uniswap v3 positions and potentially 50x the liquidity they provide and thus significantly increase their fees earned.

## Motivation

G-UNI is an ERC20 wrapper around Uniswap v3 LP NFTs which can be used to make liquidity provision on Uniswap v3 fungible and its fee reinvestment process automated. It basically turns Uniswap V3s liquidity positions into Uniswap v2 like ERC20 tokens.

G-UNI tokens have already been adopted by a wide series of projects such as MakerDAO, Instadapp, Rari, and many more.

## Specifications

1. What is the link between the author of the AIP and the Asset?

Gelato is the development team behind G-UNI

2. Provide a brief high-level overview of the project and the token

The token is a wrapper around stablecoin pairs on Uniswap v3, it only uses Gelato’s network of keepers to automate fee compounding

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

G-UNI would enable Aave users to go leverage on their Uniswap v3 positions and potentially 50x the liquidity they provide and thus significantly increase their fees earned.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?

G-UNI was deployed to Mainnet in June 2021 and since then projects such as Instadapp, MakerDAO, Float and Rari have integrated it. We worked a lot to understand the inner mechanism of Uniswap v3 and did 2 external audits to ensure the smart contracts we are using are secure.

5. How is the asset currently used?

As Collateral in MakerDAO or for Liquidity mining incentives in projects such as Float or Fei for example.

6. Emission schedule

No emission

7. Token (& Protocol) permissions (minting) and upgradability. Is there a multisig? What can it do? Who are the signers?

All pools will be immutable, as the upgradability key will or already has been burned.

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

Volume corresponds to the volume of DAI, USDC and USDT on Uniswap v3

9. Social channels data (Size of communities, activity on Github)

Over 20k on Twitter and 16k on Telegram

10. Contracts date of deployments, number of transactions, number of holders for tokens

Deployed quite recently, around 50 transactions for the pools, only a couple of holders right now, but will most likely change with MakerDAO having integrated it

## Risk Analysis

Below is the risk analysis for the G-UNI DAI/USDC token. G-UNI is an LP token, simply put it is a fungible wrapper on a Uniswap V3 LP Position. This means G-UNI token risk is associated to its **three** underlying asset types:

1. DAI Stablecoin
2. USDC Stablecoin
3. Uniswap V3 DAI/USDC 0.01% (Non Fungible) LP Positions

To understand the risks we'll look at these underlying assets, as well as the G-UNI token itself.

![image](https://imgur.com/JUdwlWl)

**DAI: overall risk score of B+**. DAI has relatively low smart contract risk (SAI contracts on mainnet since 2017, DAI since 2019) and market risk (this stablecoin does half a billion in volume per month). The lowest subscore is counterparty risk: centralized price feeds and some central controls over the minting of DAI and MKR.

**USDC: overall risk score of A-** Again the smart contract risk and market risks are low - with high volume and millions of successful transactions without critical vulnerabilities. The main risk is centralized controls, since CENTRE Consortium is the central issuer of USDC and manages the backing of the token with fiat.

**Uniswap V3 USDC/DAI LP: overall risk score of A-** The Uniswap V3 smart contracts are newer but have still been battle tested over the last 6 months (3M transactions, 150k+ transactions on this market). The centralization risks on Uniswap markets are low (permissionless), and this pool has done decent volume. Uniswap V2 DAI/USDC market had an overall risk score of **A-**, this V3 market (with increased volume and decreased volatility) should be equal or better.

Since G-UNI is really just a fungible wrapper around a Uniswap V3 Position we will use the Market Risk section of the Uniswap V3 DAI/USDC LPs when assessing G-UNI market risks (not just the market for the G-UNI wrapper token). This is reasonable since when assessing the risk of Uniswap V2 (fungible) LP token collateral we would look at the entire market and not just a single Liquidity Provider.

**G-UNI Smart Contract Risk: C-** G-UNI smart contracts are undoubtedly new. They have existed for even a shorter time than Uniswap V3 (less than 6 months). However, in that time the G-UNI system has been interacted with roughly 25k times without issue. We also received two external audits as well as thorough audits from MakerDAO when onboarded as collateral there.

**G-UNI Counterparty Risk: B-** G-UNI DAI/USDC is entirely permissionless and trustless. For this particular G-UNI pool there are no centralized controls or admins with special privileges (note: other G-UNI token contracts are currently still upgradable by admin multisig). That said, there are still a low number of token holders (less than 100), thus the B- score.

**G-UNI Market Risk: A** The Uniswap V3 DAI/USDC market is only 6 months old, but healthy (greater than 400k volume last month). The concentrated liquidity of V3 allows stablecoin markets in particular to maintain much less volatility compared to Uniswap V2 AMM. Uniswap V2 DAI/USDC pair scored **A** in market risk, V3 likely scores even better (**A+**) due to decreased volatility and increased volume on stablecoin pairs, but conservatively we gave it the equal **A** rating.

This would give G-UNI DAI/USDC an overall risk score of roughly **B-** using Aave's methodology. That said, this unique LP asset is not perfectly suited to the methodology. With different metrics the risks of G-UNI actually seem quite low: the volatility is surprisingly minimal and liquidation risks are similarly extremely low. [Read a full write-up about the risks of this G-UNI pool by MakerDAO's risk team here](https://forum.makerdao.com/t/g-uni-dai-usdc-collateral-onboarding-risk-evaluation/9719)

## Parameter Suggestion

Because of the stable nature of G-UNI DAI/USDC the collateralization ratio could be quite low (in MakerDAO G-UNI has a Min. Collateralization Ratio of 105%) but to air on the side of caution we propose these parameters (same as Uniswap V2 USDC/DAI Aave params):

Currency: **yes**
Collateral: **yes**
Loan to Value: **60%**
Liquidation Threshold: **70%**
Liquidation Bonus: **15%**
Reserve Factor: **10%**