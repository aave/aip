---
title: Increase SupplyCap stMATIC Polygon & wETH Arbitrum
discussions: https://governance.aave.com/t/arfc-stmatic-supply-cap-increase-polygon-v3/12606
shortDescription: Increase SupplyCap stMATIC on Polygon v3 from 21.0M units to 25M units. Increase wETH Supply Cap on Arbitrum from 35,280 to 45,000 units.
author: Llama - TokenLogic
created: 2023-04-17
---

# Summary

This AIP increasing the stMATIC Supply Cap on Polygon from 21.0M to 25.0M units and the wETH Supply Cap on Arbitrum from 35,280 to 45,000 units. 

# Abstract

This AIP implements risk parameter changes to stMATIC Polgyon v3 adn wETH on Arbitrum v3.

The utilisation of the stMATIC reserve has reached 77.92% and this AIP will increase the SupplyCap by a further 19% to 25M units.

Utilisation of wETH Supply Cap on Arbitrum has reached 93.54% and this AIP will increase the Supply Cap from 35,280 to 45,000 units.

# Motivation

Over the previous months, Llama has been working with various communities to craft favourable conditions on Aave v3 Polygon to facilitate the creation of several yield aggregation products. This has led to increase stMATIC deposits and the continual revision of Supply Caps enabling users to enter the yield maximising strategy.

This AIP is a continuation of LLama's efforts and presents the community the opportunity to enable stMATIC deposits to grow on Polygon v3.

![](https://i.imgur.com/3DIda6Q.png)

Previously an AIP was submitted to increase the wETH Supply Cap on Arbitrum and although being approved, the upgrade was not executed. This AIP includes the Arbitum wETH Supply Cap upgrade in collaboration with Gauntlet.

![](https://i.imgur.com/Dc5GCQK.png)

The wETH Supply Cap is to be increased from 35,280 to 45,000 units on Arbitrum with no other changes being made.

# Specification

The following risk parameters changes are presented:

**Polygon** 

Ticker: stMATIC

Contract: [`0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4`](https://polygonscan.com/address/0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|SupplyCap|21,000,000M units|25,000,000 units|

**Arbitrum**

Ticker: wETH

Contract: [`0x82aF49447D8a07e3bd95BD0d56f35241523fBab1`](https://arbiscan.io/token/0x82af49447d8a07e3bd95bd0d56f35241523fbab1)

|Parameter|Current Value|Proposed Value|
| --- | --- | --- |
|SupplyCap|35,280 units|45,000 units|

# Implementation

A list of relevant links like for this proposal:

* [stMATIC Governance Forum Discussion](https://governance.aave.com/t/arfc-stmatic-supply-cap-increase-polygon-v3/12606)
* [wETH Governance Forum Discussion](https://governance.aave.com/t/arc-gauntlet-recommendations-for-aave-link-and-weth-on-v3-arbitrum-2023-03-21/12394)
* [stMatic Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230418/AaveV3PolCapsUpdates_20230418_PayloadTest.t.sol)
* [stMatic Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230418/AaveV3PolCapsUpdates_20230418_Payload.sol)
* [wETH Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdate_20230327/AaveV3MultiCapsUpdate_20230327_Test.t.sol)
* [wETH Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdate_20230327/AaveV3ArbCapsUpdate_20230327.sol)

Risk Service providers have endorsed the contents of this proposal. 

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


