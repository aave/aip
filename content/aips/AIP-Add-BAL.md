---
aip: <to be assigned>  
title: Adding BAL on AAVE  
status: WIP  
authors: Coopahtroopa (@coopahtroopa), MonetSupply(@monet-supply), Mubrais (@mubaris)  
shortDescription: Enable BAL as a base asset in Aave V2  
discussions: https://governance.aave.com/t/proposal-add-support-for-bal/1787  
created: 2021-1-25  
---

## Simple Summary
BAL is the governance token of [Balancer](https://pools.balancer.exchange/#/explore), a programmable liquidity and asset managment protocol with over [$800M in TVL](https://defipulse.com/balancer) according to DeFi Pulse.

## Abstract
Add [BAL](https://etherscan.io/token/0xba100000625a3754423978a60c9317c58a424e3d) to the AAVE V2 market.

Balancer is a DEX that uses a constant function market maker formula to allow liquidity pools with multiple tokens, custom allocations and fees. Smart pools in Balancer can be used for programmable liquidity. 

Traders can swap between any of the tokens listed on Balancer in exchange for a swap fee (paid to liquidity providers) and slippage based upon the relative trade size. 

BAL is the governance token of the Balancer exchange, entitling holders (including those providing BAL liquidity on Balancer) to vote on proposals. BAL also receives preferential treatment in the Balancer exchange liquidity mining program.

Balancer is responsible for the creation of [Snapshot](https://snapshot.page/#/), and currently leading a number of [governance intiatives](https://snapshot.page/#/balancer/proposal/QmXQpKyw1BvYgZtvC2KGqrDezWBfSUBEKK77Kx866yBLYf) to reward active contributions to the protocol.

## Motivation

As Balancer gears up for the launch of Balancer V2, composability becomes key for the Balancer ecosystem.

At the time of writing, BAL has a market cap of $230M.

Apart from the BAL liquidity on Balancer, BAL is also listed on FTX, Coinbase, Binance, Gemini and other centralized exchanges.

Adding BAL to Aave will be the first major lending/borrowing market for the asset, and one that sets precedent for future exploration of Balancer Pool Token (BPT) markets similar to [Aave V1 Uniswap Markets](https://medium.com/aave/the-uniswap-market-is-live-on-aave-protocol-12b5a4cc5e2).

Aave leverages Balancer for it's [Safety Module](https://docs.aave.com/aavenomics/safety-module), meaning this partnership further cements the relationship between the two protocols.

*"The advantage of using Balancer against other AMM solutions is clear when we factor in the possibility of dynamically adjusting the weighting towards AAVE. This allows for the creation of a market and the provision of liquidity whilst maintaining exposure to AAVE. Holding AAVE/ETH liquidity with uneven weights is very close to simply holding AAVE, with the benefits of earning trading fees on top of it."*


## Benefits for Aave
Balancer has an increasingly active community which would bring more users and liquidity to Aave.

BAL earns native rewards through liquidity mining, currently yielding upwards of 80%+ APY with limited impermanent loss. This has generated strong borrowing demand for BAL on CREAM, with deposit rates often above 10%.

With deposit rates so high, it becomes super cost effective for people to borrow funds with BAL as collateral, often times with an effective negative borrowing rate!

## Specification
BAL will continue to see increased governance activity in the coming months.

Adding BAL to the Aave V2 markets will provide strong borrowing demand, generating protocol fees and allowing for further governance participation.

## Rationale

Balancer and Aave are natural partners. Aave leverages Balancer for it's Safety Module and it only seems natural that BAL should be listed on Aave given the depth of the AAVE liquidity Balancer today.

This proposal opens design space for future lending use-cases, both on Balancer's end and on Aave's for more niche specific liqudity pool markets.

## Additional Resources

Whitepaper - https://balancer.finance/whitepaper 1  
Website - https://balancer.finance 1  
Twitter - https://twitter.com/BalancerLabs  
Blog - https://balancer.finance/blog-feed  
Documentation - https://docs.balancer.finance  
Source Code - https://github.com/balancer-labs 2  
BAL Token Contract - https://etherscan.io/address/0xba100000625a3754423978a60c9317c58a424e3d#code 1  


## Audits/Security Reviews
[Trail of Bits, Conesnsys Dilligence and Open Zeppelin.](https://docs.balancer.finance/core-concepts/security/audits)  

[AAVE Community x BAL Risk Assesment](https://governance.aave.com/t/proposal-add-support-for-bal/1787/6?u=coopahtroopa)  

![](https://i.imgur.com/lrXmHFD.png)  

**BAL Smart contract Risk: B-**

Since it's launch in June BAL has reached half a million transactions driven by liquidity mining distribution program which may lead to inflation. The smart contract has been well battle tested, audited twice and has a good test coverage.

**BAL Counterparty Risk: B**

Balancer is a permissionless DEX with a large community of BAL holders that vote on proposals. Anyone can create a custom Balancer Pool.

**BAL Market Risk: C +**

The BAL token has experience less volatility than the rest of the DeFi market since its inception but remains quite volatile. The token is traded on the top centralized exchanges with good volume.

**Risk Parameters**

- LTV 55%
- Liquidation Threshold 60%
- Liquidation Bonus 10%
- Reserve Factor 20%

Variable Interest Rate Model ~ Collaterals

![](https://i.imgur.com/35kPGuC.png)

- UOptimal 45%
- R_0 0%
- R_s1 7%
- R_s2 300%

## References
[Coingecko](https://www.coingecko.com/en/coins/balancer)  
[Pool management - Balancer 1](https://pools.balancer.exchange/#/explore?type=shared&token=0xba100000625a3754423978a60c9317c58a424e3d)  
[Pools Vision 1](http://pools.vision/)  

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
