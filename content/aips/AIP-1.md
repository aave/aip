---
aip: 1
title: LEND/AAVE migration and activation of the Safety Module
status: WIP
author: Marc Zeller (@marczeller)
discussions: https://governance.aave.com/t/initial-discussion-aave-reserve-emission-for-safety-and-ecosystem-incentives/85/60
created: 2020-09-21
updated: 2020-09-25
---

## AIP rationale

As stated in the [Aavenomics paper](https://aave.com/Aavenomics.pdf), the AAVE asset is designed to become the center of gravity for Aave governance and the protocol.


The DeFi decentralized ethos has been mostly achieved with protocols on the financial side, creating an ecosystem of financial applications with users in control of their own assets. However, we believe that is only the halfway point of the decentralization objective. Users should also be be in control of the protocol. The AAVE asset is designed for this purpose. This AIP is the first binding step towards the community ownership of the Aave Protocol.


This AIP, if accepted by the community, will slowly deprecate the LEND asset in favour of the AAVE asset. As stated in the Aavenomics, this token upgrade will also create the Ecosystem Reserve (ER), the Safety Module (SM), and start the Safety Incentive (SI) rewards distribution. The Safety Module is designed as an additional line of defense for Aave liquidity providers and as a way for AAVE holders to "stake" their assets in exchange for a range of rewards.


This AIP's purpose is also to dedicate a part of the ER to a kickstart incentives for the Safety Module's first quarterly staker distribution.

## AIP content in short

- Migration of LEND -> AAVE asset with the migration contract
- Activation of the quarterly plan of Safety Incentives (SI) allocation
- Start of the Safety Module with initial SI rewards of 400 AAVE/day

## Safety Incentives Schedule

The bootstrapping phase of the Safety Module will be a step-by-step process in 2 main phases:
- Initial bootstrapping with launch of the Safety Module, the ability to stake and earn AAVE rewards, but no activation of the protocol protection (i.e slashing) and thus risk-free for stakers.
- Activation of the Safety Module, a new line of defense for the Aave Protocol users.

The initial bootstrapping phase rationale is designed to have lower rewards and a risk-free environment to allow the majority of LEND holders to migrate at their own pace. This encourages a careful approach while interacting with critical migration and staking smart-contracts.

After activation of the Safety Module, the Aave governance can adjust the Safety Incentive (SI) schedule and emissions rate.

The Safety Incentive's allocation quarterly date should be voted on before the end of the 3 months (90 days) distribution schedule. In the case of a late or no vote on a new SI allocation plan, the current allocation will continue until a vote or until the ER is empty.

## Mainnet addresses and relevant notes

If this AIP is validated by a community vote, the following addresses will be involved in the migration process :

- [0x8a2efd9a790199f4c94c6effe210fce0b4724f52](https://etherscan.io/address/0x8a2efd9a790199f4c94c6effe210fce0b4724f52) AaveProtoGovernance : the governance contract
- [0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9](https://etherscan.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9#code) AAVE token contract : the ERC20 AAVE token contract
- [0x4da27a545c0c5b758a6ba100e3a049001de870f5](https://etherscan.io/address/0x4da27a545c0c5b758a6ba100e3a049001de870f5) StakedAave : The Staking contract for AAVE
- [0x317625234562b1526ea2fac4030ea499c5291de4](https://etherscan.io/address/0x317625234562b1526ea2fac4030ea499c5291de4) LendToAaveMigrator The migration contract
- [0x95a4949f09415b12da789e144b2522956620d005](https://etherscan.io/address/0x95a4949f09415b12da789e144b2522956620d005) AaveGenesisPayloadProposal : Contract in charge of enforcement of the AIP outcome
- [0xa133459b2502b0137e85a446fa8d4e300877a007](https://etherscan.io/address/0xa133459b2502b0137e85a446fa8d4e300877a007) AaveGenesisExecutor : Contract enforcing a 24h delay on enforcement of AIP outcome to allow the community to be prepared to migrate
- [0x25f2226b597e8f9514b3f68f00f494cf4f286491](https://etherscan.io/address/0x25f2226b597e8f9514b3f68f00f494cf4f286491#code) AaveIncentivesVault : Ecosystem Reserve


The migration process for every LEND holder will leverage the method `migrateFromLend()` with a simple `uint256` input of the amount. Non-technical users will have a migration portal available on the [Aave application](https://aave.com/)

The contracts are deployed to the Ethereum mainnet but are **not activated until the outcome of the current AIP vote**. Please refrain from trying to use them before activation, as it will result in a failed transaction.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
