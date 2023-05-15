---
title: AGD Approval
discussions: https://governance.aave.com/t/updated-proposal-aave-grants-dao-renewal/11289
shortDescription: AGD approval.
author: Llama (Fermin Carranza, TokenLogic)
created: 2023-05-03
---

# Summary

This publication corrects the Aave Grants DAO aUSDT allowance that was incorrectly set previously.

# Motivation

Previously, the allowance of aUSDT for AGD was incorrectly set to the v1 implementation of aUSDT which the Collector contract does not hold any of. This new proposal will set the v1 aUSDT allowance to zero, and correctly set the v2 aUSDT implementation to the originally specified amount of $812,944.90.

Please see the original proposal to renew the grants program [here](https://governance.aave.com/t/updated-proposal-aave-grants-dao-renewal/11289).

The original payload with the incorrect approval can be found [here](https://github.com/llamaxyz/aave-proposals/blob/main/src/proposals/aave-grants-dao-renewal/ProposalPayload.sol).

The original communication about this issue can be found [here](https://governance.aave.com/t/updated-proposal-aave-grants-dao-renewal/11289/9).

* [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230503/AaveV2EthAGDGrantsPayload.sol)
* [Test cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3CapsUpdates_20230503/AaveV2EthAGDGrantsPayloadTest.t.sol)

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
