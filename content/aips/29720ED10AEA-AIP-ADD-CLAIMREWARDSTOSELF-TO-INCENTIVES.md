---
title: Add claimRewardsToSelf() to incentives for Ethereum V2 Aave Market
status: Proposed
author: Sean Casey (@SeanJCasey)
shortDescription: Add claimRewardsToSelf() to the liquidity mining incentives contract for Ethereum V2 Aave Market
discussions: https://governance.aave.com/t/proposal-adapt-contracts-slightly-to-improve-defi-composability/4125
created: 2021-11-30
---

## Summary

Add a `claimRewardsToSelf()` function to the liquidity mining incentives contract, so a caller can claim their own rewards without specifying the `to` recipient.

## Abstract

Aave incentive contracts currently only contain claiming functions in which the caller specifies the recipient `to` address, who will receive the claimed rewards. Unfortunately, this poses a security problem for abstractly-designed smart contract claimants that do not have fully-trusted originators of claiming txs. This is the case for Enzyme vaults. By adding an additional claiming function to the incentive contract that uses `msg.sender` instead of `to`, the tx originator no longer needs to be trusted.

This simple addition - that reuses the exact same claiming logic as the current claiming functions with no changes to storage layout - will increase composability opportunities with Enzyme and similarly architected protocols.

## Motivation

Enzyme is a decentralised asset management infrastructure built on Ethereum. It allows asset managers to build on-chain investment Vaults that utilise and allocate to the newest innovations in DeFi. Because all transactions occur on the Ethereum blockchain, compliance, accounting, and investor management services are rendered programatically and at a dramatically-reduced cost to their traditional finance counterparts.

Amongst other things, Enzyme Vaults can interact with AAVE by lending. We are currently also working on accommodating the borrowing functionality to enable leveraged strategies.

In order to keep providing our users with superior asset management tools in DeFi, we want to open up the liquidity mining option for them as soon as possible. Our users rely on having the latest DeFi functionality in Enzyme to reach their full potential.

Benefits for AAVE:

- Increased AAVE adoption by the Enzyme user base and other similarly architected protocols
- Tapping into a new and fast-growing community
- A closer collaboration between our two projects & communities
- Enzyme contracts have been audited by PWC, Chain Security and some of the leading auditors in the space who sit on the Enzyme Council
- Opening up the possibility for new and novel use-cases to be built around AAVE

## Specification

Adds `function claimRewardsToSelf(address[] calldata assets, uint256 amount)` to the liquidity mining incentives contract, which reuses the logic of `claimRewards()` but uses `msg.sender` instead of `to`.

## Rationale

This is the simplest, least intrusive way to support claimants who might not be trusted to send claimed rewards to a third party.

## Test Cases

Test suites (local, mainnet fork, and proposal flow on mainnet fork) have been included at https://github.com/aave/incentives-controller/pull/4 and have been reviewed by Aave team.

## Implementation

Full PR: https://github.com/aave/incentives-controller/pull/4

New incentives implementation contract on Ethereum mainnet: `0xD9ED413bCF58c266F95fE6BA63B13cf79299CE31`

Upgrade to be executed via deployment of `ProposalIncentivesV2Executor.sol`: https://github.com/aave/incentives-controller/blob/e5e8b2c994ee29b0af883db7c94add372b4423b2/contracts/proposals/ProposalIncentivesV2Executor.sol

Deployed proposal payload (`ProposalIncentivesV2Executor.sol`) on Ethereum mainnet: `0xb8fA635fEC4E6BDb05e7937cBeF01214991e9D5a`

## Audit

https://github.com/aave/incentives-proposal/blob/1ef7705546dc7970795003e435f76b73efebbb1d/audits/Enzyme_Aave_IncentivesController_Improvement.pdf

## Snapshot vote

https://snapshot.org/#/aave.eth/proposal/QmcgTovk982fcUTN17qtDyZ4oCoVGnKZJGuwMVtqspfphk

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
