---
title: MaticX Supply Cap Increase Polygon v3
discussions: https://governance.aave.com/t/arfc-maticx-supplycap-increase-polygon-v3/12217
shortDescription: Increase Supply Cap MaticX on Polygon v3 from 8.6M units to 17.2M units. 
author: Llama
created: 2023-03-14
---

# Summary

This publication proposes increasing the MaticX Supply Cap on Polygon v3 from 8.6M units to 17.2M units.

# Abstract

The Supply Cap for MaticX was increased from 6.0M units to 8.6M units. Within 24 hours of the upgrade going through, the utilisation of the MaticX reserve has reached 99.25%.

This proposal seeks to increase the Supply Cap by 100% to 17.2M units. Increasing the Supply Cap will enable users to deposit MaticX, earn SD rewards and enter the recursive MaticX/wMATIC yield strategy. The 17.2M unit Supply Cap figure was prepared by Chaos Labs.  

Stader Labs is currently offering SD rewards to user who deposit MaticX. This proposal seeks to encourage Stader Labs to continue distributing SD rewards by increasing the Supply Cap and enabling more MaticX to be deposited into Aave. 

# Motivation

Over the previous months, Llama has been working with various communities to craft favourable conditions conducive to growing TVL and Revenue by facilitate the creation of several yield aggregation products. 

The below details various proposals reflecting Llama's efforts to date:

* [Proposal to add MaticX to Aave v3 Polygon Market](https://governance.aave.com/t/proposal-to-add-maticx-to-aave-v3-polygon-market/79950)
* [ARFC Aave v3 Polygon wMATIC Interest Rate Update](https://governance.aave.com/t/arfc-aave-v3-polygon-wmatic-interest-rate-update/10290)
* [ARFC SD Emission_Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arfc-sd-emission-admin-for-polygon-v3-liquidity-pool/10658)
* [ARFC stMATIC & MaticX Emission_Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arfc-stmatic-maticx-emission-admin-for-polygon-v3-liquidity-pool/10632)
* [ARFC MaticX Polygon v3 Upgrade](https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555)

After executing the [ARFC MaticX Polygon v3 Upgrade](https://governance.aave.com/t/arfc-maticx-polygon-v3-upgrade/11555) proposal, within 24hrs, the Supply Cap of 8.6M has nearly been reached.  

![](https://i.imgur.com/3xB9WkV.png)

In order to enable the MaticX reserve to grow, the Supply Cap needs to be raised enabling more deposits into the reserve. Furthermore, Stader labs has indicated there are several large MaticX holders seeking to deposit into the MaticX reserve once the SupplyCap has been raised.

With reference to the new [ARFC Aave V3 Caps update Framework](https://governance.aave.com/t/arfc-aave-v3-caps-update-framework/11937/1) the preferred path forward is to implement several upgrades to gradually increase Aave's MaticX exposure over time. 

This proposal will increase the Supply Cap from 8.6M units to  17.2M units. This figure was provided by Chaos Labs and has been discussed on the Aave Governance Forum. 

# Specification



Ticker: MaticX

Contract: [`polygon: 0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6`](https://polygonscan.com/token/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|SupplyCap|8.6M units|17.2M units|

# Implementation

A list of relevant links like for this proposal:

* [Governance Forum Discussion](https://governance.aave.com/t/arfc-maticx-supplycap-increase-polygon-v3/12217)
* [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/AaveV3PolMaticXSupplyCap03132023PayloadTest.t.sol)
* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/AaveV3PolMaticXSupplyCap03132023Payload.sol)
* [Deployed Contracts](https://polygonscan.com/address/0x6b5af634e20eaa5fc85f9943913aa46a088ac29e)

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


