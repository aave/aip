---
aip: <to be assigned>
title: Add NMR as a Borrow Asset
status: WIP
author: Noah Harasz (@ndharasz)
shortDescription: Aave governance proposal to enable NMR as a borrow asset
discussions: https://governance.aave.com/t/arc-add-support-for-nmr/3982/10
created: 2021-06-14
updated: N/A
---

## Simple Summary

We (Numerai) would like to submit a proposal to add NMR as an asset to borrow and lend on Aave.

## Abstract

NMR is a token used in the Numerai Tournament and Numerai Signals for staking and payouts. 
Data scientists (users) stake NMR on their models and earn/burn based on performance in the live stock market. 
Numerai uses the stake weighted Meta Model 2 of user models to allocate capital in the Numerai Hedge Fund.

Being able to borrow NMR on Aave would enable users of Numerai to more accurately express their true confidence 
in the models by allowing them to better manage their currency exposure when staking. Being able to lend NMR on 
Aave would enable everyone else to fully unlock the time value of their NMR.

## Motivation

Numerai’s mission is to build the world’s last hedge fund. We aim to replace the legacy capital allocation industry, 
where redundant hedge funds work in isolation and secrecy, with an open and decentralized network of data scientists and 
data providers that work together in a non-zero-sum way. This is accomplished via staking with NMR which provides a “skin in the game” 
mechanism allowing Numerai to trust anonymous models in a sybil resistant way. The performance of the overall system improves over time 
as models that perform well gain more control while models that perform poorly lose control.

The problem with staking NMR is that users are exposed to undesired currency risk of the underlying NMR position. 
Users with a higher currency risk tolerance have a higher stake than they would if they were only exposed to the performance risk of their models. 
Users with lower tolerance to currency risk have a lower stake than they would otherwise. 
See this 7 and this 3 example of users discussing this issue on our forum.

Borrowing NMR to stake (or short) will allow users of Numerai to manage their currency risk when staking. 
A new user could borrow NMR with a stablecoin as collateral to stake, avoiding risk altogether, or borrow and short NMR as a hedge. 
By managing undesired currency risk, users of Numerai will be able to better express their true confidence in their models, 
which will ultimately improve the performance of the overall system.

Lending NMR will allow non-users to unlock the full time value of their NMR. For example, 
non-data-scientist supporters or those performing poorly in the tournament can earn a yield on their NMR without having to participate. 
By giving everyone a way to earn yield and add value to the network, we make Numerai a more open and inclusive system.


## Specification

**1. What is the link between the author of the AIP and the Asset?**
I am an employee of Numerai tasked with bringing liquidity and lending to NMR. 
Numerai is the creator of NMR and currently the primary use of it. 
Numerai holds a Treasury of non-circulating NMR that it uses to raise funds and reward 
data scientists submitting to the Numerai Data Science Tournament and Numerai Signals service.

**2. Provide a brief high-level overview of the project and the token**
Numerai is a quant hedge fund powered by a decentralized network of machine learning models. 
NMR is used for staking and payouts in the Numerai Tournament and Numerai Signals. 
In the Numerai Tournament, users build machine learning models to predict the stock market with free obfuscated financial data that Numerai provides. 
In Numerai Signals, users create models with their own data instead. 
In both tournaments, users stake NMR on their models to earn performance-based rewards. 
The staked models of Numerai are combined to form the Meta Model which controls the capital of the Numerai hedge fund across the global stock market.

**3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?**
We see NMR as a good borrow asset on Aave because of strong existing demand from potential borrowers and lenders. 
Users who borrow NMR can use returns from staking in the Numerai Tournament to pay the loan interest. 
Users who are unable to generate return will self select out of the tournament and be disincentivized from further borrowing in the future. 
A broad base of supporters and ex-users who are already long term holders of NMR make up a robust and stable lending pool.

