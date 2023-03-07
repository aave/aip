---
title: stMATIC SupplyCap Increase Polygon v3
discussions: https://governance.aave.com/t/arfc-increase-stmatic-supply-cap/12038
shortDescription: Increase SupplyCap stMATIC on Polygon v3 from 7.5M units to 15M units. 
author: Llama
created: 2023-03-06
---

# Summary

Llama proposes increasing the stMATIC Supply Cap on Polygon to facilitate an expansion of the stMATIC/wMATIC loop strategy. 

# Abstract

The utilisation of the stMATIC reserve has reached 100% and this proposal seeks to increase the SupplyCap to 15M units up from 7.5M units.  

Increasing the SupplyCap will enable users to deposit stMATIC and enter the recursive stMATIC/wMATIC yield strategy.  

Lido DAO currently has the ability to distribute LDO rewards on the Polygon v3 deployment. Due to the stMATIC SupplyCap being reached there is little to no incentive for Lido DAO to distribute LDO rewards. This proposal seeks to encourage Lido DAO to distribute LDO rewards, as early as March on the Aave v3 Polygon liquidity pools.

# Motivation

Over the previous months, Llama has been working with various communities to craft favourable conditions on Aave v3 Polygon to facilitate the creation of several yield aggregation products. The below proposals details are applicable to stMATIC:

* [Proposal: Add Support for stMATIC (Lido)](https://governance.aave.com/t/proposal-add-support-for-stmatic-lido/7677)
* [ARFC Aave v3 Polygon wMATIC Interest Rate Update](https://governance.aave.com/t/arfc-aave-v3-polygon-wmatic-interest-rate-update/10290)
* [ARFC LDO Emission_Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arfc-ldo-emission-admin-for-polygon-v3-liquidity-pool/10575)
* [ARFC stMATIC & MaticX Emission_Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arfc-stmatic-maticx-emission-admin-for-polygon-v3-liquidity-pool/10632)

This proposal is a continuation of the above work.

Analysis performed by [Gauntlet](https://governance.aave.com/t/gauntlet-methodologies-borrow-and-supply-cap/11487) generated a conservative and aggressive SupplyCap ceiling of 16.17M and 24.26M units respectively.  

Chaos Lab's supports increasing the SupplyCap to 15M units. This follows the general rule of thumb that SupplyCap should not be more than doubled in any single proposal.

As Chaos Lab's recommendation is less than the maximum conservative SupplyCap presented by Gauntlet's methodology, Llama proposes increasing the SupplyCap to 15M SupplyCap.

With reference to the new [ARFC Aave V3 Caps update Framework](https://governance.aave.com/t/arfc-aave-v3-caps-update-framework/11937/1) it is possible to ship several upgrades to gradually increasing Aave's exposure to stMATIC over time.

# Specification

The following risk parameters being proposed have been reviewed by Gauntlet and Chaos Labs.

Ticker: stMATIC

Contract: [`polygon: 0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4`](https://polygonscan.com/address/0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|SupplyCap|7.5M units|15M units|

# Implementation

A list of relevant links like for this proposal:

* [Governance Forum Discussion](https://governance.aave.com/t/arfc-increase-stmatic-supply-cap/12038)
* [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/AaveV3PolSTMATICCapUpdatePayloadTest.t.sol)
* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/AaveV3PolSTMATICCapUpdatePayload.sol)
* [Deployed Contracts](https://polygonscan.com/address/0xaa7ef2f9b31fa26e802ca9b3e33990ada4143fb9#code)

Chaos Labs and Gauntlet both contributed to the development of the ARFC forum post. 

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


