---
title: Risk Parameter Updates for MKR - Aave V2 Ethereum
shortDescription: Update Liquidation Threshold (LT) and Loan-To-Value (LTV) of MKR on AAVE v2 Ethereum 
author: Chaos Labs (@ori-chaoslabs, @yhayun)
discussions: https://governance.aave.com/t/arc-chaos-labs-risk-parameter-updates-mkr-on-aave-v2-ethereum-2023-02-17/11948
created: 2023-02-17
---

# Simple Summary

A proposal to adjust two (2) total risk parameters, including Liquidation Threshold (LT) and Loan-To-Value (LTV), for one (1) asset on Aave V2 Ethereum.


# Motivation
This proposal is a continuation of a series of proposals ([AIP-136](https://app.aave.com/governance/proposal/136/), [AIP-137](https://app.aave.com/governance/proposal/137/)) intended to reduce the viability of different attack vectors on V2 assets.

At Chaos Labs, we continuously monitor markets and utilize our [Asset Protection Tool](https://chaoslabs.xyz/posts/chaos-labs-asset-protection-tool) to assess potential attack vectors on the protocol and suggest parameter and configuration updates accordingly (Supply/Borrow Caps, Liquidation Threshold updates, freezing of assets, listing in isolation mode, etc.)

Capital efficiency reductions on V2 assets will further mitigate attack vectors by increasing the capital required to wage a price manipulation attack on Aave. In addition, these changes will act as an effective motivation to shift usage to V3, where users can enjoy the benefits of enhanced risk mitigation mechanisms.

As Liquidation Threshold reductions may lead to user accounts being eligible for liquidations upon their approval, we want to clarify the full implications to the community at each step. To minimize this impact, we suggest reaching the desired settings by a series of incremental decreases, following the Risk-Off Framework previously approved by the community, with a reduction of up to 3% in any given AIP.

To avoid liquidations, Chaos Labs will communicate the planned amendments before their on-chain execution via all available avenues (Twitter, forums, Nansen Connect, and Blockscan Chat).

Below, we share data to quantify the effect of the recommended reductions on protocol users.

At the time of this proposal, none of the current positions will be eligible for liquidation due to the proposed change.

$MKR
Zero (0) accounts are eligible for liquidation.

# Specification

The following risk parameter proposal is presented below:
| Asset | Parameter | Current | Recommended | Change |
| --- | --- | --- | --- | --- |
| MKR | Liquidation Threshold | 67% | 64% | -3% |
| MKR | Loan-to-Value | 62% | 59% | -3% |


# References
[Forum Post](https://governance.aave.com/t/arc-chaos-labs-risk-parameter-updates-mkr-on-aave-v2-ethereum-2023-02-17/11948)

[Tests](https://github.com/ChaosLabsInc/aave-v2-payloads/blob/main/src/tests/MKRPayload-Feb26.t.sol)

[Proposal payload implementation](https://github.com/ChaosLabsInc/aave-v2-payloads/blob/main/src/payloads/MKRPayload-Feb26.sol)

[Deployed proposal payload](https://etherscan.io/address/0x014b2fc091cad41f5d6a8eeb2fef27852f4a97e7#code) 


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
