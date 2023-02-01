---
title: Aave v3 Polygon wMATIC Interest Rate Update
discussions: https://governance.aave.com/t/arfc-aave-v3-polygon-wmatic-interest-rate-update/10290
shortDescription: Increase wMATIC Supply Cap, Borrow Cap and upgrade the interest rate curve.
author: Llama, Defi_Consulting
created: 2022-10-17
updated: 2023-02-01
---

# Summary

Llama presents a proposal to amend the interest rate parameters, SupplyCap, and BorrowCap for wMATIC on the Aave Polygon v3 Liquidity Pool.

# Abstract

At the current borrowing rate of 6.11%, the maximised yield strategy of looping stMATIC/wMATIC is non profitable without incentives. wMATIC’s reserve utilisation is low, 38.15%, due to high borrowing costs. 

This proposal will reduce the borrowing cost of wMATIC by reducing the overall borrowing cost to users and will also improve capital efficiency by enabling a great portion of the liquidity to be borrowed. This is expected to lead to increased wMATIC demand and greater revenue to Aave.

The up and coming liquidity mining campaign is expected to lead to a material inflow of deposits and an increase in borrowing demand. This proposal, amongst others, helps prepare Aave for an influx of new users. 

# Motivation

With wMATIC borrowing costs exceeding the yield of MaticX and stMATIC, users are unlikely to enter into the Matic eMode without financial incentive. Upon review of the wMATIC reserve, the Uoptimal parameter set at 45% means users can borrow up to 45% of the wMATIC in the reserve before borrowing costs become more volatile.

Increasing the Uoptimal parameter from 45% to 75% will enable users to borrow 30% more wMATIC in the reserve for the same borrowing rate, Slope1. By reducing the Slope1 parameter from 7.0% to 6.1%,  the borrowing cost at the Uoptimal point is lowered. 

To reduce the volatility in the borrow rate above Uoptimal utilisation, this proposal intends to reduce the Slope2 parameter from 300% to 100%. This will lower the borrowing cost volatility when utilisation exceeds the Upotimal point.

This initial update of increasing the Uoptimal and lowering the Slope1 parameter improves the overall capital efficiency and makes borrowing more attractive to users. Future updates will further optimise the interest rate.

The graphic below shows the changes in the interest rate.

![](https://raw.githubusercontent.com/aave/aip/main/content/assets/WMATIC_INTEREST_RATE_UPDATE_V3_POLYGON/graph.png)

In addition to the interest rate updates proposed above, Chaos Labs has provided revised SupplyCap and BorrowCap parameters. By increasing the amount of wMATIC that can be deposited and borrowed, the recursive yield maximising strategy can grow beyond the current limitation of the reserve during the upcoming liquidity mining program.

# Specification

The below table shows the current and proposed changes to the wMATIC Reserve. 

|Parameter|Current|Proposed|
| --- | --- | --- |
|SupplyCap|32.88M|47M|
|BorrowCap|9.23M|39.95M|
|Uoptimal|45%|75%|
|Base|0%|0%|
|Slope1|7.0%|6.1%|
|Slope2|300%|100%|
|Reserve Factor|20%|20%|


# Implementation

Test cases can be found [here](https://github.com/defijesus/aave-v3-wmatic-interest-rate-upgrade/blob/master/src/test/polygon/PolygonWmaticE2E.t.sol)

Payload Implementation can be found [here](https://github.com/defijesus/aave-v3-wmatic-interest-rate-upgrade/blob/master/src/contracts/polygon/WmaticPayload.sol)

New Interest Rate Strategy deployment script can be found [here](https://github.com/defijesus/wmatic-interest-rate-strategy-deployer-v3/blob/main/script/DeployContract.s.sol)

Proposal Payload deployed address can be found [here](https://polygonscan.com/address/0x7255791f9b2d44863c21ed1f484d444a74731ac6)

Interest Rate Strategy deployed address can be found [here](https://polygonscan.com/address/0xFB0898dCFb69DF9E01DBE625A5988D6542e5BdC5)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/). 
