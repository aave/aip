---
title: Add UNI, MKR, SNX & BAL to Ethereum v3
discussions: https://governance.aave.com/t/arfc-add-uni-to-ethereum-v3/11953
shortDescription: Add UNI, MKR, SNX & BAL to Ethereum v3, as collateral, with borrowing enabled and in isolation mode.
author: Llama
created: 2023-03-13
---

# Simple Summary

This proposal will onboard UNI, MKR, SNX & BAL to the Ethereum v3 Liquidity Pool.

# Abstract

This proposal bundles four asset listing for Ethereum v3 into a single governance submission. Each asset is to be added in isolation mode, as collateral, with borrowing enabled.

Each Asset is currently listed on Aave v2. Gauntlet and Chaos Labs have provided the risk parameters for each v3 asset listing. Each asset received a favouable Snapshot vote indicating broad community support for listing the asset on the v3 Ethereum deployment. 

Upon listing UNI, MKR, SNX & BAL users will be able to begin migrating there positions from Aave v2 to v3 on Ethereum.

# Motivation

Enabling users to migrate from Ethereum v2 to v3 requires each asset to first be added to v3. Llama presented individual ARFC for each of the mentioned assets and based upon the Snapshot results, the community supports adding UNI, MKR, SNX and BAL to the Ethereum v3 deployment. 

The links below detail the individual governance forum posts and respective Snapshot proposals.  

* **UNI**
  * [UNI Governance Forum Discussion](https://governance.aave.com/t/arfc-add-uni-to-ethereum-v3/11953)
  * [UNI Snapshot Vote](https://snapshot.org/#/aave.eth/proposal/0x51d67ef69e901b34f1d111f2cd5d582c59cffa8d70b7939023febd20f7613b88)
* **MKR**
  * [MKR Governance Forum Discussion](https://governance.aave.com/t/arfc-add-mkr-to-ethereum-v3/11954)
  * [MKR Snapshot Vote](https://snapshot.org/#/aave.eth/proposal/0xf4aec3fbab5096752be96f0e5b522f37318c1902cf8b897b049b7a94d478de73)
* **SNX**
   * [SNX Governance Forum Discussion](https://governance.aave.com/t/arfc-add-snx-to-ethereum-v3/11956)
   * [SNX Snapshot Vote](https://snapshot.org/#/aave.eth/proposal/0x5f232a89e10d67df3aad2907e8dce3bec9708596929b3254055cf37499969b89)

* **BAL**
   * [BAL Governance Forum Discussion](https://governance.aave.com/t/arfc-add-bal-ethereum-v3/11523)
   * [BAL Snapshot Vote](https://snapshot.org/#/aave.eth/proposal/0xe394799e4d006c15e0cb13155701de495888b7e7dad8f917a6b5dd1c8106cea5)

# Specification

Ticker: **UNI**
Contract Address: [`0x1f9840a85d5af5bf1d1762f925bdaddc4201f984`](https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984)

Oracle: [`0x553303d460EE0afB37EdFf9bE42922D8FF63220e`](https://etherscan.io/address/0x553303d460EE0afB37EdFf9bE42922D8FF63220e)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|YES|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|65.00%|
|Liquidation Threshold|77.00%|
|Liquidation Bonus|10.00%|
|Reserve Factor|20.00%|
|Liquidation Protocol Fee|10.00%|
|Borrow Cap|500,000 units|
|Supply Cap|2,000,000 units|
|Debt Ceiling|$17,000,000|
|Variable Base|0.00%|
|Variable Slope1|7.00%|
|Variable Slope2|300.00%|
|Uoptimal|45.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|13.00%|
|Stable Slope2|300.00%|
|Base Stable Rate Offset|3.00%|
|Stable Rate Excess Offset|5.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

Ticker: **MKR**
Contract Address: [`0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2`](https://etherscan.io/address/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2)

Oracle: [`0xec1D1B3b0443256cc3860e24a46F108e699484Aa`](https://etherscan.io/address/0xec1D1B3b0443256cc3860e24a46F108e699484Aa)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|YES|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|65.00%|
|Liquidation Threshold|70.00%|
|Liquidation Bonus|8.50%|
|Reserve Factor|20.00%|
|Liquidation Protocol Fee|10.00%|
|Borrow Cap|1,500 units|
|Supply Cap|6,000 units|
|Debt Ceiling|$2,500,000|
|Variable Base|0.00%|
|Variable Slope1|7.00%|
|Variable Slope2|300.00%|
|Uoptimal|45.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|13.00%|
|Stable Slope2|300.00%|
|Base Stable Rate Offset|3.00%|
|Stable Rate Excess Offset|5.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

Ticker: **SNX**
Contract Address: [`0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f`](https://etherscan.io/address/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f)

Oracle: [`0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699`](https://etherscan.io/address/0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|YES|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|49.00%|
|Liquidation Threshold|65.00%|
|Liquidation Bonus|8.50%|
|Reserve Factor|35.00%|
|Liquidation Protocol Fee|10.00%|
|Borrow Cap|1,100,000 units|
|Supply Cap|2,000,000 units|
|Debt Ceiling|$2,500,000|
|Variable Base|3.00%|
|Variable Slope1|15.00%|
|Variable Slope2|100.00%|
|Uoptimal|80.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|15.00%|
|Stable Slope2|100.00%|
|Base Stable Rate Offset|3.00%|
|Stable Rate Excess Offset|5.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

Ticker: **BAL**
Contract Address: [`0xba100000625a3754423978a60c9317c58a424e3D`](https://etherscan.io/address/0xba100000625a3754423978a60c9317c58a424e3d)

Oracle: [`0xdF2917806E30300537aEB49A7663062F4d1F2b5F`](https://etherscan.io/address/0xdF2917806E30300537aEB49A7663062F4d1F2b5F)

|Risk Parameter|Value|
| --- | --- |
|Isolation Mode|YES|
|Enable Borrow|YES|
|Enable Collateral|YES|
|Loan To Value|57%|
|Liquidation Threshold|62.00%|
|Liquidation Bonus|8.30%|
|Reserve Factor|20.00%|
|Liquidation Protocol Fee|10.00%|
|Borrow Cap|185,000 units|
|Supply Cap|700,000 units|
|Debt Ceiling|$2,900,000|
|Variable Base|3.00%|
|Variable Slope1|14.00%|
|Variable Slope2|150.00%|
|Uoptimal|80.00%|
|Stable Borrowing|Disabled|
|Stable Slope1|20.00%|
|Stable Slope2|150.00%|
|Base Stable Rate Offset|3.00%|
|Stable Rate Excess Offset|5.00%|
|Optimal Stable To Total Debt Ratio|20.00%|

# Implementation

A list of relevant links like for this proposal:

  * [Test Cases](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3NewListings_20230321/AaveV3EthNewListings_20230321_test.t.sol)
  * [Payload Implementation](https://github.com/bgd-labs/aave-proposals/blob/main/src/AaveV3NewListings_20230321/AaveV3EthNewListings_20230321.sol)
  * [Deployed Contracts](https://etherscan.io/address/0xf146c735f39281d35fffee1a99e65b5307305a4f)

The risk paramters detailed within this proposal have been jointly provided by [Chaos Labs](https://twitter.com/chaos_labs) and [Gauntlet](https://twitter.com/gauntletnetwork).

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


