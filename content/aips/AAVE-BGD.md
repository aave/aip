---
title: Approval of BGD contribution to Aave
status: Proposed
author: BGD Labs (@bgdlabs)
shortDescription: Mandate to approve the BGD Labs onboarding on Aave
discussions: https://governance.aave.com/t/aave-bored-ghosts-developing-bgd/7527
created: 2022-05-02
---


## Summary

This proposal acts as a mandate from the Aave community to engage with BGD Labs for the technical work defined on the Aave governance forum [here](https://governance.aave.com/t/aave-bored-ghosts-developing-bgd/7527) and already pre-approved by the Aave community via Snapshot [here](https://snapshot.org/#/aave.eth/proposal/0x10e6378f193ec4a2953b3ca73b86947586676250191346a90ed4c83593f14883).

As a result of this proposal, the proposed budget will be approved to a BGD-controlled address: 40% of the total transferred upfront, and the rest only defined as a claimable stream during the following 15 months.
In order to enable this mandate, this proposal also includes what can be considered as the first development on the list of tasks proposed: the update of the ecosystem's reserve of Aave v2 Ethereum to enable stream of funds, to be used now by BGD, but also by anybody else in the future.

## Motivation

A full rationale of the proposal can be found on the Aave governance forum post [here](https://governance.aave.com/t/aave-bored-ghosts-developing-bgd/7527), but the main motivation is the onboarding of another technical provider to the decentralized Aave ecosystem.

## Specification

A full specification of the contracts update enabling this mandate can be found on the BGD Labs github [here](https://github.com/bgd-labs/aave-ecosystem-reserve-v2/tree/release/final-proposal), together will all the security procedures applied, and the implementation of the governance payload.
In summary, the proposal:
- Updates the Aave v2 Ethereum ecosystem reserve and the AAVE ecosystem reserve with a common implementation contract, with streaming capabilities.
- Sets as fundsAdmin of those ecosystem reserves a new AaveEcosystemReserveController contract, controlled directly by the Aave governance and the only entity able to transfer and approve funds, create streams, and cancel streams.
- Releases the 40% of the budget defined upfront: 1'200'000 USDC, 1'000'000 USDT, 1'000'000 DAI and 8'400 AAVE.
- Creates 15-months duration streams: 4'800'000 USDC and 12'600 AAVE.

## Security
As mandatory with any change on a running Aave smart contract, extensive security procedures have been applied to the proposal payload and the changes included. A full security report can be found [here](https://github.com/bgd-labs/aave-ecosystem-reserve-v2/tree/release/final-proposal#security), but as summary:
- Full test coverage via units tests in the Forge environment.
- Security review from Aave community members.
- Minimal changes from the Sablier's v1 logic used as base for the streaming capabilities. The original codebase is audited and battle tested (running in production with meaningful funds for a long time).
- Set of properties (formal verification) by Certora.
- Slither analysis of the codebase.

## Implementation

- [AaveEcosystemReserveController](https://etherscan.io/address/0x3d569673daa0575c936c7c67c4e6aeda69cc630c#code)
- [AaveEcosystemReserveV2](https://etherscan.io/address/0x1aa435ed226014407fa6b889e9d06c02b1a12af3#code)
- [PayloadAaveBGD](https://etherscan.io/address/0x1e12071bd95341aa92fcba1513c714f9f49282a4#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).