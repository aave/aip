---
title: wMATIC Supply Cap Increase
discussions: https://governance.aave.com/t/arfc-wmatic-supply-cap-increase/12046
shortDescription: Increase wMATIC Supply Cap on Polygon v3
author: Llama - TokenLogic
created: 2023-04-10
---

# Summary

Llama proposes increasing the wMATIC Supply Cap on Polygon to facilitate to inflow of wMATIC from Balancer Linear Pools and the Polygon Foundation Liquidity Mining campaign. 

# Abstract

This proposal presents Aave with the opportunity to increase the wMATIC SupplyCap from 47M to 66M units on the Polygon v3 deployment. 

Looking forward, the potential inflows from new Balancer liquidity pools and migration of wMATIC from Aave v2 to v3 will exceed the current SupplyCap. Migration of the Balancer Liquidity Pools alone is expected to exceed the current SupplyCap. 
 

# Motivation

With Liquidity Mining (LM) ongoing on Polygon v3 by Polygon Foundation, Lido DAO and Stader Labs, the wMATIC v3 deposit rate comfortably exceeds the v2 deposits rate. This creates favourable conditions, encouraging users to migration wMATIC deposits. There is 15.03M units of wMATIC deposited in Aave v2 on Polgyon. 

The MaticX/wMATIC and stMATIC/wMATIC Balancer Liquidity pools are migrating to MaticX/bb-a-wMATIC and stMATIC/bb-a-wMATIC. An estimated 23.02M units of wMATIC are expected to be deposited into the wMATIC reserve on Polygon v3.

The utilisation of the wMATIC reserve is 56% with 26.38M of 47.00M units deposited.  

The current SupplyCap is insufficient to accomodate the potential inflows of wMATIC into the reserve. As a result, this proposal seeks to increase the SupplyCap from 47M to 66M units. A Supply Cap of 66M enables the bb-a-wMATIC linear pools on Balancer to deposit into Aave and 100% of the v2 wMATIC deposits to migrate to v3. 

# Specification

The following risk parameters are being proposed and have been reviewed and are supported by Gauntlet and Chaos Labs.

Ticker: wMATIC

Contract: [`0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`](https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|SupplyCap|47M units| 66M units|

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

