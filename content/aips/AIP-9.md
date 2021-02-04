---
aip: 9
title: Activation of the Aave Balancer Pool Liquidity Staking
status: Proposed
author: Marc Zeller (@marczeller), Hadrien Charlanes (@dhadrien)
discussions: https://governance.aave.com/t/arc-aavenomics-quarterly-upgrade/1631
created: 2021-01-27
updated: 2021-02-01
---

## AIP rationale

As stated in the [Aavenomics paper](https://aave.com/Aavenomics.pdf), the AAVE asset is designed to become the center of gravity for Aave governance and the protocol safety, The Safety Incentives (SI) allocation is designed to incentivize the lines of defenses of the Aave protocol.

AIP-1 was the first step of the activations of the lines of defenses of the Aave Protocol with the activation of the safety module, for the Safety to be as efficient as possible, it is required to reach significant liquidity of the AAVE asset on a Decentralized AMM.

This AIP aims at incentivizing the Liquidity providing for the AAVE asset on a specificaly designed smart pool of the Balancer protocol to make the AAVE asset more liquid on-chain by activation Safety Incentives (SI) for BPT tokens stakers.

ABPT (Aave Balancer Pool Token) tokens can be obtained by providing liquidity to the AAVE/ETH Balancer smart pool at a 80/20 ratio. The contract of the ABPT can be found [here](https://etherscan.io/address/0x41a08648c3766f9f9d85598ff102a08f4ef84f84).

This AIP, if accepted by the community, will start the Safety Incentive (SI) rewards distribution for ABPT stakers at the rate of 550 AAVE/day. The contract of the stkABPT can be found [here](https://etherscan.io/address/0xa1116930326d21fb917d5a27f1e9943a9595fb47).

The Safety Module is designed as an additional line of defense for Aave protocol liquidity providers and Both highliquidity and Safety module reserve can mitigate the possibility of bad debt in the occurence of a shortfall event.

## AIP content in short

- Start of the Safety Incentives for ABPT stakers with initial SI rewards of 550 AAVE/day.

## Safety Incentives Schedule

If the community accepts the current AIP, the Safety Incentives will add 550 AAVE/day to the ABPT tokens Stakers.

For a total of 1100 AAVE/day Safety Incentives allocation.

The Safety Incentive's allocation quarterly date should be voted on before the end of the 3 months (90 days) distribution schedule. In the case of a late or no vote on a new SI allocation plan, the current allocation will continue until a vote or until the ER is empty.

## Implementations details

The implementation of the AIP consist in three actions: 
- Transfer proxy ownerships of [ABPT](https://etherscan.io/address/0x41a08648c3766f9f9d85598ff102a08f4ef84f84) and [stkABPT](https://etherscan.io/address/0xa1116930326d21fb917d5a27f1e9943a9595fb47) to the Long Timelocked Governance Executor.
- Configure [stkABPT](https://etherscan.io/address/0xa1116930326d21fb917d5a27f1e9943a9595fb47) to reward stakers for 550 AAVE per day.
- Approve 550 AAVE per day for 3 months allowance from Reserve for [stkABPT](https://etherscan.io/address/0xa1116930326d21fb917d5a27f1e9943a9595fb47) rewards.

If this AIP is validated by a community vote, the following addresses will be involved in the execution process :

- [ABPT](https://etherscan.io/address/0x41a08648c3766f9f9d85598ff102a08f4ef84f84)
- [stkABPT](https://etherscan.io/address/0xa1116930326d21fb917d5a27f1e9943a9595fb47)
- [Aave Reserve Controller](https://etherscan.io/address/0x1E506cbb6721B83B1549fa1558332381Ffa61A93)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).