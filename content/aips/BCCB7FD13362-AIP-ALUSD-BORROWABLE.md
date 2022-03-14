---
title: Add alUSD as a Borrowable Asset on Aave V2
status: Proposed
author: Foobar (@0xfoobar)
shortDescription: Add alUSD as a borrowable asset on Aave
discussions: https://governance.aave.com/t/arc-add-alusd-as-borrowable-to-aave-v2/7191/2
created: 2022-02-27
---

## Simple Summary

Alchemix allows users to take out liquidation-free loans against their assets, by minting synthetic tokens and using investment yield to pay back the debt. 

We propose adding alUSD, a stablecoin, as a borrowable asset on Aave but not as collateral.

### References
Whitepaper: https://alchemix.fi/c76d1d663f6c8247b86a8fca83d5bd1b.pdf  
Website: https://alchemix.fi/  
App: https://app.alchemix.fi/  
Twitter: https://twitter.com/AlchemixFi  
Docs: https://alchemix-finance.gitbook.io/alchemix-finance/  
Github: https://github.com/alchemix-finance  
alUSD Token Contract: https://etherscan.io/address/0xbc6da0fe9ad5f3b0d58160288917aa56653660e9  
Chainlink Oracle: https://etherscan.io/address/0xf55db61d1e65718ac0d5a163b18cca3645791265 

## Abstract

The purpose of this AIP is to list alUSD as a borrowable asset on Aave. alUSD has established itself as one of the leading new stablecoins in terms of stability and liquidity, and listing on Aave will provide users with a proven stablecoin to borrow. Alchemix has 376m TVL in the form of yvDAI and DAI backing alUSD, with a liquid supply of 239m alUSD. alUSD has one of the deepest Curve pools, with ~450m in liquidity. In addition to the Curve pool, alUSD has additional liquidity on Sushiswap, Saddle, and mStable. According to Parsec Finance’s StableRank, alUSD is routinely among the top stablecoins in terms of price stability and liquidity within 1% slippage. Having been on the market for over 6 months while maintaining the peg through turbulent market conditions, alUSD has built the reputation required to be an asset listed on AAVE.

## Motivation

alUSD has established itself as a reliable and liquid stablecoin. In addition to protocol improvements, Alchemix DAO believes that integrating alUSD throughout DeFi will help us in that goal. Because AAVE is the leading lending protocol across all of crypto, getting on AAVE as a borrowable asset would lend a lot of legitimacy to alUSD. The more tightly integrated alUSD is within DeFi, the more resilient it will become, which will allow alUSD to safely grow in supply.

Going forward, Alchemix will expand beyond our current set up of using DAI in the yvDAI yearn vault as collateral, and expand the selection of stablecoin collaterals and yield earning strategies. AAVE is one such source of yield that we are looking to plug into in the future. When these upgrades take place, we predict that Alchemix will be one of the larger liquidity providers to AAVE, similar to how Alchemix is currently one of the largest liquidity providers on Yearn.

## Rationale

Alchemix is an evolution of the tried and true CDP model trailblazed by MakerDAO. Alchemix is, at its core, an overcollateralized stablecoin, much like DAI and other similar tokens. It has some key differences however.

Alchemix only mints like-kind or “mirror” al-Assets. For example, alUSD is only mintable by DAI (and later USDT and USDC), and alETH is only mintable by ETH (and later other ETH derivatives). Deposited collateral is then deployed to yearn, of which the earned yield doubly repays users’ debt and backs the dollar peg in the Transmuter module. In addition, there is no interest paid in the borrowing of al-Assets. Due to this structure, Alchemix does not have liquidations in its system. This allows people to maximum borrow without fear of shifting market conditions - taking an essentially risk free negative interest alUSD loan with their DAI. In effect, the system acts as a way to get an advance on your yield for your stablecoin deposits.

Alchemix ensures the alUSD peg with the following mechanisms.

1. 50% LTV for minting alUSD, which prevents excessive recursive leverage in the protocol. 
2. DAO-managed debt caps that limit the over-minting of alUSD. 
3. The ability to repay debt in alUSD or DAI. If alUSD is under the peg, people can buy it off the market and repay their loan at a discount. If alUSD is over the peg, users can sell alUSD to DAI and repay with DAI to arbitrage the price, and they can self-liquidate their collateral to mint more alUSD to trade to DAI for arbitrage.
4. The Transmuter module guarantees 1:1 conversions of alUSD to DAI, the conversion process isn’t instant, but it can present good arbitrage opportunities, which helps to stabilize the peg.
5. Alchemix rewards ALCX governance tokens for alUSD liquidity providers, which attracts liquidity to the pool, further boosting the peg.

alUSD minted from a new loan has a collateralization ratio of 200%, while alUSD minted from repaid debt has a collateralization ratio of 100%. The total global collateralization ratio for alUSD is 157%. The supply can expand in two ways – an expansion in the debt ceiling followed by users taking new loans, or debt repayments with DAI, which decrement the global debt while not destroying alUSD. This is how we have a supply of ~239m with a current debt cap of 150m. alUSD can be burned by staking it in the transmuter, where it is converted 1:1 to DAI over time.

These mechanisms in tandem have allowed for alUSD to remain extremely close to the $1 peg since its inception.

alUSD is desirable to borrow because it is tightly pegged to DAI, USDC, USDT, mUSD, FEI, FRAX, and LUSD in our various markets. It is simple to swap between other stables. DEX aggregators make it simple to trade between alUSD and any other asset on Ethereum too. In addition, there are attractive farming incentives for alUSD LPs. For people that are looking to borrow alUSD but don’t have stablecoins from which to mint it, borrowing alUSD on AAVE will provide more options to get alUSD. The alUSD can be used for yield farming, or through highly liquid swaps into other stable coins, to finance their personal life or to speculate on the market. alUSD is also used in an alETH/alUSD options market on premia.finance. Alchemix plans to continue to expand alUSD use cases in the future through partnerships and integrations.

## Test Cases

This is an addition of a new collateral asset, so we're using existing aToken contracts which are well-tested.

## Implementation

alUSD will only be used for depositing and lending, not as collateral. The following parameters are proposed:

Strategy: rateStrategyStableTwo
Base LTV As Collateral: 0
Liquidation Threshold: 0
Liquidation Bonus: 0
Borrowing Enabled: true
Stable BorrowRate Enabled: true
Reserve Decimals: 18
Reserve Factor: 20%

Interest bearing aALUSD address: 0x174aC37dD1db54516D00887E0E84697423Eefa9b
Variable Debt variableDebtALUSD address: 0xE2B3b50CF9b36C8d066e5da994B97cae6a268482
Stable Debt stableDebtALUSD address: 0x1D708aB94699717A4A8d725431d322D418A166E8
Strategy Implementation for ALUSD address: 0x0CFc9A0F66692179abCA661a610851bdf6fAE0F0
Chainlink oracle for ALUSD/ETH address: 0xF55DB61d1e65718ac0d5A163B18CCA3645791265

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).