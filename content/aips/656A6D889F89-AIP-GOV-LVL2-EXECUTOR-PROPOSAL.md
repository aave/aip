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

These updates are applied in practice by whitelisting on the Aave Governance v2 a newly deployed Executor smart contract.

As the current Level 2 Executor holds permissions of the Aave ecosystem, this proposal also migrates them from the old Executor to the new one; permissions being:

- Ownership of the Aave Governance v2 smart contract.
- Proxy admin of the AAVE token smart contract.
- Proxy admin of stkAAVE and stkABPT (Safety Module).

**This proposal will be created via a fully decentralized smart contract (so-called Autonomous Proposal)**

## Security

- An extensive suite of tests can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/test)

- In order to properly verify that all permissions are transferred to the new Executor, we did a verification procedure described [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/security/Analysis%20of%20Level%202%20executor%20permissions.md)

- SigmaPrime has audited the changes, and implemented an [independent test suite](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/security/sigmap/tests), complementary to BGD's. The audit report can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/SigmaPrime.md).

- Certora has reviewed the changes. The audit report can be found [HERE]()

## Implementation

Smart contracts can be found [here](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/src/contracts). Especifically for what concerns this proposal:

- New Executor [https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/Executor.sol](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/Executor.sol)
- Proposal payload [https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/ProposalPayloadNewLongExecutor.sol](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/ProposalPayloadNewLongExecutor.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
