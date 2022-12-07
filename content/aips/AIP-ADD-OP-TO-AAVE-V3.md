---
title: Add OP to Aave V3 on Optimism
author: Ben Jones
shortDescription: Add OP as collateral asset to Aave V3 on Optimism
discussions: https://governance.aave.com/t/arc-add-op-as-collateral-to-aave-v3/9087
created: 2022-10-04
updated: 2022-12-07
---

## Author

Founder of OP Labs and a director at Optimism Foundation

## Forum post

[Proposal to add OP as collateral on Aave V3 (On Optimism)](https://governance.aave.com/t/arc-add-op-as-collateral-to-aave-v3/9087)

## Summary

The proposal seeks to onboard the OP token as a collateral asset in Aave V3 on Optimism.
The Optimism Foundation could also seed incentives while the initial liquidity of the pool is bootstrapped.

## Risk Parameters

The complete technical and risk parameters:

- Loan-to-value: 30.00%
- Liquidation threshold: 40.00%
- Liquidation bonus: 10.00%
- Price feed: OP/USD | Chainlink
- A/S/V tokens (aToken/Variable/Stable): Standard implementation
- Interest rate strategy: N/A
- Borrowing enabled: No
- Stable borrowing Enabled: No
- Reserve Factor: 20.00%
- Liquidation Protocol Fee: 10.00%
- Debt Ceiling: 2M
- Borrowable in Isolation: No
- Supply Cap: 20M
- Borrow Cap: N/A
- eMode (efficiency mode): No
- Unbacked Mint Cap: 0
- Siloed Borrowing: N/A

## Specifications

**What is the link between the author of the AIP and the Asset?**

Cofounder of Optimism and a director at the Optimism Foundation

**Provide a brief high-level overview of the project and the token**

Optimism is an EVM equivalent L2 scaling solution. The OP token is a governance token for the Optimism Collective.
OP holders are currently able to vote on various decisions impacting the Collective, including the grants, protocol upgrades, inflation adjustments, and other fundamental changes.
The Collective is committed to an iterative governance system that will evolve dynamically over time.
Optimism hopes to use the launch of this token to establish a deeper partnership between the Optimism and Aave communities.
This proposal would enable OP as collateral on AAVE V3 on Optimism.

**Explain positioning of the token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?**

With the recent release of the OP token, we want to bolster initial growth for Aave V3 on Optimism. This will benefit the Aave community by creating a vibrant ecosystem around Aave V3, while being a strong first use case for OP.

Aave would be one of the first platforms to support OP as collateral. The OP token is one of the first and leading rollup technology ecosystem tokens, so the Aave community would be supporting the scaling of Ethereum and onboard the cohort of users coming with it.
L2s being the home for AAVE v3 could also gain a lot from this synergy.

Overall, the use cases will create the opportunity to continue growing liquidity and usage of the Aave v3 pools on Optimism.

**Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?**

Initially launched at the end of 2021, Optimism is an EVM equivalent L2 scaling solution. Optimism currently supports 100+ dapps and over $500m in on-chain value.
Optimism drastically improves Ethereum’s scalability while retaining its security through rollup technology - having already saved its users over $1B in gas fees.

**How is the asset currently used?**

It is used for governance on Optimism.

**Emission schedule**

At genesis there was an initial total supply of 4,294,967,296 OP tokens. The total token supply is set to inflate at a rate of 2% per year, unless changed through governance.

**Token (& Protocol) permissions (minting) and upgradability.**

**Is there a multisig? What can it do? Who are the signers?**

There is a multisig. It coontrols all funds in the chain. Members are anonymous in order to make the multisig more difficult to compromise.

## Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

- Market Cap: ~$202M
- 24h Volume: >$150M
- Volatility: Low
- Exchanges: Uniswap, Velodrome, Sushi
- Maturity: Launched 5/31/21
- Communities:
- Discord - https://discord-gateway.optimism.io/
- Twitter - https://twitter.com/OptimismFND
- Mirror - https://optimism.mirror.xyz/
- Twitch - https://www.twitch.tv/optimismpbc

- Date of deployment: May 31, 2021
- Number of transactions: 12M
- Number of holders: ~134k

## Security Considerations

OP has undergone audits. Constant internal reviews are performed to ensure OP’s economic and technical safety.

The protocol currently has around $936.43M TVL.

## Other links

Contract addresses: [0x4200000000000000000000000000000000000042](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000042)

Chainlink Oracle: [0x0D276FC14719f9292D5C1eA2198673d1f4269246](https://optimistic.etherscan.io/address/0x0D276FC14719f9292D5C1eA2198673d1f4269246) (Optimism)

## Proposal's technical implementation

This asset listing will be executed via Aave's cross-chain governance module, described here: [https://github.com/aave/governance-crosschain-bridges](https://github.com/aave/governance-crosschain-bridges).

Proposal Payload on Optimism: [0x6f76EeDCB386fef8FC57BEE9d3eb46147e488eEF](https://optimistic.etherscan.io/address/0x6f76EeDCB386fef8FC57BEE9d3eb46147e488eEF#code)

BGD Labs has provided support on the technical aspects of the listing and Certora has reviewed the proposal's payload.
