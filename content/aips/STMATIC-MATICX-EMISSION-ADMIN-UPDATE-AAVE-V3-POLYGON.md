---
title: Set stMATIC & MaticX Emission_Admin for Polygon v3 Liquidity Pool
author: llamaxyz - Matthew Graham & defijesus
discussion: https://governance.aave.com/t/arc-stmatic-maticx-emission-admin-for-polygon-v3-liquidity-pool/10632
shortDescription: Enable Polygon Foundation to distribute stMATIC & MaticX rewards across the Polygon v3 Liqudity Pool
created: 2022-11-30
---

# Summary

Assign the Emission_Admin role for the stMATIC and MaticX token on the Polygon v3 deployment to a Gnosis Safe controlled by Polygon Foundation. 

# Abstract

The Polygon Foundation team intends to distribute stMATIC and MaticX incentives across the Polygon v3 Liqudity Pools to support the adoption of staked MATIC receipt tokens.

In order to achieve this, the EmissionManager contract needs to assign an owner to the Emission_Admin permission allowing stMATIC and MaticX rewards to be distributed

# Motivation

The motivation of the proposal is to enable stMATIC and MaticX rewards to be distributed on the Polygon v3 Liquidity Pool.

The Polygon Foundation team will determine the emission rate and duration at which stMATIC and MaticX rewards are offered. This will likely be influenced by the Aave DAO’s ability to adjust the wMATIC, stMATIC and MaticX risk parameters that enable users to generate a return from leverage the stMATIC / wMATIC and MaticX/wMATIC loop.

The Emission_Admin is not limited to a specified Reserve and is linked to the token being distributed across the Liquidity Pool. The EmissionManager determines the stMATIC and MaticX Emission_Admin and not the stMATIC or MaticX Reserve. The Emission_Admin can distribute stMATIC and MaticX anywhere across the Aave v3 Polygon Liquidity Pool.

# Specification

This proposal assigns the Emission_Admin permission for stMATIC and MaticX rewards to the following address which is controlled by Polygon Foundation.

Emission Admin: `matic:0x0c54a0BCCF5079478a144dBae1AFcb4FEdf7b263`

# Implementation

setEmissionAdmin(address reward, address admin)

Address Reward: `matic:0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4` (stMATIC)
Address Reward: `matic:0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6` (MaticX)
Address Admin: `matic:0x0c54a0BCCF5079478a144dBae1AFcb4FEdf7b263`

Test cases can be found [here](https://github.com/defijesus/stMATIC-update-emissions-admin-aave-v3/blob/main/tests/ChangeStmaticEmissionAdmin.t.sol)

Payload Implementation can be found [here](https://github.com/defijesus/stMATIC-update-emissions-admin-aave-v3/blob/main/src/contracts/ChangeStmaticEmissionAdminPayload.sol)

Proposal Payload = [0x4A6F570E2eAf30b0E0C3E61c030DBcdcfbE94692](https://polygonscan.com/address/0x4A6F570E2eAf30b0E0C3E61c030DBcdcfbE94692)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).