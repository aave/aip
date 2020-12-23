---
aip: <to be assigned>
title: Adding GUSD on AAVE
status: WIP
author: Gemini
discussions: https://governance.aave.com/t/proposal-add-support-for-gemini-gusd/384
created: 23.12.2020
updated:
---

<!--You can leave these HTML comments in your merged AIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new AIPs. Note that an AIP number will be assigned by an editor. When opening a pull request to submit your AIP, please use an abbreviated title in the filename, `AIP-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the AIP.-->
The Gemini dollar is a cryptographic token that is issued by Gemini, strictly pegged 1:1 to the U.S. dollar, and built on the Ethereum network according to the ERC20 standard for tokens.


## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Add GUSD to the AAVE V2 market.

## Motivation
<!--The motivation is critical for AIPs that want to change Aave. It should clearly explain why the existing protocol specification is inadequate to address the problem that the AIP solves. AIP submissions without sufficient motivation may be rejected outright.-->
GUSD is an additional fiat on-ramp into the DeFi ecosystem that will help diversify fiat sources inside of AAVE markets.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
GUSD can be exchanged for USD at a fixed 1:1 rate on the Gemini exchange. I have personally tested this out and was impressed with the results: withdraw of GUSD from Gemini exchange was sent within 1 minute using fast gas, and deposit back into Gemini was credited within ~17 block confirmation. It should be possible for liquidators (who are willing/able to KYC) to flip GUSD collateral directly through Gemini for the time being. GUSD also has a few trading pairs on other centralized exchanges such as OKEx, HitBTC, and ZB. I plan on submitting a proposal to create a GUSD Curve pool in the near future as well, if this is supported by veCRV voters the on-chain liquidity for GUSD should improve substantially.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Benefits for Aave:

Diversification of centralized assets: GUSD relies on a different issuer and custodian compared to USDC, TUSD, USDT, or BUSD. Credit, custody, or regulatory risks may be less correlated across these assets, which could reduce risk to Aave security module stakers.
New DeFi on/off ramp: Gemini has good linkage with US bank wire and ACH networks, comparable to Coinbase as a fiat ramp.
While Coinbase have played nice so far, it’s dominance in regulated crypto liquidity and USDC on/off ramp has huge influence over the space. I see Gemini and GUSD as a viable competitor. From an industrial economics standpoint, Aave and other Defi protocols like Maker may benefit from breaking down monopolies of their key counter-parties.

<!-- ## Implementation -->
<!--The implementations must be completed before any AIP is given status "Implemented", but it need not be completed before the AIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

## References

- *Whitepaper*: https://gemini.com/static/dollar/gemini-dollar-whitepaper.pdf
- *Website*: https://gemini.com/dollar
- *Twitter*: https://twitter.com/Gemini
- *Source Code*: https://github.com/gemini/dollar
- *GUSD token contract*: https://etherscan.io/token/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd
- *Accountant’s reports at bottom of page*: https://gemini.com/dollar#reports
- *Trail of bits contract audit*: https://gemini.com/static/dollar/gemini-dollar-trailofbits-audit.pdf

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
