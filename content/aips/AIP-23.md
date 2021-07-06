---
aip: 23
title: Add PAX to Aave V2
status: WIP
author: Charles Rodiger (@charlie-paxos)
shortDescription: Create a new Aave V2 market for the PAX stablecoin
discussions: https://governance.aave.com/t/arc-add-paxos-standard-pax-collateral-borrow-support/3739
created: 2021-06-29
---

## Simple Summary

Paxos Standard (PAX) is the 5th largest USD-backed stablecoin, is highly trustworthy and regulated by the NYDFS and is the only coin to have received a successful SOC-II audit. Adding PAX to Aave will provide users another, trustworthy alternative to post collateral and borrow.

## Abstract

Paxos Standard (PAX) was launched in 2018 and is a USD stablecoin that is 100% backed by US dollars held bankruptcy remote. Paxos issues PAX and both the company and token are regulated by the NY DFS. Full PAX attestations are completed monthly and posted to www.paxos.com/attestations.

PAX is used in a variety of use cases including a means of payment for other blockchain - based assets, trustworthy store-of-value, settlement of assets with fiat currency outside of traditional banking hours, and being lent / borrowed on known CeFi institutions like BlockFi and Celsius. Paxos would like to extend the functionality to the DeFi space through listing on Aave.

## Motivation

Paxos would like to extend PAX’s functionality in the DeFi space through a listing on Aave. We believe adding PAX will provide users another trustworthy crypto asset to post as collateral and borrow. PAX is an excellent source of collateral as it is one of the most reliable, regulated stablecoins. PAX is valuable to borrow due to its trustworthiness and range of use cases, including store-of-value, settlement, collateral, trading, and peer-to-peer transfer.

## Specification

1. What is the link between the author of the AIP and the Asset?

Software Engineer employed at Paxos. Paxos Trust Company is a qualified custodian and trust company regulated by NY DFS and is the sole issuer of the PAX token.

2. Provide a brief high-level overview of the project and the token

PAX is the most secure, highest regulated stablecoin available. Token was launched in 2018 to facilitate many blockchain-based use-cases such as payments, stable digital storage, and reliable collateral.

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

PAX is an excellent source of collateral because it is the most reliable, regulated stablecoin. PAX is valuable to borrow due to its trustworthiness and range of use cases including store of value, settlement, collateral, trading, and peer to peer transfer.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are they live?). How did it overcome some of the challenges it faced?

PAX was launched on September 10th, 2018. PAX is included in MakerDAO’s pool and available for trading on DeFi Apps Curve and Uniswap, as well as traded on many different centralized exchanges.

5. How is the asset currently used?

PAX shares the typical use-cases for USD stablecoins.

6. Emission schedule
    
PAX tokens are minted/burned based on client demand. The process for minting and burning has been approved by the NYDFS and is regularly audited by a third party. Full monthly attestations available on the paxos website. Market cap fluctuates as users purchase and redeem PAX.

7. Token & protocol permissions and upgradability
    1. Note that all of the following roles are held by multi-sig addresses.
    2. Controlling the token supply - The supplyController address can mint and burn the token based on the actual movement of USD in and out of the reserve based on requests for the purchase, conversion and redemption of PAX.
    3. Contract Owner - Can pause/unpause the contract and propose a new owner.
    4. Asset Protection Role - As required by our regulators, we have introduced a role for asset protection to freeze or seize the assets of a criminal party when required to do so by law, including by court order or other legal process.
    5. Upgradeability Proxy - To facilitate upgradeability on the immutable blockchain we follow a standard two-contract delegation pattern: a proxy contract represents the token, while all calls not involving upgrading the contract are delegated to an implementation contract. The proxy used here is AdminUpgradeabilityProxy from ZeppelinOS.
    

8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

* [Market Cap](https://etherscan.io/token/0x8e870d67f660d95d5be530380d0ec0bd388289e1): $837M
* [24h Volume](https://www.coingecko.com/en/coins/paxos-standard): $64M
* Volatility: ~0
* [Exchanges](https://www.coingecko.com/en/coins/paxos-standard#markets): Binance, itBit, Bitfinex, Coinsbit, Atomars, etc
* Maturity: Late

9. Social channels data (Size of communities, activity on Github)
   
[Paxos Twitter](https://twitter.com/PaxosGlobal): 23k followers

10. Contracts date of deployments, number of transactions, number of holders for tokens

* Date of Deployment: September 8th, 2018
* Number of Transactions: 3,186,000+ 
* Number of Holders: 109,500+

## Implementation

The PAX price oracle will be served via [Chainlink](http://chain.link) as a [PAX/ETH feed](https://data.chain.link/ethereum/mainnet/crypto-eth/pax-eth). 

PAX will be used for depositing, lending and collateral. We believe collateral status is reasonable given the low risk profile associated with PAX. The following parameters are proposed:

- Strategy: rateStrategyStableThree
- Base LTV As Collateral: 80%
- Liquidation Threshold: 85%
- Liquidation Bonus: 5%
- Borrowing Enabled: true
- Stable BorrowRate Enabled: true
- Reserve Decimals: 18
- Reserve Factor: 10%

## Audits/Security Reviews

[ChainSecurity Audit for the Initial Core Contracts](https://github.com/paxosglobal/pax-contracts/blob/master/audit-reports/ChainSecurity_Audit_Report.pdf)

[Nomic Labs Audit for the Initial Core Contracts](https://github.com/paxosglobal/pax-contracts/blob/master/audit-reports/Nomic_Labs_Audit_Report.pdf)

[Trail of Bits Audit for the Initial Core Contracts](https://github.com/paxosglobal/pax-contracts/blob/master/audit-reports/Trail_of_Bits_Audit_Report.pdf)

*After these audits, we upgraded the backing PAX contract to mirror that of BUSD and PAXG (minus on-chain fees). Some audits for the current contract format can be found below:*

[CertiK Audit for the Upgraded Core Contracts](https://github.com/paxosglobal/paxos-gold-contract/blob/master/audit-reports/paxg-audits/CertiK_Verification_Report_for_Paxos.pdf)

[ChainSecurity Audit for the Upgraded Core Contracts](https://github.com/paxosglobal/paxos-gold-contract/blob/master/audit-reports/paxg-audits/ChainSecurity_PAXOS-GOLD.pdf)

**PAX Smart Contract Risk**: **A-**

PAX has been on the Ethereum Mainnet since 2018, and has had 3,000,000+ transactions.

**PAX Counterparty Risk**: **A-**

PAX issuance is controlled by Paxos, which is a centralized, regulated entity. Paxos is regulated by the NY Department of Financial Services (DFS), and possesses a national trust bank charter from the OCC. Paxos is the most regulated stablecoin issuer.
There are 100,000+ holders of PAX.

**PAX Market Risk**: **B+**

The current PAX market cap is $819,632,517 USD. The average 24H trading volume in the past month has been 55,559,061 USD. PAX's normalized volatility over the last month is 0.004.

**PAX Overall Risk**: **A-**

![PAX Risk Analysis](../assets/AIP-23/aip23-img.png?raw=true "PAX Risk Analysis")

## References

Whitepaper - https://www.paxos.com/wp-content/uploads/2019/02/PAX_Whitepaper.pdf

Website - https://paxos.com

Twitter - https://twitter.com/PaxosGlobal

Docs - https://www.paxos.com/pax/

Github - https://github.com/paxosglobal

Token Contract - https://etherscan.io/address/0x8e870d67f660d95d5be530380d0ec0bd388289e1

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
