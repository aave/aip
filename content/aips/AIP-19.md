---
aip: 19
title: Whitelist Curve Liquidity Mining Claim
status: Proposed 
author: Julien Bouteloup (@bneiluj)
shortDescription: Whitelist Curve Liquidity Mining Claim
discussions: https://governance.aave.com/t/proposal-introduce-liquidity-incentives-for-aave-v2/2340
created: 2021-05-03
updated: 2021-05-03
---

## AIP rationale

With the results of AIP-16, A liquidity mining program started on the Aave V2 protocol.

Many protocol took this opportunity to reinforce their synergies with Aave and deposit liquidity on Aave on behalf of their users.

For some protocols based on immutable contracts, participating in the Liquidity mining program requires some slight governance intervention on both sides.

Curve.finance is one of them, they implemented via a community work the compability with the Aave liquidity for their Aave and sAave pools : https://dao.curve.fi/vote/ownership/45

It's now up to the Aave community to strengthten this synergy on Aave side allowing Curve users depositing into Aave to collect both CRV & StkAAVE rewards.

# AIP content in short

* Set Curve contract as claimers in the incentives controller contract.

# Relevant Links

* AIP-16 enforcing liquidity mining on Aave V2: https://app.aave.com/governance/11-Qmf1JeXiw8BDUoKJ89VmUJ8wy22D2udqL4HxprCG7DZ5zG
* Curve governance vote: https://dao.curve.fi/vote/ownership/45


## Implementations details

call `setClaimer()` for Curve contracts on `INCENTIVES_CONTROLLER_PROXY_ADDRESS` 

Link to incentives controller proxy : https://etherscan.io/address/0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5#readProxyContract

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
