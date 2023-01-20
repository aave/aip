---
title: Repay Excess CRV Debt on Ethereum v2
author: Llama, DeFi_Consulting, efecarranza, dydymoon
discussion: https://governance.aave.com/t/arfc-repay-excess-crv-debt-on-ethereum-v2/10955
shortDescription: Purchase CRV and recapitalise CRV Reserve
created: 2023-01-20
---

# Simple Summary

This AIP will procure CRV with aUSDC from the Collector Contract for the purpose of repaying the excess debt in the CRV Reserve on the Ethereum v2 liquidity pool.

# Abstract
There are approximately 2,677,749 units of CRV of excessive debt in the Ethereum v2 CRV Reserve. At 96.0 cents per unit, a total of 2,570,639.04 USD, in the form of CRV tokens, is required to recapitalise the protocol.

To recapitalise the protocol, this proposal will acquire enough CRV to repay the excess debt, plus a buffer. This proposal will complete the acquisition from the existing aUSDC holdings. A total of 2,700,000 units of CRV will be procured, with an approved budget of 3,105,000 units of aUSDC. A price ceiling of $1.15 per unit of CRV has been set in the contract.

Aave currently holds 5.26M units of aUSDC in the Ethereum Collector Contract and a further 0.36M units of USDC which will be deposited into Aave v2.

# Motivation

There is currently around 2,677,749 units of excessive debt in the CRV Reserve on the Ethereum v2 deployment. As the excess debt is nominated in CRV tokens, the excessive debt must be repaid in CRV.

This proposal follows on from the community discussion, linked here, whereby the community decided to use the aUSDC and USDC holding to acquire the CRV required to repay the excessive debt.

# Holdings Summary Table

Holding	$ Value	% of Excessive Debt
aUSDC	5,255,944.02	204.46
USDC	359,693.90	13.99
Excessive Debt	2,570,639.04	100
The table shows there is in total 218.45% more aUSDC and USDC relative to the excessive debt value in the Ethereum Collector Contract, ethereum:0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c.

# Specification

Deposit the USDC held in the Ethereum Collector Contract and use the aUSDC holding to acquire 2,700,000 units of CRV via a swap contract. A 10 bps premium to the CRV/USD Chainlink Oracle is to be applied.

CRV/USD Oracle: 0xCd627aA160A6fA45Eb793D19Ef54f5062F20f33f

Estimated Premium: 2,570,639.04 * 0.0010 = $2,570.64
A $15,000 swap via ParaSwap at 14 gwei + depositing into the swap contract is estimated to cost $12 - $15, 10 bps is $15.

A cap of $3,105,000 will be placed on swap contract. This is a defined ceiling which limits the amount of funds allocated for acquiring CRV on market. A price cap of $1.15 has also been set within the contract. The $1.15 ceiling is 19.79% higher than the spot price.

Any actor interacting with the swap contract will have the ability to deposit CRV and receive aUSDC.

# Implementation

Deploy a swap contract exchanging aUSDC for CRV with an approved budget of 3,105,000 units of aUSDC.

To repay the excess debt, the repay function will be used. This function requires CRV as an input and the address the bad debt has accumulated within.

pool.repay(crv, total bad debt, variableInterest, Address)

CRV: ethereum:0xD533a949740bb3306d119CC777fa900bA034cd52
Total Excessive Debt: 2,570,639.04 units of CRV
Address: 0x57e04786e231af3343562c062e0d058f25dace9e

Test cases can be found [here](https://github.com/llama-community/aave-repay-excess-crv-debt/blob/main/src/test/ProposalPayloadE2E.t.sol)

Payload Implementation can be found [here](

Proposal Payload = [0xaa7ef2f9b31fa26e802ca9b3e33990ada4143fb9](https://etherscan.io/address/0xaa7ef2f9b31fa26e802ca9b3e33990ada4143fb9)

# Copyright

Copyright and related rights waived via CC0.
