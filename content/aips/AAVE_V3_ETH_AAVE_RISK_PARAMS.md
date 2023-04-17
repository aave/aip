---
title: Update AAVE V3 ETH Risk Parameters
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: Update AAVE V3 ETH Risk Parameters
discussions: https://governance.aave.com/t/arfc-align-aave-risk-parameters-on-aave-v3-ethereum-market-with-aave-v2/12656
created: 2023-04-16
---

## Simple Summary

This AIP proposal presents Aave with the opportunity to update AAVE risk parameters on the Aave V3 Ethereum Pool

## Motivation

This AIP proposes the alignment of the AAVE risk parameters on the Aave V3 Ethereum market with those on Aave V2, as the current parameters on Aave V3 are less attractive for users considering migration.

By matching the Aave V2 parameters, we aim to encourage migration and ensure a smoother transition for users. This proposal does not suggest any changes to Aave V3 caps or interest rate strategies.

To make Aave V3 more attractive for migration and to match Aave V2 parameters, we propose the following changes:

- Loan-to-Value (LTV): Increase the LTV from 60% to 66%.
- Liquidation Threshold (LT): Increase the LT from 70% to 73%.
- Liquidation Penalty (LP): Maintain the current LP of 7.5%, as it is already in alignment with Aave V2.


## Specification

Ticker: AAVE

Contract address: [0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9](https://etherscan.io/address/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9)

| Parameter                | Current Aave V3 | Current Aave V2 | Proposed Aave V3 |
|--------------------------|-----------------|-----------------|------------------|
| Loan-to-Value (LTV)      | 60%             | 66%             | 66%              |
| Liquidation Threshold (LT)| 70%             | 73%             | 73%              |
| Liquidation Penalty (LP)  | 7.5%            | 7.5%            | 7.5%             |

```solidity
contract AaveV3RiskParams_20230516 is AaveV3PayloadEthereum {
  function collateralsUpdates() public pure override returns (IEngine.CollateralUpdate[] memory) {
    IEngine.CollateralUpdate[] memory collateralUpdate = new IEngine.CollateralUpdate[](1);

    collateralUpdate[0] = IEngine.CollateralUpdate({
      asset: AaveV3EthereumAssets.AAVE_UNDERLYING,
      ltv: 66_00,
      liqThreshold: 73_00,
      liqBonus: EngineFlags.KEEP_CURRENT,
      debtCeiling: EngineFlags.KEEP_CURRENT,
      liqProtocolFee: EngineFlags.KEEP_CURRENT,
      eModeCategory: EngineFlags.KEEP_CURRENT
    });
    return collateralUpdate;
  }
}
```

## References

A list of relevant links like for this proposal:

- [forum discussion](https://governance.aave.com/t/arfc-align-aave-risk-parameters-on-aave-v3-ethereum-market-with-aave-v2/12656)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/src/AaveV3RiskParams_20230516/AaveV3RiskParams_20230516test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3RiskParams_20230516/AaveV3RiskParams_20230516.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).