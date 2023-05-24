---
title: DeFi Saver Aave V3 FlashBorrowers Whitelist Part II
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: DeFi Saver Aave V3 FlashBorrowers Whitelist Part II
discussions: https://governance.aave.com/t/arfc-add-defi-saver-to-flashborrowers-on-aave-v3/12410
created: 2023-05-24
---

## Simple Summary
This proposal presents Aave governance with the opportunity to whitelist DeFi Saver as part of FlashBorrowers of Aave V3 on Optimism liquidity pool.

## Motivation
DeFi Saver has a long-standing history of synergies with the Aave Protocol, being one of the first third-party integrations of Aave V1 in 2020.

Currently, every flashloan has a 9 bps fee that rewards liquidity providers in Aave. While flashloans were created by Aave, the ecosystem as a whole has replicated this feature, and most protocols do not implement any fees.

The ACI does not support waiving the fees for flashloans in general, as we firmly believe that users’ funds used, even in the context of a single transaction, should be rewarded.

However, some strategic use cases of V3, such as emode, are very fee-sensitive as they mobilize high leverage. Waiving the DeFi Saver flashloan fees is expected to make these strategies more convenient and profitable, leading to increased borrow volume and thus increased Aave DAO revenue.

This proposal presents Aave governance with the opportunity to whitelist DeFi Saver as a part of FlashBorrowers of Aave V3 Optimism liquidity pool.

This AIP present Aave with the same code as [AIP-196](https://app.aave.com/governance/proposal/196/) but due to  a failed execution of the Optimism payload on the OP side of the cross-chain governance bridge, we are resubmitting it.
Code stays unchanged.

## Specification

This AIP aims to implement a single payload, which will simply call addFlashBorrower() on the ACL_MANAGER contract.

```solidity

contract AaveV3OptDFSFlashBorrowActivation is IProposalGenericExecutor {
  address public constant FL_AAVE_V3 = 0xfbcF23D2BeF8A2C491cfa4dD409D8dF12d431c85;
  address public constant FL_ACTION = 0xE668197A175E7A2143222a028470c6ABBBD183F6;

  function execute() external {
    AaveV3Optimism.ACL_MANAGER.addFlashBorrower(FL_AAVE_V3);
    AaveV3Optimism.ACL_MANAGER.addFlashBorrower(FL_ACTION);
  }
}
```

## References

A list of relevant links like for this proposal:

- [forum discussion](https://governance.aave.com/t/arfc-add-defi-saver-to-flashborrowers-on-aave-v3/12410)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3DFSFlashBorrow_20230403/AaveV3ETHDFSFlashBorrowActivation_20230403_test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3DFSFlashBorrow_20230524/AaveV3DFSFlashBorrow_20230524.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
