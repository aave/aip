---
title: Aave v2 ETH Interest Rate Curve Update
author: Llama, Matthew Graham, Fermin Carranza and Dydymoon
shortDescription: Amend Aave v2 Ethereum ETH Interest Rate Curve
discussions: https://governance.aave.com/t/arc-eth-interest-rate-curve-update/10580
created: 2022-12-13
---

# Simple Summary

Llama recommends amending the ETH interest rate parameters on the Aave Ethereum v2 and v3 Liquidity Pool.

# Abstract

With Aave v3 about to be deployed and a wstETH and ETH eMode likely, the ETH Interest Rate Curve should be adjusted such that the looped recursive strategy breaks even within Slope 1, where the Interest Rate changes are less volatile.

The new interest rate curve has an Interest Rate of 5.75% at the Uoptimal point, which is 25 bps more than stETH yield at the time of writing. This proposal will lead to improved capital efficiency of the ETH Reserve and will generate more revenue for the DAO when compared to replicating the existing v2 Interest Rate curve on v3 with the introduction of an ETH eMode Category.

For the existing v2 market, Llama suggests adopting the same Interest Rate parameters that are being being proposed on v3. This will enable the ETH yields across the markets to somewhat equalize, leading to higher utilization of the ETH Reserve and more revenue for the DAO.

# Motivation

By changing the Interest Rate at the Uopotimal point from 3% to 5.75%, when an eMode for ETH and wstETH is created on Aave v3, the recursive strategy will break even prior to reaching the Uoptimal utilization within the Reserve. This is a desirable feature as the volatility of the Interest Rate on Slope 1 is less than Slope 2.


By setting the Slope 1 parameter at 5.75% (25 bps greater than the current annual wstETH yield), utilization in the Reserve is not expected to reach the Uoptimal level for any prolonged period of time.

By reducing the Slope 2 parameter from 100 to 80, the gradient of the second part of the yield curve increases due to an increase in Uoptimal from 70% to 80%. This is subtle and can be seen in the chart below. The Base Rate for the existing Interest Rate and proposed Interest Rate is unchanged at 0%.

With the recommended new Interest Rate curve for the v3 deployment, it is reasonable to expect the yield across the v2 and v3 deployment to be arbitraged. If the yield on the v3 deployment converges to the wstETH rate, then this will shift the v2 Reserve utilization beyond the Uoptimal level set at 3%. 

Llama recommendeds changing the v2 Interest Rate to match the v3 deployment Interest Rate. This way, both v2 and v3 Reserves will experience utilization along the Slope 1 portion of the Interest Rate curve whilst also benefiting from improved capital efficiency.

The graphic below shows the changes in the interest rate.

![](https://i.imgur.com/uTjXDPz.png)

This proposal increases the Reserve Factor from 10% to 15%, directing 15% of the interest paid to Aave DAO. When combined with the Interest Rate changes, the v2 deployment will generate an estimated $13.1k per day, up from around $5.5k per day. 

Prior to this proposal, due the implementation of AIP-68, Aave DAO is earning less revenue from the ETH Reserve post-merge despite utilization within the Reserve [increasing](https://governance.aave.com/t/optimize-rate-curve-for-eth-improve-revenue-generation/7571) significantly over that time.

# Specification

The below table shows the current and proposed changes to the ETH Reserve on Ethereum v2 and Ethereum v3 when deployed.

| Parameter      | Current Variable (%) | Proposed Variable (%) | Current Stable (%) | Proposed Stable (%)   |
| -------------- | ----------- | ------------ | -- | -- |
| Uoptimal       | 70          | 80           | 70 | 80 |
| Base           | 0           | 0            | 3.0| 3.0|
| Slope1         | 3.0         | 5.75         | 4.0| 4.0|
| Slope2         | 100         | 80           |100 | 80 |
| Reserve Factor | 10          | 15           | 10 | 15 |

# Implementation

Test cases can be found [here](https://github.com/llama-community/aave-interest-rate-update/blob/main/src/test/ProposalPayloadE2E.t.sol)

Payload Implementation can be found [here](https://github.com/llama-community/aave-interest-rate-update/blob/main/src/ProposalPayload.sol)

Proposal Payload = [0x98bc9dfa3cecb37f1bdeadc6e774d39082756b19](https://etherscan.io/address/0x98bc9dfa3cecb37f1bdeadc6e774d39082756b19#code)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
