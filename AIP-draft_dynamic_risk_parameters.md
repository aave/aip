---
aip: <to be assigned>
title: Dynamic Risk Parameters
status: WIP
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

See `discussions` for further information.

## Implementation

Preparing the OpenZepellin Vesting contract per the ARC details. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
