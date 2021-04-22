---
aip: 16
title: introduce Liquidity Incentives for Aave v2
status: Proposed
author: Anjan Vinod (@Anjan-ParaFi)
shortDescription: Aave V2 LM upgrade
discussions: https://governance.aave.com/t/proposal-introduce-liquidity-incentives-for-aave-v2/2340/27
created: 2021-04-22
updated: 2021-04-22
---

## Motivation

We believe that a well designed LM program can accomplish the following:

Grow lending and borrowing activity in targeted markets: With almost every major DeFi protocol launching a liquidity mining program, we believe it would be advantageous for Aave to utilize part of the Ecosystem Reserve to drive lending and borrowing activity across markets. Distributing AAVE to borrowers and lenders acts as an added incentive to attract more capital. The distribution can become more targeted over time. For example, certain markets may need more AAVE than others based on liquidity, utilization, and maturity of the market.

Broader distribution and protocol decentralization: Rewarding AAVE to users of the protocol improves the distribution of the AAVE token. This gets AAVE into the hands of more users, further decentralizing the protocol.

Deprecating Aave v1: Due to high gas fees and a lack of incentive to migrate, Aave v1 still contains approximately 40% of the value locked in the broader Aave protocol. By introducing liquidity mining rewards only on Aave v2, liquidity providers and borrowers will naturally migrate toward the optimized version. Declining liquidity on Aave v1 will facilitate a gradual deprecation of this iteration of the protocol, allowing more development activity to be directed at Aave v2.

This program is being proposed as a beta to further investigate how the inclusion of liquidity mining rewards will benefit the Aave ecosystem. From a supply perspective, this distribution results in only 5% of the fully diluted AAVE supply released each year. This enables Aave to experiment with liquidity mining rewards while saving the majority of the ecosystem reserves for other growth initiatives and grants. If this AIP passes, the Aave community can reflect on total supply/borrow and utilization by market to further refine the distribution program.

The forum [poll](https://governance.aave.com/t/proposal-introduce-liquidity-incentives-for-aave-v2/2340/27) closed with 62% of participants supportive of introducing rewards.

## AIP rationale

2,200 stkAAVE per day will be allocated pro-rata across supported markets based on the dollar value of the borrowing activity in the underlying market. While Aave has seen success without rewards so far, this program would attempt to supercharge its growth at a relatively low cost to the treasury and AAVE holders.

This distribution strategy rewards markets based on borrow demand. Markets with higher dollar value borrowed receive a higher share of the daily stkAAVE rewards. stkAAVE will be allocated at a 50/50 ratio between lenders and borrowers across stablecoin markets. In WBTC and ETH markets, the ratio between lenders and borrowers will be 95/5 to discourage riskier borrowing activity.

stkAAVE will be rewarded instead of AAVE to align long-term incentives, disincentivize speculative farmers, and allow users to earn an underlying yield on top of the AAVE they earn. This helps align LPs by giving them more governance weight upfront and secure the protocol by increasing the amount of AAVE staked in the Safety Module. LPs then immediately earn a staking yield on their vested AAVE.

stkAAVE requires a 10 day cooldown period. The cooldown period must be started before LPs can unstake their AAVE. After the cooldown period, users have a 2 day window to unstake.

To simplify the implementation and allow the community to analyze the distribution first, this proposal does not include a vesting component. As we approach the target end date for the LM program, we encourage the community to explore any vesting structures for stkAAVE.

We propose 7/15/21 as the target end date for this liquidity mining program. A mid-July end date gives the community 3 months of activity to analyze before voting to end, continue, or adjust the LM program.


## AIP content in short

The purpose of this AIP is to introduce liquidity mining rewards for Aave v2.

This AIP would distribute 2,200 Staked AAVE (stkAAVE) per day, representing around 1M$ in rewards distributed daily to lenders and borrowers. Users will receive stkAAVE.

2,200 stkAAVE per day will be allocated pro-rata across the following markets based on the dollar value of the borrowing activity in the underlying market:

![Aave](../assets/AIP-16/aip16-image.png)


$ Value as of 3/22/21

This program is structured as a beta, with the opportunity to track protocol activity and refine the distribution in the future.

The distribution has a target end date of 7/15/21. The community will be able to review the results of the LM program and adjust any parameters accordingly.

## Abstract

Distribute 2,200 stkAAVE daily from the [Ecosystem Reserve](https://docs.aave.com/aavenomics/incentives-policy-and-aave-reserve) to borrowers and lenders

Ecosystem Reserve contract : https://etherscan.io/address/0x25f2226b597e8f9514b3f68f00f494cf4f286491#code

## Implementations details

Proposal contract:

https://etherscan.io/address/0x5778DAee2a634acd303dC9dC91e58D57C8FFfcC8#code

The proposal will update the aDAI/GUSD/USDC/USDT/WBTC/WETH implementations and the variableDebt DAI/GUSD/USDC/USDT/WBTC/WETH implementation to set the Incentives controller to https://etherscan.io/address/0x5778DAee2a634acd303dC9dC91e58D57C8FFfcC8. The incentive controller will receive 198000 AAVE from the Aave ecosystem reserve https://etherscan.io/address/0x25f2226b597e8f9514b3f68f00f494cf4f286491. 

The proposal sets the following emissions per second (in wei):

    emissions[0] = 1706018518518520; //aDAI
    emissions[1] = 1706018518518520; //vDebtDAI
    emissions[2] = 92939814814815; //aGUSD
    emissions[3] = 92939814814815; //vDebtGUSD
    emissions[4] = 5291203703703700; //aUSDC
    emissions[5] = 5291203703703700; //vDebtUSDC
    emissions[6] = 3293634259259260; //aUSDT
    emissions[7] = 3293634259259260; //vDebtUSDT
    emissions[8] = 1995659722222220; //aWBTC
    emissions[9] = 105034722222222; //vDebtWBTC
    emissions[10] = 2464942129629630; //aETH
    emissions[11] = 129733796296296; //vDebtWETH

The proposal will set the emission end date to 90 days from the moment the proposal is executed.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
