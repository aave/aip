---
aip: 21
title: ReserveFactor Updates
status: Proposed 
author: Shreyas Hariharan (@helloshreyas)
shortDescription: Ipdate CRV and GUSD reserveFactor
discussions: https://docs.aave.com/aavenomics/
created: 2021-05-17
updated: 2021-05-17
---

## AIP rationale

The reserveFactor allows the FeeCollector smart contract to receive a part of interests paid by takers of liquidity, each asset on AAve has it's own reserveFactor set.

AIP-5 and AIP-6 creators didn't set a reserve factor for GUSD and CRV, which means protocol is not receiving anything from the outstanding debt on these assets.

This AIP purpose is to update the reserveFactor of the assets GUSD and CRV.

- GUSD from 0% to 10%

- CRV from 0% to 20%

# ARC content in short

* Set ReserveFactor for GUSD to 10% and CRV to 20%

# Relevant Links

* AIP-5 CRV Listing https://app.aave.com/governance/0-QmNfU4FMdQriJVQeqQTNxgY63iSJVh8yCJf8aFDkQDjaLQ

* AIP-6 GUSD Listing  https://app.aave.com/governance/1-QmQ5tK5cgVE9nws1NCSqd5gn4sxiEvWra3G4mXHZg8pnMR

* Aavenomics : https://docs.aave.com/aavenomics/

## Implementations details

call setReserveFactor(0x056fd409e1d7a124bd7017459dfea2f387b6d5cd, 1000)
call setReserveFactor(0xD533a949740bb3306d119CC777fa900bA034cd52, 2000)

On the lending pool configurator contract 

https://etherscan.io/address/0x311bb771e4f8952e6da169b425e7e92d6ac45756

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
