---
aip: 7
title: Aavenomics Quarterly Upgrade
status: Proposed
author: Marc Zeller (@marczeller)
discussions: https://governance.aave.com/t/arc-aavenomics-quarterly-upgrade/1631
created: 2021-01-05
updated: 2021-01-05
shortDescription: This AIP will increase the responsibility of AAVE stakers for their service of protecting the Aave protocol by the formal activation of the slashing and adjust the emission accordingly
---

## AIP rationale

On the 25th of September 2020, with the results of AIP-1, the Aave protocol kickstarted its initial phase of Aavenomics and Safety Incentives with a scheduled distribution of 400 AAVE per day to Safety module stakers.

With the implementation of the Aave Protocol V2 and the soft deadline of first-quarter reached, this proposal will allow an upgrade of the reserve emission model for the Safety module.

This AIP will increase the responsibility of AAVE stakers for their service of protecting the Aave protocol by the formal activation of the slashing.

The slashing officially enforces the currently implicit responsibility and risk of the participation in the stakings modules of Aave. In the worst-case scenario of critical failure, an amount to be decided will be slashed from stakers deposits.

In this phase 0 of the slashing, the auction mechanism will not be automatized yet and if a slash were to happen it would be done through governance and direct compensation.


## AIP content in short

- Increasing the Safety Incentives: As the possibility of slashing will now be formally introduced, staking reward should reflect the risk. Hence we propose to increase the Safety Incentives to 550 AAVE per day
- Slashing %: The maximum slashing amount is set to 30%


## Implementation details

The payload to be executed is available at

https://etherscan.io/address/0x4ab8ba929e4cc780cb82be34eea29a9ea7a58049#code

The payload will upgrade the Aave reserve contract to a new implementation

https://etherscan.io/address/0xa335e2443b59d11337e9005c9af5bc31f8000714#code

And introduce a reserve controller, with the rights of approving transfers/transferring assets out of the Aave Reserve, under control of the Aave governance short executor

https://etherscan.io/address/0x1e506cbb6721b83b1549fa1558332381ffa61a93#code

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
