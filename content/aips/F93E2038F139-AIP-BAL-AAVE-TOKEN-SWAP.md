---
title: Strategic Investment Part 1 - BAL <> AAVE Token Swap
status: WIP
author: Matthew Graham ()
shortDescription: BAL <> AAVE Token Swap
discussions: <Discord Channel or Github issue>
created: 2022-06-05
---

## Simple Summary

The Aave DAO is to perform a token swap with Balancer DAO. The Aave DAO is to acquire 200,000 BAL tokens for XYZ AAVE tokens based on a 90 day moving average exchange rate of A AVVE for B BAL tokens. 

Upon completion of the transaction the BAL tokens will be received into the mainnet Reserve Factor (RF).


## Abstract

This AIP only performs the very first step in creating a veBAL holding for the Aave DAO. This AIP performs only the token swap with Balancer by exchanging AAVE from the Ecosystem Reserve for 200,000 BAL tokens.

This is the initial transaction that will then allow for the 200,000 BAL tokens plus the aBAL tokens in the Reserve Factor (redeemed for BAL) are to be paired with sufficient ETH and deposited into the Balancer V2 BAL:ETH (80:20) pool. The B-80BAL-20WETH Liquidity Provider position will then be locked up for 1 year. 

Initially, the veBAL will be used to vote BAL rewards to pools which support aTokens that create TVL for Aave and/or AAVE liquidity pools.


## Motivation

Aave and Balancer have a long history of working together. The AAVE : ETH (80/20) Balancer V1 pool BPT is accepted within the Aave Safe Module and the newly created Balancer Boosted Pools drive TVL to Aave markets, [2].

When the AAVE : ETH (80/20) Balancer V1 pool is moved to Balancer V2 and integrated into Aave’s Safety Module, the veBAL tokens can be used to vote BAL rewards to the newly created AAVE : ETH (80/20) Balancer V2 pool.

In addition, the veBAL can be used to vote BAL rewards to Balancer Boosted Pools which utilise Aave markets in the background to create yield for passively held liquidity, [3]. There are likely to be many more Balancer Boosted Pools that utilise aTokens in the future and the veBAL votes can be used to help bootstrap these pools by directing BAL rewards to those pools. Using veBAL to vote for BAL rewards to pools that strengthen Aave is a strategic advantage of deploying the BAL tokens into the BAL:ETH pool.

By exchanging AAVE for BAL, the tokenswap reflects the ongoing collaboration and shared vision through governance in each other’s community. The token exchange is significant enough for Aave to become just outside of the Top 50 BAL tokens holder, based on etherscan BAL holder rankings, [4]. Balancer will become a Top 80 AAVE holder, [5]. Each community will have influence in the other’s governance process, enabling them to best represent their interests and to collaborate.

Aave will likely be one of the first movers in the upcoming BAL wars and will gain a strategic advantage to bootstrap new Balancer Boosted Pools which lead to tokens being deposited in Aave markets to earn yield. This has the benefit of creating TVL and Revenue for Aave.

The initial sizing to acquire 200,000 BAL was something that was reached via discussions with the Balancer community and happens to be the same size as the recent Tribe DAO and Balancer token swap, [6].


## Test Cases

The full test of this proposal can be found here: https://github.com/llama-community/aave-balancer-swap

## Implementation

The token swap is to be performed by both Balancer and Aave by depositing tokens into a contract linked below, [7].

Once both AAVE and BAL have been deposited into the swap contract, anyone can call the contract to transfer the BAL and AAVE to the predetermined address. For Aave DAO, this will be the mainnet Reserve Factor. 

## References
1. https://forum.balancer.fi/t/introducing-vebal-tokenomics/2512
2. https://pools.balancer.exchange/#/pool/0xc697051d1c6296c24ae3bcef39aca743861d9a81/
3. https://app.balancer.fi/#/pool/0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe
4. https://etherscan.io/token/0xba100000625a3754423978a60c9317c58a424e3d#balances
5. https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9#balances
6. https://tribe.fei.money/t/fip-33-swap-between-balancer-dao-and-fei-dao/3555
7. https://github.com/llama-community/bal-aave-token-swap


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).