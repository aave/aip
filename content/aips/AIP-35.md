---
aip: 35
title: Adjust interest rate to account for APY over-approximation
status: Proposed
author: Ahmed Naguib Aly (@ahnaguib)
shortDescription: Adjust interest rate to account for APY over-approximation
discussions: https://governance.aave.com/t/arc-update-ampl-interest-rate-curve-to-account-for-over-approximation-in-compounded-interest/5350
created: 2021-07-26
---

## Simple Summary

- Update interest rate on AMPL market to account for over-approximation in compounded interest computation.
- Make use of the exponential curve due to the over-approximation to set higher max APY.


## Motivation

In AAVEs MathUtils an over-approximation in the application of the interest rate for computing compounded interest was discovered. 

### In [calculateCompoundedInterest](https://github.com/aave/protocol-v2/blob/baeb455fad42d3160d571bd8d3a795948b72dd85/contracts/protocol/libraries/math/MathUtils.sol#L45) method

Periodic rate (per second) is computed as:

uint256 ratePerSecond = rate / SECONDS_PER_YEAR;

in comparison to the exact computation.

![|281x35](https://github.com/aave/aip/blob/debf98b7ebe21b2964b3dc03843854c78709d813/content/assets/AIP-35/rate_per_second.png?raw=true)

derived from:

![|269x48](https://github.com/aave/aip/blob/debf98b7ebe21b2964b3dc03843854c78709d813/content/assets/AIP-35/apy_formula.jpeg?raw=true)

The deviation in the applied interest rate causes a small over-approximation for APYs <10%, but grows exponentially as can be seen below.

|Expected APY|Effective APY|Expected daily rate|Effective daily rate|
| --- | --- | --- | --- |
|4.00%|4.08%|0.01%|0.01%|
|5.00%|5.13%|0.01%|0.01%|
|10.00%|10.52%|0.03%|0.03%|
|50.00%|64.87%|0.11%|0.14%|
|100.00%|171.83%|0.19%|0.27%|
|200.00%|638.91%|0.31%|0.55%|
|1000.00%|2202543.09%|0.68%|2.78%|
|10000.00%|2.69E+43%|1.30%|31.52%|

This difference is especially noticeable in the AMPL market, where the configured interest rate can go up to 10,002% at max utilization.

The AAVE Genesis team has been made aware and they will publish more guidance on the discrepancy.

## Specification

As mentioned in AIP-26, a nonlinear - logistic or exponential - interest curve is more suited for 
AMPL's market and potentially other assets on AAVE's platform.

The over-approximation mentioned above results in an exponential curve which allows for defining a 
more suitable interest curve for AMPL. We propose the following parameters, which produces the curve below.

* Optimal utilization = 80%
* Base rate = 1%
* Slope1 = 2%
* Slope2 = 750%


![|624x384](https://github.com/aave/aip/blob/debf98b7ebe21b2964b3dc03843854c78709d813/content/assets/AIP-35/curve.png?raw=true "Chart")

##### APY table above 80% Utilization:

|Utilization|APY|
|---|---|
|80.00%|3.05%|
|81.00%|49.93%|
|82.00%|118.15%|
|83.00%|217.40%|
|84.00%|361.82%|
|85.00%|571.94%|
|86.00%|877.67%|
|87.00%|1322.50%|
|88.00%|1969.72%|
|89.00%|2911.43%|
|90.00%|4281.60%|
|91.00%|6275.19%|
|92.00%|9175.85%|
|93.00%|13396.29%|
|94.00%|19536.98%|
|95.00%|28471.63%|
|96.00%|41471.48%|
|97.00%|60386.14%|
|98.00%|87906.81%|
|99.00%|127949.14%|
|100.00%|186210.38%|

                                           
##### The part of the curve under 80% Utilization:    

**![|624x325](https://github.com/aave/aip/blob/debf98b7ebe21b2964b3dc03843854c78709d813/content/assets/AIP-35/curve_under_optimal.png?raw=true "Chart")**

## Rationale

1. Accounting for the over-approximation of the existing Slope2=10,000% interest curve requires reducing the slope2 parameter.
2. Taking advantage of the exponential curve allows for:
  a. Setting a higher optimal utilization rate.
  b. Setting a higher maximum APY to reduce the potential for
     utilization being at 100% for extended periods without creating a too steep of an interest rate increase right above the optimal utilization rate.


## Implementation

A deployment of the existing implementation of the Interest Strategy will be used, with the following parameters:

    optimalUtilizationRate: new BigNumber(0.8).multipliedBy(oneRay).toFixed(),
    baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
    variableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
    variableRateSlope2: new BigNumber(7.5).multipliedBy(oneRay).toFixed(),

[https://etherscan.io/address/0x84d1FaD9559b8AC1Fda17d073B8542c8Fb6986dd#readContract](https://etherscan.io/address/0x84d1FaD9559b8AC1Fda17d073B8542c8Fb6986dd#readContract)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
