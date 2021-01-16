---
aip: <to be assigned>
title: Adding xSushi on AAVE
status: WIP
author: 0xMaki (@0xMaki), Joseph Delong (@dangerousfood)
shortDescription: Aave governance proposal to enable xSushi as a base asset
discussions: https://governance.aave.com/t/listing-proposal-add-xsushi/1794
created: 2021-1-15
# updated (*optional): <date created on, in ISO 8601 (yyyy-mm-dd) format> or N/A
# requires (*optional): <AIP number(s)>
---
## Simple Summary
xSUSHI is the governance token of Sushiswap, a community-led DEX with a current TVL of more than 1.1B.

## Abstract
Add xSushi to the AAVE V2 market.

## Motivation
Aave would be the first platform to support xSushi a yield bearing asset with over of 100m$ currently under utilized.

Aavengers could use their platform of predilection to borrow their existing xSushi.

Support community-led projects.

## Specification
xSushi is one of the two currently supported assets for Sushi governance (ETH/SUSHI SLP being the other one). We are currently not fully decentralized but the members of the Ops multisig and Treasury multisig are bound to respect all of the governance votes. We do plan to be a real DAO most likely leveraging Aragon v2 in 6 to 12 months depending on the progress made by community.

xSushi is receiving 0.05% of all the swaps happening on Sushiswap and should also benefits from all of the future revenues streams from upcoming platforms such as Bento-Miso-Gusoku-Deriswap and more.

The current yield on this asset alone is hovering around 10-40% APY with over $100MM locked in the Sushibar making it an ideal productive asset as collateral.

## Rationale

The rationale for adding xSushi to the AAVE V2 market is simple; xSushi is a popular yield bearing asset but is currently incapable of being utilized for borrowing or lending.

SUSHI can currently be borrowed and lent on [cream.finance](https://app.cream.finance/). However, xSushi cannot be borrowed or lent on any platform currently. By allowing xSushi to be borrowed and lent on AAVE v2, this will allow xSushi holders to access the liquidity of their platform


The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

## Test Cases

*see implementation*

## Implementation
AAVE does not use TWAP oracle and xSushi does not have sufficient liquidity on centralized exchanges we will calculate the xSushi using the existing oracle of SUSHI and applying a calculated exchange rate.

The price oracle for xSushi will calculate the price using a SUSHI price oracle multiplied by the exchange rate for SUSHI<>xSushi.

`xSushiPrice = sushiPrice * exchangeRate`

To calculate the exchange rate we will check the SUSHI balance of the xSushi contract.

An example implementation of exchange rate calculation can be found below

```js
let sushi = new ethers.Contract('0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', abi, provider)

let totalSushiStakedinXSushi = await sushi.methods.balanceOf('0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272').call()

let xSushi = new ethers.Contract('0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', abi, provider)

let totalXSushiSupply = await xSushi.methods.totalSupply().call()

let exchangeRate = totalSushiStakedinBar.div(totalXSushiSupply)
```

## Audits/Security Reviews
[Peckshield & Quantstamp](https://docs.defisafety.com/finished-reviews/sushiswap-process-quality-audit#audits)

[**AAVE Community xSushi Risk Assement**](https://governance.aave.com/t/listing-proposal-add-xsushi/1794/16)

![Screenshot 2021-01-05 at 19.56.10](https://aws1.discourse-cdn.com/standard21/uploads/aave/optimized/1X/e35ebb4c429ea6e1162d1fd6faf7d7b624287a14_2_690x184.png)

SushiSwap is a DEX forked of Uniswap that grew very fast, now at $1.6B of TVL, thanks to generous liquidity mining incentives. It is now part of the Yearn conglomerate with many new upcoming features.

xSUSHI is the staked SUSHI that receives .5% of the fees with 10 to 40% APY a great property for a collateral. The redeeming process from xSUSHI to SUSHI is permissionless allowing the analysis to focus on SUSHI.

[**SUSHI Smart contract**](https://ethplorer.io/address/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2) **Risk: B-**

SUSHI was launched late August by a fork of the Uniswap Exchange. Shortly after launch, the key developer stole the development funds, eventually returning them. The network managed secure support from some industry leaders and has grown fast in these few month reaching two dozen users and over a billion transactions.

**SUSHI Counterparty Risk: B**

Sushi is a permissionless blockchain protocol where token holders vote on incentives and upgrades. Anyone can create new Sushi markets.

[**SUSHI Market**](https://www.coingecko.com/en/coins/sushi) **Risk: C +**

SUSHI has a good market capitalisation with a high volume. The price has suffered from extreme volatility since inception, suffering from large drops in value which is problematic for a collateral, requiring prudent parameters. This was driven by internal drama which also deeply affected community trust, now on the mend.

### Risk Parameters ~ New (also proposed for SNX)

LTV 25%

Liquidation Threshold 45%

Liquidation Bonus 15%

Reserve Factor 35%

### Variable Interest Rate Model ~ Collaterals

![Screenshot 2020-12-15 at 19.44.31](https://aws1.discourse-cdn.com/standard21/uploads/aave/optimized/1X/db265d003d9c9d4afa45b1fcc6aa6d59a7527206_2_690x444.png)

UOptimal 45%

R_0 0%

R_s1 7%

R_s2 300%

## References
[Classic UI (deprecated 2021-1-22)](https://sushiswap.fi/)
[SushiSwap Lite](https://lite.sushiswap.fi/)
[SushiSwap.fi](https://lite.sushiswap.fi/)
[Sushi token 0x6b3595068778dd592e39a122f4f5a5cf09c90fe2](https://etherscan.io/address/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2)
[xSushi token 0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272](https://etherscan.io/address/0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272)
[Sushi Governance forum](forum.sushiswapclassic.org)
[Help and FAQ](docs.sushiswap.fi)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).