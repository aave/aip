---
title: Risk Parameter Updates - Aave V3 Ethereum
shortDescription: Update risk parameters on AAVE V3 Ethereum 
author: Chaos Labs (@ori-chaoslabs, @yhayun)
discussions: https://governance.aave.com/t/arc-chaos-labs-risk-parameter-updates-aave-v3-ethereum-2023-02-22/12015
created: 2023-02-22
---

# Simple Summary

A proposal to adjust four (4) total risk parameters, including Loan-to-Value and Liquidation Threshold, across two (2) Aave V3 Ethereum assets.

# Motivation
Aave V3 Ethereum was launched successfully on January 27th, 2023, with a conservative configuration for the initial assets, as recommended by Chaos Labs.

Following the successful launch and after analyzing the initial supply and borrow distribution and general usage across the deployment, we propose incrementally increasing the LTs and LTVs for USDC and DAI with the following goals:

Provide a sustainable set of parameters that are better optimized for risk-reward in the long term.
Serve as a catalyst to promote migration of funds from V2 to V3, as capital efficiency under the current parameter settings is significantly inferior to V2.
Note: As a general guideline, we limit our proposed changes by ±3% for all parameters as a high/low bound for a given proposal. This ensures more controlled changes and allows us to analyze their effect on user behavior before recommending further amendments to the parameters if the optimal configuration is outside this range.

It is important to note that V3 Ethereum still needs to be integrated into our parameter recommendation platform, and therefore the recommendations provided here are not simulation-based. However, from running our simulations on similar assets on Arbitrum and Avalanche and considering the differences between the deployments, we conclude that the provided parameters are still conservative and can be further increased toward an optimized state in future iterations.

**Liquidity and Position Analysis:**

USDC is mainly used as collateral for blue chip, high liquidity assets, most of which are WETH ($9M borrowed against USDC collateral) and recursive USDC borrowing. It is currently possible to liquidate USDC to cover all open USDC-WETH positions with very low slippage.


DAI is mainly used as collateral for blue chip, high liquidity assets, most of which are WETH ($340K borrowed against DAI collateral) and USDC ($240K borrowed against DAI collateral). It is currently possible to liquidate DAI to cover all open DAI-WETH positions and DAI-USDC with very low slippage.

# Specification

The following risk parameter proposal is presented below:

| Asset | Parameter | Current | Recommended | Change |
| --- | --- | --- | --- | --- |
| USDC | Liquidation Threshold | 76% | 79% | +3% |
| USDC | Loan-to-Value | 74% | 77% | +3% |
| DAI | Liquidation Threshold | 77% | 80% | +3% |
| DAI | Loan-to-Value | 64% | 67% | +3% |


# References
[Forum Post](https://governance.aave.com/t/arc-chaos-labs-risk-parameter-updates-aave-v3-ethereum-2023-02-22/12015)

[Tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/mainnet/AaveV3EthParamsPayload-Mar02Test.t.sol)

[Proposal payload implementation](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/mainnet/AaveV3EthParamsPayload-Mar02.sol)



# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
