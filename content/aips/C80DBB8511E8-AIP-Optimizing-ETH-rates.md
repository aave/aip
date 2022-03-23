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

Optimizing ETH rates on Aave v2 ethereum mainnet to meet the borrow demands generated from the inclusion of stETH collateral.
Proposed rates:

- OPTIMAL_UTILIZATION_RATE = **70** (previously: 65)
- EXCESS_UTILIZATION_RATE = **30** (previously: 35)
- baseVariableBorrowRate = **0** (previously: 0)
- variableRateSlope1 = **3** (previously: 8)
- variableRateSlope2 = **100** (previously: 100)
- stableRateSlope1 = **4** (previously: 10)
- stableRateSlope2 = **100** (previously: 100)

## Motivation

With the inclusion of new collateral type stETH the borrowing of ETH has increased to all time high (4-6x) and is not critical to grow much further under current conditions.

Currently, StETH earns ~3.9% APR from staking rewards while still being used as collateral in Aave which allows users to go leverage on stETH while borrowing ETH. This is only sensible to do when ETH borrow rates are lower than StETH rewards. With the current interest modals the utilization has reached to 19% (an all time high) and can grow further more till 24%. With the above updates it will allow utilization to go upto 70%. Yeilding good returns to users & 3-4x increase in ETH revenue for Aave protocol.

Follow the forum post [here](https://governance.aave.com/t/optimize-rate-curve-for-eth-improve-revenue-generation/7571) for more detailed description on calcualations, benefits & risks.
