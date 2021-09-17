---
title: Launch Aave on Harmony
status: WIP
author: Li Jiang (@lijiang2087)
shortDescription: Proposal to deploy Aave v2 on the Harmony blockchain
discussions: https://governance.aave.com/t/arc-aave-market-launch-on-harmony/5065/82
created: 2021-09-17
updated: N/A
---

## Simple Summary

Deploy Aave v2 on the Harmony blockchain to expand lending to a growing community of users and provide incentives to bootstrap the launch of Aave to a new ecosystem.

## Abstract

Our goal is to support Aave as it continues to expand in the coming multi-chain world. Harmony is an open and fast blockchain that is fully Ethereum compatible with 2-second transaction finality and near-zero fees.

Harmony invites the Aave community to support this launch by initially participating in the Aave contracts deployment via multisig, enabling the Aave v2 front-end for Harmony markets, and adding Harmony in its [recently announced](https://www.youtube.com/watch?v=m4yg4XdHB-Y) cross-chain governance module roadmap.

## Motivation

Aave is already planning to go multi-chain and we want to help bring it to the Harmony ecosystem, which is growing with the launch of Sushi on Harmony and other DeFi projects. Aave will be the first major lending protocol on Harmony and will add net new users from Harmony's 350,000+ community members. After enabling basic DeFi primitives like AMMs, our community is eagerly awaiting lending markets on Harmony.

## Specification

Harmony is a decentralized and sharded proof-of-stake blockchain operated by over 100 external validators. It has processed more than 63M transactions on [mainnet](http://explorer.harmony.one/) and it is fully EVM and Ethereum tooling compatible. Our secure bridges offer cross-chain asset transfers with Ethereum, Binance and 3 other chains.

For more details, read our [documentation](https://docs.harmony.one/home/general/technology/key-features).

## Rationale

The Aave community voted on the proposal: https://snapshot.org/#/aave.eth/proposal/QmYYBedL9aRFdC5DUgjN3QMoYxvJhAUBb2sEyhFuVQZbLG with Yes 487.25k AAVE (94%) and No 31.09k AAVE (6%).

## Incentives

Harmony will start by providing $5M USD in ONE tokens in incentives to bootstrap initial usage of Aave on Harmony.

We specifically planned for a one year incentive campaign so that net new users have the opportunity to come into Aave and decentralized finance. We know that many protocols are giving out even higher incentives over a short period of time. We chose an attractive incentive over a longer period so that new users who may not be experienced power users can also benefit from the launch.

In addition to token incentives, we will be investing heavily in co-marketing and educating users through tutorials, videos, and community-led support.

Harmony will provide $5 million in incentives in the form of native ONE tokens for 1 year to bootstrap initial usage with the following emission schedule:

Months 1-3: 40%

Months 4-6: 30%

Months 7-9: 20%

Months 10-12: 10%

## Technical Specifications

Harmony will deploy a fork of Aave v2 [GitHub - harmony-one/protocol-v2: Aave Protocol V2](https://github.com/harmony-one/protocol-v2). We welcome feedback and support of the Aave core devs in deployment. Harmony supports multisig, subgraphs, chainlink to enable a fully functional Aave v2 market.

After the market is functional, we will work with the Aave core devs for cross-chain governance implementation on Aave v2 markets on Harmony.

## Test Cases

Test cases for an implementation are mandatory for AIPs but can be included with the implementation.

## Implementation

The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
