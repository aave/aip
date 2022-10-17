---
title: FEI Reserve Factor Update
status: Proposed
author: Llama, Shreyas Hariharan, Rajath Alex
shortDescription: FEI Reserve Factor Update
discussions: https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251
created: 2022-10-18
---

# Simple Summary

There is an issue with the current configuration of FEI’s reserve factor at 100% on Aave v2 Ethereum, not accruing variable borrow debt and not redirecting the Reserve Factor fees to the Collector smart contract.

So we need to set the FEI reserve factor to 99%. Factually this will solve the problem and achieve the same effect of “freezing”, but without reducing borrowers’ debt growth to 0.

# Abstract

The Reserve Factor (RF) on the Aave protocol is a percentage representing the proportion of the supplier’s yield that gets redirected to the protocol itself as a “fee”. For example, WETH on Aave v2 Ethereum has a 10% RF, so if the yield for suppliers would be 5% yearly, 10% of it (0.5%) would go to the protocol itself, to a Collector contract and in the shape of aTokens.

On every user action, when the new interest rate is calculated, the amount of aTokens calculated from the RF of that specific asset gets minted to the Collector. In addition, extra accounting gets done on the so-called “indexes” of the asset (supply/variable borrow), which represent the total accumulation of yield on both supply and borrow side.

It is important to highlight that the reserve factor gets factually discounted when calculating the supply rate, prior to further accounting like the indexes.

On September 05, [Aave governance proposal 96](https://app.aave.com/governance/proposal/96/) was executed, factually freezing the FEI asset on Aave v2 Ethereum.

Initially everything looked good with the payload, doing 2 actions:
1. Call a freeze() function on the protocol for FEI.
2. In order for suppliers of FEI to not have incentives and withdraw, “redirect” all yield on the borrowers’ side to the protocol’s Collector. This was done by setting the Reserve Factor configuration of FEI to the maximum, so 100%.

Later, it was realized that the variable borrow interest seemed to not be properly accruing for FEI borrowers. After some debugging, it was realized that the issue was caused by a side effect of configuring any RF to exactly 100%, which should not work that way. More context to the problem can be found [here](https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251#the-problem-3).

The solution to fix this, is to set the FEI reserve factor to 99% through this AIP.


# Motivation

The full motivation for this AIP can be found [here](https://governance.aave.com/t/bgd-aave-v2-ethereum-fei-security-report/10251)

# Specification

A full specification of the payload contract and tests enabling this mandate can be found on the Llama Github [here](https://github.com/llama-community/aave-fei-rf-update)

The Proposal Payload does the following:
1. Sets FEI Reserver Factor from 100% to 99%.
2. If liquidity is available to claim, then calls `swapAllAvailable()` on the [aFEI to aDAI Swapper contract](https://etherscan.io/address/0x9A953AC1090C7014D00FD205D89c6BA1C219Af8b)

## Test Cases

This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Test cases can be found: [Here](https://github.com/llama-community/aave-fei-rf-update/blob/main/src/test/ProposalPayloadE2E.t.sol)

## Implementation

Payload Implementation can be found: [Here](https://github.com/llama-community/aave-fei-rf-update/blob/main/src/ProposalPayload.sol)

## Deployed Contracts

Proposal Payload = [0x993ee4acc9F736fd3e47846d18b397d06B899112](https://etherscan.io/address/0x993ee4acc9f736fd3e47846d18b397d06b899112)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
