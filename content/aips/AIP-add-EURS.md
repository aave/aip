---
aip: <to be assigned>
title: Add EURS to Aave V2
status: WIP
author: Dmitry Golubev (@stasiscto)
shortDescription: Create a new Aave V2 market for the EURS stablecoin
discussions: https://governance.aave.com/t/proposal-add-support-for-stasis-euro-eurs/3701
created: 2021-09-22
updated (*optional): N/A
---

## Simple Summary

The STASIS team would like to submit a proposal to onboard EURS. Created by stablecoin crypto-enabler platform STASIS, EURS mirrors the euro’s value on the blockchain and is supported by assurance mechanisms provided via an ecosystem of liquidity providers, custodians, exchanges, payment platforms, and others. Each token is backed 1:1 by euros held in the company’s reserve accounts.

## Abstract

EURS is the largest euro-backed digital asset, combining the benefits of the world’s second most-traded currency with the transparency, immutability, and efficiency of the distributed ledger technology. Created by stablecoin crypto-enabler platform STASIS, EURS mirrors the euro’s value on the blockchain and is supported by assurance mechanisms provided via an ecosystem of liquidity providers, custodians, exchanges, payment platforms, and others.

## Motivation

EURS stablecoin combines experience, trust, technology, and financial infrastructure to enable business growth, narrowing the gap between the European financial and the digital asset markets. This in-house solution utilizes multi-blockchain interoperability to shortcut financial inefficiencies, often present in old-school financial systems. The project has popular global social media accounts and multiple local communities in different countries and a diverse investor base that includes institutions. 
Since USD-backed stable coins are heavily dominating the market, Europeans/Asians are often forced into undesired dollar exposure with little on-chain hedging options. EURS stablecoin seeks to challenge the U.S. Dollar’s dominance in global financial markets. By 2021 it has become a popular tool for daily transactions, free of risks and volatility inherent in conventional cryptocurrencies. The potential of stablecoins use cases has been recognized in times of crisis, and the demand for EURS is growing steadily in the DeFi field.

Benefits for Aave:
- A new gateway for European and Asian users into the emerging DeFi world.
- EURS will be the largest non-dollar fiat stablecoin on the AAVE protocol.
- Increased adoption of AAVE by the EURS user base.
- EURS tokens are backed 1-1 with EURO FIAT, meaning there is no risk for users who operate with it since they can always exchange their assets to EURO thanks to the STASIS Sellback service which has been improved.  
- EURS smart contract has been upgraded by ABDK to the point 2.0 — the company behind the audit of the V3 Uniswap which is the largest DeFi protocol nowadays. This gives the protocol and users a guarantee of confidence in the product future.

## Specification

1. What is the link between the author of the AIP and the Asset?

Stasis CTO.

2. Provide a brief high-level overview of the project and the token

EURS is the largest euro-backed digital asset, combining the benefits of the world’s second most traded currency with the transparency, immutability, and efficiency of the blockchain.

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

Other existing stablecoins products are either mostly pegged to the dollar - which is not convenient for EU and Asia citizens - or not backed by the cash reserves. EURS is neither of those and aligns perfectly with the market ripe for transparent digital assets, providing a convenient gateway into the cryptocurrency market and being the largest non-dollar transparent asset.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?

EURS was launched in June 2018 and has amassed over $100M in liquidity over three years. EURS aligns itself with the top communities and teams in the space, including Chainlink with similar goals and strives for transparency. Since 2021, EURS has been listed on the top DeFi protocols such as Uniswap, Cream, StakeDao and others.

5. How is the asset currently used?

EURS is currently used as a trust-minimized alternative to other stablecoins. The goal is to drive the adoption of EURS  to be used as collateral inDeFi, money markets, other synthetic assets, and more. Since all EURS are backed with fiat euro, there is no risk for investors and everyday users, who can always exchange their digital assets thanks to the [Sellback Service](https://stasis.net/sellback/).

6. Emission schedule

There is no emission schedule.

7. Token & protocol permissions and upgradability

EURS protocol is almost fully upgradeable - this includes anything from oracles, the contract that collects stability fees, the contract that liquidates positions, the one that auctions collateral etc. The latest upgrade to reduce fees took part in March.

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

    Market Cap: $104M
    24h Volume: $1.6M
    Volatility: Very Low
    Maturity: Early-Mid

9. Social channels data (Size of communities, activity on Github)

- Blog: https://medium.com/stasis-blog
- Twitter: https://twitter.com/stasisnet
- Telegram: https://t.me/stasis_community
- Facebook: https://www.facebook.com/stasisnet
- GitHub: https://github.com/stasisnet
- Youtube: https://www.youtube.com/channel/UCq7eJ9c8ec2PEQweJg-pcDA
- Bitcointalk: https://bitcointalk.org/index.php?topic=4789890.40

The total size of the community is over 70.000 users across all socials: 14K followers on Twitter, 6.5K followers on Facebook, 7.5K in Telegram community.

10. Contracts date of deployments, number of transactions, number of holders for tokens

    Date of Deployment: June 22nd, 2018
    Number of Transactions: 75,000+
    Number of Holders: 4,000+

## Rationale

The decision to design EURS as it is today came from the strategy to achieve two main goals.

1) Designed as a better alternative to USD-pegged assets
- Most transparent stablecoin on the market
- Balance sheet currency for EU citizens 
- Preferable alternative to USD by Asian and Latin American populations
- Independent of USD inflationary monetary policy
- Avoids being targeted by dollar regulation such as the “Stable Act”

2) Reserve asset for DeFi
- Interoperabile product running on several blockchains to ensure better performance in DeFi with less fees
- More reliable than popular dollar-backed assets such as USDC & USDT
- Convenient solution to enter/exit volatile cryptomarket for traders

## Implementation

The EURS price oracle will be served via [ChainLink](https://chain.link/), which includes the [EURS/ETH feed](https://docs.chain.link/docs/ethereum-addresses).

EURS will only be used for depositing and lending, not as collateral. The following params are proposed:

  - Strategy: rateStrategyStableThree
  - Base LTV As Collateral: 8000
  - Liquidation Threshold: 8500
  - Liquidation Bonus: 10500
  - Borrowing Enabled: true
  - Stable BorrowRate Enabled: true
  - Reserve Decimals: 6
  - Reserve Factor: 1000

Following the steps from the [Aave governance docs](https://docs.aave.com/developers/protocol-governance/governance/propose-your-token-as-new-aave-asset), the following contracts were generated:

- Interest bearing aEURS: 0x7481238c3e812965DA1C04e396a31b81D904F29B
- Variable Debt variableDebtEURS: 0x4637C6134516a5Ceb212F81CA396f99B03B00037
- Stable Debt stableDebtEURS: 0x11c02A5c0A39485A1ecED23e19509fE75131da9c
- Strategy Implementation for EURS: 0xDB163D7eb7850a015e4872551BE7A384ce901062

## References

EURS token - [0xdb25f211ab05b1c97d595516f45794528a807ad8](https://etherscan.io/address/0xdb25f211ab05b1c97d595516f45794528a807ad8)
Stasis Website - [stasis.net](https://stasis.net/)
Stasis EURS - [eurs.stasis.net](https://eurs.stasis.net/)
Stasis FAQ - [stasis.net/qa](https://stasis.net/qa/)
Stasis discord - [STASIS/EURS GLOBAL channel](https://discord.com/channels/770906185066479666/770906185066479669)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).