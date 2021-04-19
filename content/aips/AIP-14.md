---
aip: AIP-14
title: Enable borrowing on renFIL
status: Proposed
author: Corbin Page (@corbinpage)
shortDescription: Enable borrowing for the renFIL asset
discussions: [Aave Forum](https://governance.aave.com/t/proposal-add-support-for-renfil-filecoin/1059)
created: 2021-04-19
updated: 2021-04-19
---

<!--You can leave these HTML comments in your merged AIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new AIPs. Note that an AIP number will be assigned by an editor. When opening a pull request to submit your AIP, please use an abbreviated title in the filename, `AIP-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the AIP.-->

AIP-13 added a wrapped version of [Filecoin](https://filecoin.io/) to Aave but the deployment script erroneously set borrowing to 'FALSE'. This AIP will correct the issue and enable borrowing for the renFIL asset.

## AIP rationale

Over the past 6 months, [AIP-13](https://github.com/aave/aip/blob/Pending-AIPs/content/aips/AIP-13.md
) has been proposed, debated, and ultimately passed on [April 19th](https://app.aave.com/governance/8-QmY4AYSTrxVvqTprSjwuaTiECzrWEs2JJFwTx6UNpYMepW) to allow deposits and borrowing (but not collateral use) on renFIL, a wrapped Filecoin token using Ren protocol. The discussion and trade-offs can be [found on the governance forum here](https://governance.aave.com/t/proposal-add-support-for-renfil-filecoin/1059).

After the code changes were made for the proposal and fully tested on kovan, a deployment error accidentally set `ENABLE_BORROW=false` in the `.env` file, resulting in borrowing being turned off in the final smart contract deployment.

This AIP serves as a patch to correct the deployment error and enable borrowing on renFIL.

## Implementations details

The proposal will:
- Enable borrowing on renFIL
- Target the lendingPoolConfigurator: https://etherscan.io/address/0x311bb771e4f8952e6da169b425e7e92d6ac45756
- Call its enableBorrowingOnReserve(asset, enableStableBorrow) with argument (0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5, false)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).