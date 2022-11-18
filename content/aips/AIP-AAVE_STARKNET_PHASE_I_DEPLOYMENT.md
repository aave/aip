---
title: Aave StarkNet Phase I - Aave <> StarkNet Bridge deployment/activation by Aave governance
author: Aave on StarkNet
shortDescription: Deployment/activation of the Aave <> StarkNet Bridge
discussions: https://governance.aave.com/t/aave-starknet-phase-i-release/10428
created: 2022-11-18
---

# Simple Summary

This governance proposal deploys and activates the different smart contract components, result of the community project to create a bridge of Aave v2 Ethereum aTokens from/to StarkNet.


# Motivation

All the information regarding the project is explained on [https://governance.aave.com/t/aave-starknet-phase-i-release/10428](https://governance.aave.com/t/aave-starknet-phase-i-release/10428). 

In summary, with the previous approval of the project via governance, the Aave community have decide to start its expansion to StarkNet, a validity rollup, starting with smart contracts for bridging infrastructure of Aave v2 Ethereum aTokens.

This also sets the foundation for the connection of instances of Aave in other networks (e.g. Polygon, Avalanche) with StarkNet.


# Specification

This proposal's payload does the following:

1. Deploys the `Bridge` smart contract, main component on Ethereum of the system, by calling a transparent proxy factory.
2. Initializes the Ethereum `Bridge` to accept bridging of aUSDC, aUSDT and aDAI, with a 30'000 total ceiling for each one of them (in units of each asset, which in this case is relatively equivalent to USD).
3. Sends a message via the StarkNet core messaging smart contract to activate the smart contract components on the StarkNet side.

The payload smart contract can be found on [TBD](), with all the other components also present in the same repository.

After/if this proposal gets approved and executed, the `Bridge` will be fully operative on address [TBA]()

## Security procedures

This proposal has been tested using the available tools to be as close as possible to fork both Ethereum and StarkNet mainnets.
In addition, all the components apart from the payload had gone through the security procedures enumerated on the Aave governance forum [HERE](https://governance.aave.com/t/aave-starknet-phase-i-release/10428#security-procedures-5).
[Bored Ghost Developing](https://twitter.com/bgdlabs) has reviewed the proposal payload too.


## Deployed Contracts

1. Proposal payload: [TBA]()

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
