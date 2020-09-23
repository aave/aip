---
aip: 1
title: LEND/AAVE migration and activation of the Safety Module
status: WIP
author: Marc Zeller (@marczeller)
discussions: https://governance.aave.com/t/initial-discussion-aave-reserve-emission-for-safety-and-ecosystem-incentives/85/60
created: 2020-09-21
updated: 2020-09-23
---

## AIP rationale

As stated in the [Aavenomics paper](https://aave.com/Aavenomics.pdf), the AAVE asset is designed to become the center of gravity of Aave governance and protocol.


DeFi, decentralized ethos has been achieved with most protocols on the financial part, creating an ecosystem of financial applications with users in control and with true ownership of their own assets,
but we think that part is only the halfway point of the Decentralization objective, users are in control of their assets, they should also be be in control of their protocol the AAVE asset is designed for this purpose.
This AIP is the first binding step of this community ownership of the Aave protocol.


This AIP, if accepted by the community, will slowly deprecate the LEND asset in favour of the AAVE asset.
As stated in the Aavenomics, this token upgrade will also create the Ecosystem Reserve (ER) and the Safety Module (SM) and start the Safety Incentive (SI) rewards distribution.
The Safety Module is designed as an additional line of defense for Aave liquidity providers and as a way for AAVE holders to "stake" their assets in exchange of a range of rewards.


This AIP purpose is also to dedicate XX% of the ER to a kickstart incentive for the Safety module first stakers distributed during a quarter.

## AIP content in short

- Migration LEND -> AAVE asset with the migration contract
- Activation of the quarterly plan of Safety Incentives (SI) allocation
- Start of the Safety Module with initial SI rewards of 400 AAVE/day
- Increase of the SI rewards to XX AAVE/day after the activation of the Safety Module

## ER allocation plan

| Purpose | AAVE per day | % of the ER | Total |
|-|-|-|-|
| Safety module kickstart | 400 | xx% | xx |
| Activation of the Safety module | XXX | XXX |

The bootstrapping phase of Safety module will be a step-by-step process in 3 main phases : 
- Initial bootstrapping with launch of the safety module, the ability to stake and earn AAVE rewards but no activation of the safety module and thus riskless for stakers
- Activation of the Safety Module, increase of the AAVE SI rewards to XX AAVE/day and new line of defense for the Aave protocol users

The initial bootstrapping phase rationale is designed to have lower rewards and a riskless environment to allow the majority of LEND holders to migrate at their own pace and avoid rush sentiment while interracting with critical migrating and staking smart-contracts.

The Safety Incentive (SI) allocation plan next quarter date should be voted before the Xx/XX/202x, in case of late or no vote on a new SI allocation plan, the current allocation will continue until a vote or ER being empty.

## Mainnet addresses and relevant notes

If this AIP is validated by a community vote, the following addresses will be involved in the migration process :

- 0x000 : LendToAaveMigrator, [ABI](LINK) : The migration contract
- 0x000 : AAVE token contract, [ABI](placeholder) : the ERC20 AAVE token contract
- 0x000 : StakedAave, [ABI](placeholder) : The Staking contract for AAVE
- 0x000 : AaveGenesisPayloadProposal, [ABI](placeholder) : Contract in charge of enforcement of the AIP outcome
- 0x000 : AaveGenesisExecutor, [ABI](placeholder) : Contract enforcing a 24h delay on enforcement of AIP outcome to allow the community to be prepared to migrate
- 0x000 : AaveIncentivesVault, [ABI](placeholder) : Vault contract storing the Ecosystem Rewards reserve of 3M AAVE tokens


The migration process for every LEND holder will leverage the method migrateFromLend() with a simple `uint 256` input of the `amount`, non-technical users will have a migration portal available on the [Aave application](app.aave.com/placeholder)

The contracts are deployed to the Ethereum mainnet but are **not activated until the outcome of the current AIP vote**.
Please refrain from trying to use them before activation, it will result in a failed transaction.

## AIP Editors

The current AIP editors are

`* David Truong (@mrdavey)`

`* Emilio Frangella (@The-3d)`

`* Ernesto Boado (@ernesto-usal)`

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
