---
title: Add DeFi Saver to Aave V3 FlashBorrowers
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Add DFS to Aave V3 FlashBorrowers
discussions: https://governance.aave.com/t/arfc-add-defi-saver-to-flashborrowers-on-aave-v3/12410
created: 2023-04-04
---

## Simple Summary
This proposal presents Aave governance with the opportunity to whitelist DeFi Saver as part of FlashBorrowers of Aave V3 on Ethereum, Arbitrum & Optimism liquidity pools.

## Motivation
DeFi Saver has a long-standing history of synergies with the Aave Protocol, being one of the first third-party integrations of Aave V1 in 2020.

Currently, every flashloan has a 9 bps fee that rewards liquidity providers in Aave. While flashloans were created by Aave, the ecosystem as a whole has replicated this feature, and most protocols do not implement any fees.

The ACI does not support waiving the fees for flashloans in general, as we firmly believe that users’ funds used, even in the context of a single transaction, should be rewarded.

However, some strategic use cases of V3, such as emode, are very fee-sensitive as they mobilize high leverage. Waiving the DeFi Saver flashloan fees is expected to make these strategies more convenient and profitable, leading to increased borrow volume and thus increased Aave DAO revenue.

This proposal presents Aave governance with the opportunity to whitelist DeFi Saver as a part of FlashBorrowers of Aave V3 on Ethereum, Arbitrum & Optimism liquidity pools.

## Specification

This AIP aims to implement three similar payloads (one for each network), which will simply call addFlashBorrower() on the ACL_MANAGER contract.

Here's one of these payloads for Ethereum:

```solidity

contract AaveV3EthDFSFlashBorrowActivation is IProposalGenericExecutor {
  address public constant FL_AAVE_V3 = 0xd9D8e68717Ce24CCbf162868aaad7E38d81b05d1;
  address public constant FL_ACTION = 0x72915D41982DfCAf30b871290618E59C45Edba7F;

  function execute() external {
    AaveV3Ethereum.ACL_MANAGER.addFlashBorrower(FL_AAVE_V3);
    AaveV3Ethereum.ACL_MANAGER.addFlashBorrower(FL_ACTION);
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-add-defi-saver-to-flashborrowers-on-aave-v3/12410)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3DFSFlashBorrow_20230403/AaveV3ETHDFSFlashBorrowActivation_20230403_test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3DFSFlashBorrow_20230403/AaveV3ETHDFSFlashBorrowActivation_20230403.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
