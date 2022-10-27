---
title: FEI Reserve Factor Update
status: Proposed
author: Llama, Shreyas Hariharan, Rajath Alex
shortDescription: FEI Reserve Factor Update
discussions: https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251
created: 2022-10-18
---

# Simple Summary

This proposal updates FEI’s Reserve Factor on Aave v2 Ethereum from 100% to 99%. As noted by [BGD](https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251), the current configuration of FEI’s Reserve Factor at 100% does not accrue variable borrow debt and does not redirect the Reserve Factor fees to the Collector smart contract.

# Abstract

As noted [here](https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251), the Reserve Factor (RF) on Aave is a percentage representing the proportion of the supplier’s yield that gets redirected to the protocol as a “fee”.

On every user action, when the new interest rate is calculated, the amount of aTokens calculated from the RF of that specific asset gets minted to the Collector. In addition, extra accounting gets done on the so-called “indexes” of the asset (supply/variable borrow), which represent the total accumulation of yield on both supply and borrow side.

It is important to highlight that the reserve factor gets discounted when calculating the supply rate, prior to further accounting like the indexes.

On September 05, [Aave governance proposal 96](https://app.aave.com/governance/proposal/96/) was executed, freezing the FEI asset on Aave v2 Ethereum.

Initially, the payload seemed fine and performed two actions:
1. Call a freeze() function on the protocol for FEI.
2. In order for suppliers of FEI to not have incentives and withdraw, “redirect” all yield on the borrowers’ side to the protocol’s Collector. This was done by setting the Reserve Factor configuration of FEI to 100% (maximum).

Later, it was realized that the variable borrow interest did not properly accrue for FEI borrowers. After some debugging, it was realized that the issue was caused by a side effect of configuring any RF to exactly 100%.

The temporary solution to fix this (until the protocol is updated to handle reserve factor of 100% correctly), is to set the FEI reserve factor to 99% through this AIP.

# Motivation

The full motivation for this AIP can be found [here](https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251)

# Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Llama Github [here](https://github.com/llama-community/aave-fei-rf-update)

The Proposal Payload does the following:
1. Sets FEI Reserve Factor from 100% to 99%.
2. If liquidity is available to withdraw, then calls `swapAllAvailable()` on the [aFEI to aDAI Swapper Contract](https://etherscan.io/address/0x9A953AC1090C7014D00FD205D89c6BA1C219Af8b)

## Test Cases

This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Test cases can be found: [Here](https://github.com/llama-community/aave-fei-rf-update/blob/main/src/test/ProposalPayloadE2E.t.sol)

## Implementation

Payload Implementation can be found: [Here](https://github.com/llama-community/aave-fei-rf-update/blob/main/src/ProposalPayload.sol)

## Deployed Contracts

Proposal Payload = [0x993ee4acc9F736fd3e47846d18b397d06B899112](https://etherscan.io/address/0x993ee4acc9f736fd3e47846d18b397d06b899112)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
