---
aip: AIP-add_renFIL_support
title: Add renFIL support to Aave
status: WIP
author: Corbin Page (@corbinpage)
discussions: [Aave Forum](https://governance.aave.com/t/proposal-add-support-for-renfil-filecoin/1059)
created: 2021-02-03
updated (*optional): N/A
requires (*optional): <AIP number(s)>
---

<!--You can leave these HTML comments in your merged AIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new AIPs. Note that an AIP number will be assigned by an editor. When opening a pull request to submit your AIP, please use an abbreviated title in the filename, `AIP-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the AIP.-->

Add depositing and borrowing (not collateral) support for renFIL to the Aave market. renFIL is a wrapped version of [Filecoin](https://filecoin.io/) using [Ren Protocol](https://renproject.io/).

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

[Filecoin](https://filecoin.io/) brings decentralized storage to DeFi, and [renFIL](https://renproject.io/) allows all types of new decentralized applications to be built to further the space. But these applications need a robust lending market to thrive, so storage miners can borrow renFIL/FIL to stake and FIL holders can earn a return on their holdings.

This proposal describes adding depositing and borrowing (not collateral) support for renFIL to the Aave market to unlock these new applications, expose the Filecoin community to Aave, and create a large new market on the protocol. [Ren Protocol](https://renproject.io/) was chosen as the tokenization service because it is already managing large bridges in production, including [$301 million in renBTC](https://www.coingecko.com/en/coins/renbtc) as of this writing. Collateral support for renFIL may be added later, but we recommend waiting for more price stability of FIL and renFIL before enabling.

## Motivation

<!--The motivation is critical for AIPs that want to change Aave. It should clearly explain why the existing protocol specification is inadequate to address the problem that the AIP solves. AIP submissions without sufficient motivation may be rejected outright.-->

Filecoin, and by extension, renFIL is unlike any other digital asset currently available in the Aave market, as it allows the purchase of hosting space on the permissionless Filecoin network. As a result, being able to lend and borrow renFIL will unlock many new DeFi applications, including:

* Storage mining syndicates
* Data markets
* Shared UIs/images/content
* Lossless capital hosting

Just see the recent [EthGlobal<>Protocol Labs Hackathon](https://hack.ethglobal.co/hackfs/showcase) and [Filecoin Launchpad](https://www.filecoinlaunchpad.co/)for hints of what is possible at the intersection of Filecoin+DeFi. The Filecoin community is massive and growing everyday, however, many of the participants are unfamiliar with Aave and DeFi. Adding renFIL to Aave would dramatically increase support for these efforts, would bring Filecoin users/developers into the Aave ecosystem, and allow capital, yield, and value to accrue to Aave participants.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

### Project
Filecoin is a distributed storage network based on a blockchain mechanism. Filecoin miners can elect to provide storage capacity for the network, and thereby earn units of the Filecoin cryptocurrency (FIL) by periodically producing cryptographic proofs that certify that they are providing the capacity specified. In addition, Filecoin enables parties to exchange FIL currency through transactions recorded in a shared ledger on the Filecoin blockchain. Rather than using Nakamoto-style proof of work to maintain consensus on the chain, however, Filecoin uses proof of storage itself: a miner’s power in the consensus protocol is proportional to the amount of storage it provides.

Filecoin was founded in 2015 by [Juan Benet](https://twitter.com/juanbenet), has been backed by Sequoia Capital, Andreessen Horowitz, and Union Square Ventures, and its mainnet went live on October 15, 2020. The network is governed by the Filecoin Foundation and the Filecoin Foundation for Decentralised Web.

#### Links
* [Website](https://filecoin.io/)
* [Filecoin Spec](https://spec.filecoin.io/)
* [Github](https://github.com/filecoin-project/)
* [Twitter](https://twitter.com/Filecoin)
* [Slack](https://app.slack.com/client/TEHTVS1L6/learning-slack)

### Proposal Author
Corbin Page is Head of Product for [ConsenSys Codefi](https://codefi.consensys.net), which provides tokenization, trading, and compliance products for the DeFi sector and recently announced support for Filecoin in its [Activate platform](https://activate.codefi.network/filecoin). He believes that having a strong Aave market combining decentralized storage and decentralized finance will spur more progress and adoption of web3 technologies.

### Market & Usage
The Filecoin network went live on October 15, 2020. [View the network health here](https://stats.filecoin.io/d/z6FtI92Zz/filecoin-chain-stats?orgId=1&refresh=30s&from=now-30m&to=now&kiosk).

[Ren Protocol](https://renproject.io/) was chosen as the tokenization service because it is already managing large bridges in production, including [$301 million in renBTC](https://www.coingecko.com/en/coins/renbtc) as of this writing. The renFIL token is not yet live on Ethereum mainnet, so no market data is known quite yet.

### Risks
- Smart Contract Risk - Low: Ren Protocol's smart contracts are already doing hundreds of millions in volume and have been battle tested.
- Counter Party Risk - Medium: Ren Protocol maintains some control over the nodes running the cross-chain bridge but is actively working on rolling out [progressive decentralization](https://medium.com/renproject/renvm-and-the-road-to-decentralisation-72213c3bee3a) to remove itself as a dependency.
- Market Risk - Low: Since renFIL is not being added as collateral, the market risk remains low.

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The REN token is already supported in the Aave market, and renBTC is one of the most popular cross-chain tokens today. In unifying the Filecoin and DeFi ecosystems, Ren protocol is a natural bridge and has the technical expertise and experience to get the job down securely and safely.

## Test Cases

<!--Test cases for an implementation are mandatory for AIPs but can be included with the implementation..-->

Test cases will be included with the implementation.

## Implementation

<!--The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

_TBD_

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
