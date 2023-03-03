---
title: Add CRV to Ethereum v3
discussions: https://governance.aave.com/t/arfc-add-crv-to-ethereum-v3/11532
shortDescription: Add CRV to Ethereum v3, as collateral, with borrowing enabled and in isolation mode.
author: Llama, DeFi_Consulting & efecarranza
created: 2023-02-27
---

# Summary

This proposal presents Aave the opportunity to onboard CRV to the Ethereum v3 Liquidity Pool.

# Abstract

CRV is a strategic asset to Aave and any CRV earned from the pool could be used by Aave to support bootstrapping the adoption of GHO, StakedAToken and in the long term, perhaps help incentivize the Safety Module too.

The risk parameters provided within have been reviewed and endorsed by Gauntlet.

# Motivation

Listing CRV on Aave v3 Ethereum compliments the community's recent on-market purchase of CRV to repay the excessive debt created on v2 Ethereum. CRV is a material contributor to Aave’s revenue through the continual borrowing demand for CRV. With serveral v2 CRV reserves being frozen, Month on Month revenue has fallen significantly in recently months. 

![](https://i.imgur.com/pOKdNoR.png)

The Polygon v3 deployment is the only liquidity pool with Borrowing enabled. The chart below shows how deposit rates on this deployment have been affect by the freezing and disabling borrowing on Polygon v2 and Ethereum v2 respectively during late November 2022. 

![](https://i.imgur.com/VDtUak2.png)

By listing CRV on v3 Ethereum and with a suitable BorrowCap in place, users will have the ability to migrate there positions from v2 to v3. 

Any CRV earned by Aave can be used in a number of different ways, with examples shown below:

* Treasury yield
* GHO adoption
* StakedAToken adoption
* Support Safety Module yield

How the CRV will be used is open for discuss and implementation via a separate proposal.

The risk parameters presented have been reviewed by Gauntlet and a supportive comment can be found on the [forum](https://governance.aave.com/t/arfc-add-crv-to-ethereum-v3/11532/5).

The interest rate curve parameters have been sourced from Llama's [ARFC CRV Interest Rate Curve Upgrade post](https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337) and have also been reviewed by Gauntlet. 

# Specification

Ticker: CRV

Contract Address: [0xD533a949740bb3306d119CC777fa900bA034cd52](https://etherscan.io/token/0xD533a949740bb3306d119CC777fa900bA034cd52)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|YES|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|55.00%|
|Liquidation Threshold|61.00%|
|Liquidation Bonus|8.30%|
|Reserve Factor|20.00%|
|Liquidation Protocol Fee|10.00%|
|Borrow Cap|7.70M|
|Supply Cap|62.50M|
|Debt Ceiling|20.90M|
|Variable Base|3.00%|
|Variable Slope1|14.00%|
|Variable Slope2|300.00%|
|Uoptimal|70.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|8.00%|
|Stable Slope2|300.00%|
|Base Stable Rate Offset|3.00%|
|Stable Rate Excess Offset|5.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

# Implementation

Test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV3EthAddCRVPoolPayloadTest.t.sol)

Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV3EthAddCRVPoolPayload.sol)

Proposal Payload deployed address can be found [here](https://etherscan.io/address/0x5594475f068f814bdeb2d21b1676431a376322f5)

Interest Rate Strategy deployed address can be found [here](https://etherscan.io/address/0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14)

# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arfc-add-crv-to-ethereum-v3/11532), [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0xa0b5336692735fb4288537646aec5819cb4cbf01fc3a8a7cb06c9e62db708055) and [Risk Service Provider feedback](https://governance.aave.com/t/arfc-add-crv-to-ethereum-v3/11532/5).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

