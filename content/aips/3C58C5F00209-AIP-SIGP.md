---
title: Sigma Prime - Security Assessment Services for Aave
status: Proposed
author: Sigma Prime (@sigp)
shortDescription: Proposal for continuous security assessment services from Sigma Prime
discussions: https://governance.aave.com/t/sigma-prime-security-assessment-services-for-aave/8518
created: 2022-07-12
---

## Summary

This proposal acts as a mandate from the Aave community to engage [Sigma Prime](https://sigmaprime.io) for continous security assessment services as outlined in [this post](https://governance.aave.com/t/sigma-prime-security-assessment-services-for-aave/8518) and already pre-approved via Snapshot [here](https://snapshot.org/#/aave.eth/proposal/0xf4d2d4c89e29cd11472d5b86f013cb0995952b96099ced35eb91a03e99fbb5cf).


## Abstract

The aim of this proposal is to ensure Aave receives high-quality security assessment services to address all upcoming updates to its protocols, including critical upgrades such as the v2 → v3 migration.

[Sigma Prime](https://sigmaprime.io) has been providing security assessment services to Aave for the past 2.5 years, reviewing critical components such as Aave v2 and v3, along with various other changes made to the lending platform.

## Motivation

Aave’s success relies partly on its ability to deliver high quality products with a strong security posture. To date, and despite the large TVL potentially attracting a lot of malicious actors, Aave users haven’t suffered any losses due to smart contract bugs or vulnerabilities. Lately, it has been increasingly difficult to contract reputable smart contract security auditors, as most of the prominent firms in this space are booked out for months.


## Specification

This proposal authorises payment of the minimum engagement fee outlined in [the proposal](https://governance.aave.com/t/sigma-prime-security-assessment-services-for-aave/8518) (US$ 1,296,000) through the following:
- Upfront payment for 50% of the minimum engagement fee (US$ 648,000) paid in aUSDC and aUSDT (even split, $324,000 each)
- Remaining 50% (US$ 648,000) paid at the end of the engagement period (12 months) via two (2) payment streams in aUSDC and aUSDT (even split, $324,000 each), with each stream starting 12 months from now, and lasting a duration of 1 second.

If the maximum fee was to apply to this engagement, a subsequent proposal will be pushed forward for the remaining amount in 12 months (i.e at the end of the engagement period).


## Rationale

Sigma Prime is an information security consultancy who specialise in Blockchain technology and administered from Sydney, Australia.

The primary focus of Sigma Prime is to help secure distributed systems through in-depth security assessments of decentralised projects, while concurrently researching and developing core Blockchain infrastructure. Over the past 6 years, we have been working with some of the most prominent organisations in the space: the Ethereum Foundation, Chainlink, SushiSwap, 1inch, the Filecoin Foundation, NEAR, Arbitrum, Lido, Rocket Pool, and plenty of others.

Sigma Prime is also the founder and maintainer of the Lighthouse project, an open-source implementation of the Ethereum Proof-of-Stake Consensus specification, written in Rust. Lighthouse is one of the leading Ethereum consensus client implementations and has a particular focus on performance and security.

Throughout the works performed for Aave, the feedback received from the leadership team has been highly positive. Sigma Prime has gained a high degree of familiarity with the protocol, which will be leveraged as required for the delivery of this engagement.

## Test Cases

- Please refer to the [test section](https://github.com/sigp/sigp-aip-payload/tree/master/test) of the [sigp/sigp-aip-payload](https://github.com/sigp/sigp-aip-payload) repository.

## Implementation

- [PayloadAaveSigP](https://etherscan.io/address/0xe8ea74754dce51168102e820424f7e7f74c5be3e#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
