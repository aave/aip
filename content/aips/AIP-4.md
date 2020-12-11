---
aip: 4
title: Activation of Aave Protocol Governance V2
status: WIP
author: Marc Zeller (@marczeller)
discussions: https://governance.aave.com/t/arc-activation-of-aave-protocol-governance-v2/1717
created: 2020-12-11
updated: 2020-12-11
---

## AIP rationale

Aave V2 governance is inspired by delegation-based governance models already on the market, while introducing 3 key innovations and a new layer of resilience:

The introduction of a new concept in DeFi governance - the **segregation between voting and proposition power** to increase control and ownership of voting rights for AAVE holders.
AAVE holders will have the choice between delegating proposal creation power to specialized actors while holding their voting rights; or even delegating them to another entity.

**Voting strategies** - The AAVE token exists and is used in the Aave ecosystem in a variety of ways. Through different voting strategies, AAVE in different forms can be used to vote. In the initial implementation both AAVE and stkAAVE holders will have voting rights. Voting strategies can be upgraded at any time through a governance proposal to include other forms of AAVE (i.e. aAAVE, staked AAVE/ETH AMM shares, etc.)

**Multiple executor entities** - Different components of the ecosystem might have different needs for consensus and security. For example, changing the AAVE token logic itself might have a large impact on the ecosystem and is something that requires higher consensus than adjusting a risk management parameter. The Aave governance V2 splits the control of different entities within the Aave ecosystem between different executors with different execution delays (timelocks) and different consensus parameters. At the beginning there will be two different executors:

**a.** Executor 1 (short timelock) will control the whole Aave Protocol v1, the token distributor used in v1, the contract collecting the v1 fees, the AAVE Reserve Ecosystem and any change in this timelock itself. Once the break-in period for Aave V2 is completed, this timelock will also control the current Aave V2 market and all the future markets instantiated by the Aave Genesis Team.

- admin : Aave Governance v2
- delay : 1 day
- grace period : 5 days
- proposition threshold: 0.5%
- voting duration: 3 days
- vote differential: 0.5%
- Approval quorum: 2%

**b.** Executor 2 (long timelock) will control the upgradeability of the AAVE token, stkAAVE, any change in v2 governance parameters and any change in the parameters of this timelock itself.

- admin: Aave Governance v2
- delay: 7 days
- grace period: 5 days
- proposition threshold: 2%
- voting duration: 10 days
- vote differential: 15%
- Approval quorum: 20%

The Guardian - As long as a large majority of AAVE tokens are in a centralised exchange, it’s impossible to prevent a STEEM-like governance attack where a centralised entity would use its users’ assets to take over a decentralised protocol through governance. As a security measure to avoid such a scenario, a temporary 5/10 multisig is given a power of veto to cancel proposals in case malicious code is introduced through an AIP. Those entities have been chosen within the AAVE community to be globally distributed, and they cover safety skill sets through governance, code, and economic analysis. Guardians can be changed later through election.
The current multisig signers are : James Vaugh (Fire Eyes/Metacartel), Anthony Sassano (SET protocol/ETHhub/Daily Gwei), Mariano Conti (ex MakerDAO head of smart contracts), Tarun Chitra (Gauntlet), DeFiSaver, Zerion, Parafi Capital, Framework Venture, Arthur0x and the Aave Genesis Team
Some of the expected short-term outcomes of this implementation are new actors creating proposals for token additions, risk parameter upgrades or new liquidity market creation.

## AIP content in short

- Implementation of voting delegation and proposal power delegation
- Implementation of voting strategies with the inclusion of AAVE and StkAAVE
- Implementation of Executor entities
- Implementation of the Guardian


## Implementation details

Creating a Governance V1 Proposal vote with the proposal executor at https://etherscan.io/address/0xd194b24913806fc885f1fecd3e776f8449e5e24a#code

If the proposal passes:

a. The new Aave Token logic implementation will be https://etherscan.io/address/0xc13eac3b4f9eed480045113b7af00f7b5655ece8#code which includes the new delegation capabilities.

b. The new StakeToken logic implementation will be https://etherscan.io/address/0xc0d503b341868a6f6b6e21e0780aa57fdbbca53a#code which includes the new delegation capabilities.

c. The upgradeability permissions over the AAVE and stkAAVE tokens will be moved to the long executor on https://etherscan.io/address/0x61910ecd7e8e942136ce7fe7943f956cea1cc2f7#code

d. All the permissions on V1 of the protocol will be moved to the short executor.

e. The permissions over the contract of the Ecosystem’s Reserve will be moved the short executor on https://etherscan.io/address/0xee56e2b3d491590b5b31738cc34d5232f378a8d5#code

At this point, the Governance V2 on https://etherscan.io/address/0xec568fffba86c094cf06b22134b23074dfe2252c#code  will be operative, accepting submission of new proposals
  
## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
