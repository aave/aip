---
aip: 37
title: Update to the Liquidity Mining Distribution
status: Proposed
author: Anjan Vinod (@Anjan-ParaFi)
shortDescription: Update to the Liquidity Mining Distribution
discussions: https://governance.aave.com/t/arc-extend-aave-liquidity-mining-rewards/4852/72
created: 2021-09-10
updated (*optional): 2021-09-10
---
## **AAVE AIP 37**

Update to the Liquidity Mining Distribution

The latest liquidity mining proposal went live on August 24th.

A misconfiguration was found in the latest liquidity mining distribution: new assets added to the program are **not receiving rewards**. This AIP fixes the misconfiguration, increasing the rewards proportionally for those assets by taking into account when they should have started receiving rewards and the execution timestamp of this update.

The new emission rate will be determined by the formula listed in this AIP’s [payload](https://etherscan.io/address/0xC5Dc99a421e3FB9d64c7B5BBb47a5e072370eDE8#code). The new emission rate will go live once this AIP is executed.
