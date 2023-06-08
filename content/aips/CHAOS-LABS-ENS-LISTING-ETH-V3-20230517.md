---
title: Add ENS to Aave V3 Ethereum
shortDescription: Add ENS to Aave V3 Ethereum
author: Chaos Labs (@ori-chaoslabs, @yonikesel)
discussions: https://governance.aave.com/t/arfc-add-ens-to-aave-v3-ethereum/13044
created: 2023-5-17
---

## Simple Summary

This proposal presents Aave with the opportunity to onboard ENS to the Etheruem Aave V3 Market.

## Motivation

As part of the community efforts on the V2 to V3 migration, Chaos Labs proposed a [multi-phased plan](https://governance.aave.com/t/temp-check-ethereum-v2-to-v3-migration/12636) to promote V3 adoption. As per this plan, Chaos Labs proposes to list ENS on Aave V3 on Ethereum. ENS is currently listed on V2 Ethereum with borrow disabled.

As the proposed assets in the migration plan are traded with relatively low market cap and trading volume, we have taken a prudent approach in setting borrow caps to account for no more than 1% of the average daily trading volume. The supply cap was derived using our supply cap methodology with the V2 data (simulation results can be seen in the image below). Additionally, we have adjusted the IR Slope1 to reflect the changes in interest rates over the past months and adjusted the liquidation bonus levels to the current liquidity levels in DEXs.

## Specification

Ticker: ENS

Contract Address: 0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72

| Risk Parameter                     | Value      |
| ---------------------------------- | ---------- |
| Isolation Mode                     | Yes        |
| Borrowable                         | Yes        |
| Collateral Enabled                 | Yes        |
| Supply Cap (ENS)                   | 1,000,000  |
| Borrow Cap (ENS)                   | 40,000     |
| Debt Ceiling                       | $3,900,000 |
| Loan To Value                      | 39.00%     |
| Liquidation Threshold              | 49.00%     |
| Liquidation Bonus                  | 8.00%      |
| Liquidation Protocol Fee           | 10.00%     |
| Variable Base                      | 0.00%      |
| Variable Slope1                    | 9.00%      |
| Variable Slope2                    | 300.00%    |
| Uoptimal                           | 45.00%     |
| Reserve Factor                     | 20.00%     |
| Stable Borrowing                   | Disabled   |
| Stable Slope1                      | 13.00%     |
| Stable Slope2                      | 300.00%    |
| Base Stable Rate Offset            | 3.00%      |
| Stable Rate Excess Offset          | 5.00%      |
| Optimal Stable To Total Debt Ratio | 20.00%     |
| Flahloanable                       | Yes        |
| Siloed Borrowing                   | No         |
| Borrowed in Isolation              | No         |

# References

[Forum Post](https://governance.aave.com/t/arfc-add-ens-to-aave-v3-ethereum/13044)

[Test](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3EthENSListing_20230517/AaveV3EthENSListing_20230517_Payload_Test.t.sol)

[Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3EthENSListing_20230517/AaveV3EthENSListing_20230517_Payload.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
