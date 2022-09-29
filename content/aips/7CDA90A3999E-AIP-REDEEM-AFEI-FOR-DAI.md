---
title: Ethereum v2 Reserve Factor - aFEI Holding Update
status: Proposed
author: Llama, Matthew Graham, defijesus
shortDescription: Redeem aFEI for aDAI
discussions: https://governance.aave.com/t/arc-ethereum-v2-reserve-factor-afei-holding-update/9401
created: 2022-09-28
---

# Simple Summary

This proposal proposes unwinding the aFEI holding for DAI and depositing the DAI into the Aave v2 Ethereum Pool DAI Reserve.

# Abstract

Due to recent events within the Tribe DAO community, the FEI stablecoin is being removed from circulation. This proposal details how Aave DAO will enable anyone with an EOA to convert the DAO’s aFEI holding to an aDAI holding. 

Based upon available FEI liquidity in the FEI Reserve, Aave DAO’s aFEI will be redeemed for FEI, swapped for DAI, and then deposited into the DAI Reserve on Ethereum. The Reserve Factor will transition from holding aFEI to aDAI over time.  

# Motivation

Aave DAO is currently holding 94.3% (624,866.75 units) of aFEI supply while there are only 80,069.50 units of FEI in the FEI Reserve available for redeeming aFEI to FEI, [2]. 

The Reserve currently supports 662,518.93 units of aFEI, with 582,449.43 units of debt and 80,069.50 units available for lenders to redeem their collateral from or for users to borrow, [3,4]. Any user seeking to claim 80,069.50 units or less is able to do so now, but this may change as others start redeeming aFEI. 

Migrating Aave’s aFEI holding in the Reserve Factor to aDAI can not be performed in a single transaction and therefore must occur gradually over time as FEI liquidity becomes available.

# Specification

The below provides a broad, high level summary of how any EOA calling the `swapAllAvailable` function from the Swapper contract will convert aFEI to aDAI. 

The contract determines the maximum amount of aFEI to be redeemed by assessing the amount of aFEI held in the Reserve Factor and the amount FEI in the FEI Reserve. The lower of the two amounts will be used to redeem aFEI to FEI.

All FEI held within the Reserve Factor will then be swapped for DAI via Tribe DAO’s SimpleFeiDaiPSM. There are no fees, the exchange rate is fixed at 1:1 (Example: unwrapping wETH to ETH), and there is around $57.4 Million of liquidity at the time of writing, [1]. 

DAI is then deposited into the DAI Reserve and the Ethereum Reserve Factor will receive aDAI.

# Test Cases

This proposal has been tested and peer reviewed by Bored Ghost Developing, [5].

Test cases, payload, and Swapper can be found at reference [6], [7] & [8] respectively.

## Implementation

The governance payload is deployed at [9], the Swapper contract is deployed at [10].

The payload gives the Swapper aFEI max allowance from the Aave Ethereum Reserve Factor and calls the `swapAllAvailable` function on the Swapper.

When called, Swapper transfers all possible aFEI from the Aave Ethereum Reserve Factor ([0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c)) to the payload contract via the Aave Ecosystem Controller ([0x3d569673dAa0575c936c7c67c4E6AedA69CC630C](https://etherscan.io/address/0x3d569673dAa0575c936c7c67c4E6AedA69CC630C)) transfer function.

The proposal redeems aFEI for FEI via the FEI Reserve ([0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9](https://etherscan.io/address/0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9)).

The proposal redeems all available FEI for DAI via the Tribe DAO Fixed Price PSM ([0x2A188F9EB761F70ECEa083bA6c2A40145078dfc2](https://etherscan.io/address/0x2A188F9EB761F70ECEa083bA6c2A40145078dfc2)), depositing all DAI in the Aave V2 Ethereum DAI Reserve with the Aave Ethereum Reserve Factor ([0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c)) as the beneficiary.

# References

1. [https://etherscan.io/address/0x7842186cdd11270c4af8c0a99a5e0589c7f249ce#code](https://etherscan.io/address/0x7842186cdd11270c4af8c0a99a5e0589c7f249ce#code)
2. [https://etherscan.io/token/0x683923db55fead99a79fa01a27eec3cb19679cc3#balances](https://etherscan.io/token/0x683923db55fead99a79fa01a27eec3cb19679cc3#balances)
3. [https://etherscan.io/address/0x683923db55fead99a79fa01a27eec3cb19679cc3](https://etherscan.io/address/0x683923db55fead99a79fa01a27eec3cb19679cc3)
4. [https://tribe.fei.money/t/tip-121-proposal-for-the-future-of-the-tribe-dao/4475](https://tribe.fei.money/t/tip-121-proposal-for-the-future-of-the-tribe-dao/4475)
5. [https://twitter.com/bgdlabs](https://twitter.com/bgdlabs)
6. [https://github.com/llama-community/aave-redeem-fei/blob/main/src/test/ValidateRedeemFei.sol](https://github.com/llama-community/aave-redeem-fei/blob/main/src/test/ValidateRedeemFei.sol)
7. [https://github.com/llama-community/aave-redeem-fei/blob/main/src/RedeemFei.sol](https://github.com/llama-community/aave-redeem-fei/blob/main/src/RedeemFei.sol)
8. [https://github.com/llama-community/aave-redeem-fei/blob/main/src/AFeiToDaiSwapper.sol](https://github.com/llama-community/aave-redeem-fei/blob/main/src/AFeiToDaiSwapper.sol)
9. [https://etherscan.io/address/0x8dfd2255a9d38c182a14f49afcb8a4a4763c6098#code](https://etherscan.io/address/0x8dfd2255a9d38c182a14f49afcb8a4a4763c6098#code)
10. [https://etherscan.io/address/0x9a953ac1090c7014d00fd205d89c6ba1c219af8b#code](https://etherscan.io/address/0x9a953ac1090c7014d00fd205d89c6ba1c219af8b#code)

# Copyright

Copyright and related rights waived via CC0.
