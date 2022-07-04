---
title: Aave <> Starknet - Phase I (Part 2)
status: Proposed
author: Ernesto Boado (@eboadom)
shortDescription: Requests for the second scheduled payment on Aave <> Starknet Phase I
discussions: https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145#payments-8
created: 2022-06-31
---

## Simple Summary

Aave <> Starknet Phase I was approved by the Aave community with 2 payment tranches. This proposal releases the second payment tranche of 92'500 USDC.

## Abstract

Back in February 26th, the Aave community approved both on [Snapshot](https://snapshot.org/#/aave.eth/proposal/0x56eb24ad5e2811990899653155caee022a80f3800e51b2b37ecc9254a0a51335) and [on-chain governance](https://app.aave.com/governance/proposal/61/) the execution of the Aave <> Starknet Phase I project, with a planned budget of 192'500 USD to be released from the Aave DAO.

With the project almost ready for delivery as described in the last update [HERE](https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145/20), it is the moment now to request for the release of the second tranche of payment, accounting for 92'500 USDC and to be used to cover the rest of expenses of the project.

## Relevant links

- Thread of the Aave <> Starknet Phase I project: [https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145](https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145)

- Definition of payment schedule: [https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145#payments-8](https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145#payments-8)

- Snapshot approval of the project: [https://snapshot.org/#/aave.eth/proposal/0x56eb24ad5e2811990899653155caee022a80f3800e51b2b37ecc9254a0a51335](https://snapshot.org/#/aave.eth/proposal/0x56eb24ad5e2811990899653155caee022a80f3800e51b2b37ecc9254a0a51335)

- On-chain governance approval of the project: [https://app.aave.com/governance/proposal/61/](https://app.aave.com/governance/proposal/61/)

## Implementation

This proposal exclusively releases 92'500 USDC from the Aave V2 Ethereum collector, to the account receiving the funds on behalf of the Aave <> Starknet project.

The implementation can be found on [https://github.com/eboadom/aip-aave-starknet-phase1-part2/blob/main/src/contracts/PayloadAaveStarknetPhaseIPart2.sol](https://github.com/eboadom/aip-aave-starknet-phase1-part2/blob/main/src/contracts/PayloadAaveStarknetPhaseIPart2.sol)

Simple tests can be found on [https://github.com/eboadom/aip-aave-starknet-phase1-part2/blob/main/test/PayloadAaveStarknetPhaseIPart2.t.sol](https://github.com/eboadom/aip-aave-starknet-phase1-part2/blob/main/test/PayloadAaveStarknetPhaseIPart2.t.sol)

**Target Contracts**

PayloadAaveStarknetPhaseIPart2 = [https://etherscan.io/address/0x0e06e1618e11ae602539b8d70fb6b611272d8a71#code](
https://etherscan.io/address/0x0e06e1618e11ae602539b8d70fb6b611272d8a71#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
