---
title: Supply/Borrow Cap Updates Polygon and Arbitrum V3
shortDescription: Update Supply and Borrow Caps on Polygon, Arbitrum on Aave V3 
author: Chaos Labs (@ori-chaoslabs, @yhayun)
discussions: https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-polygon-and-arbitrum-2023-02-07/11605
created: 2023-2-12
---

# Simple Summary

A proposal to adjust eleven (11) total risk parameters, including Supply Cap and Borrow Cap, across seven (7) Aave V3 Polygon and Arbitrum assets.


# Motivation

The objective of this proposal is to recommend updated supply and borrow caps for V3 assets that have reached high utilization of either cap. The recommendations provided in this proposal were derived using Chaos Labs’ Updated Supply and Borrow Cap Methodology

The respective governance forum discussion is linked below:
- [Chaos Labs Supply and Borrow Cap Updates - Aave V3 Polygon and Arbitrum - 2023.02.07](https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-polygon-and-arbitrum-2023-02-07/11605)


# Specification

The following risk parameter proposal is presented below:

### Polygon

| Asset | Current Supply | Current Supply Cap | Recommended Supply Cap | Current Borrow | Current Borrow Cap | Recommended Borrow Cap |
| --- | --- | --- | --- | --- | --- | --- | 
| BAL | 284,600 | 284,600 | 361,000 | 136,400 | 256,140  | No Change | supply cap was modified from our original analysis to address Gauntlet’s analysis (see https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-polygon-and-arbitrum-2023-02-07/11605/2) |
| EURS | 2,060,000 | 2,000,000,000 | 4,000,000 | 728,530 | 728,530 | 947,000 |
| DAI | 5,680,000  | 2,000,000,000 | 45,000,000 | 3,160,000 | 3,860,000 | 30,000,000 | 
| USDC | 35,590,000  | 2,000,000,000 | 150,000,000 | 18,600,000 | 30,680,000 | 100,000,000 | 
| USDT | 5,940,000  | 2,000,000,000 | 45,000,000 | 4,870,000 | 5,060,000 | 30,000,000 |


### Arbitrum

| Asset | Current Supply | Current Supply Cap | Recommended Supply Cap | Current Borrow | Current Borrow Cap | Recommended Borrow Cap |
| --- | --- | --- | --- | --- | --- | --- |
| LINK | 338,490 | 350,000 | 676,980 | $763,400 | 20,427 | No Change |
| ETH | 17,640 | 20,300 | 35,280 | 3,663 | 11,165 | No Change |



# References
[Forum Post](https://governance.aave.com/t/arc-chaos-labs-supply-and-borrow-cap-updates-aave-v3-polygon-and-arbitrum-2023-02-07/11605)

Tests: [Arbitrum](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/arbitrum/AaveV3ArbBorrowCapsPayload-Feb12.t.sol), [Polygon](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/test/polygon/AaveV3PolCapsPayload-Feb12.t.sol)


Proposal payload implementation - [Arbitrum](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/arbitrum/AaveV3ArbCapsPayload-Feb12.sol), [Polygon](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/master/src/contracts/polygon/AaveV3PolCapsPayload-Feb12.sol)

Deployed proposal payload - [Arbitrum](https://arbiscan.io/address/0x280e404338d9d8e50b11d6677b9c91ba86e0fd22#code), [Polygon](https://polygonscan.com/address/0x060bea15af594fe9e0a243ca632f2c7d1935c70f#code)



# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