**4. Provide a brief history of the project and the different components** Numerai was founded in October 2015 and began running and actively developing the Numerai Tournament from 2015 to 2017 using BTC to reward top performers, but poorly performing models could not be properly punished which led to widespread overfitting and spam. We [created](https://medium.com/numerai/an-ai-hedge-fund-goes-live-on-ethereum-a80470c6b681) and [airdropped](https://medium.com/numerai/a-new-cryptocurrency-for-coordinating-artificial-intelligence-on-numerai-9251a131419a) NMR to our community in 2017 and switched the Tournament over to staking rules as described in the whitepaper, which better aligned user incentives with Numerai’s performance.

In 2019, tournament staking logic was extracted from NMR contracts into the [Erasure protocol](https://erasure.world/) 
with [Erasure Bay](https://erasurebay.org/) and the Numerai tournament as the first two applications running on it. 
We also upgraded the NMR contracts to version [2.0](https://medium.com/numerai/nmr2point0-66a45a9a5e70) which made it permissionless 
(removed all special admin access, disabled upgradability), disabled minting, and cut the total supply from 21 million to 11 million 
by burning from our own Treasury. Migrating the tournament to the Erasure Protocol allowed us to rapidly iterate on staking and payout 
rules in order to tune incentive alignment.

In 2020, we created Numerai Signals as a second tournament to bring external data into the system. 
In 2021, we worked with our community to create the Numerai Council of Elders [DAO](https://app.ens.domains/name/councilofelders.eth) 
with the mission of allocating part of the Numerai treasury for the public good of the Numerai community.

The master plan of Numerai is to monopolize intelligence, monopolize data, monopolize money, and to decentralize it all.

**5. How is the asset currently used?**
NMR is currently used for staking and payouts in the Numerai Tournament and Numerai Signals, and as a burn token for Erasure Bay. 
It is also used for bug and development bounties to the community and fundraising for Numerai as detailed in the next section.

**6. Emission schedule**
All NMR that will exist has already been minted. Numerai keeps a treasury of non-circulating NMR that it uses for fundraising, 
rewarding data scientists, bug bounties, and other discretionary usages. For the majority of people, NMR can only be bought, 
sold, and burned from the currently circulating supply. In 2018, we allocated 3M NMR to fundraising, of which 130K NMR remains. 
Thereafter, the fundraising allocation will be considered exhausted and Numerai will no longer use NMR for fundraising.

**7. Token (& Protocol) permissions (minting) and upgradability. Is there a multisig? What can it do? Who are the signers?**
All NMR has already been minted. NMR used a delegate contract that originally allowed Numerai to upgrade the token at its discretion, 
but minting and upgrading was disabled in July 2019 as part of the [NMR 2.0](https://medium.com/numerai/nmr2point0-66a45a9a5e70) migration.

The Numerai Treasury is controlled by a multisig wallet. Current signers include Numerai team members.

The Council of Elders treasury is also controlled by a multisig wallet. Current signers include key community members.

**8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)**
As reported by [CoinGecko](https://www.coingecko.com/en/coins/numeraire) on 1:55 PM, May 13, 2021:
* Market Cap - $316,010,279
* 24h Volume - $29,799,393
* Volatility: 1y Lo / Hi: $18.53 / $93.10
* [Exchanges](https://www.coingecko.com/en/coins/numeraire#markets) - Coinbase, Binance, Uniswap, OKEx, etc.

**9. Social channels data (Size of communities, activity on Github)**
* Twitter, verified: https://twitter.com/numerai [28K]
* YouTube: https://youtube.com/numerai [3.7K]
* Reddit: https://www.reddit.com/r/numerai/ [3.2K]
* RocketChat: https://community.numer.ai [6.6K]
* Forum: https://forum.numer.ai/ [2.4K]
* GitHub: https://github.com/numerai

**10. Contracts date of deployments, number of transactions, number of holders for tokens**
* From https://numer.ai/nmr:
  * Contract Deployment Time: Tue, 20 Jun 2017 08:10:37 UTC
* From https://etherscan.io/token/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671#tokenAnalytics:
  * Holders: 33,948
  * Transfers: 362,688


## Rationale

We believe NMR to be primarily valuable as a borrow asset because of the reasons stated above.
We decided not to pursue NMR as a collateral asset because of it's low market liquidity, volitility, and implementation requirements.

## Test Cases

### TBA
Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation

### TBA
The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". 
While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of 
"rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
