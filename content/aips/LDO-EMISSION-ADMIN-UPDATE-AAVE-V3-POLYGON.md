---
title: Set LDO Emission_Admin for Polygon v3 Liquidity Pool
author: Llama - Matthew Graham & defijesus
discussion: https://governance.aave.com/t/arc-ldo-emission-admin-for-polygon-v3-liquidity-pool/10575
shortDescription: Enable Lido Commununity to distribute LDO rewards across the Polygon v3 Liqudity Pool
created: 2022-11-30
---

# Summary

Assign the Emission_Admin role for the LDO token on the Polygon v3 deployment to the Lido Community Liquidity Mining Committee. 

# Abstract

The Lido Liquidity Mining Committee seeks to distribute LDO rewards across the Polygon v3 Liqudity Pools to support the adoption of stMATIC.

In order to achieve this, the EmissionManager contract needs to assign an owner to the Emission_Admin permission allowing LDO rewards to be distributed.

# Motivation

The motivation of the proposal is to enable LDO rewards to be distributed on the Polygon v3 Liquidity Pool.

The Lido Liquidity Mining Committee determines the emission rate and duration at which LDO rewards are offered. Standard practice is for the council to meet and determine the next 30 days of LDO rewards on a rolling basis. This means each month, the committee will determine if to extend the LDO rewards, or change the amount of LDO being offered across the Polygon v3 Liquidity Pool.

The Emission_Admin is not limited to a specified Reserve and is linked to the token being distributed across the Liquidity Pool. The EmissionManager determines the LDO Emission_Admin and not the stMATIC Reserve. The Emission_Admin can distribute LDO anywhere across the Aave v3 Polygon Liquidity Pool.

# Specification

This proposal assigns the Emission_Admin permission for LDO rewards to the following address which is controlled by the Lido Community.

Emission Admin: `matic:0x87D93d9B2C672bf9c9642d853a8682546a5012B5`. 

# Implementation

setEmissionAdmin(address reward, address admin)

Address Reward: `matic:0xC3C7d422809852031b44ab29EEC9F1EfF2A58756`
Address Admin: `matic:0x87D93d9B2C672bf9c9642d853a8682546a5012B5`

Test cases can be found [here](https://github.com/defijesus/LDO-update-emissions-admin-aave-v3/blob/main/tests/ChangeLdoEmissionAdmin.t.sol)

Payload Implementation can be found [here](https://github.com/defijesus/LDO-update-emissions-admin-aave-v3/blob/main/src/contracts/ChangeLdoEmissionAdminPayload.sol)

Proposal Payload = [0xF08e4772754b59A036a520e24e2af2095f5CAFbb](https://polygonscan.com/address/0xF08e4772754b59A036a520e24e2af2095f5CAFbb)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).