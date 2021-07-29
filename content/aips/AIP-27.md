---
aip: <to be assigned>
title: Lower Reserve Factor for AMPL
status: WIP
author: Ahmed Naguib Aly (@ahnaguib), Nithin Ottilingam (@nithinkrishna), Brandon Iles (@brandoniles)
shortDescription: Lower AMPL reserve factor
discussions: https://governance.aave.com/t/arc-raise-ampl-maximum-interest-rate/4996
created: 2021-07-27
requires: AIP-Ample_interest_rate
---

## Simple Summary

This is a sibling proposal to AIP-AMPL_interest_rate and proposes lowering the AMPL reserve factor from 20% to 10%.

## Motivation

Following [API-12](https://governance.aave.com/t/proposal-add-support-for-ampl/854/8), [AMPL borrowing & lending](https://app.aave.com/reserve-overview/AMPL-0xd46ba6d942050d489dbd938a2c909a5d5039a1610xb53c1a33016b2dc2ff3653530bff1848a515c8c5) went live on the AAVE v2 market [date=2021-07-24 time=20:22:00 timezone="UTC"]. Since then, there has been a near 100% utilization rate of deposited assets.

The reserveFactor allows the FeeCollector smart contract to receive part of the interest paid by takers of liquidity. Each asset on Aave has its own reserveFactor.

AIP-AMPL_interest_rate raises the maximum borrowing rate for AMPL and would result in more fees coming into the system. This AIP proposes (in tandem) lowering the AMPL reserve factor from 20% to 10%. This shares more of the revenue with AMPL suppliers to further incentivize deposits.

# Relevant Links

- AIP-12 AMPL Listing: https://app.aave.com/governance/18-QmZZ7JqvEx99u7dMNFPBBnew3BgepLCmXRMrNi8y5ndpXn
- AIP-AMPL_interest_rate:
- Aavenomics: https://docs.aave.com/aavenomics/

## Implementation

call setReserveFactor(0xd46ba6d942050d489dbd938a2c909a5d5039a161, 1000)

On the lending pool configurator contract

https://etherscan.io/address/0x311bb771e4f8952e6da169b425e7e92d6ac45756

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
