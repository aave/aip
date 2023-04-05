---
title: Increase wMATIC Supply Cap & BAL Borrow Cap
discussions: https://governance.aave.com/t/arfc-wmatic-supply-cap-increase/12046
shortDescription: Increase wMATIC Supply Cap and BAL Borrow Cap on Polygon v3
author: Llama - TokenLogic
created: 2023-04-04
---

# Summary

Llama proposes increasing the wMATIC Supply Cap and BAL Borrow Cap on the Polygon v3 deployment after each respective proposal successfully passed a Snapshot vote. 

# Abstract

This publication presents Aave with the opportunity to increase the wMATIC SupplyCap from 47M to 66M units and the BAL Borrow Cap from 256,140 to 290,000 units on the Polygon v3 deployment. 

Increasing the wMATIC Supply Cap will enable inflows from new Balancer bb-a-wMATIC liquidity pools and migration of user funds from v2 to v3 without exceeding the deposit restriction on v3. 

Increasing the BAL Borrow Cap will enable Aave to benefit from elevated borrowing demand at a time when Tetu is offering considerable rewards.

Both risk service providers support increasing the BAL Borrowing Cap and wMATIC Supply Cap parameters.
 
# Motivation

## wMATIC Supply Cap

With Liquidity Mining (LM) ongoing on Polygon v3 by Polygon Foundation, Lido DAO and Stader Labs, the wMATIC v3 deposit rate comfortably exceeds the v2 deposits rate. This creates favourable conditions, encouraging users to migration wMATIC deposits. There is 14.94M units of wMATIC deposited in Aave v2 on Polgyon. 

The MaticX/wMATIC and stMATIC/wMATIC Balancer Liquidity pools are migrating to MaticX/bb-a-wMATIC and stMATIC/bb-a-wMATIC. An estimated 23.03M units of wMATIC are expected to be deposited into the wMATIC reserve on Polygon v3.

The utilisation of the wMATIC reserve is 57% with 26.72M of 47.00M units deposited.  

The current SupplyCap is insufficient to accomodate the potential inflows of wMATIC into the reserve. As a result, this proposal seeks to increase the SupplyCap from 47M to 66M units. A Supply Cap of 66M enables the bb-a-wMATIC linear pools on Balancer to deposit into Aave and 100% of the v2 wMATIC deposits to migrate to v3. 

## BAL Borrow Cap

![](https://i.imgur.com/CzJMapl.png)

The BAL Borrow Cap utilisation has been edging higher in recent weeks and previous Supply Cap adjustment proposals did not adjust the Borrow Cap. 

This publication will increase the Borrow Cap modestly by an additional 13.2%, or 33.86k units, from 256,140 to 290,000 units. The Supply Cap is to remain unchanged as there is sufficient capacity in Aave v3 to enable migration of user funds from v2 to v3 on Polygon. Separately, an AIP has been submitted to add BAL to Aave v3 on Ethereum. 

# Specification

The following risk parameters are being presented by Llama:

Ticker: wMATIC

Contract: [`0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`](https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|Supply Cap|47M units| 66M units|

Ticker: BAL

Token Contract: [`0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3`](https://polygonscan.com/address/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3)

|Parameter|Current Value |Proposed Value|
| --- | --- | --- |
| Borrow Cap | 256,140 |290,000|

# Implementation

A list of relevant links like for this proposal:

* [wMATIC Supply Cap Governance Forum Discussion](https://governance.aave.com/t/arfc-wmatic-supply-cap-increase/12046)
* [BAL Borrow Cap Governance Forum Discussion](https://governance.aave.com/t/arfc-polygon-v3-bal-supply-borrow-cap-increase/12505/3)
* [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230328/AaveV3PolCapsUpdates_20230328Test.t.sol)
* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230328/AaveV3PolCapsUpdates_20230328.sol)
* [Deployed Contracts](https://polygonscan.com/address/0x47938b58f104b4e06a5572faa9cb3c3cd53f15a4)

Chaos Labs and Gauntlet are both supportive of the risk parameters presented above. 

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
