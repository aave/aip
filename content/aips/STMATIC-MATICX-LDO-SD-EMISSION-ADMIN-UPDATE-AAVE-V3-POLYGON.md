---
title: Set LDO, stMATIC, MaticX and SD Emission_Admin for Polygon v3 Liquidity Pool
author: Llamax - Matthew Graham & defijesus
discussion: https://governance.aave.com/t/arc-stmatic-maticx-emission-admin-for-polygon-v3-liquidity-pool/10632
shortDescription: Enable Lido Commununity, Stader Labs and Polygon Foundation to distribute rewards across the Polygon v3 Liquidity Pool
created: 2022-12-06
---

# Summary

Assign the Emission_Admin role for the LDO, stMATIC, MaticX and SD tokens on the Polygon v3 deployment.  

# Abstract

The following teams seek to distribute rewards across the Polygon v3 Liquidity Pool:

* LDO by the Liquidity Mining Committee to support the adoption of stMATIC
* SD by Stader Labs to support the adoption of MaticX
* stMATIC & MaticX by Polygon Foundation to adoption of staked MATIC receipt tokens 

In order to achieve this, the EmissionManager contract needs to assign an owner to the Emission_Admin permission allowing LDO, SD, stMATIC, and MaticX rewards to be distributed.

# Motivation

The motivation of the proposal is to enable rewards to be distributed on the Polygon v3 Liquidity Pool.

The Lido Liquidity Mining Committee determines the emission rate and duration at which LDO rewards are offered. Standard practice is for the council to meet and determine the next 30 days of LDO rewards on a rolling basis. This means each month, the committee will determine if to extend the LDO rewards, or change the amount of LDO being offered across the Polygon v3 Liquidity Pool.

The Stader Labs team will determine the emission rate and duration SD rewards are offered. This will likely be influenced by the Aave DAO’s ability to adjust the wMATIC and MaticX risk parameters that enable users to generate a return from leverage the MaticX / wMATIC loop.

The Polygon Foundation team will determine the emission rate and duration at which stMATIC and MaticX rewards are offered. This will likely be influenced by Aave DAO’s ability to adjust the wMATIC, stMATIC and MaticX risk parameters that enable users to generate a return from leverage the stMATIC / wMATIC and MaticX/wMATIC loop.

The Emission_Admin is not limited to a specified Reserve and is linked to the token being distributed across the Liquidity Pool. The EmissionManager determines the Emission_Admin. The Emission_Admin can distribute said token anywhere across the Aave v3 Polygon Liquidity Pool.

The respective governance forum discussion is linked below:

* [stMATIC & MaticX Emission Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arc-stmatic-maticx-emission-admin-for-polygon-v3-liquidity-pool/10632)
* [LDO Emission Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arc-ldo-emission-admin-for-polygon-v3-liquidity-pool/10575)
* [SD Emission Admin for Polygon v3 Liquidity Pool](https://governance.aave.com/t/arc-sd-emission-admin-for-polygon-v3-liquidity-pool/10658)

# Specification

This proposal assigns the Emission_Admin using the setEmissionAdmin(address reward, address admin) function.

LDO Address Reward: [matic:0xC3C7d422809852031b44ab29EEC9F1EfF2A58756](https://polygonscan.com/address/0xC3C7d422809852031b44ab29EEC9F1EfF2A58756)
LDO Address Admin: [matic:0x87D93d9B2C672bf9c9642d853a8682546a5012B5](https://polygonscan.com/address/0x87D93d9B2C672bf9c9642d853a8682546a5012B5)

SD Address Reward: [matic:0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94](https://polygonscan.com/address/0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94)
SD Address Admin: [matic:0x51358004cFe135E64453d7F6a0dC433CAba09A2a](https://polygonscan.com/address/0x51358004cFe135E64453d7F6a0dC433CAba09A2a)

stMATIC Address Reward: [matic:0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4](https://polygonscan.com/address/0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4)
stMATIC Address Admin: [matic:0x0c54a0BCCF5079478a144dBae1AFcb4FEdf7b263](https://polygonscan.com/address/0x0c54a0BCCF5079478a144dBae1AFcb4FEdf7b263)

MaticX Address Reward: [matic:0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6](https://polygonscan.com/address/0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6)
MaticX Address Admin: [matic:0x0c54a0BCCF5079478a144dBae1AFcb4FEdf7b263](https://polygonscan.com/address/0x0c54a0bccf5079478a144dbae1afcb4fedf7b263)

# References

Test cases can be found [here](https://github.com/defijesus/stMATIC-update-emissions-admin-aave-v3/blob/main/tests/ChangeEmissionAdminTest.sol)

Payload Implementation can be found [here](https://github.com/defijesus/stMATIC-update-emissions-admin-aave-v3/blob/main/src/contracts/ChangeEmissionAdminPayload.sol)

Proposal Payload = [0x7E8f833D23e19E88e3781Ca913d674a2D5178FA1](https://polygonscan.com/address/0x7E8f833D23e19E88e3781Ca913d674a2D5178FA1)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).