---
aip: 29
title: Dynamic Risk Parameters
status: Proposed
author: Nick Cannon (@inkyamze)
shortDescription: Continuous market risk management for Aave V2
discussions: https://governance.aave.com/t/proposal-dynamic-risk-parameters/4854
created: 2021-07-30
updated: 2021-08-02

---

## Simple Summary

A proposal for continuous market risk management to optimize yield, capital efficiency, and mitigate depositor losses.

## Abstract

Gauntlet proposes actively managing risk parameters for all Aave V2 assets. The targets metrics to improve are risk-adjusted yield for depsitors, capital efficiency for borrowers, and the mitigation of depositor losses. Gauntlet will improve the metrics above without increasing the net insolvent value percentage or the slashing run percentage.

## Motivation

Aave's Risk Framework shows the importance this community puts towards understanding and mitigating risk. Users are exposed to changing market risks at all times. Since publishing the Market Risk Assessment Gauntlet has continue to rerun our simulations. Our platform observes regular changes to the optimal risk parameters. 

## Rationale

See [ARC](https://governance.aave.com/t/proposal-dynamic-risk-parameters/4854) for further information.

## Implementation

Current Aave v2 Total $ Borrow = ~$7.09B 

Current Number of Aave v2 Assets = 28

_Gauntlet quarterly service fee formula = log(Number of Assets,10) * Total $ Borrow * 2.5 basis points / AAVE price_
                                        = log(26,10) * $6,000,000,000 * 2.5 basis points / AAVE price ($376)\
                                        = 5,645 AAVE
  
This AIP implements two payments to Gauntlet as outlined in the ARC, both denominated in stkAAVE. The stkAAVE is obtained by staking AAVE from the EcosystemReserve. The first payment is implemented as a direct transfer of the stkAAVE to Gauntlet. The second payment makes use of [Sablier](https://docs.sablier.finance/) to implement a streaming vesting payment over the course of half a year. This payment can be revoked by governance using `cancelStream`. Specifically we make use of the following transactions:
  - `transfer` `AAVE` tokens from the EcosystemReserve to the ShortExecutor using the Ecosystem Reserve Controller contract at 0x1E506cbb6721B83B1549fa1558332381Ffa61A93
  - `approve` the `stkAAVE` token to stake the `AAVE` we transferred
  - `stake` the `AAVE` into `stkAAVE`
  - `transfer` the non vested portion directly to the Gauntlet
  - `approve` the `Sablier` contracts to spend the remaining vesting portion of the `stkAAVE`
  - `createStream` on the `Sablier` contract, with the Gauntlet set as the beneficiary, to stream the vesting portion of `stkAAVE` over six months              


Exact calldata and target addresses can be viewed in the transaction which created this proposal.





## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
