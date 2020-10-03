---
aip: <to be assigned>
title: Addition of a UNI-V2 Market
status: WIP
author: Zer0dot (@Zer0dot)
discussions: https://governance.aave.com/t/aip-proposal-implement-a-uni-v2-market-initial-discussion/645
created: 2020-10-03
---

## AIP Summary

Implement a UNI-V2 Liquidity pool token money market in the Aave protocol, this would serve the overall DeFi ecosystem by potentially unlocking upwards of a billion dollars worth of new collateral. There are already risk profiles in place in the live UNI-V1 Aave market for the following pairs:
* DAI/ETH
* LEND/ETH
* LINK/ETH
* USDC/ETH
* MKR/ETH
* SETH/ETH

To kickstart the AIP, I would recommend implementing the DAI/ETH, LINK/ETH and USDC/ETH pairs, the WBTC/ETH and USDT/ETH pairs should also be considered, though risk assessment must be done. 

This implementation will likely occur only after the implementation of the Aave V2 system.

## AIP In Short

* Implement a UNI-V2 liquidity pool token market with the following tokens and token pairs as available collateral:
  * DAI
  * USDC
  * USDT
  * ETH
  * DAI/ETH
  * LINK/ETH
  * USDC/ETH

## Motivation

As it currently stands, the Aave protocol is among the largest DeFi money market protocols, currently only second to Maker. Interoperability and integration with other protocols is essential to growing not only the protocol, but the ecosystem as a whole.

Thus, implementing a UNI-V2 liquidity pool token market, after adequate risk assessment, can increase DeFi activitiy and provide new borrowing and investing opportunities for ecosystem participants. In other words, without incurring a risk or a gas price hike to the rest of the lending protocol, Aave could seriously decrease the amount of tokens "sitting around" in users' wallets.

## Technical Specifications

This AIP would involve the creation of a new Aave protocol market, requiring the creation and deployment of all smart contracts involved in the process.

## Closing Remarks

This AIP is in it's very early stages of development. There is much discussion to be had, and we've got time to have it. I only want to gauge the community's thoughts and opinions regarding a UNI-V2 liquidity token market.

Do note that, in creating a new market, the tradeoff is that tokens deposited in the original Aave market are NOT available to be borrowed with UNI-V2 collateral on the UNI-V2 market. This creates a dynamic of shifting interest rates across markets, incentivizing liquidity provision where it is most in demand. I may be unaware of implications in regards to this.

Overall, implementing a UNI-V2 liquidity token market would be a large step forward for both the Aave protocol as well as DeFi.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
