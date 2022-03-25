---
title: Optimizing ETH rates
status: Proposed
author: Samyak Jain (@smykjain)
shortDescription: Optimizing ETH rates to meet borrow demands & increase ETH revenue generation
discussions: https://governance.aave.com/t/optimize-rate-curve-for-eth-improve-revenue-generation/7571
created: 2022-03-23
updated (*optional): 2022-03-23
---

## Simple Summary
Optimizing ETH rates on Aave v2 ethereum mainnet to meet the borrowing demands generated from the inclusion of stETH collateral.


## Motivation

With the inclusion of new collateral type stETH the borrowing of ETH has increased to an all time high (4-6x more utilization) it is now critical to adjust rates to continue growth under current conditions.

Currently, stETH earns ~3.9% APR from staking rewards, while still being used as collateral in Aave, which allows users to go leverage on stETH while borrowing ETH. This is only sensible to do when ETH borrow rates are lower than stETH rewards. With the current interest modals the utilization has reached up to 19% (an all time high) and can grow further to about 24%. With the above updates it will allow utilization to go up to 70%. Yeilding good returns to users and a 3-4x increase in ETH revenue for the Aave protocol.

Follow the forum post [here](https://governance.aave.com/t/optimize-rate-curve-for-eth-improve-revenue-generation/7571) for more detailed description on calcualations, benefits & risks.

## Specification

Proposed updated to ETH rates:

- OPTIMAL_UTILIZATION_RATE = **70** (previously: 65)
- EXCESS_UTILIZATION_RATE = **30** (previously: 35)
- baseVariableBorrowRate = **0** (previously: 0)
- variableRateSlope1 = **3** (previously: 8)
- variableRateSlope2 = **100** (previously: 100)
- stableRateSlope1 = **4** (previously: 10)
- stableRateSlope2 = **100** (previously: 100)


## Rationale
Current stETH rewards are 4%. Staking rewards on ETH via Lido are still relatively high and stETH still has the capacity to accept another $4.5B of ETH. This increase in stETH supply would only reduce the rewards by 0.3%, meaning there is at least 1.5M ETH (~$4-5B USD) that could get staked. For Aave, it represents $4-5B in borrowings of ETH (more significant than any borrowing market that currently exists across any token)

**Projected rates at current a 3% borrowing rate:**

- Utilization: 24.5% [very low utilization leading to less revenue generation]
- Borrowing rate: 3.02%
- Supplying rate: 0.66% [low incentives for new lenders to come in]

**Projected rates at 3% borrow rate and 70% utilization:**

- Utilization: 70% [good revenue for governance]
- Borrow rate: 3%
- Supplying rate: 1.9% [decent for new lenders to come in or to get a discount for stable coin borrowing against ETH]

See Governance Post [here](https://governance.aave.com/t/optimize-rate-curve-for-eth-improve-revenue-generation/7571) for more detailed description on calcualations, benefits & risks.

## Implementation

[Here](https://etherscan.io/address/0xEc368D82cb2ad9fc5EfAF823B115A622b52bcD5F#code) is the new rate strategy.
[Here](https://etherscan.io/address/0x49e4db0a4d63c73bae75747ee12ab63bbdda3207#code) is the execution payload.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
