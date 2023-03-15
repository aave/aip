---
title: OP Emission_Admin for Optimism v3 Liquidity Pool
author: Llama
discussions: https://governance.aave.com/t/arfc-grant-op-emission-admin-for-optimism-v3-liquidity-pool-to-lido-dao/11905
shortDescription: Enable Lido DAO to distribute OP rewards across the Aave v3 Optimism Liquidity Pool.
created: 2023-03-14
---

# Summary

This proposal is to enable Lido DAO to distribute OP rewards across the Aave v3 Optimism Liquidity Pool.

The `Emission_Admin` role for OP on Optimism is currently assigned to the Optimism team and is to be transferred to Lido DAO.

# Abstract

Lido DAO seeks to distribute OP rewards across to the Aave v3 Optimism deployment. To achieve this, the `EmissionManager` function reassigns an owner to the `Emission_Admin` role for OP.

The wallet with `Emission Admin` permission for OP then controls the distribution of OP and LDO rewards on the Optimism Liquidity Pool. This proposal will enable LDO and OP rewards to be distributed across the Optimism v3 deployment. 

# Motivation

Lido DAO has received a grant nominated in OP tokens that are to be used for bootstrapping the adoption of wstETH on the Optimism network. A portion of these rewards are to be distributed on the Aave v3 deployment. 

The Lido Liquidity Mining Committee (LMC) will be determining the emission rate and duration that OP rewards are offered on the Aave v3 deployment.

Typically, the LMC meets and determines the next 30 days rewards to be distributed on a rolling basis. This means each month, the committee will determine if to extend the OP rewards, or change the amount of OP being offered across the Aave v3 Liquidity Pools on Optimism.

# Specification

The `EmissionManager`, a governance controlled function, assigns the `Emission_Admin` role for a specified token, OP, on each respective network. 

The `Emission_Admin` role controls the distribution of the specified token, OP, across the specified Aave deployment.

The `Emission_Admin` can distribute OP anywhere across the Aave v3 on the Optimism Liquidity Pool.

Emission Admin: `0x5033823F27c5f977707B58F0351adcD732C955Dd`

# Implementation

setEmissionAdmin(address reward, address admin)

OP Address Reward: [0x4200000000000000000000000000000000000042](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000042)

OP Address Admin: [0x5033823F27c5f977707B58F0351adcD732C955Dd](https://optimistic.etherscan.io/address/0x5033823F27c5f977707B58F0351adcD732C955Dd)

The relevant links for this proposal are shown:

  * [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/optimism/AaveV3OptOPEmissionAdminPayloadTest.t.sol)
  * [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/optimism/AaveV3OptOPEmissionAdminPayload.sol)

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


