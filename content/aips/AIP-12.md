---
aip: 12
title: Adding AMPL on AAVE
status: Proposed
author: Ahmed Naguib Aly (@ahnaguib), Nithin Ottilingam (@nithinkrishna), Brandon Iles (@brandoniles)
discussions: https://governance.aave.com/t/proposal-add-support-for-ampl/854
created: 2021-01-12
updated: 2021-04-06
---

## AIP rationale

Ample is the first rebasing currency of DeFi. It is an uncollateralized financial primitive with an elastic supply that adjusts each day according to demand in the marketplace. Like Bitcoin, Ample is non-dilutive but it has a long-term unit of account that unlocks safe denomination of debt.

## References

- Forum proposal: https://governance.aave.com/t/proposal-add-support-for-ampl/854
- Project: https://www.ampleforth.org/
- Whitepaper: https://www.ampleforth.org/papers/
- Source code for the system(s) that interact with the proposed collateral: https://github.com/ampleforth/uFragments, https://github.com/ampleforth/market-oracle
- Ethereum addresses contracts: https://github.com/ampleforth/uFragments#ampleforth
- Audits both procedural and smart contract focused: https://github.com/ampleforth/ampleforth-audits
- Communities:
  * Telegram: https://t.me/Ampleforth
  * Twitter: https://twitter.com/AmpleforthOrg
  * Discord: https://discord.gg/mptQ49m, https://discord.gg/T7XRSf8q

## Paragraph Summary
Ample is the first rebasing currency of DeFi. It is an uncollateralized financial primitive with an elastic supply that adjusts each day according to demand in the marketplace. Ample targets the 2019 USD. Like Bitcoin, Ample is non-dilutive but it has a long-term unit of account that unlocks safe denomination of debt. The goal of Ampleforth is to create a building block for a safer, more resilient financial ecosystem.

Being able to borrow and lend AMPL would enable holders to:

- Utilize a new, low-correlated collateral asset which could reduce risk
- Decrease exposure to rebases in exchange for income from interest
- Use a non-collateralized asset that “[borrows like a stablecoin](https://medium.com/ampleforth/elastic-finance-lending-213e02de0583)"
- Create leveraged AMPL trades and unlock derivatives
- Create interest bearing AMPL that can be staked in other protocols
- Increase exposure to AMPL & farming

## Motivation
AMPL total supply and balances change once every 24 hours (at 2am UTC) based on market price. The supply change factor is the same for all holders. Because of that, lending and borrowing AMPL behaves differently from fixed supply tokens.

The desired behavior is for the borrow amount (loan) to stay the same after a rebase. The unborrowed tokens deposited in the Aave protocol still get exposed to rebase just like any other contract wallet. This means aAMPLs "partially rebase", in accordance with the utilization ratio.

The AMPL AToken functionally behaves similarly to every other AToken. It maintains a 1:1 peg with the underlying AMPL.

### Specifications

1. What is the link between the author of the AIP and the Asset?

Co-founder, developer

2. Provide a brief high-level overview of the project and the collateral token
See Summary

3. Explain positioning of token in the AAVE ecosystem: which market?

The asset will be listed in the current AAVE V2 market.

4. Provide a brief history of the project and how it overcame stressed conditions

Ampleforth launched in July, 2019. Since then, Ample has executed over 550 days of rebases. The network was subject to extreme growth and volatility following the launch of the Geyser liquidity mining program in July 2020. It has shown resilience with a lifetime median price of $1.00 and average price of $1.02 (vs target price of $1.02). There are currently over 22K holders and is a top 100 currency by Market Cap.

Onchain network history viewable on [Dashboard](https://www.ampleforth.org/dashboard/).

5. How is the asset currently used?

Ample aims to be a financial building block that supports a robust and stable financial ecosystem. Borrowing and lending is a critical layer of this stack. [Current roadmap](https://www.ampleforth.org/roadmap/).

6. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

Ample has developed deep liquidity on AMMs like Uniswap, SushiSwap, Mooniswap, and a Smart Pool on Balancer through its liquidity mining program.

https://www.coingecko.com/en/coins/ampleforth#markets

7. Social channels data (Size of communities, activity on Github)

Links above

8. Risk Assessment and Parameter suggestions

AMPL has been evaluated as low technical risk because it doesn't have any potential of infinite or uncontrolled minting.

Given the novel mechanism of rebasing, it will only be used as a borrowing currency for the time being. An evalution of whether to give it collateral status will be performed afterward.

A 3rd party Audit report from Peckshield can be found [here](https://github.com/aave/protocol-v2/blob/50290685aa3b68eea18f4a908748aafb05db96ab/audits/PeckShield-Audit-Report-aAMPL-v1.0.pdf).

### Technical Specifications

We implement a custom AToken, StableDebtToken and VariableDebtToken for AMPL. The StableDebtToken and VariableDebtToken implementations make no functional changes to the generic implementation. When the debt tokens are minted and burned, it performs some additional book-keeping to keep track of the totalScaledAMPL (fixed AMPL denomination, ie Gons) borrowed at any-time. The new getAMPLBorrowData method returns the totalScaledAMPL and totalScaledSupply which are used for AAmplToken math.

Generic AToken has a private balance and public balance. The public balance returned by balanceOf is multiplied by an interest rate factor. The aAMPL works the same way but the AAmplInternal balance is multiplied by another factor, which accounts for the underlying AMPL rebasing and the amount of AMPL unborrowed.

### Code
AAMPL token address: 0x938Eb0b3C4Bb93aF924ACbf9d3dBD444153F7Ba8
Code verified [here](https://etherscan.io/address/0x938Eb0b3C4Bb93aF924ACbf9d3dBD444153F7Ba8#code)

Steps the proposal will execute:
1. Start a vote to add aAMPL as a new asset.

### Test Cases
- [Colab Notebook](https://colab.research.google.com/drive/1a4zd7UL-U5Xrme9b0X5B39nJzjrFwfG1?usp=sharing) of test cases
- Unit tests included with code change

### Security Considerations
- Standard technical risks of smart contracts apply to the AToken implementation.
- Market risk resulting from first borrow/lending market for a rebasing currency.
