---
title: Ethereum v2 Reserve Factor - aFEI Holding Update
status: Proposed
author: Llama, Matthew Graham, defijesus
shortDescription: Redeem aFEI for DAI
discussions: https://governance.aave.com/t/arc-ethereum-v2-reserve-factor-afei-holding-update/9401
created: 2022-09-28
---

# Simple Summary

This proposal proposes unwinding the aFEI holding for DAI and depositing the DAI into the Aave v2 Ethereum Pool DAI Reserve.

# Abstract

Due to recent events within the Tribe DAO community, this proposal will over time redeem all aFEI in the Ethereum Reserve Factor for FEI. The FEI holding will then be redeemed for DAI via Tribe DAO’s newly deployed SimpleFeiDaiPSM and deposited into the Aave v2 Ethereum DAI Reserve to earn yield, [1].

This will reduce Aave’s exposure to FEI. 

# Motivation

The FEI reserve is concentrated with Aave DAO holding 94.3% of all aFEI supply, [2]. 

The reserve currently supports 662,518.93 units of aFEI, with 582,449.43 units of debt and 80,069.50 units available for lenders to redeem their collateral from or for Users to borrow, [3,4]. Any User seeking to claim 80,069.50 units or less is able to do so now, but this may change as others start redeeming aFEI. 

Limited FEI liquidity remains in the Reserve. Aave DAO is dependent on Borrowers repaying their debt which provides the liquidity needed for Aave to redeem the aFEI position.

Once the aFEI has been redeemed for FEI, it is to be redeemed for DAI via Tribe DAO’s SimpleFeiDaiPSM. There is no redeem fee and all FEI is to be redeemed for DAI via this contract.

The SimpleFeiDaiPSM is supported by Tribe DAO as means of removing FEI from circulation, [4]. The SimpleFeiDaiPSM has around $57,4M of liquidity at the time of writing, [1].

# Specification

The below provides a broad, high level summary of how the aFEI position held within the Reserve Factor will be managed. 

Any EOA can call the swapAllAvailable function from the Swapper contract.
The function will redeem the maximum amount of aFEI based upon available liquidity within the FEI Reserve and the Aave Mainnet Reserve Factor.
All FEI is to be redeemed for DAI via the Tribe DAO’s SimpleFeiDaiPSM.
DAI will be deposited in the Aave v2 Ethereum DAI Reserve.
Aave v2 Ethereum Reserve Factor will receive the aDAI

# Test Cases

This proposal has been tested and peer reviewed by Bored Ghost Developing, [5].

Test cases can be found at [6]

Payload and Swapper can be found at [7] & [8] respectively.

## Implementation

The governance payload is deployed at [9], the swapper contract is deployed at [10]. 

The proposal transfers aFEI from the Aave Mainnet Reserve Factor (0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) to the payload contract via the Aave Ecosystem Controller (0x3d569673dAa0575c936c7c67c4E6AedA69CC630C) transfer function.

The proposal redeems aFEI for FEI via the Lending Pool (0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9).

The proposal redeems all available FEI for DAI via the Tribe DAO Fixed Price PSM (0x2A188F9EB761F70ECEa083bA6c2A40145078dfc2) sending all DAI directly to the Aave Mainnet Reserve Factor (0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c).

# References

1. https://etherscan.io/address/0x7842186cdd11270c4af8c0a99a5e0589c7f249ce#code
2. https://etherscan.io/token/0x683923db55fead99a79fa01a27eec3cb19679cc3#balances
2. https://etherscan.io/token/0x683923db55fead99a79fa01a27eec3cb19679cc3
3. https://etherscan.io/address/0x683923db55fead99a79fa01a27eec3cb19679cc3
4. https://tribe.fei.money/t/tip-121-proposal-for-the-future-of-the-tribe-dao/4475
5. https://twitter.com/bgdlabs
6. https://github.com/llama-community/aave-redeem-fei/blob/main/src/test/ValidateRedeemFei.sol 
7. https://github.com/llama-community/aave-redeem-fei/blob/main/src/RedeemFei.sol
8. https://github.com/llama-community/aave-redeem-fei/blob/main/src/AFeiToDaiSwapper.sol
9. https://etherscan.io/address/0x8dfd2255a9d38c182a14f49afcb8a4a4763c6098#code
10. https://etherscan.io/address/0x9a953ac1090c7014d00fd205d89c6ba1c219af8b#code

# Copyright

Copyright and related rights waived via CC0.
