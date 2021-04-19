---
aip: 14
title: Enable borrowing on renFIL
status: Proposed
author: Corbin Page (@corbinpage)
shortDescription: Enable borrowing for the renFIL asset
discussions: https://governance.aave.com/t/proposal-add-support-for-renfil-filecoin/1059
created: 2021-04-19
updated: 2021-04-19
---

## Simple Summary


AIP-13 added a wrapped version of [Filecoin](https://filecoin.io/) (renFIL) to Aave, and this AIP will finalize it by enabling borrowing of the asset.

## AIP rationale

Over the past 6 months, [AIP-13](https://github.com/aave/aip/blob/Pending-AIPs/content/aips/AIP-13.md
) has been proposed, debated, and ultimately passed on [April 19th](https://app.aave.com/governance/8-QmY4AYSTrxVvqTprSjwuaTiECzrWEs2JJFwTx6UNpYMepW) to allow deposits and borrowing (but not collateral use) on renFIL, a wrapped Filecoin token using Ren protocol. The discussion and trade-offs can be [found on the governance forum here](https://governance.aave.com/t/proposal-add-support-for-renfil-filecoin/1059).

This AIP finalizes the previous submission to configure the renFIL asset as a borrowable currency on Aave.

## Implementations details

The proposal will:
- Enable borrowing on renFIL
- Target the lendingPoolConfigurator: https://etherscan.io/address/0x311bb771e4f8952e6da169b425e7e92d6ac45756
- Call its enableBorrowingOnReserve(asset, enableStableBorrow) with argument (0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5, false)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
