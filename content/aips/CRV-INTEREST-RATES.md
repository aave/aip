---
title: CRV Interest Rate Curve Upgrade
discussions: https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337
shortDescription: Upgrade the CRV interest rate curve across Ethereum v2, Polygon v3, and Polygon v2 Liquidity Pools
author: Llama
created: 2023-02-27
---

# Simple Summary

Llama presents a proposal to update the CRV interest rate parameters on the Aave Ethereum v2, Polygon v3, and Polygon v2 Liquidity Pools.

# Abstract

The CRV SupplyCap on the Polygon v3 deployment is currently at 100% with borrowing costs of 5.02% with a Utilization of 31.51% relative to a 45% Uoptimal value, [1]. This proposal intends to increase the CRV SupplyCap on Polygon v3 deployment, improve the capital efficiency of each liquidity pool, and increase the amount of revenue generated across the various CRV reserves.

Capital efficiency is improved on active reserves by increasing the Uoptimal value. Revenue is increased by introducing a Base interest rate, increasing the Slope1 and aligning the Reserve Factor to 20% across all pools. 

This AIP is expected to lead more CRV revenue and significantly reduce the amount of free CRV in active reserves.

# Motivation

With the CRV reserve on Polygon reaching its SupplyCap, this is an ideal time to implement an upgrade that addresses the SupplyCap and Interest Rate parameters. 

The current CRV Interest Rate reflects the original parameters implemented when the liquidity pools were deployed. The Interest Rate Parameters do not take into consideration the alternative use cases for CRV and consequently, Aave has missed out on revenue from the sustained borrowing demand.

Llama expects the sustained borrowing demand to continue due to Curve's veTokenomics presenting several opportunities for CRV borrowers to earn yield. 

In this proposal, the Uoptimal parameter is to be increased from 45% to 70%, which improves the capital efficiency of active reserves.

![](https://i.imgur.com/BhKxsuS.png)

![](https://i.imgur.com/GZNc30u.png)

Specific to the Polygon v3 deployment, increasing the Uoptimal parameter from 45% to 70% will lead to an increase in the BorrowCap, which is a function of the SupplyCap and Uoptimal parameter.

BorrowCap = SupplyCap * (Uoptimal + 0.1)

The new SupplyCap parameter has been prepared by Chaos Labs, 1,125.24K. This generates a new Borrow Cap of 900.19K, [2].

![](https://i.imgur.com/VDtUak2.png)

The interest rate at the current Optimal point is 7%.

![](https://i.imgur.com/g0jtJql.png)

This proposal recommends introducing a Base and increasing the Slope1 parameter to 3% and 14% respectively.  This will lead to a substantial change to the current curve. Over time, we will monitor the reserve and amend the Slope1 parameter to optimize for risk exposure and revenue generation.

The graphic below shows the changes in the interest rate.

![](https://i.imgur.com/WMT8KMn.png)

The Reserve Factor on Polygon v3 is to be increased from 10% to 20%, bringing it in line with all other Aave deployments.

# Specification

The below table shows the current and proposed changes to the CRV Reserve on Polygon v3, Polygon v2 and Ethereum v2.

**Polygon v3 - Active**

|Parameter|Current|Proposed|
| --- | --- | --- |
|SupplyCap|937,700 units|1,125,240 units|
|BorrowCap|640,440 units|900,190 units|
|Uoptimal|45.00%|70.00%|
|Variable Base|0.00%|3.00%|
|Variable Slope1|7.00%|14.00%|
|Variable Slope2|300.00%|300.00%|
|Reserve Factor|10.00%|20.00%|
|Stable Borrowing|Disabled|Disabled|
|Stable Slope1|0.00%|8.00%|
|Stable Slope2|0.00%|300.00%|
|Base Stable Rate Offset|2.00%|3.00%|
|Stable Rate Excess Offset|5.00%|5.00%|
|Optimal Stable To Total Debt Ratio|20.00%|20.00%|

**Polygon v2 - Frozen**

|Parameter|Current |Proposed|
| --- | --- | --- |
|Uoptimal|45.00%|45.00%|
|Base|0.00%|3.00%|
|VariableSlope1|7.00%|14.00%|
|VariableSlope2|300.00%|300.00%|
|StableSlope1|10.00%|17.00%|
|StableSlope2|300.00%|300.00%|
|Reserve Factor|20.00%|20.00%|

**Ethereum v2 - Frozen**

|Parameter|Current|Proposed|
| --- | --- | --- |
|Uoptimal|45.00%|45.00%|
|Base|0.00%|3.00%|
|VariableSlope1|7.00%|14.00%|
|VariableSlope2|300.00%|300.00%|
|StableSlope1|10.00%|17.00%|
|StableSlope2|300.00%|300.00%|
|Reserve Factor|20.00%|20.00%|

# Implementation

**Polygon v3**

Test cases can be found [here](https://github.com/llama-community/aave-crv-interest-rate-updates/blob/main/src/test/ProposalPayloadV3E2E.t.sol)

Payload Implementation can be found [here](https://github.com/llama-community/aave-crv-interest-rate-updates/blob/main/src/ProposalPayloadPolygon.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer-v3/tree/main/script)

Proposal Payload deployed address can be found [here](https://polygonscan.com/address/0x3b6532efb7a60711f8f3fa77a589a726c836f4cf)

Interest Rate Strategy deployed address can be found [here](https://polygonscan.com/address/0xBefcd01681224555b74eAC87207eaF9Bc3361F59)

**Polygon v2**

Test cases can be found [here](https://github.com/llama-community/aave-crv-interest-rate-updates/blob/main/src/test/ProposalPayloadV2E2E.t.sol)

Payload Implementation can be found [here](https://github.com/llama-community/aave-crv-interest-rate-updates/blob/main/src/ProposalPayloadPolygon.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/tree/main/script)

Proposal Payload deployed address can be found [here](https://polygonscan.com/address/0x3b6532efb7a60711f8f3fa77a589a726c836f4cf)

Interest Rate Strategy deployed address can be found [here](https://polygonscan.com/address/0x334c59E5a50932a3C34AC39AB12131C648Cc1aE8)

**Ethereum v2**

Test cases can be found [here](https://github.com/llama-community/aave-crv-interest-rate-updates/blob/main/src/test/ProposalPayloadV2E2E.t.sol)

Payload Implementation can be found [here](https://github.com/llama-community/aave-crv-interest-rate-updates/blob/main/src/ProposalPayload.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/tree/main/script)

Proposal Payload deployed address can be found [here](https://etherscan.io/address/0xbacbe678e2c59343024fd5755262c7b0f77867d1)

Interest Rate Strategy deployed address can be found [here](https://etherscan.io/address/0x5E6EFF5bEFe97c8b87BEa94F6e9940156CC47027)


# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337), [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0x56aaf192f5cad8277b0e7c82abad030c62bb8fcfe4f2640ce5b896ab04397c20) and [Risk Service Provider feedback](https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337/9).

# References

1. https://app.aave.com/reserve-overview/?underlyingAsset=0x172370d5cd63279efa6d502dab29171933a610af&marketName=proto_polygon_v3
2. https://governance.aave.com/t/aave-v3-borrow-caps-methodology/10925
3. https://creativecommons.org/publicdomain/zero/1.0/

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
