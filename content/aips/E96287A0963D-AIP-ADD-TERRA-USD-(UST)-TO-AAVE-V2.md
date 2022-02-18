---
title: Add Terra USD (UST) to AAVE v2
status: Proposed
author: Anjan Vinod (@anjan_vinod), Adam Cader (@adamcader_)
shortDescription: Create an Aave market for UST
discussions: https://governance.aave.com/t/add-support-for-terra-usd-ust/6003
created: 2021-12-08
updated: N/A
---
​
## Simple Summary
​
TerraUSD (UST) is an algorithmic, seigniorage-based stablecoin. UST’s market capitalization has grown to almost $8.5B since its inception in October 2020. UST is designed such that each UST can be redeemed for $1 of LUNA and vice versa. This mechanism has kept the price close to the peg. 
 
Adding UST to Aave should drive additional stablecoin liquidity and borrow demand to the protocol. This proposal recommends a 0% collateral factor for UST.
​
## Abstract
​
The version of UST added will be USTw (Wormhole UST). The Terra ecosystem is migrating from the centralized Shuttle Bridge to the decentralized Wormhole V2 bridge.
​
The UST peg is maintained through an open market arbitrage system facilitated by Terra’s market module. An explanation of the contraction system is outlined below:
​
If 1 UST is trading at .99 USD, users can buy 1 UST for .99 USD. Users then utilize Terra Station’s market swap function to trade 1 UST for 1 USD of Luna. The swap burns 1 UST and mints 1 USD of Luna. Users profit .01 UST from the swap. This arbitrage continues, and UST is burned to mint Luna until the price of UST rises back to 1 USD.
​
The reverse works if 1 UST is trading above 1.00 USD. Through this system, UST has been able to maintain its peg within a relatively tight range.
​
​
## Motivation
​
UST is supported by major Ethereum and Terra dApps including Curve, Uniswap, Sushi, Mirror, and Anchor. We believe there will be strong demand to borrow and lend UST given its stability and liquidity profile. UST will likely drive additional stablecoin liquidity and borrow demand to AAVE.
​
Finally, Terra has begun its migration from its centrally held bridge to Wormhole. This move should decrease the risks associated with UST while improving its network effects as it reaches more chains in the future.
​
## Specification
​
1. What is the link between the author of the AIP and the Asset?
​
ParaFi Capital is an active AAVE governance participant, submitting AIPs to list stable assets including FEI, and modifying liquidity mining incentives. ParaFi is also a user of AAVE and UST.
​
2. Provide a brief high-level overview of the project and the token
​
UST is part of the Terra ecosystem, started by the Terra Form Labs team. UST has been live since October 2020 and has become the largest decentralized stablecoin. The number of unique holders of UST has grown substantially over the past few months, and we expect that figure to grow as UST launches on more chains.
​
3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?
​
UST’s on-chain and off-chain liquidity profile have improved significantly this year. Additionally, UST’s stability has improved, especially during market dislocations. We believe UST will drive more stablecoin liquidity and borrow demand to Aave. 
​
4. Provide a brief history of the project and the different components: DAO (is it live?), products (are they live?). How did it overcome some of the challenges it faced?
​
Terra is a blockchain protocol and stablecoin ecosystem centered around fiat-pegged, seigniorage style stablecoins. Terra was developed by Terra Form Labs. The Terra ecosystem supports dozens of DeFi and metaverse applications. 
 
The wormhole Terra contracts have been developed by Certus One (part of Jump Crypto) and audited by Kudelski. The wormhole v2 contracts are in active development.
​
5. How is the asset currently used?
​
UST can be used in dozens of applications across Terra, Ethereum, and Solana.
​
6. Emission schedule
​
There is no emission schedule. The supply of UST is expanded or contracted to maintain the $1 peg.
​
7. Token (& Protocol) permissions (minting) and upgradability. Is there a multisig? What can it do? Who are the signers?
​
As mentioned above, we believe the main concern with adding UST is its centralized bridge solution - this changes with Wormhole.
 
