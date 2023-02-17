---
title: LDO - Reward Controller Access Request
shortDescription: Assign Emission_Admin role for LDO  to Lido DAO for the Ethereum, Arbitrum and Optimism v3 Liquidity Pools
discussion: https://governance.aave.com/t/arfc-ldo-emission-admin-for-ethereum-arbitrum-and-optimism-v3-liquidity-pools/11478
author: Llama, DeFi_Consulting, defijesus & efecarranza
created: 2023-02-16
---


# Simple Summary

This proposal is to enable Lido to distribute LDO rewards across the Aave v3 Ethereum, Arbitrum and Optimism Liquidity Pools. The `Emission_Admin` role for LDO on each network is to be assigned to a wallet controlled by the Lido DAO.

# Abstract

Lido seeks to distribute LDO rewards across to the various Aave v3 deployments. To achieve this, the `EmissionManager` function assigns an owner to the `Emission_Admin` role for LDO on each respective Aave v3 deployment, [1,2].

The wallet with `Emission Admin` permission for LDO on each aave v3 deployment then controls the distribution of only LDO rewards across the respective Liquidity Pool.

# Motivation

Enable Lido DAO to distribute LDO rewards across the Ethereum, Arbitrum and Optimism v3 Liquidity Pools.

The Lido Liquidity Mining Committee (LMC) determines the emission rate and duration at which LDO  rewards are offered.

Typically, the LMC meets and determines the next 30 days of LDO rewards on a rolling basis. This means each month, the committee will determine if to extend the LDO rewards, or change the amount of LDO being offered across the various Aave v3 Liquidity Pools.

# Specification

The `EmissionManager`, a governance controlled contract, assigns the `Emission_Admin` role for a specified token, LDO on each respective network. 

The `Emission_Admin` role controls the distribution of the specified token, LDO, across the specified Aave deployment.

The `Emission_Admin` can distribute LDO anywhere across the Aave v3 Ethereum, Arbitrum and Optimism Liquidity Pool.

# Implementation


Set `Emission_Admin` permission for LDO to the following Lido address: 

**Aave v3 Ethereum**
- LDO Address Reward: [0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32](https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32)
- LDO Address Admin: [0x87D93d9B2C672bf9c9642d853a8682546a5012B5](https://etherscan.io/address/0x87D93d9B2C672bf9c9642d853a8682546a5012B5)

**Aave v3 Arbitrum**
- LDO Address Reward: [0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60](https://arbiscan.io/address/0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60)
- LDO Address Admin: [0x8C2b8595eA1b627427EFE4f29A64b145DF439d16](https://arbiscan.io/address/0x8C2b8595eA1b627427EFE4f29A64b145DF439d16)

**Aave v3 Optimism**
- LDO Address Reward: [0xFdb794692724153d1488CcdBE0C56c252596735F](https://optimistic.etherscan.io/address/0xFdb794692724153d1488CcdBE0C56c252596735F)
- LDO Address Admin: [0x5033823F27c5f977707B58F0351adcD732C955Dd](https://optimistic.etherscan.io/address/0x5033823F27c5f977707B58F0351adcD732C955Dd)

**Test Cases**

Arbitrum test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/arbitrum/AaveV3ArbLDOEmissionAdminPayloadTest.t.sol).

Mainnet test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV3EthLDOEmissionAdminPayloadTest.t.sol).

Optimism test cases can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/optimism/AaveV3OptLDOEmissionAdminPayloadTest.t.sol).

**Payload Implementations**

Arbitrum Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/arbitrum/AaveV3ArbLDOEmissionAdminPayload.sol).

Mainnet Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV3EthLDOEmissionAdminPayload.sol).

Optimism Payload Implementation can be found [here](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/optimism/AaveV3OptLDOEmissionAdminPayload.sol).

**Deployed Payloads**

Arbitrum Proposal Payload deployed address can be found [here](https://arbiscan.io/address/0x2cbf7856f51660aae066afababf9c854fa6bd11f).

Mainnet Proposal Payload deployed address can be found [here](https://etherscan.io/address/0x26366920975b24a89cd991a495d0d70cb8e1ba1f).

Optimism Proposal Payload deployed address can be found [here](https://optimistic.etherscan.io/address/0x2cbf7856f51660aae066afababf9c854fa6bd11f).

# Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Governance Considerations

Aave [governance forum discussion](https://governance.aave.com/t/arfc-ldo-emission-admin-for-ethereum-arbitrum-and-optimism-v3-liquidity-pools/11478) and [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0xc28c45bf26a5ada3d891a5dbed7f76d1ff0444b9bc06d191a6ada99a658abe28).

# References

1. https://docs.aave.com/developers/guides/governance-guide/rewards#create-proposal
2. https://github.com/aave/aave-v3-periphery/blob/master/contracts/rewards/interfaces/IEmissionManager.sol
3. https://creativecommons.org/publicdomain/zero/1.0/

# Copyright

Copyright and related rights waived via CC0, [3].
