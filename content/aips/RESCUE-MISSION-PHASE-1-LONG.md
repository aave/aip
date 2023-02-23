---
title: Rescue Mission Phase 1 Long Executor
author: BGD Labs (@bgdlabs), proposer ACI (@aavechan)
shortDescription: Activation of Aave rescue mission Phase 1, Level 2 (Long) Executor part
discussions: https://governance.aave.com/t/bgd-rescue-of-tokens-locked-on-aave-overview-and-phase-1/8150/1
created: 2023-02-22
updated: 2023-02-23
---


## Simple Summary
Activation of Aave rescue mission Phase 1, Level 2 (Long) Executor part

## Motivation
Since the birth of the Aave ecosystem, multiple people have sent tokens by mistake to incorrect addresses.

In some cases, when the transfer is to another unknown wallet, the tokens are usually locked and lost forever, as it is factually impossible to prove that the transfer was a mistake.

But there are special cases, where the transfer happens to a well-known smart contract address of the ecosystem, for which is simple to understand that the action was really a mistake, as there is no rational reason to send tokens there.

In the case of Aave, the existence of upgradeable smart contracts across the ecosystem makes technically possible the recovery of such tokens sent by mistake. Consequently, given the requests from members of the community affected, we have come up with a plan to “rescue” those funds, providing the affected people a way to recover them.

This initial phase will affect the following:

- Users who sent[AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9), [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03), [USDT](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7) and [UNI](https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984) to the [AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9) token smart contract
- Users who sent [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03) to the [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03) smart contract
- User who sent [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03) to the [LendToAaveMigrator](https://etherscan.io/address/0x317625234562B1526Ea2FaC4030Ea499C5291de4) smart contract
- Users who sent [AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9) and [stkAAVE](https://etherscan.io/token/0x4da27a545c0c5b758a6ba100e3a049001de870f5) to the [stkAAVE](https://etherscan.io/token/0x4da27a545c0c5b758a6ba100e3a049001de870f5) contract

The LEND sent to the specified contracts will be claimed already as AAVE tokens with the transformation LEND to AAVE already taken into account (1 AAVE = 100 LEND)

## Specification

To rescue the tokens specified on Phase 1 that are on AAVE and stkAAVE token contracts, the payload will connect and initialize the new implementations for the AAVE token and the stkAAVE token with appropriate amounts and send them to the AaveMerkleDistributor specified on the Rescue Short Executor Proposal.
To be as less invasive as possible, these new implementations only include that extra logic on their `initialize()` function, with everything else remaining the same.
- AaveTokenV2: from this new implementations the following tokens will be rescued:
    - LEND: 19845132947543342156792 LEND in WEI (~19845,13 LEND).
    - AAVE: 28420317154904044370842 AAVE in WEI (~28420,32 AAVE).
    - UNI: 110947986090000000000 UNI in WEI (~110,95 UNI).
    - USDT: 15631946764 USDT in WEI (~15631,95 USDT).
- StakedTokenV2Rev4: from this new implementation the following tokens will be rescued:
    - AAVE: 768271398516378775101 AAVE in WEI (~768,27 AAVE).
    - stkAAVE: 107412975567454603565 stkAAVE in WEI (~107,41 stkAAVE).

## References

A list of relevant links like for this proposal:

- [forum discussion](https://governance.aave.com/t/bgd-rescue-of-tokens-locked-on-aave-overview-and-phase-1/8150/1)
- [tests](https://github.com/bgd-labs/rescue-mission-phase-1/tree/master/test) 
- Contracts:
  - [ProposalPayloadLong](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/src/contracts/ProposalPayloadLong.sol)
  - [AaveTokenV2 Implementation](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/src/contracts/AaveTokenV2.sol)
  - [StkAaveTokenV2Rev4 Implementation](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/src/contracts/StakedTokenV2Rev4.sol)

## Security Considerations

The contracts have been audited by Certora, and the report can be found [here](https://github.com/bgd-labs/rescue-mission-phase-1/tree/master/certora)

Implementation diffs have been generated to see that the new implementations only differ on the rescue logic:

- AaveTokenV2 [Diff](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/diffs/AaveTokenV2-diff.md)
- StkAaveV2Rev4 [Diff](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/diffs/StakedTokenV2Rev4-diff.md)

Storage layouts diffs have also been generated for the contracts where the implementation is updated:

- Aave Token storage layout [Diff](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/diffs/AaveTokenV2_layout_diff.md)
- StkAave Token storage layout [Diff](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/diffs/StakedTokenV2Rev3_layout_diff.md)

## Deployed Contracts
- [ProposalPayloadLong](https://etherscan.io/address/0x889c0cc3283DB588A34E89Ad1E8F25B0fc827b4b)
- [AaveTokenV2 Implementation](https://etherscan.io/address/0x96F68837877fd0414B55050c9e794AECdBcfCA59)
- [StkAaveTokenV2Rev4 Implementation](https://etherscan.io/address/0xE2E8Badc5d50f8a6188577B89f50701cDE2D4e19)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).