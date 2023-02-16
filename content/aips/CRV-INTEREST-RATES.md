---
title: CRV Interest Rate Curve Upgrade
discussion: https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337
shortDescription: Upgrade the CRV interest rate curve across Ethereum v2, Polygon v3, and Polygon v2 Liquidity Pools
author: Llama, Defi_Consulting & efecarranza
created: 2023-02-16
---

# Simple Summary

Llama presents a proposal to update the CRV interest rate parameters on the Aave Ethereum v2, Polygon v3, and Polygon v2 Liquidity Pools.

# Abstract

The CRV SupplyCap on the Polygon v3 deployment is currently at 100% with borrowing costs of 7.24% with a Utilization of 44.95% relative to a 45% Uoptimal value, [1]. This proposal intends to increase the CRV SupplyCap on Polygon v3 deployment, improve the capital efficiency of each liquidity pool, and increase the amount of revenue generated across the various CRV reserves.

Capital efficiency is improved by increasing the Uoptimal value. Revenue is increased by introducing a Base interest rate, increasing the Slope1 and aligning the Reserve Factor to 20% across all pools. This is expected to generate more revenue for the DAO and significantly reduce the amount of free CRV in aggregate across the reserves.

# Motivation

With the CRV reserve on Polygon reaching its SupplyCap, this is an ideal time to implement an upgrade that addresses the SupplyCap and Interest Rate parameters. The current CRV Interest Rate reflects the original parameters implemented when the liquidity pools were deployed. The Interest Rate Parameters do not take into consideration the alternative use cases for CRV and consequently, Aave has missed out on revenue from the sustained borrowing demand.

Llama expects the sustained borrowing demand to continue due to the veTokenomics construct presenting several opportunities for CRV borrowers to earn yield. In this proposal, the Uoptimal parameter is to be increased from 45% to 70% improving the capital efficiency of the active reserves.

