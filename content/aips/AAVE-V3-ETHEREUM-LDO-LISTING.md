---
title: Add LDO to Ethereum Aave v3
discussions: https://governance.aave.com/t/arfc-add-support-for-ldo-on-ethereum-v3/12045
shortDescription: Add LDO to Ethereum Aave v3 deployment as collateral, with borrowing enabled and in isolation mode.
author: Llama - TokenLogic
created: 2023-03-30
---


# Summary

This publication presents the community with the opportunity to add LDO to the Ethereum V3 Liquidity Pool.

# Abstract

LDO would be the first Ethereum liquid staking protocol governance token to be listed on Aave. Aave would benefit from being the first major lending market to list LDO. Users will be able to express various trading views on LDO’s price outlook in the lead up to Shanghai. 
 
This publication uses the parameters provided by Gauntlet and Chaos Labs.

# Motivation

Lido is a suite of software protocols that facilitates liquid staking across multiple blockchains. The Lido DAO is a decentralised autonomous organisation. The LDO token is used to vote on the use of the DAO treasury associated with the protocols, research and development, and incentive programs.

The Lido DAO is an Aragon organization. The LDO token was created using an [Aragon Minime contract](https://aragon.org/dao). Since Aragon provides a full end-to-end framework to build DAOs, Lido DAO uses its standard tools.

LDO is a Top 50 token by market cap, currently ranked [31st](https://www.coingecko.com/en/coins/lido-dao) by Coingecko. Lido Protocol is the largest minter of liquid staked ETH tokens with [5,880,987 ETH staked](https://lido.fi/ethereum).

Making LDO available on Aave v3 would make Aave v3 the first major lending market to do so and would benefit from the first mover advantage.

# Specification

The parameters shown below are the [combined recommendation](https://governance.aave.com/t/arfc-add-support-for-ldo-on-ethereum-v3/12045/5) of Gauntlet and Chaos Labs. It can be found here.

Ticker: LDO

Contract Address: [`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32)

Oracle: LDO/ETH/USD: [`0xb01e6C9af83879B8e06a092f0DD94309c0D497E4`](https://etherscan.io/address/0xb01e6C9af83879B8e06a092f0DD94309c0D497E4)

Oracle Components:

LDO/ETH: [`0x4e844125952D32AcdF339BE976c98E22F6F318dB`](https://etherscan.io/address/0x4e844125952D32AcdF339BE976c98E22F6F318dB)

ETH/USD: [`0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`](https://etherscan.io/address/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419)

|Parameter|Value|
| --- | --- |
|Isolation Mode|Yes|
|Borrowable|Yes|
|Collateral Enabled|Yes|
|Supply Cap (LDO)|6,000,000|
|Borrow Cap (LDO)|3,000,000|
|Debt Ceiling|$7,500,000|
|LTV|40.00%|
|LT|50.00%|
|Liquidation Bonus| 9.00%|
|Liquidation Protocol Fee |10.00%|
|Variable Base|0.00%|
|Variable Slope1|7.00%|
|Variable Slope2|300.00%|
|Stable Slope1|13.00%|
|Stable Slope2|300%|
|Uoptimal|45.00%|
|Reserve Factor|20.00%|
|Stable Borrowing|Disabled|

# Implementation

Test cases can be found [here]()

Payload implementation can be found [here]()

Deployed Payload can be found [here]()

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


