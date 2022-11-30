---
title: Set SD Emission_Admin for Polygon v3 Liquidity Pool
author: llamaxyz - Matthew Graham & defijesus
discussion: https://governance.aave.com/t/arc-sd-emission-admin-for-polygon-v3-liquidity-pool/10658
shortDescription: Enable Stader Labs to distribute SD rewards across the Polygon v3 Liqudity Pool
created: 2022-11-30
---

# Summary

Assign the Emission_Admin role for the SD token on the Polygon v3 deployment to a Gnosis Safe controlled by Stader Labs. 

# Abstract

The Stader Labs team intends to distribute SD incentives across the Polygon v3 Liqudity Pools to support the adoption of MaticX.

In order to achieve this, the EmissionManager contract needs to assign an owner to the Emission_Admin permission allowing SD rewards to be distributed

# Motivation

The motivation of the proposal is to enable SD rewards to be distributed on the Polygon v3 Liquidity Pool.

The Stader Labs team will determine the emission rate and duration SD rewards are offered. This will likely be influenced by the Aave DAO’s ability to adjust the wMATIC and MaticX risk parameters that enable users to generate a return from leverage the MaticX / wMATIC loop.

The Emission_Admin is not limited to a specified Reserve and is linked to the token being distributed across the Liquidity Pool. The EmissionManager role grants the SD Emission_Admin role to a specified wallet address. The Emission_Admin can distribute SD rewards across the Aave v3 Polygon Liquidity Pool.

# Specification

This proposal assigns the Emission_Admin permission for SD rewards to the following address which is controlled by Stader Labs.

Emission Admin: `matic:0x51358004cFe135E64453d7F6a0dC433CAba09A2a`

# Implementation

setEmissionAdmin(address reward, address admin)

Address Reward: `matic:0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94`
Address Admin: `matic:0x51358004cFe135E64453d7F6a0dC433CAba09A2a`

Test cases can be found [here](https://github.com/defijesus/SD-update-emissions-admin-aave-v3/blob/main/tests/ChangeSdEmissionAdmin.t.sol)

Payload Implementation can be found [here](https://github.com/defijesus/SD-update-emissions-admin-aave-v3/blob/main/src/contracts/ChangeSdEmissionAdminPayload.sol)

Proposal Payload = [0x0DcDA7E9e5c5Ecd43bf047eA39B9833C3f42BA11](https://polygonscan.com/address/0x0DcDA7E9e5c5Ecd43bf047eA39B9833C3f42BA11)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).