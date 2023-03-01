---
title: MaticX Risk Parameter & Interest Rate Upgrade
discussion: https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555
shortDescription: Update the MaticX reserve on Polygon v3 to enable borrowing, introduce a BorrowCap and increase the SupplyCap.
author: Llama, DeFi_Consulting, scottincrypto & efecarranza
created: 2023-02-27
---

# Summary

Llama proposes upgrading the MaticX Reserve on Polygon to facilitate an expansion of the MaticX/wMATIC loop strategy. 

# Abstract

Utilisation of the MaticX reserve has been trending higher over time and with the introduction of deposit rewards, the SupplyCap has been reached and it now prohibites additional MaticX being deposited.

Increasing the SupplyCap enables the recursive MaticX/wMATIC strategy to grow beyond the current constraints. Enabling borrowing, with a reasonable BorrowCap and SD rewards, is expected to generate significant utilisation of the MaticX reserve. 

This proposal facilitates the expansion of MaticX yield based strategies on Aave v3 Polygon by creating more favourable bootstrapping conditions. The introduction of liquidity mining rewards is expected to drive notable inflows and usage to the v3 deployment. 

# Motivation

Over the previous months, Llama has been working with various communities to craft favourable conditions on Aave v3 Polygon to facilitate the creation of several yield aggregation products. The below proposals details are applicable:

* [Proposal to add MaticX to Aave v3 Polygon Market](https://governance.aave.com/t/proposal-to-add-maticx-to-aave-v3-polygon-market/79950)
* [ARFC Aave v3 Polygon wMATIC Interest Rate Update](https://governance.aave.com/t/arfc-aave-v3-polygon-wmatic-interest-rate-update/10290)
* [ARFC SD Emission_Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arfc-sd-emission-admin-for-polygon-v3-liquidity-pool/10658)
* [ARFC stMATIC & MaticX Emission_Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arfc-stmatic-maticx-emission-admin-for-polygon-v3-liquidity-pool/10632)

This proposal is a continuation of the above work.

In support of the ongoing SD rewards distribution, this proposal seeks to increase the SupplyCap, enable borrowing and introduce a BorrowCap sufficient to create a notable deposit yield.

![](https://i.imgur.com/GSWOAxP.png)

Detailed analysis can be found on the governance forum, [here](https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555).

# Specification

The following risk parameters are being proposed and have been reviewed by [Gauntlet](https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555/6).

|Parameter|Current|Proposed Value|
| --- | --- |---|
|Loan To Value|50.00%|58.00%|
|Liquidation Threshold|65.00%|67.00%|
|Liquidation Bonus|10.00%|10.00%|
|Liquidation Protocol Fee|0.00%|10.00%|
|SupplyCap|6.0M units|8.6M units|
|Borrowing|Disabled|Enabled|
|BorrowingCap|0.00M units|5.20M units|

With borrowing to be enabled, the following interest rate parameters have been reviewed by Llama and Gauntlet.

|Parameter|Proposed Value|
| --- | --- |
|Base|0.25%|
|Uoptimal|45.00%|
|Slope1|4.00%|
|Slope2|150.00%|
|Reserve Factor|20.00%|
|Stable Borrowing |Disabled|
|Stable Slope1 |0.50%|
|Stable Slope2 |150.00%|
|Base Stable Rate Offset |2.00%|
|Stable Rate Excess Offset | 5.00%|
|Optimal Stable To Total Debt Ratio | 20.00%|

# Implementation

Test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/AaveV3PolMaticXRiskParamsUpdatePayloadTest.t.sol)

Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/AaveV3PolMaticXRiskParamsUpdatePayload.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/tree/main/script)

Proposal Payload deployed address can be found [here](https://polygonscan.com/address/0x46a1b7d4a2920270c7eb2c2db4df2259a109bcb4)

Interest Rate Strategy deployed address can be found [here](https://polygonscan.com/address/0x6B434652E4C4e3e972f9F267982F05ae0fcc24b6)

# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555), [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0x8abe6a2ae1134d6886f460d6648dc3a5d2f789e1b94e78f496e7f5ec5ff38697) and [Risk Service Provider feedback](https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555/6).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