The Wormhole Network underpins the bridge with a validator set that observes the chains it’s connected on. The Network is governed by 19 guardians that watch connected chains and sign message observations. Users deposit funds onto the token bridge from where their tokens are originating (e.g. UST on Terra) and the action is deconstructed into a message which is sent to the Wormhole Network who validates it and produces a signed message. The signed message is sent to the output token bridge (e.g. USTw on Ethereum) which verifies it and sends the user the wrapped bridge tokens.
​
Given the track record of UST, we believe the addition of UST would pose low risk to the Aave ecosystem.
​
6. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)
​
Market cap: $8.5B total
24 hour volume: $100M+
Volatility: Link to volatility data: https://governance.aave.com/t/add-support-for-terra-usd-ust/6003/19
Exchanges: Curve, Sushiswap, Uniswap, Balancer, Kucoin, Bittrex, Terraswap, Coinbase, MEXC, Gemini, Bitfinex
​
9. Social channels data (Size of communities, activity on Github)
​
Communities: 240k followers on Twitter, 25k in Telegram, 16k in Discord
​
10. Contracts date of deployments, number of transactions, number of holders for tokens
	
	Contracts date of deployments, number of transactions, number of holders for tokens
	No. of transactions: 417,173
	No. of holders: 21,707
​
## Rationale
To mitigate concerns, a 0% collateral factor will allow UST to be supplied or borrowed - not used as collateral. This limits the risk for Aave and its users in other markets. As the wormhole contracts continue to be used and UST gains further adoption, the collateral factor can be increased. The use of rateStrategyStableTwo, reserve factor, and disabled stable borrowing is similar to other stablecoins per: https://docs.aave.com/risk/asset-risk/risk-parameters.
​
## Implementation
​
The UST price oracle will be served via [ChainLink](https://chain.link/), which includes the [UST/ETH feed](https://docs.chain.link/docs/ethereum-addresses). The Chainlink UST/ETH Price Feed Proxy contract address is 0xa20623070413d42a5C01Db2c8111640DD7A5A03a. 
​
UST will only be used for depositing, not as collateral. The following params are proposed:
​
​
 - Strategy: rateStrategyStableTwo
 - Base LTV As Collateral: 0
 - Liquidation Threshold: 0
 - Liquidation Bonus: 0
 - Borrowing Enabled: true
 - Stable BorrowRate Enabled: false
 - Reserve Decimals: 6
 - Reserve Factor: 2000
​
Following the steps from the [Aave governance docs](https://docs.aave.com/developers/protocol-governance/governance/propose-your-token-as-new-aave-asset), the following contracts were generated:
​
- Interest bearing aUST: 0x6C35faC782Be2Db776cdF777196a47916806892b
- Variable Debt variableDebtUST: 0xd8aBEdc9CE320752e77C4A8706E64212EdE834B9
- Stable Debt stableDebtUST: 0x107ed1832647436a0D39F09e65f4aA920242C0BB
- Strategy Implementation for UST: 0x0dEDCaE8Eb22A2EFB597aBde1834173C47Cff186
- Incentive Controller: 0x036cA61C1977c6EA52222Db81F725fDBd70eFBd7


The Incentive Controller was added in anticipation of LUNA incentives to UST borrowers/lenders being proposed by the community and thus for future engineering simplicity.
​
## References
​
Website - https://terra.money
​
Twitter - https://twitter.com/terra_money and https://twitter.com/wormholecrypto
​
Docs - https://docs.terra.money/ and https://docs.wormholenetwork.com/wormhole/
​
Github - https://github.com/terra-money and https://github.com/certusone/wormhole
​
Token Contract - https://etherscan.io/token/0xa693B19d2931d498c5B318dF961919BB4aee87a5
​
## Copyright
​
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

