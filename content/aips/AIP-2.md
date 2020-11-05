---
aip: 2
title: Bootstrap of the AAVE Governance reserve
status: WIP
author: Emilio Frangella (@The3D_)
discussions: https://governance.aave.com/t/proposal-to-stop-the-lend-burning-and-start-building-an-aave-governance-treasury/1012
created: 2020-11-05
updated: 2020-11-05
---

## AIP rationale

The Aave protocol V1 included the possibility to burn LEND tokens by collecting flashloan premiums and borrowing fees. Up until now, 2.5M LEND have been burned, which will not be converted to AAVE.
As a result of the migration, the LEND liquidity has shrunk considerably, which makes it very hard to buy LEND on dexes for the burning.

The LEND burner currently holds around 20K of funds, distributed across all the different Aave V1 reserves (mostly stablecoins). The burner contract is here https://etherscan.io/address/0xe3d9988f676457123c5fd01297605efdd0cba1ae 

This AIP proposes to stop the LEND burning. Instead, the idea is to collect the value accrued by AAVE V1 to bootstrap a protocol treasury. 

## AIP content in short

- Deprecation of the current TokenDistributor contract
- Implementation of the following strategy instead of burning:
  
  1. All the non stablecoins assets are converted to USDC using uniswap, except AAVE and ETH.
  2. After the conversion, all the assets are deposited in the protocol to obtain aTokens.
  3. The aTokens obtained this way are moved to the AAVE Reserve contract, under direct control of the AAVE governance (0x25f2226b597e8f9514b3f68f00f494cf4f286491)

- The implementation will keep the current redistribution of the referral fees (20% of the total) to continue with the referral distribution as until now.

## Implementation details

- Upgrade of the TokenDistributor contract https://etherscan.io/address/0xe3d9988f676457123c5fd01297605efdd0cba1ae 
- Modify the distribute() function as follows:

  1. Instead of selling the target asset for LEND, sell for USDC if the asset is a non stablecoin. Nothing is done if an asset is a stablecoin.
  2. Deposit the asset in the protocol.
  3. Move the obtained aTokens to 0x25f2226b597e8f9514b3f68f00f494cf4f286491
  
  
## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
