---
aip: 24
title: Add PAX to Aave V2
status: WIP
author: Charles Rodiger (@charlie-paxos)
shortDescription: Create a new Aave V2 market for the PAX stablecoin
discussions: https://governance.aave.com/t/arc-add-paxos-standard-pax-collateral-borrow-support/3739
created: 2021-06-29
---

## Simple Summary

This AIP is to list PAX for lend/borrow support on Aave.  Paxos Standard (PAX) is one of largest regulated USD-backed stablecoins, and listing on Aave will provide users a highly trustworthy crypto asset to lend and borrow. PAX is issued by a NYDFS regulated financial institution - Paxos Trust Company - and the token itself is also regulated by NYDFS. This oversight ensures PAX is 100% backed by US Dollars or short term government securities (e.g. “t-bills”) at all times (attestations). PAX users are assured to always access their dollars - all PAX reserves are held fully segregated and bankruptcy remote in US bank accounts, which only Paxos-issued tokens can claim. PAX is also the only coin to have received a successful SOC-II audit. We think transparency is a hallmark of DEFI, and PAX’s transparency and trustworthiness will be beneficial for the community. We are excited at the prospect of listing PAX on Aave.

## Abstract

Paxos Standard (PAX) was launched in 2018 and is a USD stablecoin that is 100% backed by US dollars or short term government securities held bankruptcy remote. Paxos issues PAX, and both the company and token are regulated by the NY DFS. Full PAX attestations are completed monthly and posted to www.paxos.com/attestations.

PAX is used in a variety of use cases including as a means of payment for other blockchain-based assets, a trustworthy store-of-value, settlement outside of traditional banking hours, and being lent / borrowed on known CeFi institutions like BlockFi and Celsius. PAX is included in MakerDAO’s pool and is available for trading on DeFi Apps, including Curve and Uniswap. Paxos would like to extend PAX’s functionality through inclusion in Aave’s lend/borrow markets.  Collateral support could be proposed in future AIPs.


## Motivation

Paxos would like to extend PAX’s functionality in the DeFi space through a listing on Aave. We believe adding PAX will provide users a highly trustworthy crypto asset to lend and borrow. PAX is valuable not only due to its transparency and trustworthiness, but also the range of use cases it supports, including store-of-value, settlement, trading, and peer-to-peer transfer.

## Specification

1. What is the link between the author of the AIP and the Asset?

Software Engineer employed at Paxos. Paxos Trust Company is a qualified custodian and trust company regulated by NY DFS and is the sole issuer of the PAX token.

2. Provide a brief high-level overview of the project and the token

PAX is the most secure, highest regulated stablecoin available. Token was launched in 2018 to facilitate many blockchain-based use-cases such as payments and stable digital storage.

3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?

PAX is valuable to borrow due to its trustworthiness and range of use cases including store of value, settlement, trading, and peer to peer transfer. PAX is also very liquid and can be created and redeemed directly through Paxos, or can be used to trade on CeFi and DeFi exchanges. Paxos additionally plans to request collateral status at a future date.

4. Provide a brief history of the project and the different components: DAO (is it live?), products (are they live?). How did it overcome some of the challenges it faced?

PAX was launched on September 10th, 2018. PAX is included in MakerDAO’s pool and is available for trading on DeFi Apps Curve and Uniswap, as well as traded on many different centralized exchanges.

5. How is the asset currently used?

PAX shares the typical use-cases for USD stablecoins.

6. Emission schedule

PAX tokens are minted/burned based on client demand. The process for minting and burning has been approved by the NYDFS and is regularly audited by a third party. Full monthly attestations are available on the Paxos website. Market cap fluctuates as users purchase and redeem PAX.

7. Token & protocol permissions and upgradability
   
   *All of the following roles are held by multi-sig addresses.*
   1. Controlling the token supply - The supplyController address can mint and burn the token based on the actual movement of USD in and out of the reserve based on requests for the purchase, conversion and redemption of PAX.
   2. Contract Owner - Can pause/unpause the contract and propose a new owner.
   3. Asset Protection Role - As required by our regulators, we have introduced a role for asset protection to freeze or seize the assets of a criminal party when required to do so by law, including by court order or other legal process.
   4. Upgradeability Proxy - To facilitate upgradeability on the immutable blockchain we follow a standard two-contract delegation pattern: a proxy contract represents the token, while all calls not involving upgrading the contract are delegated to an implementation contract. The proxy used here is AdminUpgradeabilityProxy from ZeppelinOS.
   

