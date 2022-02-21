---
title: Aave <> Starknet - Phase I
status: Proposed
author: Ernesto Boado (@eboadom)
shortDescription: Kick-start of Phase I of Aave <> Starknet 
discussions: https://governance.aave.com/t/request-for-approval-aave-starkware-phase-i/7145
created: 2022-02-21
updated (*optional): 2022-02-21
---


## Abstract

This proposal serves as kick-start of the Phase I of the Aave <> Starknet project, releasing the initial section of the budget, accounting for 100'000 USD in USDC and WETH.
In addition, this proposal includes some technical updates to enable release of any kind of tokens from the protocol treasury.

## Specification

The proposal implementation's specification can be found [here](https://github.com/eboadom/aip-aave-starknet-phasei/blob/master/README.md#aip-aave--starknet-phase-i).
In summary, the proposal's executable code (payload) does the following:
- Deploys a new ControllerOfCollector contract. Rationale explained on the previous link.
- Upgrades the AaveCollector implementation to the same as the AAVE treasury implementation.
- Withdraws 90'000 USDC to the project's facilitator address.
- Withdraws 3 WETH to the project's facilitator address.

## Test Cases

Both the proposal lifecycle and it's correctness have been tested and simulation on a mainnet fork, with the specific tests being [here](https://github.com/eboadom/aip-aave-starknet-phasei/blob/master/src/test/ValidateAIPStarknetPhaseI.sol).

## Implementation

The proposal's payload has been deployed on [https://etherscan.io/address/0x4e76e1d71806aae6ccaac0fc67c3aa74cb245277](https://etherscan.io/address/0x4e76e1d71806aae6ccaac0fc67c3aa74cb245277)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).