---
title: Aave v2/v3 Collectors unification
author: BGD Labs (@bgdlabs)
shortDescription: Unification of collector contract across all Aave deployments
discussions: https://governance.aave.com/t/bgd-aave-v2-v3-collectors-unification/12434
created: 2023-04-05
updated: 2023-04-05
---


## Simple Summary
Technical upgrade to align the implementation and architecture of Aave’s ecosystem Collector contracts across all networks.

## Motivation

The Aave ecosystem, and more precisely its liquidity protocol (v1/v2/v3) collect fees in a decentralized way, which later on are used for example to fund grants, pay different service providers, or pursue different other strategies.

All these actions are controlled by the Aave Governance V2 smart contracts (or cross-chain governance), and due to technical reasons regarding upgradeable contracts, usually they are triggered by interacting with another contract called Controller of Collector, which simply acts as a layer of indirection with the Collector itself.

But in practice, this current organization has some points of improvement:

- The codebase of the Collector is different across instances of Aave. The most updated version is the one on Ethereum, with others for example not supporting streaming, just because of legacy reasons.
- The pattern of Controller of Collector <> Collector can be simplified and unified with other parts of the ecosystem.

Sometimes, this lack of technical unification creates overhead (both operational and of understanding) on contributors, specifically those interacting with the “treasury” side of the protocol like Llama, so we present this proposal to improve the system.

## Specification

The smart contract used as the implementation of the Aave v2 & v3 Collector (a common proxy for both) is the most updated of the ecosystem, activated on https://app.aave.com/governance/proposal/71/, and mainly adding streaming capabilities.

- UpgradeAaveCollectorPayload: this proposal payload will deploy the most up-to-date version of the collector and set it as the implementation for the existing proxy for all v3 deployments. Moreover, it will change not optimal "Controller of Collector" pattern to a more commonly used "ProxyAdmin".

Currently, apart from Ethereum, Polygon, and Avalanche are the only networks with both instances of Aave v2 and v3.

- MigrateV2CollectorPayload: This proposal will redirect all future fee collection of the v2 pools to v3’s Collector by updating the AToken implementation. For both Polygon and Avalanche v2, instances, before redirecting fee collection to the v3’s Collector, the proposal will send there all the accrued fees plus rewards incentives on those.

This proposal will be an approval for the Avalanche part, and both payloads will be executed there separately by the Aave Guardian. For other networks, the execution will happen through this proposal.

## References

A list of relevant links like for this proposal:

- [forum discussion](https://governance.aave.com/t/bgd-aave-v2-v3-collectors-unification/12434)
- [tests](https://github.com/bgd-labs/aave-collector-unification/tree/main/tests) 
- Contracts:
  - [Collector](https://github.com/bgd-labs/aave-collector-unification/blob/main/src/contracts/Collector.sol)
  - [AaveMigrationCollector](https://github.com/bgd-labs/aave-collector-unification/blob/main/src/contracts/payloads/AaveMigrationCollector.sol) 
  - [AToken](https://github.com/bgd-labs/protocol-v2/blob/update-atoken-revision/contracts/protocol/tokenization/AToken.sol)

## Security Considerations

The previous upgrade of the Collector contract, which is currently active on Mainnet, was [reviewed by Certora](https://github.com/bgd-labs/aave-ecosystem-reserve-v2/tree/release/final-proposal/certora). Our policy was to have minimum deviaton from this version.

- **Code diffing**: Comparing the codebase of all existing Collectors with the consolidated one, to not have any unexpected logic included or missing.

- **Storage diffing**: Comparing the storage layout of versions, to verify that there is no misalignment between them, which could create important problems. Generated diffs:
  - [Mainnet Collector](https://github.com/bgd-labs/aave-collector-unification/blob/main/diffs/mainnet_layout_diff.md)
  - [Polygon Collector](https://github.com/bgd-labs/aave-collector-unification/blob/main/diffs/polygon_layout_diff.md)
  - [Optimism Collector](https://github.com/bgd-labs/aave-collector-unification/blob/main/diffs/optimism_layout_diff.md)
  - [Arbitrum Collector](https://github.com/bgd-labs/aave-collector-unification/blob/main/diffs/arbitrum_layout_diff.md)
  - [Avalanche Collector](https://github.com/bgd-labs/aave-collector-unification/blob/main/diffs/avalanche_layout_diff.md)

- **E2E tests**: we are checking that the main actions available on the Collector can be performed (e.g. transfer, approve) on networks, and additionally we check that updated permissions are set correctly.

## Deployed Contracts

Collector Unification

| Chain | Collector | Payload |
| --- | --- | --- |
| Ethereum | https://etherscan.io/address/0x80f2c02224a2e548fc67c0bf705ebfa825dd5439 | https://etherscan.io/address/0x7fc3fcb14ef04a48bb0c12f0c39cd74c249c37d8 |
| Polygon | https://polygonscan.com/address/0x230e0321cf38f09e247e50afc7801ea2351fe56f | https://polygonscan.com/address/0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45 |
| Optimism | https://optimistic.etherscan.io/address/0x230e0321cf38f09e247e50afc7801ea2351fe56f | https://optimistic.etherscan.io/address/0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45 |
| Arbitrum | https://arbiscan.io/address/0x981ab570ac289938f296b975c524b66fbf1b8774 | https://arbiscan.io/address/0x05225cd708bca9253789c1374e4337a019e99d56 |
| Avalanche | https://snowtrace.io/address/0xbdd1458a6d399c88d4509275e4463485c6c86ef3 | https://snowtrace.io/address/0x0620a1325e64ebfa3a272b020b47583766d9bc25 |

V2 Funds Transfer

| Chain | MigrationCollector | AToken | Payload |
| --- | --- | --- | --- |
| Polygon | https://polygonscan.com/address/0xfd858c8bc5ac5e10f01018bc78471bb0dc392247 | https://polygonscan.com/address/0x80f2c02224a2e548fc67c0bf705ebfa825dd5439 | https://polygonscan.com/address/0xc383aac4b3dc18d9ce08ab7f63b4632716f1e626 |
| Avalanche | https://snowtrace.io/address/0x4752c92085db240e1d9d5653e663a6225d14fcc7 | https://snowtrace.io/address/0x44b4221c950fcf23a40e68dea29fed0bb88893a9 | https://snowtrace.io/address/0x9e9b953a3be8ca196fb7eee4660a5830da0d06de |

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).