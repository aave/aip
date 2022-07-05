---
title: Bounty to Hacxyk for fallback oracle misconfiguration
status: Proposed
author: BGD Labs (@bgdlabs)
shortDescription: Releases the bug bounty payment to the Hacxyk team for their finding on the fallback oracle of Aave v3
discussions: https://governance.aave.com/t/bgd-proposal-for-bounty-fallback-oracle-misconfiguration/8421
created: 2022-07-05
---

## Simple Summary

This proposal releases the 50'000 USDC pre-approved by the Aave community on forum and Snapshot to the Hacxyc team, for their finding concerning a misconfiguration on Aave v3 fallback oracle.

## Abstract

During the past month of April, the security firm Hacxyk disclosed to the Aave community a misconfiguration on the fallback oracle used for Aave v3 pools across markets.
This disclosure was analysed from a technical perspective and a bounty proposed to the Aave community to approve [HERE](https://governance.aave.com/t/bgd-proposal-for-bounty-fallback-oracle-misconfiguration/8421).
After having support in both forum and Snapshot, this on-chain proposal will release the pre-approved 50'000 USDC to Hacxyk.


## Relevant links

- Governance discussion: [https://governance.aave.com/t/bgd-proposal-for-bounty-fallback-oracle-misconfiguration/8421](https://governance.aave.com/t/bgd-proposal-for-bounty-fallback-oracle-misconfiguration/8421)

- Snapshot vote: [https://snapshot.org/#/aave.eth/proposal/0xb4886ff25f454773a779be3627863181ec7dbe1fb6b6e631678610dbe3f03a88](https://snapshot.org/#/aave.eth/proposal/0xb4886ff25f454773a779be3627863181ec7dbe1fb6b6e631678610dbe3f03a88)

## Implementation

This proposal exclusively releases 50'000 USDC from the Aave V2 Ethereum collector, to the Ethereum account provided by the Hacxyk team.

The implementation can be found on [https://github.com/bgd-labs/aip-hacxyk-bug-bounty/blob/main/src/contracts/PayloadBountyHacxykFallbackOracle.sol](https://github.com/bgd-labs/aip-hacxyk-bug-bounty/blob/main/src/contracts/PayloadBountyHacxykFallbackOracle.sol)

Simple tests can be found on [https://github.com/bgd-labs/aip-hacxyk-bug-bounty/blob/main/test/PayloadBountyHacxykFallbackOracle.t.sol](https://github.com/bgd-labs/aip-hacxyk-bug-bounty/blob/main/test/PayloadBountyHacxykFallbackOracle.t.sol)

**Target Contracts**

PayloadBountyHacxykFallbackOracle = [https://etherscan.io/address/0xF4294973B7E6F6C411dD8A388592E7c7D32F2486#code](
https://etherscan.io/address/0xF4294973B7E6F6C411dD8A388592E7c7D32F2486#code)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
