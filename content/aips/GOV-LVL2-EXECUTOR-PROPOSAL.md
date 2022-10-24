---
title: Adjust Aave Governance Level 2 requirements
status: Proposed
author: BGD Labs (@bgdlabs)
shortDescription: Activate a new Aave Governance Level 2 Executor with new requirements
discussions: https://governance.aave.com/t/rfc-aave-governance-adjust-level-2-requirements-long-executor/8693
created: 2022-09-16
---

## Simple Summary

This proposal updates the governance parameters (voting/proposition requirements) of the Level 2 Executor smart contract on the Aave Governance v2.

## Motivation
All context/motivation of this proposal is extensively explained on the [Aave Governance forum thread](https://governance.aave.com/t/rfc-aave-governance-adjust-level-2-requirements-long-executor/8693)

## Specification
This proposal upgrades Level 2 requirements the following way:

- Quorum of Level 2 Executor changes from 20% to 6.5%
- Vote differential of Level 2 Executor changes from 15% to 6.5%
- Proposition power required for Level 2 proposal changes from 2% to 1.25%.
- A delay of 7200 blocks is added between proposal creation and vote start. 1 day considering 12 seconds/block.

These updates are applied in practice by whitelisting on the Aave Governance v2 a newly deployed Executor smart contract.

As the current Level 2 Executor holds permissions of the Aave ecosystem, this proposal also migrates them from the old Executor to the new one; permissions being:

- Ownership of the Aave Governance v2 smart contract.
- Proxy admin of the AAVE token smart contract.
- Proxy admin of stkAAVE (Safety Module).

This proposal also migrates the Proxy admin of ABPT and stkABPT to the [Short Executor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) as they don't have influence on the Aave Governance

**This proposal will be created via a fully decentralized smart contract (so-called Autonomous Proposal)**

## Security

- An extensive suite of tests can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/test)

- We have executed a diff between the current [Level 2 Executor](https://etherscan.io/address/0x61910ecd7e8e942136ce7fe7943f956cea1cc2f7#code) and the new Executor, to verify that the changes are exclusively the ones expected. The diff can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/diffs/Executor-diff.md).

- In order to properly verify that all permissions are transferred to the new Executor, we did a verification procedure described [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/Analysis%20of%20Level%202%20executor%20permissions.md)

- SigmaPrime has audited the changes, and implemented an [independent test suite](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/audits/sigmap/tests), complementary to BGD's. The audit report can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/sigmap/SigmaPrime.md).

- Certora has reviewed the changes, and implemented an [independent test suite](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/certora/specs/executor.spec), complementary to BGD's. The audit report can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/certora/report/Security%20Review%20of%20Aave%20Governance%20V2%20Update.pdf)

## Implementation

Smart contracts can be found [here](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/src/contracts). Especifically for what concerns this proposal:

- New Executor [https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/Executor.sol](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/Executor.sol)
- Proposal payload [https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/ProposalPayloadNewLongExecutor.sol](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/ProposalPayloadNewLongExecutor.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
