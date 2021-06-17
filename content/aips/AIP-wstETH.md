---
aip: 21
title: Adding wstETH on AAVE
status: WIP
author: Nikolai (#MineDeFi / @realbusyman)
shortDescription: Aave governance proposal to enable wstETH as a base asset
discussions: https://governance.aave.com/t/proposal-add-support-for-steth-lido/2123/14
created: 2021-06-17
---
### Simple Summary
stETH is ERC20 token that represents ETH staked by depositing to Lido smart contract and reflects corresponding staking rewards and slashing penalties in the beacon chain. The stETH token is a liquid and productive alternative for the staked ether: it could be transferred, traded, or used in DeFi applications.
stETH price is pegged to ETH price 1 to 1. wstETH is wrapped token for rebaseable stETH.

### Abstract
Add wstETH to AAVE v2 market.

### Motivation
1. Onboard one of the most liquid token.
The stETH : ETH pair is the biggest pool on Curve with over $1.76B in liquidity that makes it one of the most liquid token in crypto. 8.56% of all the staked ETH is staked in stETH.

2. Arbitrage abilities with high liquidity.
Deep liquidity on the Curve pool opens good abilities for arbitrage using Aave flash loans, borrowing and lending.

3. Profitable holding that cover fees.
stETH lets holders at once margin long ETH and compound it with staking rewards that can cover borrowing fees. 

4. Mutual popularization and decentralization.
The addition of stETH to Aave can work to attract a larger audience to both Aave and Lido. More ETH staked with Lido would subsequently benefit the decentralization and security of the Ethereum network, to the benefit of the community as a whole. stETH would likely bring new borrow demand to Aave as market participants look to borrow against their staked ETH or lend their wstETH/stETH for a yield. 

### Specification
The protocol allows users to deposit ETH and receive stETH. The deposited ETH is then pooled and staked with node operators selected by the Lido DAO. stETH represents the user’s staked ETH balance of the beacon chain along with staking rewards accrued or penalties inflicted on validators in the beacon chain. When transactions are enabled on the beacon chain, stETH can be redeemed for unstaked ETH and accumulated rewards. 
[wstETH](https://docs.lido.fi/contracts/wsteth) is a constant-balance wrapper ERC20 token that converts stETH balances which undergo periodical rebases to the underlying shares balances. As Lido oracles report ETH2 rewards, penalties, or slashings, wstETH token balances remain unchanged: instead, the amount of stETH corresponding to one wstETH (and thus wstETH price) changes. Anyone can convert stETH to wstETH and vice versa on-chain through [`wstETH.wrap`](https://docs.lido.fi/contracts/wsteth#wrap) and [`wstETH.unwrap`](https://docs.lido.fi/contracts/wsteth#unwrap) functions.

### Rationale
Since stETH is a rebasable token it's easier and less risky to integrate wstETH to AAVE.

## Risk Assessment
![Risk Assessment Summary](https://lh3.googleusercontent.com/04UNUJOQjcpofALvEecOep-PPcPzon-lttLraleyVlNz687dMwmH7uGfuQ2ALLe8iDDgbl24NnRKGbNXmbPS6_TqcDykJudgOT27Zu97jpdfQSRx5AajIuHtEE4s-w2g3WJeA7PA)

**Smart contract risks**

Lido faces smart contract risks. To mitigate these, Lido has been audited multiple times - by Quantstamp, Sigma Prime, and MixBytes (see [Audits](https://github.com/lidofinance/audits)), with no critical issues found.

**Counterparty risks**

Lido is a DAO. Decisions in the Lido DAO are made through proposals and votes - community members manage protocol parameters, node operators, oracle members, and more. The Lido staking infrastructure for stETH consists of 9 node operators, with a focus on decentralization.
Lido relies on a set of oracles to report staking rewards to the smart contracts. Their maximum possible impact is limited by the [recent upgrade](https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-2.md#sanity-checks-the-oracles-reports-by-configurable-values) (limit oracles report change by 10% APR increase in stake and 5% decrease in stake), and the operators of oracles are all well-known entities: Stakefish, Certus One, Chorus, Staking Facilities, and P2P.
Read further in Lido [documentation](https://docs.lido.fi/token-guides/steth-superuser-functions/).

**Market risk**

Despite that stETH token is still quite novel and there is no such vast historical data compared to ETH, stETH holds the ETH peg 1:1 (at the latest crypto drop peg dropped to 0.995 only).
The stETH:ETH pair is [the biggest pool](https://curve.fi/steth) on Curve with over $1.76b in liquidity. You need to trade 175000 ETH to stETH or vice versa (more than $200m) to move the price 2%. The reason for that is that the pool is incentivized. There are CRV rewards and LDO rewards that people who are providing liquidity for a stETH:ETH pool can receive by staking their LP shares in the Curve gauge. Lido is incentivizing the pool by monthly governance decisions: e.g. this month 0.375% of total LDO supply, which amounts to $9m or over 3500 ETH at the time of writing, [was allocated](https://research.lido.fi/t/curve-proposal-continue-ldo-reward-initiative-with-3-750-000-ldo-0-375/602) to the gauge.

**Staking risks**

stETH faces staking risks, specifically validator risks including slashing and hostage risks. To mitigate these, Lido works only with best-in-class validators with a track record of success. In addition to this, staked ETH with Lido is protected from slashing using the Unslashed Finance insurance [protocol](https://app.unslashed.finance/policies/Lido%20(ETH%202.0)%205pc%20slashing%20policy.pdf). At the time of writing, Lido is covered for ~20000 ETH slashing until June 22nd. To date, no slashings have been incurred.

**Withdrawal risks**

To mitigate withdrawal risks, Lido staking went live on December 18th through a [withdrawal key ceremony](https://blog.lido.fi/lido-withdrawal-key-ceremony/). Chorus One, Staking Facilities, Certus One, Argent, Banteg (yearn.finance), Alex Svanevik (Nansen), Anton Bukov (1inch), Michael Egorov (Curve/Nucypher), Rune Christensen (MakerDAO), Will Harborne (DeversiFi), and Mustafa Al-Bassam (LazyLedger) came together over a four-day event to generate threshold signatures for Lido’s withdrawal keys in a secure environment on air-gapped machines. Lido plans to move over to a fully non-custodial solution in the near future.

**Price feed risk**

stETH is not traded on CEXs yet and thus the oracle has to use the Curve pool price and ETH price feed to determine the current price. Lido has its own [price feed](https://github.com/lidofinance/steth-price-feed) (presented in details in Oracle Assessment). Lido is also working with Chainlink to release a stETH price feed.

## Proposed stETH Risk Parameters

- LTV: 70%
- Liquidation Threshold: 75%
- Liquidation Bonus: 5%
- Reserve Factor: 10%

A LTV of 70% is slightly higher than the 56% [average LTV](https://docs.aave.com/risk/asset-risk/risk-parameters) across non-stablecoin assets and 10% lower than ETH’s 80% LTV. This gives the protocol more room to safely liquidate stETH with a volatility profile similar to ETH.

**Interest Rate Model:**

UOptimal: 65%

Base: 0%

Slope 1: 8%

Slope 2: 100%

**References**

- [Website](https://lido.fi/)
- [GitHub](https://github.com/lidofinance)
- [Whitepaper](https://github.com/lidofinance/lido-dao/blob/master/README.md)
- [stETH Contract](https://www.notion.so/20de3a18e5e111b5eaab095312d7fe84)
- [Blog](https://blog.lido.fi/)
- [Primer 1](https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf)
- [Audits 1](https://github.com/lidofinance/audits)
- [Operators](https://stake.lido.fi/key-checker/existing)
- [Lido Forum](https://research.lido.fi/)
- [Discord](https://discord.com/invite/vgdPfhZ)

