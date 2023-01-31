--- 
title: Add cbETH to Aave V3 Ethereum
status: Proposed
discussions: https://governance.aave.com/t/arc-add-support-for-cbeth/10425
author: Flispide Crypto (@Fig)
shortDescription: Integrate cbETH (Coinbase Wrapped Staked ETH) to the recently deployed Aave Ethereum V3 pool
created: 2023-01-31
--- 


## Summary

Flipside Cyrpto presents a proposal to on onboard cbETH to Aave's Ethereum V3 pool. cbETH (Coinbase Wrapped Staked ETH)is an ERC-20 compliant token on Ethereum that represents underlying staked ETH on the Coinbase platform. 

## Motivation

cbETH adds greater functionality to the recently deployed V3 pool, using robust risk controls. cbETH gives Aave the opportunity to attract new users and deposits, pre-Shanghai upgrade. We are excited to add new, quality assets - bringing valuable liquidity to the latest Aave pool.

## Specifications


The complete technical and risk parameters:

Loan-to-value: 67.00%

Liquidation threshold: 74.00%

Liquidation bonus: 7.50%

Price feed: [0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731](https://etherscan.io/address/0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731#code) adaptor of [cbETH/ETH Chainlink](https://data.chain.link/ethereum/mainnet/crypto-eth/cbeth-eth)

A/S/V tokens (aToken/Variable/Stable): Standard implementation

Interest rate strategy: [0x24701A6368Ff6D2874d6b8cDadd461552B8A5283](https://etherscan.io/address/0x24701A6368Ff6D2874d6b8cDadd461552B8A5283#readContract)

Borrowing enabled: Yes

Stable borrowing Enabled: No

Reserve Factor: 15.00%

Liquidation Protocol Fee: 10.00%
Debt Ceiling: N/A 
Borrowable in Isolation: No 
Supply Cap: 10,000 
Borrow Cap: 1,200 
eMode (efficiency mode): No  
Unbacked Mint Cap: 0 
Siloed Borrowing: N/A 

## References 

* [GenericV3ListingEngine](https://etherscan.io/address/0xC51e6E38d406F98049622Ca54a6096a23826B426#code)
* [Forum discussion](https://governance.aave.com/t/arc-add-support-for-cbeth/10425)
* [Snapshot vote](https://snapshot.org/#/aave.eth/proposal/0xcbb588f0030f7726da3d065a30c2500652bbd0def6ca5f5f17a82daca777578e)

## Deployed Contracts

[CLSynchronicityPriceAdapterPegToBase: cbETH/USD feed](https://etherscan.io/address/0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731#code)

[AaveV3EthcbETHPayload: ProposalPayload](https://etherscan.io/address/0xd91d1331db4f436daf47ec9dd86decb8eef946b4#code)


## Security Considerations

 The [CLSynchronicityPriceAdapterPegToBase: cbETH/USD feed](https://etherscan.io/address/0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731#code) was deployed by Bored Ghost Developing as an adaptor of the [Chainlink cbETH/ETH price feed](https://etherscan.io/address/0xf017fcb346a1885194689ba23eff2fe6fa5c483b#code).


## Proposal's Technical Implementation

All the components involved in this proposal (token's implementations, interest rate strategy, oracle feed, proposal payload) have been reviewed by Bored Ghost Developing.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).