---
title: wMATIC Supply & Borrow Cap Increase Polygon v3
discussions: https://governance.aave.com/t/arfc-wmatic-supply-borrow-cap-increase-polygon-v3/13095
shortDescription: Increase Supply & Borrow Cap wMATIC on Polygon v3
author: Llama (Fermin Carranza, TokenLogic)
created: 2023-05-18
---

# Summary

This AIP proposes increasing the wMATIC Supply and Borrow Cap on Polygon v3.

# Abstract

With strong deposit flows from the Balancer bb-a-wMATIC integration and the continual growth of the yield maximising strategy, the Supply and Borrow Cap of wMATIC are both experiencing strong utilisation.

This AIP enables the continued growth of wMATIC deposits as Balancer Liquidity Providers migrate to the new gauges and users continue to migrate from Aave v2 to v3. As wMATIC deposits grow so does the demand for borrowing wMATIC. Subsidised borrowing costs has lead to significant demand for wMATIC and TVL growth for Aave.

Increasing the Supply and Borrow Caps as outlined will continue to users of yield maximising strategies.

# Motivation

With several Balancer liquidity pools depositing wMATIC into Aave v3 on Polygon, the utilisation of the Supply Cap has increased to 100%. This is currently preventing the Balancer linear pools from depositing into the wMATIC reserve. 

Currently, there is around [5,294,939](https://app.balancer.fi/#/polygon/pool/0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d) and [1,228,487](https://app.balancer.fi/#/polygon/pool/0xb20fc01d21a50d2c734c4a1262b4404d41fa7bf000000000000000000000075c) units of wMATIC not yet migrated to the new gauges. The wMATIC Supply Cap is at 100% utilisation.

There is also [15.13M](https://app.aave.com/markets/?marketName=proto_polygon) units of wMATIC on Aave v2 that has not yet migrated to v3. 

Collectively, this represents around 21.65M units of wMATIC relative to a Supply Cap. This AIP intends to provide sufficent capacity for the 21.65M units to be deposited into the wMATIC reserve by increasing the Supply Cap from 66M units to 90M units, a 24M unit increase. The utilisation of the pool will be 73.33% after the Supply Cap is implemented.

With many teams are offering yield maximising strategies, there is continued strong demand for borrowing wMATIC. The current Borrow Cap has reached 74.50% utilisation. The newly proposed Borrow Cap 50M units is equivalent to 25% increase and represents 62.5% of the Supply Cap.

With reference to the new [ARFC Aave V3 Caps update Framework](https://governance.aave.com/t/arfc-aave-v3-caps-update-framework/11937/1) it is possible to ship several upgrades to gradually increasing Aave's exposure to wMATIC over time.

# Specification

The following risk parameters have been proposed by Llama and Chaos Labs has expressed support on the governance forum.

Ticker: wMATIC

Contract: [`polygon: 0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`](https://polygonscan.com/address/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|SupplyCap|66.00M units|90M units|
|BorrowCap|39.95M units|50M units|

# Implementation

A list of relevant links like for this proposal:

* [Governance Forum Discussion](https://governance.aave.com/t/arfc-wmatic-supply-borrow-cap-increase-polygon-v3/13095)
* [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230518/AaveV3PolCapsUpdates_20230518_PayloadTest.t.sol)
* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230518/AaveV3PolCapsUpdates_20230518_Payload.sol)

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
