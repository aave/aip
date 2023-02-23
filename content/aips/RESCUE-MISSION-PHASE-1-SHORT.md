---
title: Rescue Mission Phase 1 Short Executor
author: BGD Labs (@bgdlabs), proposer ACI (@aavechan)
shortDescription: Activation of Aave rescue mission Phase 1, Level 1 (Short) Executor part
discussions: https://governance.aave.com/t/bgd-rescue-of-tokens-locked-on-aave-overview-and-phase-1/8150/1
created: 2023-02-17
updated: 2023-02-23
---


## Simple Summary
Activation of Aave rescue mission Phase 1, Level 1 (Short) Executor part

## Motivation
Since the birth of the Aave ecosystem, multiple people have sent tokens by mistake to incorrect addresses.

In some cases, when the transfer is to another unknown wallet, the tokens are usually locked and lost forever, as it is factually impossible to prove that the transfer was a mistake.

But there are special cases, where the transfer happens to a well-known smart contract address of the ecosystem, for which is simple to understand that the action was really a mistake, as there is no rational reason to send tokens there.

In the case of Aave, the existence of upgradeable smart contracts across the ecosystem makes technically possible the recovery of such tokens sent by mistake. Consequently, given the requests from members of the community affected, we have come up with a plan to “rescue” those funds, providing the affected people a way to recover them.

This initial phase will affect the following:

- Users who sent[AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9), [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03), [USDT](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7) and [UNI](https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984) to the [AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9) token smart contract
- Users who sent [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03) to the [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03) smart contract
- User who sent [LEND](https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03) to the [LendToAaveMigrator](https://etherscan.io/address/0x317625234562B1526Ea2FaC4030Ea499C5291de4) smart contract
- Users who sent [AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9) and [stkAAVE](https://etherscan.io/token/0x4da27a545c0c5b758a6ba100e3a049001de870f5) to the [stkAAVE](https://etherscan.io/token/0x4da27a545c0c5b758a6ba100e3a049001de870f5) contract

The LEND sent to the specified contracts will be claimed already as AAVE tokens with the transformation LEND to AAVE already taken into account (1 AAVE = 100 LEND)

## Specification

For wallets to be able to claim the tokens they sent to the contracts specified on Phase 1, we have created a different Merkle tree for every claimable token (AAVE, stkAAVE, UNI, USDT).

With the roots and amounts, every wallet will be able to claim by calling the AaveMerkleDistributor contract.

This Rescue Short Proposal will be in charge of the activation of the AaveMerkleDistributor contract and the rescue of LEND sent to the LendToAaveMigrator and to LEND contracts.

- ProposalPayloadShort: This proposal payload will deploy the AaveMerkleDistributor contract and add the AAVE, USDT, UNI and stkAAVE distributions. It will also connect the new implementation of the LendToAaveMigrator. The LendToAaveMigrator will be initialized with the deployed AaveMerkleDistributor and with the LEND amount calculated by adding:
    - LEND amount sent to LendToAaveMigrator: 8007719287288096435418 LEND in WEI (~8007,72 LEND).
    - LEND amount sent to LEND contract: 841600717506653731350931 LEND in WEI (~841600,72 LEND).<p>
This amount will directly be accounted by rescuing AAVE, as the LEND contract will not be updated, but as the LendToAaveMigrator has all remaining AAVE, we can assume that it was sent there, and so it can be migrated with the rest of the LEND amount sent.
## References

A list of relevant links like for this proposal:

- [forum discussion](https://governance.aave.com/t/bgd-rescue-of-tokens-locked-on-aave-overview-and-phase-1/8150/1)
- [tests](https://github.com/bgd-labs/rescue-mission-phase-1/tree/master/test) 
- Contracts:
  - [ProposalPayloadShort](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/src/contracts/ProposalPayloadShort.sol)
  - [LendToAaveMigrator Implementation](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/src/contracts/LendToAaveMigrator.sol)
  - [AaveMerkleDistributor](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/src/contracts/AaveMerkleDistributor.sol)

## Security Considerations

The contracts have been audited by Certora, and the report can be found [here](https://github.com/bgd-labs/rescue-mission-phase-1/tree/master/certora)

Implementation diffs have been generated to see that the new implementations only differ on the rescue logic:

- LendToAaveMigrator [Diff](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/diffs/LendToAaveMigrator-diff.md)

Storage layouts diffs have also been generated for the contracts where the implementation is updated:

- LendToAaveMigrator storage layout [Diff](https://github.com/bgd-labs/rescue-mission-phase-1/blob/master/diffs/rescue_LendToAaveMigrator_layout_diff.md)

## Deployed Contracts
- [ProposalPayloadShort](https://etherscan.io/address/0x4A4c73d563395ad827511F70097d4Ef82E653805)
- [LendToAaveMigrator Implementation](https://etherscan.io/address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7)
- [AaveMerkleDistributor](https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).