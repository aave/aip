---
aip: <to be assigned>
title: <Aave Grants DAO>
status: WIP
author: Shreyas Hariharan (@hello-shreyas)
shortDescription: <Introduce Aave Grants DAO>
discussions: <https://governance.aave.com/t/arc-aave-community-grants-program/3642>
created: <2021-04-23>
updated: N/A
---

## Simple Summary

Introduce the Aave Grants DAO (AGD) to fund ideas submitted by the Aave community.

## Abstract

We propose starting a community-led grants DAO to fund ideas submitted by the Aave community, with a focus on empowering a wider network of community developers. The pilot program will be over two quarters. The grants budget will be $1 million per quarter and the operating budget will be $250,000 over two quarters. The operating budget will be used to pay the lead, reviewers, lawyer, and other administrative costs to set up the grants program. A committee of 8 members, including one lead, will oversee the grants program. 

If this AIP is approved, 2,809 AAVE ($1.25 million) will be transferred from the [Ecosystem Reserve](https://etherscan.io/address/0x25f2226b597e8f9514b3f68f00f494cf4f286491) to the [grants DAO multisig](https://gnosis-safe.io/app/#/safes/0x89C51828427F70D77875C6747759fB17Ba10Ceb0/balances). The remaining $1 million will be funded in the beginning of the second quarter of the grants program.

## Motivation

Aave has an ecosystem reserve of $1.2B or 2.7m AAVE as of 4/27/21, which is available to fund growth and community initiatives, part of which could be used to fund grants. However, it is currently not easy for the community to allocate from the reserve to fund proposals.

To promote inclusivity and a more visible and transparent avenue for funding development in the Aave ecosystem, while maintaining the decentralized nature of the ecosystem, we propose a community-led grants program called Aave Grants DAO.

The goal of the program is to provide resources to grow the Aave ecosystem in a way that can scale over time. There are many great ideas for improving the Aave protocol bubbling up in the Discord, community forum and other places. We hope to initiate a community-led, transparent process for connecting those developers/creators/innovators with resources needed to go from idea to funded development.

Given the difficulty of decentralizing grants administration, we propose establishing a committee which has the power to administer grants on a discretionary basis. The focus will be on disbursing grant funding effectively and quickly to individuals and teams working to improve the Aave ecosystem.

## Rationale

Our proposal is inspired by the grants programs of Compound and Uniswap, which have both received approvals to deploy $1m and $750k per quarter, respectively.

We propose to run the pilot grants program over two quarters. We request a max grants budget of $2m and a max operating budget of $250k. The operating budget will be used to pay the lead, reviewers, lawyer, and other administrative costs to set up the grants program.

There will be two types of grants that the grants committee can approve:
1. Rapid grants: <$100k, simple process to apply for a grant to AGD, relatively quick grant decision
2. Community grants: $100k-$500k, initial application followed by posting proposal on governance forum, committee can decide to approve these grants based on feedback from community

Contributors can also seek grants over $500k but they will not go through the committee. They will have to be posted on Aave’s governance forum and approved through an on-chain vote.

The expenses will be priced in USD terms at the beginning of each quarter. The reviewers will ensure that all unspent funds will be returned to the Ecosystem Reserve at the conclusion of the pilot. If the program is underfunded because AAVE’s token price falls significantly, the committee may request the underfunded amount from governance. After running the pilot program for two quarters, the community can vote to continue, modify, or discontinue the program.

Applications will be reviewed and funded on a rolling basis. The applications approved and funded within each quarter will form a funding round which will be tracked, supported and documented.

Documentation of results will be made available to the community at the end of each round, at which point we will solicit feedback from the community. The idea is to start with a rough MVP and evolve through community feedback. We expect to learn a lot about how to do this right in the first 2 quarters and anticipate making changes to the grants program over time through subsequent proposals.

## Committee Members

We propose a committee of 8 members: 1 lead and 7 reviewers. The lead will be the organizational backbone of the program and ensure that things move smoothly and efficiently. The lead will likely dedicate a significant amount of time to the program.

Reviewers will process applications, ensure that the lead is acting in good faith and is effective in their role, and will operate a 4 of 7 multisig which disburses funds to grantees. The reviewers will also hold the program accountable to its goals and objectives and return any excess funds to the Aave Ecosystem Reserve. Reviewers are likely to dedicate a smaller amount of time to the program.

Both the lead and the reviewers will serve for a period of two quarters. After two quarters, the grants program and the committee member positions will be up for renewal. This will be put up on the governance forum for a discussion and subsequent on-chain vote.

Members may be replaced during the pilot program, for example, if they find they are not able to dedicate sufficient time to the program. We aim to be as transparent as possible and get feedback on the Aave forum if there are any changes to the committee during the program.

The committee is composed as follows:

Lead: [Shreyas Hariharan](https://twitter.com/HelloShreyas) - Llama

Shreyas is the founder of Llama, which helps DeFi protocols and DAOs manage their treasury. He has actively worked on treasury spending, allocation, and reporting. He is working on a treasury strategy for Uniswap and serving as a reviewer for Uniswap grants. As an Aave community member and token holder, he is excited to help grow the Aave ecosystem through the grants program.

Reviewers:

1. [Aleks Larsen](https://twitter.com/_alekslarsen) - Blockchain Capital
2. [Jose Maria Macedo](https://twitter.com/ZeMariaMacedo) - Delphi Digital
3. [Imran Khan](https://twitter.com/lmrankhan) - DeFi Alliance
4. [Maggie Love](https://twitter.com/melove_07) - W3BCLOUD and SheFi
5. [Corbin Page](https://twitter.com/corbpage) - ConsenSys Codefi
6. [Nick Cannon](https://twitter.com/inkymaze) - Gauntlet
7. [Calvin Chu](https://twitter.com/calchulus) - Independent

## Budget

We request a max grants budget of $2m to distribute grants and a max operating budget of $250k over two quarters to pay the lead, reviewers, lawyer, and other administrative costs to set up the grants program. This will be funded by the Aave Ecosystem Reserve.

Payments to the lead will be approved by the reviewers and made at the end of every month (i.e., if the program begins on 4/30/21, the lead will be paid on 5/30/21, and the again on 6/30/21 and 7/30/21 based on hours worked). Payments to reviewers will also be made every month based on hours worked.

Any changes to the AGD including renewal of the program at the end of 2 quarters, total quarterly budget and committee compensation will require full quorum.

## Committee Compensation

We suggest compensation for the lead roughly in line with the initial Uniswap and Compound proposals - $100/hr for a maximum of 40 hrs/week. This compensation will be allocated to the AGD multisig from the Aave Ecosystem Reserve as part of the overall funding for the program.

The time commitment for the reviewers is likely to be far lower. The compensation for reviewers will be $100/hr for a maximum of 5 hrs/week.

## Priorities

To help inform the types of grants which are most likely to get funded, we highlight the following target areas:

1. Protocol development (including core Aave protocol development, development of higher layer protocols which use the Aave protocol)
2. Applications and integrations (front-ends and other applications that use the Aave protocol)
3. Developer tooling
4. Community (marketing and educational)
5. Committees, sub-committees, and DAOs that serve the Aave ecosystem
6. Code audits
7. Events and hackathons
8. Bounties

## What does success look like?

We will evaluate the success of the program against the following criteria:

Measurable criteria:

1. Growth in the number of grants applications received quarter-over-quarter
2. Growth in the number of projects, ideas, and events funded
3. Growth in community engagement (e.g. increased activity on forums, Discord, etc.)
4. Growth in Aave pools driven by applications funded via grants (e.g. increased TVL, borrow activity, and unique addresses due to apps funded by grants)

Subjective criteria:

1. Improved sentiment and goodwill within the community
2. Improvement to the Aave protocol’s brand and positioning in the market

## Timeline / Process

We will organize grant recipients into two 3-month funding rounds. Applications will be accepted on a rolling basis and any grants disbursed during a given 3-month period become part of the corresponding round. Round 1 will be for three months from the day the grants proposal has been approved. For example, if the proposal is approved on 4/30/2021, Round 1 of the grants program will be from 4/30/2021 to 7/30/2021 and Round 2 of the grants program will be from 7/30/2021 to 10/30/2021.

If approved, starting immediately after a proposal is ratified, AGD will begin accepting applications on a rolling basis. The grants committee will determine on how funding is to be disbursed (e.g. milestones, upfront, etc.) on a case-by-case basis. In general, the goal will be to align long-term incentives with the interests of the Aave community and AAVE holders.

At the end of each round, the committee is responsible for sharing all the grant recipients along with amounts and descriptions as part of a transparent quarterly review process. The end of the Round 2 marks the end of the pilot. At that point, the community will decide based on the results of the first two rounds whether or not to continue funding AGD (in the same or an amended form).

Most grants will have 1-2 milestones and recipients will receive about half the grant upfront and half on the completion of a milestone. For more complex projects or larger grants, there may be several milestones and payments could be split across these milestones. AGD will get progress updates from teams and assess the completion of these milestones. This ensures downside protection for the AGD in case the project is unsuccessful or needs to pivot.

The grants will primarily be focused on projects working to improve the Aave protocol. However, a small portion of the budget (5-10%) may be allocated to select projects with a wider scope (e.g. ETH scalability).

If AGD has distributed all grants but has more promising projects to fund, it can propose increasing the budget to governance. However, it is entirely up to the Aave community to vote on whether to increase the budget.

## Implementation

If this AIP is approved, 2,809 AAVE ($1.25 million) will be transferred from the [Ecosystem Reserve](https://etherscan.io/address/0x25f2226b597e8f9514b3f68f00f494cf4f286491) to the [grants committee multisig](https://gnosis-safe.io/app/#/safes/0x89C51828427F70D77875C6747759fB17Ba10Ceb0/balances). $1 million will fund the first quarter of Aave grants and $250,000 will cover two quarters of operating expenses for the program. The remaining $1 million will be funded in the beginning of the second quarter of the grants program.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
