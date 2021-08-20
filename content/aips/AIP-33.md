---
aip: 33
title: Add FEI to Aave V2
status: Proposed
author: Joey Santoro (@joeysantoro), Brianna Montgomery (@bpm6867)
shortDescription: Create a new Aave V2 market for the FEI stablecoin
discussions: https://governance.aave.com/t/arc-add-support-for-fei-as-a-lending-currency/4542
created: 2021-06-16
updated: N/A
---

## Simple Summary

Fei Protocol issues a decentralized, scalable USD stablecoin called FEI. FEI aims to become a widely used decentralized stablecoin that reduces centralization risk throughout DeFi.

## Abstract

FEI is backed by protocol owned reserves used to provide liquidity and stabilize the peg. The Fei community is committed to using decentralized reserve assets and oracles to have FEI be as decentralized as possible. FEI is an ideal candidate to be included on Aave to provide more decentralized stablecoin alternatives.

Additionally, Fei Protocol will be committing 25m FEI to bootstrap the market and 4M TRIBE in incentives for borrowing for at least the first 6 months.

## Motivation

Being the liquidity protocol, Aave understands the need for robust capital efficient liquidity in creating healthy markets. DAI and sUSD being the current available options for decentralized stablecoins is good but likely insufficient longer term. Having more options like FEI will improve liquidity and optionality for protocols which are committed to decentralization.

FEI brings with it substantial liquidity in the form of the $500m ETH-FEI pair on Uniswap V2. This can allow ETH leverage traders a capital efficient way to benefit from Aave liquidity and FEI liquidity. The yield paid by these traders will attract more FEI liquidity to Aave, benefiting both ecosystems.

## Specification

1. What is the link between the author of the AIP and the Asset?
@Brianna is a core team member at Fei Labs focused on ecosystem development.

2. Provide a brief high-level overview of the project and the token
FEI is a decentralized and scalable stablecoin for DeFi.

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

If listed, FEI would be one of the most decentralized stablecoins on Aave. The Fei DAO can support FEI markets on Aave by providing FEI liquidity, approved via snapshot for 25 million. Traders will have the ability to tap into the large FEI-ETH liquidity on Uni V2 ($561 million) as well as any future protocol owned or incentivized liquidity pools.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are they live?). How did it overcome some of the challenges it faced?

Fei Protocol launched in April 2021 with a DAO since day one, and currently has over $643 million in liquidity. Fei aligns itself with the top communities and teams in the space, including Aave, with a similar decentralization ethos. There has been a large voter turnout during important community and team lead proposals that supported stabilizing the peg after the initial launch of the protocol.

5. How is the asset currently used?
FEI is currently being used in interest rate markets, including Fuse, and soon to be CREAM. FEI is growing and finding utilization in other financial service offerings in the broader DeFi ecosystem: synthetics, option platforms, exchanges and AMM’s, etc.

6. Emission schedule

There is no emission schedule.

7. Token (& Protocol) permissions (minting) and upgradability. Is there a multisig? What can it do? Who are the signers?
Contracts within the Fei protocol have the ability to mint and burn FEI through processes that support stabilization around the 1 USD price target. The DAO controlled by TRIBE holders has the ability to mint FEI and appoint other Minter and Burner contracts.

The FEI contract itself is not upgradeable.

An additional role, the Guardian, can pause the minting of FEI. The Fei Core Team holds this role in a multi-sig, with the intention of either renouncing the role or transitioning to a community held multi-sig. More information can be read in our docs: https://docs.fei.money/governance/fei-guardian 1

6. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

	Market Cap: $527,000,000
	24h Volume: $70,000,000
	Volatility: Low
	Exchanges: Uniswap V2, Uniswap V3, Gate.io 1, MXC, Virgox, BiKi, etc. As reported by CoinGeicko 3.
	Maturity: Early-Mid

9. Social channels data (Size of communities, activity on Github)
27K followers on Twitter, 2 17k members in Discord 3, Github

10. Contracts date of deployments, number of transactions, number of holders for tokens
	Date of Deployment: March 28, 2021
	Number of Transactions: 81,798
	Number of Holders: 4,089

## Rationale
Because FEI is an earlier stage project the proposal is only for depositing. The use of rateStrategyStableTwo, reserve factor, and disabled stable borrowing is appropriate for similar stablecoins per https://docs.aave.com/risk/asset-risk/risk-parameters.

## Implementation

The FEI price oracle will be served via [ChainLink](https://chain.link/), which includes the [FEI/ETH feed](https://docs.chain.link/docs/ethereum-addresses).

FEI will only be used for depositing, not as collateral. The following params are proposed:


  - Strategy: rateStrategyStableOne
  - Base LTV As Collateral: 0
  - Liquidation Threshold: 0
  - Liquidation Bonus: 0
  - Borrowing Enabled: true
  - Stable BorrowRate Enabled: false
  - Reserve Decimals: 18
  - Reserve Factor: 2000

Following the steps from the [Aave governance docs](https://docs.aave.com/developers/protocol-governance/governance/propose-your-token-as-new-aave-asset), the following contracts were generated:

- Interest bearing aFEI: 0xAcF35Af93a65904C50ED93dfb010bAAdEBb4ccF0
- Variable Debt variableDebtFEI: 0x1B669D5034143E272b5Ff548f2878735A2F3505A
- Stable Debt stableDebtFEI: 0x1DdcF68f4C2600CBE534212765F964342a2faf02
- Strategy Implementation for FEI: 0xF0bA2a8c12A2354c075b363765EAe825619bd490

Additionally the Fei Smart Contracts team contributed an ERC-20 compatibile incentives controller contract to the Aave codebase so other teams can add rewards in their native token: https://github.com/aave/incentives-proposal/pull/5 

- TRIBE Incentives Controller Implementation: 0xff865335401f12b88fa3ff5a3a51685a7f224191
- and proxy: 0xDee5c1662bBfF8f80f7c572D8091BF251b3B0dAB

## References

Website - https://fei.money/

Twitter - https://twitter.com/feiprotocol

Docs - https://docs.fei.money/

Github - https://github.com/fei-protocol

Token Contract - https://etherscan.io/token/0x956F47F50A910163D8BF957Cf5846D573E7f87CA

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).