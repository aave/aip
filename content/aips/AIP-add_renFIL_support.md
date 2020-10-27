---
aip: AIP-add_renFIL_support
title: Add renFIL support to Aave
status: WIP
author: Corbin Page (@corbinpage)
discussions: [<Discord Channel or ]Github issues](https://github.com/corbinpage/aip/issues)
created: 2020-10-27
updated (*optional): N/A
requires (*optional): <AIP number(s)>
---

<!--You can leave these HTML comments in your merged AIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new AIPs. Note that an AIP number will be assigned by an editor. When opening a pull request to submit your AIP, please use an abbreviated title in the filename, `AIP-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the AIP.-->

Add depositing and borrowing (not collateral) support for renFIL to the Aave market. renFIL is a wrapped version of [Filecoin](https://filecoin.io/) using the [Ren Protocol](https://renproject.io/).

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

[Filecoin](https://filecoin.io/) brings decentralized storage to DeFi, and [renFIL](https://renproject.io/) allows all types of new decentralized applications, including truly unstoppable UIs, data markets, storage mining syndicates, and more. But these applications need a robust lending market to thrive, so storage miners can borrow renFIL/FIL to stake and FIL holders can earn a return on their holdings. The Filecoin community is massive and growing everyday, however, many of the participants are unfamiliar with Aave and DeFi.

This proposal describes adding depositing and borrowing (not collateral) support for renFIL to the Aave market to unlock these new applications, expose the Filecoin community to Aave, and create a large new market on the protocol. [Ren Protocol](https://renproject.io/) was chosen as the tokenization service because it is already managing large bridges in production, including [$301 million in renBTC](https://www.coingecko.com/en/coins/renbtc) as of this writing. Collateral support for renFIL may be added later, but we recommend waiting for more price stability of FIL and renFIL before enabling.

## Motivation

<!--The motivation is critical for AIPs that want to change Aave. It should clearly explain why the existing protocol specification is inadequate to address the problem that the AIP solves. AIP submissions without sufficient motivation may be rejected outright.-->

The motivation is critical for AIPs that want to change Aave. It should clearly explain why the existing protocol specification is inadequate to address the problem that the AIP solves. AIP submissions without sufficient motivation may be rejected outright.

Filecoin, and by extension, renFIL is unlike any other digital asset currently available in the Aave market, as it allows the purchase of hosting space on the permissionless Filecoin network. As a result, being able to lend and borrow renFIL will unlock many new DeFi applications, including:

* Storage mining syndicates
* Data markets
* Shared UIs/images/content
* Lossless capital hosting

Just see the recent [EthGlobal<>Protocol Labs Hackathon](https://hack.ethglobal.co/hackfs/showcase) for hints of what is possible at the intersection of Filecoin+DeFi. Adding renFIL to Aave would dramatically support these efforts, would bring Filecoin users/developers into the Aave ecosystem, and allow capital, yield, and value to accrue Aave participants.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

The technical specification should describe the syntax and semantics of any new feature.

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->



## Test Cases

<!--Test cases for an implementation are mandatory for AIPs but can be included with the implementation..-->

Will be included in the implementation.

## Implementation

<!--The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

_TBD_

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
