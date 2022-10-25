---
title: Add stETH to AAVE v2
status: Proposed
author: Jacob Blish (@jbeezy); Gregory Stepanov (@grstepanov)
shortDescription: AAVE governance proposal to enable stETH as a collateral asset
discussions: https://governance.aave.com/t/arc-add-support-for-steth-lido/5793
created: 2022-04-02
---

## Simple Summary
Lido allows users to earn staking rewards on the Ethereum beacon chain without locking Ether or maintaining staking infrastructure. This is done through the stETH token. stETH tokens represent a tokenized staking deposit with staking rewards and slashing penalties applied. stETH can be held, traded, or sold.  
We propose listing stETH to AAVE v2 market. This would allow users to borrow against stETH.

#### References
- Website: [lido.fi](https://lido.fi/)
- [Primer](https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf) 
- [Document portal](https://docs.lido.fi/)
- [Source code for the system(s) that interact with the proposed asset](https://github.com/lidofinance/lido-dao/blob/master/contracts/0.4.24/Lido.sol)
- [Ethereum addresses contracts](https://docs.lido.fi/deployed-contracts)
- [ChainLink Oracle](https://etherscan.io/address/0x86392dC19c0b719886221c78AB11eb8Cf5c52812)
- [Audits](https://github.com/lidofinance/audits)
- Community
    - [Governance forum](https://research.lido.fi/)
    - [Twitter](https://twitter.com/lidofinance)
    - [Discord](https://discord.gg/vgdPfhZ)
    - [Telegram](https://t.me/lidofinance)
    - [Reddit](https://www.reddit.com/r/LidoFinance)

## Abstract
The goal of listing stETH on AAVE v2 market is to provide the ability to deposit stETH into AAVE and allow to use it as collateral. There is no intention to enable borrowing of stETH on AAVE v2 market.

## Motivation
Listing stETH on AAVE can work to attract a larger audience to both AAVE and Lido. More ETH staked with Lido would subsequently benefit the decentralization and security of the Ethereum network, to the benefit of the community as a whole. stETH would likely bring new borrow demand to AAVE as market participants look to borrow against stETH.

stETH makes a perfect DeFi collateral and is beneficial for a number of reasons covered in the Specifications section of this AIP.

## Specification
1. **What is the link between the author of the AIP and the Asset?**

- Jacob (jbeezy) is a full time member of the DAO working to facilitate integrations for st-Assets across DeFi in protocols such as Aave among others.
- Gregory (GrStepanov) is a full time protocol contributor working on technical integrations.

2. **Provide a brief high-level overview of the project and the token.**

#### Lido Background

The Lido Protocol, built on Ethereum’s beacon chain to start, allows users to earn staking rewards on the beacon chain without rendering their assets illiquid or maintaining staking infrastructure.

Lido was [announced](https://blog.lido.fi/how-lido-works/) in November 2020. The testnet was released in late November.

Lido today has 3 products (stETH, stSOL, bLuna) managed by 4 teams in separate organizations. Across these products is a multi billion dollar TVL and has pushed Lido to #6 on [DeFi Llama rankings](https://defillama.com/protocol/lido). stETH has also been accepted as part of Nexus Mutual’s treasury as part of their [risk management strategy](https://forum.nexusmutual.io/t/proposal-increase-the-allocation-of-the-capital-pool-to-steth/641).

Lido has begun the process to move over to a fully non-custodial solution. Details can be found here: [Withdrawal Credentials in Lido](https://blog.lido.fi/withdrawal-credentials-in-lido/).

The Lido DAO manages the liquid staking protocol by deciding on key parameters (e.g. setting fees, assigning node operators and oracles) through the voting power of governance token holders.

Lido has been audited by Sigma Prime, Quantstamp and MixBytes.

#### stETH Background

Lido allows users to deposit ETH and receive stETH. The deposited ETH is then pooled and staked with node operators selected by the Lido DAO. stETH represents the user’s staked ETH balance of the beacon chain along with staking rewards accrued or penalties inflicted on validators in the beacon chain. When withdrawals are enabled on the beacon chain, stETH can be redeemed for unstaked ETH and accumulated rewards.

Unlike beacon chain ETH, stETH can be freely transferred and traded. Onboarding stETH to Aave would allow users to borrow against stETH.

The balance of stETH is based on the total amount of staked ETH plus total staking rewards minus slashing applied on validators. stETH rebases daily.
The stETH supply stands at 1,697,460 - worth $5.4BN using current stETH prices.

3. **Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?**

stETH as DeFi collateral is beneficial for a number of reasons.

- stETH is almost as safe as ETH, price-wise: barring catastrophic scenarios, its value tends to hold the ETH peg well;
- stETH is a productive asset. Earning rewards on collateral effectively lowers the cost of borrowing. This could make borrowing more attractive on Aave and help to increase market utilization (and therefore Aave’s protocol revenue from 
coin reserve factors).
- stETH is a very liquid asset with $5+ billion in liquidity used across [multiple DeFi projects](https://dune.xyz/LidoAnalytical/Integration-monitor-dashboard
). stETH<>ETH liquidity pool on Curve is the deepest LP in DeFi with $3.8 billion TVL.

4. **Provide a brief history of the project and the different components: DAO (is it live?), products (are they live?). How did it overcome some of the challenges it faced?**

Lido protocol background is listed in Question #2.

There is a DAO and it is live. The Lido DAO consists of, amongst others, Semantic VC, ParaFi Capital, Libertus Capital, Terra, Bitscale Capital, StakeFish, StakingFacilities, Chorus, P2P Capital and KR1, Stani Kulechov of Aave, Banteg of Yearn, Will Harborne of Deversifi, Julien Bouteloup of Stake Capital and Kain Warwick of Synthetix.

The Lido treasury has been diversified and DAO members now include Paradigm, Three Arrows Capital, DeFiance Capital, Jump Trading, Alameda Research, iFinex, Dragonfly Capital, Delphi Digital, Robot Ventures, Coinbase Ventures, Digital Currency Group, The LAO and [angels](https://research.lido.fi/t/proposal-ldo-treasury-diversification-part-2/506).

The Lido suite of products consist of st-assets which represent the underlying staked collateral on various protocols. Currently this is stETH, bLuna, stLuna and stSOL and is managed by 4 teams in separate organizations to further mitigate centralization risk.

There are further wrapped versions to address platform limitations around rebasing assets or bridging to other ecosystem. These wrapped assets are minted/burned based on locking of the st-asset. Currently there is wstETH (non-rebasing) and bETH (Terra representation of stETH).

Early challenges were overcome with DAO member support, speed of execution and utility of st-assets. The last one is particularly critical in the success of any liquid product.

5. **How is the asset currently used?**

stETH is used in a number of ways.

- a productive asset (e.g. in Nexus Mutual Treasury risk management strategy);
- compounding yield strategies in DeFI (AMMs, autofarms) (e.g. Convex, Yearn, Harvest);
- multichain collateral (e.g. wstETH on Ethereum on Maker and bETH on Terra in Anchor).

5. **Emission schedule**

There is no emission schedule. Similar to DAI, stETH is minted on demand when users lock ETH into the protocol.

6. **Token (& Protocol) permissions (minting) and upgradability. Is there a multisig? What can it do? Who are the signers?**

stETH token is the upgradable contract behind `AppProxyUpgradeable` proxy at https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84. Lido DAO can change the implementation with the successful DAO vote.

The roles and addresses can be checked in the Aragon UI: https://mainnet.lido.fi/#/lido-dao/permissions/app/0xae7ab96520de3a18e5e111b5eaab095312d7fe84

To mitigate withdrawal risks, Lido staking went live on December 18th, 2020, through a [withdrawal key ceremony](https://blog.lido.fi/lido-withdrawal-key-ceremony/). Chorus One, Staking Facilities, Certus One, Argent, Banteg (yearn.finance), Alex Svanevik (Nansen), Anton Bukov (1inch), Michael Egorov (Curve/Nucypher), Rune Christensen (MakerDAO), Will Harborne (DeversiFi), and Mustafa Al-Bassam (LazyLedger) came together over a four-day event to generate threshold signatures for Lido’s withdrawal keys in a secure environment on air-gapped machines. 
Lido has already migrated to a non-custodial solution and >60% of all stETH already uses this. Details can be found here: [Withdrawal Credentials in Lido](https://blog.lido.fi/withdrawal-credentials-in-lido/).

8. **Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)**

**Market Cap** $5.5B

**Volatility** - Over the past year, stETH proved to hold peg extremely well through various market conditions. [stETH<>ETH balance data for the Curve pool can be found here](https://dune.xyz/queries/36557/72603).

**Volumes and DEXes**

**[Balancer (wstETH/WETH)](https://app.balancer.fi/#/pool/0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080)**  
Liquidity: $409.3M  
Volume (24h): $509,3  
https://dune.xyz/embeds/153863/304423/684fdf22-161c-4352-a41d-81ce8a705c01  

**[SushiSwap (wstETH/DAI)](https://analytics.sushi.com/pairs/0xc5578194d457dcce3f272538d1ad52c68d1ce849)**  
Liquidity: $32.2M  
Volume (24h): $756,211  
https://dune.xyz/embeds/153729/304165/5c53e046-47ef-485d-9767-6ec188a5629e  

**[Curve (stETH/ETH)](https://curve.fi/steth)**  
Liquidity: $3,75B  
Volume (24h): $5,7M  
https://dune.xyz/embeds/153374/303383/9c8cb193-4538-497e-a774-c33e78bcd34d  

9. **Social channels data**

[Discord](https://discord.gg/vgdPfhZ) - 7400 members  
[Twitter](https://twitter.com/LidoFinance) - 60K followers  
[GitHub](https://github.com/lidofinance) - Active and managed  

10. **Contracts date of deployments, number of transactions, number of holders for tokens**

Date of Deployment: December 18th, 2020  
Number of Transactions (stETH): [146,000+](https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84)  
Unique holders: [42,000+](https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84)  

11. **Unique Depositors**

Unique depositors: [36,000+](https://dune.xyz/queries/20029/41160)

## Rationale
stETH represents the user’s staked ETH balance of the beacon chain along with staking rewards accrued or penalties inflicted on validators in the beacon chain.  
This is implemented via rebasing mechanism. 

Due to the rebasing nature of stETH, the proposed listing implementation involves few changes  to AAVE's generic aToken.
The proposed aToken uses underlying stETH shares to store balances and implement the rebase ability. Thus, it has 2 private balances and 1 public balance.

1. The internal (fixed-supply) balance and total supply are used for book-keeping. The deposited balance is stored in stETH shares and converted into the amount of the tokens with functions from stETH. Users’ balances are book-kept with the underlying ERC20 token.
2. The internal (elastic-supply) balance and total supply correspond to the deposited balance without accrued interest. Rebasing of aSTETH according to stETH happens in this layer.  
3. The external (elastic-supply) balance and total supply correspond to the deposited balance with interest.

Externally, the aSTETH behaves similar to every other aToken. It always maintains a 1:1 peg with the underlying stETH. 

The current implementation doesn't support borrowing, neither with variable nor with stable interest rates. The stableDebtSTETH and variableDebtSTETH contracts extend default stableDebtToken and variableDebtToken contracts accordingly to make it impossible to use borrowing with aSTETH because default debt tokens are not compatible with the AStETH contract.

## Implementation

#### Code
AStETH https://etherscan.io/address/0xbd233D4ffdAA9B7d1d3E6b18CCcb8D091142893a  
variableDebtSTETH https://etherscan.io/address/0xde2c414b671d2db93617d1592f0490c13674de24  
stableDebtSTETH https://etherscan.io/address/0x8180949ac41ef18e844ff8dafe604a195d86aea9  
DefaultReserveInterestRateStrategy https://etherscan.io/address/0xff04ed5f7a6C3a0F1e5Ea20617F8C6f513D5A77c  
Steps the proposal will execute: start a vote to add stETH as a new asset.

#### Security Considerations
Standard technical risks of smart contracts apply to the AToken implementation.
The implementation has been audited by MixBytes() and considered safe. Read the full report from [here](https://github.com/lidofinance/audits/blob/main/MixBytes%20AAVE%20stETH%20integration%20Security%20Audit%20Report%2002-22.pdf).

**Proposed Risk Parameters**
LTV: 70%  
Liquidation Threshold: 75%  
Liquidation Bonus: 7.5%  
Reserve Factor: 10%  

**Interest Rate Model:**  
UOptimal: 60%  
Base: 0%  
Slope 1: 8%  
Slope 2: 200%  

As stETH is more suited as collateral instead of a borrowing asset, we propose listing stETH on AAVE v2 market with borrowing disabled. 

## Risk Assessment

**Smart contract risks**

Lido faces smart contract risks. To mitigate these, Lido has been audited multiple times - by Quantstamp, Sigma Prime, and MixBytes (see [Audits](https://github.com/lidofinance/audits)), with no critical issues found.

**Counterparty risks**

Lido is a DAO. Decisions in the Lido DAO are made through proposals and votes - community members manage protocol parameters, node operators, oracle members, and more. The Lido staking infrastructure for stETH consists of 22 node operators, with a focus on decentralization.
Lido relies on a set of oracles to report staking rewards to the smart contracts. Their maximum possible impact is limited by the [recent upgrade](https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-2.md#sanity-checks-the-oracles-reports-by-configurable-values) (limit oracles report change by 10% APR increase in stake and 5% decrease in stake), and the operators of oracles are all well-known entities: Stakefish, Certus One, Chorus One, Staking Facilities, DSRV, Blockscape, Everstake, SkillZ, RockX, Allnodes, P2P Validator, and others.
Read further in Lido [documentation](https://docs.lido.fi/token-guides/steth-superuser-functions/).

**Market risk**

Over the past year, stETH proved to hold the ETH peg 1:1 steadily.
Four liquidity pools across different DEXes are incentivized with significant LDO rewards. Curve stETH<>ETH LP has grown into the deepest LP across DeFi, which makes it extremely resistant to any attempts of moving the peg.

**Staking risks**

stETH faces staking risks, specifically validator risks including slashing and hostage risks. To mitigate these, Lido works only with best-in-class validators with a track record of success.
Besides, there's an ongoing [discussion in the community](https://research.lido.fi/t/lip-6-in-protocol-coverage-proposal/1468) about in-protocol coverage options to mitigate slashing risks.

**Price feed risk**

The ChainLink price feed for stETH is based on the pools with extremely deep liquidity. This makes stETH price very stable and resilient. Manipulating stETH price at this point would require staggering amount of resources and potentially render this kind of attack unreasonable.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
