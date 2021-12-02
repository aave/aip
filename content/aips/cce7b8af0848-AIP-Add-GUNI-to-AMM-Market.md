---
title: Add G-UNI to Aave V2 AMM Market
status: Proposed
author: Gelato Newtork (@gelatodigital)
shortDescription: Create a new collateral type to Aave's AMM Market with G-UNI stablecoin LP tokens
discussions: https://governance.aave.com/t/arc-add-gelato-s-g-uni-erc20-uniswap-v3-positions-as-collateral-to-aave-s-amm-market/5687/5
created: 2021-11-07
---

## Simple Summary

Add Gelato’s G-UNI DAI/USDC and G-UNI USDC/USDT pools as collateral to Aave’s AMM market with these parameters:

Collateral: **yes**
LTV: **60%**
Liquidation Threshold: **70%**
Liquidation Bonus: **15%**
Reserve Factor: **10%**

## Abstract

G-UNI is an ERC20 wrapper around Uniswap v3 LP NFTs which can be used to make liquidity provision on Uniswap v3 fungible and its fee reinvestment process automated. It basically turns Uniswap V3s liquidity positions into Uniswap v2 like ERC20 tokens. 

Two G-UNI Pools have been deployed with Uniswap V3 Positions in highly concentrated ranges (centered around 1:1) on the 0.01% fee tier of both DAI/USDC and USDC/USDT markets. Add liquidity to these pools and earn auto compounded LP fees on these high volume uniswap v3 stablecoin pairs, just by holding the G-UNI LP Token. Because of the fungible nature of these G-UNI tokens which represent proportions of a shared Uniswap V3 position, they are a simple solution for lending and borrowing markets to onboard Uniswap V3 LP as a collateral type.

## Motivation

Based on several discussions with Aave stakeholders and Uniswap v3 Liquidity providers, we believe that the G-UNI DAI / USDC and USDC / USDT pool tokens would provide great value to Aave users as an efficient way of utilizing their USDC, DAI and USDT collateral to borrow other tokens while earning compounding trading fees on Uniswap v3. Moreover, this would enable Aave users to go leverage on their Uniswap v3 positions and potentially 50x the liquidity they provide and thus significantly increase their fees earned.

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

## Implementation

The payload to list the two G-UNI Pools as collateral types on the AMM market and to configure their price oracles is deployed at this contract address: [0x67e4EDE946b3d76c4C505566eB821a1470507d2d](https://etherscan.io/address/0x67e4ede946b3d76c4c505566eb821a1470507d2d#code)

To execute the action governance simply calls `execute()` method (with no arguments) on the above contract address.

On execution both pools will be listed with the parameters in "Simple Summary" and with borrowing of G-UNI disabled.

## References

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

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

