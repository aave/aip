---
aip: <to be assigned>
title: Adding AMPL on AAVE
status: Proposed
author: Brandon Iles (@brandoniles), Nithin Ottilingam (@nithinkrishna)
discussions: https://governance.aave.com/t/proposal-add-support-for-ampl/854
created: 2021-01-12
updated (*optional): N/A
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
Short description of the proposed technical solution

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

Analysis based on Aave’s Asset Risk Framework is pending.

### Technical Specifications

### Code
A custom implementation of the aToken https://github.com/aave/protocol-v2/pull/66


### Test Cases
- [Colab Notebook](https://colab.research.google.com/drive/1a4zd7UL-U5Xrme9b0X5B39nJzjrFwfG1?usp=sharing) of test cases
- More soon.

### Security Considerations
- Standard technical risks of smart contracts apply to the aToken implementation.
- Market risk resulting from first borrow/lending market for a rebasing currency.
