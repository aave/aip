---
title: Aave StarkNet Phase I - Aave <> StarkNet Bridge deployment/activation by Aave governance
author: Aave on StarkNet
shortDescription: Deployment/activation of the Aave <> StarkNet Bridge
discussions: https://governance.aave.com/t/aave-starknet-phase-i-release/10428
created: 2022-11-28
---

# Simple Summary

This governance proposal deploys and activates the different smart contract components result of the community project to create a bridge of Aave v2 Ethereum aTokens from/to StarkNet.


# Motivation

All the information regarding the project is explained on [https://governance.aave.com/t/aave-starknet-phase-i-release/10428](https://governance.aave.com/t/aave-starknet-phase-i-release/10428). 

In summary, with the previous approval of the project via governance, the Aave community has decided to start its expansion to StarkNet, a validity rollup, starting with smart contracts for bridging infrastructure of Aave v2 Ethereum aTokens.

Additionally, this also sets the foundation for the connection of instances of Aave in other networks (e.g. Polygon, Avalanche) with StarkNet.


# Specification

This proposal's payload does the following:

**Ethereum side**

1. Deploys the `Bridge` smart contract, main component on Ethereum of the system, by calling a transparent proxy factory.
2. Initializes the Ethereum `Bridge` to accept bridging of aUSDC, aUSDT and aDAI, with a 30'000 total ceiling for each one of them (in units of each asset, which in this case is relatively equivalent to USD).
3. Sends a message via the StarkNet core messaging smart contract to activate the smart contract components on the StarkNet side.

**StarkNet side**

1. The message is received by the Governance Relay contract (proxy [HERE](https://starkscan.co/contract/0x07bbb769e53d886f77792d59b9cd65a2eb14a84c49a0942ba9577e291deefcec#class) and implementation [HERE](https://starkscan.co/class/0x0431f8e4ac4298966bdf1d99ea273d9f22e72005874d76498bd630fcb806f605#code)), which executes the payload on [https://starkscan.co/class/0x00be3e7fe64939ef463bc80b76703b93c10a61944de34df5bb2dbc7b734e3159#code](https://starkscan.co/class/0x00be3e7fe64939ef463bc80b76703b93c10a61944de34df5bb2dbc7b734e3159#code) via delegatecall.
2. The payload connects and activates all the components: activates rewAAVE (representing AAVE rewards on StarkNet), connects the L1 Bridge to the L2 side of it, and connects the L1 aTokens to their static versions on L2.

The payload smart contract for Ethereum can be found [HERE](https://etherscan.io/address/0x4919E176f02142C20727da215e8dc1b3d046D026#code), 

The payload smart contract for StarkNet can be found [HERE](https://starkscan.co/class/0x00be3e7fe64939ef463bc80b76703b93c10a61944de34df5bb2dbc7b734e3159#code).

All the other components are also present in the [same repository](https://github.com/aave-starknet-project/aave-starknet-bridge#deployed-contracts).

After this proposal gets approved and executed, the `Bridge` will be fully operative on [https://etherscan.io/address/0x25c0667E46a704AfCF5305B0A586CC24c171E94D](https://etherscan.io/address/0x25c0667E46a704AfCF5305B0A586CC24c171E94D) (no code at the moment, being a counterfactual/CREATE2 deployment).

## Security procedures

This proposal has been tested using the available tools to be as close as possible to fork both Ethereum and StarkNet mainnets.

In addition, all the components apart from the payload had gone through the security procedures enumerated on the Aave governance forum [HERE](https://governance.aave.com/t/aave-starknet-phase-i-release/10428#security-procedures-5).

[Bored Ghost Developing](https://twitter.com/bgdlabs) has reviewed the proposal payload too.


## Deployed Contracts

[https://github.com/aave-starknet-project/aave-starknet-bridge#deployed-contracts](https://github.com/aave-starknet-project/aave-starknet-bridge#deployed-contracts)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
