---
title: Strategic Partnership with Balancer DAO Part 2 - 100k BAL Acquisition
author: Llama, Matthew Graham, Rajath Alex
shortDescription: 100k BAL Acquisition
discussions: https://governance.aave.com/t/arc-strategic-partnership-with-balancer-part-2/7813
created: 2022-11-08
---

# Simple Summary

The Aave DAO is to acquire 100,000 BAL tokens on-market by deploying a Bonding Curve contract.

# Abstract

The Bonding Curve will have a defined 100,000 BAL acquisition target, where traders receive a small 50 bps premium over the BAL/USD Chainlink oracle price when purchasing USDC/aUSDC in return for depositing BAL. 

This on-market purchase completes the two part process for acquiring a total of 300,000 BAL after an initial 200,000 BAL was acquired via the token swap in [AIP-87](https://app.aave.com/governance/proposal/87/). 

A separate proposal will detail how the BAL tokens from this AIP are to be utilised. The discussion can be found on the [Aave governance forum](https://governance.aave.com/t/arc-deploy-bal-to-vebal/9747).


# Motivation

The 100,000 BAL acquisition further extends the DAO's holding to be used for supporting the growth of the Aave ecosystem. There are numerous opportunities within the Aave ecosystem to utilise veBAL. The BAL emissions are expected to lead to higher TVL and attract new users/use cases to Aave which will lead to additional revenue generation or alternatively reduce the AAVE emissions via the Safety Module. Exactly how the veBAL is to be utilised by the DAO is still open for discussion. 

Further insights into the motivation behind this proposal can be found below:
1. [ARC : Strategic Partnership with Balancer Part #2](https://governance.aave.com/t/arc-strategic-partnership-with-balancer-part-2/7813)
2. [ARC : Staked ATokens, A New Aave Primitive Exploring Vote-Escrow Economies](https://governance.aave.com/t/arc-staked-atokens-a-new-aave-primitive-exploring-vote-escrow-economies/10406)
3. [ARC : ERC4626 Strategies as Productive Collateral](https://governance.aave.com/t/arc-erc4626-strategies-as-productive-collateral/10337)

# Specification

A full specification of the payload contract, bonding curve contract and tests enabling this mandate can be found on the Llama Github [here](https://github.com/llama-community/aave-bal-bonding-curve).

Llama will deploy a bonding curve enabling aUSDC held within the [Aave V2 Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) to be exchanged for BAL, with the traders receiving a 50 bps reward over the [BAL/USD Chainlink oracle](https://etherscan.io/address/0xdF2917806E30300537aEB49A7663062F4d1F2b5F) price for performing the transaction. The amount of BAL to be acquired is fixed and set at 100,000 BAL. The maximum amount of aUSDC that will be approved for spending from the Aave V2 Collector by the bonding curve and used in acquiring the BAL will be set at 800,000 aUSDC.

The aUSDC does not leave the Aave V2 Collector as the Bonding Curve enables the aUSDC to be transferred from the Collector to the trader's wallet upon the Collector receiving BAL from the trader.

The Proposal Payload does the following:
1. Approve the Bonding Curve contract to spend 800,000 aUSDC from the Aave V2 Collector.

The Bonding Curve contract has the following functions and public storage variables:
1. `function purchase(uint256 amountIn, bool toUnderlying) external returns (uint256)`: This function allows the trader to purchase aUSDC/USDC for BAL, with the trader receiving a 50 bps reward over the BAL/USD Chainlink oracle price. It takes `uint256 amountIn` (BAL amount input including 18 decimals) and `bool toUnderlying` (Whether to receive as USDC (true) or aUSDC (false)) as input parameters and returns the amount of aUSDC/USDC (including 6 decimals) received on purchase. 
2. `function availableBalToBeFilled() public view returns (uint256)`: This getter/view function returns how close to the 100k BAL amount cap the bonding curve contract is at. Trader check this function before calling `purchase()` to see the amount of BAL left to be filled in the bonding curve contract. This should give the trader information on upto how much BAL they can put in the `amountIn` input parameter of the `purchase()` function.
3. `function getAmountOut(uint256 amountIn) public view returns (uint256)` : This getter/view function returns the amount of aUSDC/USDC that will be received after a bonding curve purchase using given BAL amount input (including the 50 bps reward over the BAL/USD Chainlink oracle price). Trader check this function before calling `purchase()` to see the amount of aUSDC/USDC you'll get for given BAL amount input.
4. `function getOraclePrice() public view returns (uint256)` : This getter/view function returns the current peg price of the referenced Chainlink BAL/USD oracle as USD per BAL (value includes 8 decimals). 
5. `function rescueTokens(address[] calldata tokens) external` : This is a rescue function that can be called by anyone to transfer any tokens accidentally sent to the bonding curve contract to Aave V2 Collector. It takes an input list of token contract addresses. 
6. `uint256 public totalAusdcPurchased` : Cumulative aUSDC/USDC purchased through the bonding curve contract.
7. `uint256 public totalBalReceived`: Cumulative BAL received through the bonding curve contract.

## Test Cases

This proposal has been tested and peer reviewed by [Bored Ghost Developing](https://twitter.com/bgdlabs).

Test cases can be found: [Here](https://github.com/llama-community/aave-bal-bonding-curve/blob/main/src/test/OneWayBondingCurveE2E.t.sol)

## Implementation

1. Payload Implementation can be found: [Here](https://github.com/llama-community/aave-bal-bonding-curve/blob/main/src/ProposalPayload.sol)
2. Bonding Curve Implementation can be found: [Here](https://github.com/llama-community/aave-bal-bonding-curve/blob/main/src/OneWayBondingCurve.sol)

## Deployed Contracts

1. Proposal Payload = [0x5e945515a8e1008DAC95404AeC9E12a9e65948F1](https://etherscan.io/address/0x5e945515a8e1008dac95404aec9e12a9e65948f1)
2. Bonding Curve = [0x04f90d449D4f8316eDd6Ef4F963b657f8444a4cA](https://etherscan.io/address/0x04f90d449d4f8316edd6ef4f963b657f8444a4ca)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
