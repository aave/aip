---
aip: 2
title: Bootstrap of the AAVE Governance reserve
status: Implemented
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
  
  1. Remove the assets conversion to LEND and subsequent burning
  2. The assets are moved to the AAVE Collector contract, under direct control of the AAVE governance (https://etherscan.io/address/0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c)

- The implementation will keep the current redistribution of the referral fees (20% of the total) to continue with the referral distribution as until now.

## Implementation details

- Upgrade of the TokenDistributor contract https://etherscan.io/address/0xe3d9988f676457123c5fd01297605efdd0cba1ae 
- Modify the distribute() function as follows:

  1. Remove LEND burning
  2. Move the assets to 0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c

Distribution to the current referral fees wallet will be kept.
  
## Proposal data

AIP2 Payload:

https://etherscan.io/address/0x4b7c3e3ea48f80a78487067cd08b9a8430eb8eb5

New TokenDistributor Implementation:

https://etherscan.io/address/0x62C936a16905AfC49B589a41d033eE222A2325Ad

Aave Collector contract:

https://etherscan.io/address/0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