8. Market data as of July 6th, 2021 (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)

* [Market Cap](https://etherscan.io/token/0x8e870d67f660d95d5be530380d0ec0bd388289e1): $837M
* [24h Volume](https://www.coingecko.com/en/coins/paxos-standard): $64M
* Volatility: ~0
* [Exchanges](https://www.coingecko.com/en/coins/paxos-standard#markets): Binance, itBit, Bitfinex, Coinsbit, Atomars, etc
* Maturity: Late

9. Social channels data as of July 6th, 2021 (Size of communities, activity on Github)

[Paxos Twitter](https://twitter.com/PaxosGlobal): 23k followers

10. Contracts date of deployments, number of transactions, number of holders for tokens

* Date of Deployment: September 8th, 2018
* Number of Transactions: 3,186,000+
* Number of Holders: 109,500+

## Implementation

The PAX price oracle will be served via [Chainlink](http://chain.link) as a [PAX/ETH feed](https://data.chain.link/ethereum/mainnet/crypto-eth/pax-eth).

PAX will be used for depositing and lending. The following parameters are proposed:

- Strategy: rateStrategyStableThree
- Base LTV As Collateral: 0%
- Liquidation Threshold: 0%
- Liquidation Bonus: 0%
- Borrowing Enabled: true
- Stable BorrowRate Enabled: false
- Reserve Decimals: 18
- Reserve Factor: 10%

Deployed Contract Implementations:
- Interest bearing aPAX address: 0xBcbD94007425001E9e2AEc764D799f83a257f050
- Variable Debt variableDebtPAX address: 0x7b4E77aa7062cE6b8a8A75514F6D2aD987c0d854
- Stable Debt stableDebtPAX address: 0x9C3440F4aACA3312b632bE4A07C0f97B15c31c8b
- Strategy Implementation for PAX address: 0x404d396fc42e20d14585A1a10Cd64BDdC6C6574A

## Audits/Security Reviews

[ChainSecurity Audit for the Initial Core Contracts](https://github.com/paxosglobal/pax-contracts/blob/master/audit-reports/ChainSecurity_Audit_Report.pdf)

[Nomic Labs Audit for the Initial Core Contracts](https://github.com/paxosglobal/pax-contracts/blob/master/audit-reports/Nomic_Labs_Audit_Report.pdf)

[Trail of Bits Audit for the Initial Core Contracts](https://github.com/paxosglobal/pax-contracts/blob/master/audit-reports/Trail_of_Bits_Audit_Report.pdf)

*After these audits, we upgraded the backing PAX contract to mirror that of BUSD and PAXG (minus on-chain fees). Some audits for the current contract format can be found below:*

[CertiK Audit for the Upgraded Core Contracts](https://github.com/paxosglobal/paxos-gold-contract/blob/master/audit-reports/paxg-audits/CertiK_Verification_Report_for_Paxos.pdf)

[ChainSecurity Audit for the Upgraded Core Contracts](https://github.com/paxosglobal/paxos-gold-contract/blob/master/audit-reports/paxg-audits/ChainSecurity_PAXOS-GOLD.pdf)

**PAX Smart Contract Risk**: **A**

PAX has been on the Ethereum Mainnet since 2018, and has had 3,000,000+ transactions.

**PAX Counterparty Risk**: **A-**

PAX issuance is controlled by Paxos, which is a centralized, regulated entity. Paxos is regulated by the NY Department of Financial Services (DFS), and possesses a national trust bank charter from the OCC. Paxos is the most regulated stablecoin issuer.
There are 100,000+ holders of PAX.

**PAX Market Risk**: **B+**

The current PAX market cap is $819,632,517 USD. The average 24H trading volume in the past month has been 55,559,061 USD. PAX's normalized volatility over the last month is 0.004.

**PAX Overall Risk**: **A-**

![PAX Risk Analysis](../assets/AIP-24/aip25-img.png?raw=true "PAX Risk Analysis")

## References

Whitepaper - https://www.paxos.com/wp-content/uploads/2019/02/PAX_Whitepaper.pdf

Website - https://paxos.com

Twitter - https://twitter.com/PaxosGlobal

Docs - https://www.paxos.com/pax/

Github - https://github.com/paxosglobal

Token Contract - https://etherscan.io/address/0x8e870d67f660d95d5be530380d0ec0bd388289e1

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

