---
title: Use AAVE Ecosystem Reserve to vote YES on proposal to adjust Level 2 Governance requirements
status: Proposed
author: BGD Labs (@bgdlabs)
shortDescription: Update of the AAVE Ecosystem Reserve to allow one-time voting YES a proposal to adjust Level 2 Governance requirements
discussions: https://governance.aave.com/t/rfc-aave-governance-adjust-level-2-requirements-long-executor/8693
created: 2022-09-16
---

## Simple Summary

This proposal upgrades the implementation of the AAVE Ecosystem Reserve, allowing for a one-time YES vote with the voting power held, in order to "vote boost" the [proposal to upgrade the Level 2 Executor requirements](https://github.com/bgd-labs/aip/blob/feat/lvl2-proposals/content/aips/656A6D889F89-AIP-GOV-LVL2-EXECUTOR-PROPOSAL.md).


## Motivation
All context/motivation of this proposal is extensively explained on the [Aave Governance forum thread](https://governance.aave.com/t/rfc-aave-governance-adjust-level-2-requirements-long-executor/8693)


## Specification
This proposal exclusively upgrades the implementation of the AAVE Ecosystem Reserve, keeping the exact same logic, but changing the `initialize()` function to include a one-time YES vote on another Aave governance proposal passed as input. The implementation of this can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/AaveEcosystemReserveV2.sol#L779).

**This proposal will be created via a fully decentralized smart contract (so-called Autonomous Proposal). This is especially important in this case, as it will assure that the proposal id on which to vote YES will be exactly the proposal to upgrade Level 2 requirements**


## Security

- An extensive suite of tests can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/test)

- We have executed a diff between the current implementation of the [AAVE Ecosystem Reserve in production](https://etherscan.io/address/0x1aa435ed226014407fa6b889e9d06c02b1a12af3#code) and the new implementation, to verify that the changes and exclusively the ones expected. The diff can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/diffs/AaveEcosystemReserveV2-diff.md).

- SigmaPrime has audited the changes, and implemented an [independent test suite](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/audits/sigmap/tests), complementary to BGD's. The audit report can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/sigmap/SigmaPrime.md).

- Certora has reviewed the changes, and implemented an [independent test suite](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/certora/specs/executor.spec), complementary to BGD's. The audit report can be found [HERE](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/audits/certora/report/Security%20Review%20of%20Aave%20Governance%20V2%20Update.pdf).

## Implementation

Smart contracts can be found [here](https://github.com/bgd-labs/aave-gov-level-2-update/tree/main/src/contracts). Especifically for what concerns this proposal:

- New AAVE Ecosystem Reserve [https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/AaveEcosystemReserveV2.sol](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/AaveEcosystemReserveV2.sol)
- Proposal payload [https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/ProposalPayloadAaveEcosystemReserveWithVoting.sol](https://github.com/bgd-labs/aave-gov-level-2-update/blob/main/src/contracts/ProposalPayloadAaveEcosystemReserveWithVoting.sol)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
