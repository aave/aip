---
title: BAL Interest Rate Curve Upgrades
discussion: https://governance.aave.com/t/arfc-bal-interest-rate-curve-upgrade/10484
shortDescription: Upgrade the BAL interest rate curve across Ethereum v2, Polygon v3, and Polygon v2 Liquidity Pools
author: Llama, DeFi_Consulting, scottincrypto
created: 2023-02-01
---

# Summary

[Llama](https://twitter.com/llama) presents a proposal to amend BAL interest rate parameters on the Aave Ethereum v2, Polygon v3 and Polygon v2 Liquidity Pools.

# Abstract

There is currently a high demand for borrowing BAL (borrow rate = 46.7% on Polygon v3) across all Reserves. This proposal will improve the capital efficiency of the BAL pools by increasing the SupplyCap, BorrowCap, and Uoptimal parameters. 

The interest rate curves across all Aave deployments will be the same, with Polygon v3 expected to offer higher returns relative to Polygon v2 and hopefully entice users to migrate to v3. This proposal is expected to increase Aave’s BAL-denominated revenue whilst offering users greater capital efficiency.

Due to incentives offered by Aura Finance and others, strong borrowing demand is expected to continue in light of increased borrowing costs. For example, depositing BAL into Aura Finance’s staking contract generates [42.2%](https://app.aura.finance/) at the time of writing.

# Motivation

Due to strong borrowing demand for BAL, the reserve utilization often exceeds the Uoptimal parameter on active reserves, causing the borrowing rate to be volatile. The chart below shows the volatility in BAL borrowing rates on the only non-frozen BAL reserve, Polygon v3.

![](https://i.imgur.com/uq7xpvB.png)

By increasing the Uoptimal parameter, a greater portion of the BAL reserve can be borrowed by users without experiencing such volatility borrowing rates, providing the BorrowCap is accommodative. This proposal will improve the capital efficiency of the reserves by increasing the Uoptimal parameter from 45% to 80%.

Due to the high borrowing demand for BAL, which often exceeds 20%, it is fair to conclude that the borrowing rate for BAL is set too low. This proposal introduces a Base 3.0% and increases the Slope1 parameter from 7.0% to 14.0%. The borrowing cost at the Uoptimal point is 17.0% (Base + Slope1) on the proposed curve compared to 7.0% on the existing curve.

![](https://i.imgur.com/faD4z5r.png)

With Aave receiving 20% of all fee revenue, this will lead to increased BAL nominated revenue. 

In addition to the interest rate curve changes, this proposal will also increase the BorrowCap from 156.3K BAL to 256.140K BAL. Revising the BorrowCap higher will enable users to benefit from the increased the Uoptimal parameter. Do note, the BorrowCap figure was provided by Chaos Labs. 

# Specification

The below table shows the current and proposed changes to the BAL Interest Rate on Ethereum v2, Polygon v2 and Polygon v3.

|Parameter|Current (%)|Proposed (%)|
| --- | ---: | ---: |
|Uoptimal|45|80|
|Base|0|3|
|Slope1|7|14|
|Slope2|300|150|
|Reserve Factor|20|20|

The below shows the proposed changes to the Borrow Cap on Polygon v3.

|Polygon Parameter| Units |
| --- | --- | 
| Supply Cap | 284,600 (no change)|
| Borrow Cap | 256,140 |

Borrow Cap is calculated: 
(Uoptimal + 0.1) x SupplyCap
(0.8+0.1) x 284,600 = 256,140

# Implementation

Test cases can be found [here](https://github.com/llama-community/aave-bal-interest-rate-updates/blob/main/src/test/ProposalPayloadE2E.t.sol)

Payload Implementation can be found [here](https://github.com/llama-community/aave-bal-interest-rate-updates/tree/main/src)

Proposal Payload deployed address can be found [here] (https://etherscan.io/address/0x3b6532efb7a60711f8f3fa77a589a726c836f4cf)
Proposal Payload for Polygon deployed address can be found [here] (https://polygonscan.com/address/0x98bc9dfa3cecb37f1bdeadc6e774d39082756b19)

Interest Rate Strategy deployed address can be found [here](https://etherscan.io/address/0x04c28D6fE897859153eA753f986cc249Bf064f71)
Interest Rate Strategy deployed address for Polygon v2 can be found [here](https://polygonscan.com/address/0x80cb7e9E015C5331bF34e06de62443d070FD6654)
Interest Rate Strategy deployed address for Polygon v3 can be found [here](https://polygonscan.com/address/0x4b8D3277d49E114C8F2D6E0B2eD310e29226fe16)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

