---
aip: 3
title: V1 upgrades for seamless transition to AAVE v2 
status: Implemented
author: Marc Zeller (@marczeller)
discussions: https://governance.aave.com/t/aip-3-upgrade-aave-v1-lendingpool-contract-for-seamless-migration-to-v2/1383
created: 2020-11-11
updated: 2020-11-11
---

## AIP rationale

At the time of writing, 14,732,165 aLEND are deposited in the Aave protocol reserve, several community members currently use these assets as collateral in loans and would like to migrate both from LEND to AAVE and from V1 to V2 in the future.
Outside of the situation of the aLEND holders, having a Flashloan-powered migration tool usable for every asset available on V1 to allow seamless migration from v1 to v2 would significantly ease the process of upgrading the liquidity to the new version of AAVE.

To allow these new features, small modifications of the `repay()` method are needed to upgrade the efficiency of the process and allow v2 flashloans to access it.

## AIP content in short

- upgrade of `lendingPool` v1 smart-contract `repay()` method
  
  This AIP expected effect will be the increase of migrated LEND and faster & easier transition to Aave V2 of V1 liquidity of all assets alongside an increased volume of Flashloans.


## Implementation details

- Upgrade of the LendingPool contract https://etherscan.io/address/0x017788dded30fdd859d295b90d4e41a19393f423#code
- Modify the repay() function as follows:
On LendingPool.sol, line 617, replace `onBehalfOf` with `msg.sender`

The upgrade having a minimum impact on v1 and is particularly simple on the technical side, for this reason, internal review by the Aave genesis team has been considered sufficient to validate it.
this upgrade details can be found in the Aave public github repo :
- modification code : https://github.com/aave/aave-protocol/pull/28/
  
## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