![](https://i.imgur.com/gOOhi3K.png)

![](https://i.imgur.com/PNoEM34.png)

Specific to the Polygon v3 deployment, increasing the Uoptimal parameter from 45% to 70% will lead to an increase in the BorrowCap, which is a function of the SupplyCap and Uoptimal parameter.

BorrowCap = SupplyCap * (Uoptimal + 0.1)

The new SupplyCap parameter has been prepared by Chaos Labs, 1,125.24K. This generates a new Borrow Cap of 900.19K, [2].

With borrowing disabled on some Aave deployments, lending rates will drop and it will become rational for profit-driven actors to transition liquidity to the Reserve that offers the greatest yield. This has been playing out with demand on Polygon v3 increasing relative to other deployments.

![|602x220](https://lh4.googleusercontent.com/6JBjVL3HMRZ4_Bteuv2DluxmvzeGBylyijRmHcH43eLscs8ECgeDSCG6fFcYAlJxAOktJX_DQyw1ZcY5uxJQVugOBaihQFNWNydFXQFmV5QB5VdqTaNYmFobEjYyzRNGvtbzaCgHJ_POCDAgbqqX6KmwoErQYl5k-35AmQMnz9lBK4xB46HdRlEYcl8NSA)

![|602x201](https://lh4.googleusercontent.com/QamXX3bRroYrZVEbgcF1cytYUAgrXjOXumC0-v84ZL0r0xgRRj1VkV1jBpkyyq2DOlzf3MoV_BWbe25ifn1KyldCL7Nui4Ha4sbo3O6v19ipKGdR1OOa1zWJe-2T5jQEcpYCT6eGWie2R2NcgMQ5-p9hcX0gucEw_yWdVtOaTmgHsZpapnZ5n4vpUfmnbA)

![|602x201](https://lh4.googleusercontent.com/iedXQAPBKjRykGaxXYuvs-NvCstapd5YCB-oxREIHJMeLZydPdR_PkSBQrCAzhFRkEDignsnsnjLJcdg9PZF1obv_pfpMr5vULL9CJnPYzJbip1dGRgFAWqj8gzBBex0JaTwbB_nBS5TNgVn9dFmM951luswHEhgW6YG77Ln0DImSRoKa_ksqZR_VR-ncw)

The interest rate at the current Optimal point is 7%.

![](https://i.imgur.com/O0CPQl9.png)

This proposal recommends introducing a Base and increasing the Slope1 parameter to 3% and 14% respectively.  This will lead to a substantial change to the current curve. Over time, we will be able to monitor the reserve and amend the Slope1 parameter to optimize for risk exposure and revenue generation.

The graphic below shows the changes in the interest rate.

![](https://i.imgur.com/WMT8KMn.png)

The Reserve Factor on Polygon v3 is to be increased from 10% to 20%, bringing it in line with all other Aave deployments.

# Specification

The below table shows the current and proposed changes to the CRV Reserve on Polygon v2, Polygon v3, Ethereum v2 and the soon to be deployed Ethereum v3 liquidity pool.

Polygon v3

|Parameter|Current (%)|Proposed (%)|
| --- | --- | --- |
|SupplyCap|937,700|1,125,240|
|BorrowCap|640,440|900,190|
|Uoptimal|45|70|
|Base|0.00|3.00|
|Slope1|7.00|14.00|
|Slope2|300.00|300.00|
|Reserve Factor|10.00|20.00|

Polygon v2 - Frozen

|Parameter|Current (%)|Proposed (%)|
| --- | --- | --- |
|Uoptimal|45|70|
|Base|0.00|3.00|
|Slope1|7.00|14.00|
|Slope2|300.00|300.00|
|Reserve Factor|20.00|20.00|

Ethereum v2 - Frozen

|Parameter|Current (%)|Proposed (%)|
| --- | --- | --- |
|Uoptimal|45|70|
|Base|0.00|3.00|
|Slope1|7.00|14.00|
|Slope2|300.00|300.00|
|Reserve Factor|20.00|20.00|

# Implementation

**Ethereum v2**

Test cases can be found [here](XXX)

Payload Implementation can be found [here](xxx)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/tree/main/script)

Proposal Payload deployed address can be found [here](XXX)

Interest Rate Strategy deployed address can be found [here](https://etherscan.io/address/0x5E6EFF5bEFe97c8b87BEa94F6e9940156CC47027)

**Polygon v2**

Test cases can be found [here](XXX)

Payload Implementation can be found [here](xxx)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer/tree/main/script)

Proposal Payload deployed address can be found [here](XXX)

Interest Rate Strategy deployed address can be found [here](https://polygonscan.com/address/0x334c59E5a50932a3C34AC39AB12131C648Cc1aE8)

**Polygon v3**

Test cases can be found [here](XXX)

Payload Implementation can be found [here](xxx)

New Interest Rate Strategy deployment script can be found [here](https://github.com/llama-community/aave-interest-rate-strategy-deployer-v3/tree/main/script)

Proposal Payload deployed address can be found [here](XXX)

Interest Rate Strategy deployed address can be found [here](https://polygonscan.com/address/0xBefcd01681224555b74eAC87207eaF9Bc3361F59)

# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337), [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0x56aaf192f5cad8277b0e7c82abad030c62bb8fcfe4f2640ce5b896ab04397c20) and [Risk Service Provider feedback](https://governance.aave.com/t/arfc-crv-interest-rate-curve-upgrade/11337/9).

# References

[1] https://app.aave.com/reserve-overview/?underlyingAsset=0x172370d5cd63279efa6d502dab29171933a610af&marketName=proto_polygon_v3
[2] https://governance.aave.com/t/aave-v3-borrow-caps-methodology/10925
[3] https://creativecommons.org/publicdomain/zero/1.0/

# Copyright

Copyright and related rights waived via [CC0\(https://creativecommons.org/publicdomain/zero/1.0/).
