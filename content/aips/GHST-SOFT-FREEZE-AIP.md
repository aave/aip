---
title: GHST Polygon V3 Soft Freeze
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: GHST Polygon V3 Soft Freeze
discussions: https://governance.aave.com/t/arfc-ghst-polygon-v3-soft-freeze/12192
created: 2023-03-07
updated: 2023-03-07
---

## Simple Summary
This AIP presents the Aave governance with an opportunity to change GHST risk parameters for Aave Polygon V3 Liquidity pool.

## Motivation

GHST is the native asset of the Aavegotchi ecosystem. This ARFC proposes new risk parameters for GHST following the deprecation of the "Bonding Curve," which created a new risk profile for the asset and is expected to increase its volatility.

Previously, GHST was minted and burned on an ETH L1 bonding curve contract, which lowered its volatility. However, with the deprecation of the curve, a "Soft Freeze" of the GHST asset on Aave V3 Polygon is proposed to allow for a conservative reaction to this new risk profile.

Once the bonding curve is deprecated and more market data is available on the risk profile of GHST, Aave governance will have in a few weeks/months a stronger basis to assess and provide updated risk parameters for the GHST asset.

## Specification

Ticker: GHST (GHST)

Contract Address: 0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7

| Risk Parameter | Current Value | Proposed Value |
| --- | --- | --- |
| Isolation Mode | NO | NO |
| Enable Borrow | YES | NO |
| Enable Collateral | YES | YES |
| Loan To Value | 25% | 0% |
| Liquidation Threshold | 45% | 45% |
| Liquidation Bonus | 15% | 15% |
| Reserve Factor | 20% | 20% |
| Liquidation Protocol Fee | 10% | 10% |
| Borrow Cap | 3.23M | 220k |
| Supply Cap | 5.88M | 4.65M |
| Debt Ceiling | N/A | N/A |

```solidity
contract GHSTV3RiskParamPayload is IProposalGenericExecutor {
  address public constant GHST = AaveV3PolygonAssets.GHST_UNDERLYING;
  uint256 public constant GHST_SUPPLY_CAP = 4_650_000;
  uint256 public constant GHST_BORROW_CAP = 220_000;
  uint256 public constant GHST_LTV = 0;
  uint256 public constant GHST_LIQ_THRESHOLD = 4500;
  uint256 public constant GHST_LIQ_BONUS = 11500;
  bool public constant GHST_BORROWING_ENABLED = false;

  function execute() external {
    AaveV3Polygon.POOL_CONFIGURATOR.setSupplyCap(GHST, GHST_SUPPLY_CAP);
    AaveV3Polygon.POOL_CONFIGURATOR.setBorrowCap(GHST, GHST_BORROW_CAP);
    AaveV3Polygon.POOL_CONFIGURATOR.setReserveBorrowing(GHST, GHST_BORROWING_ENABLED);
    AaveV3Polygon.POOL_CONFIGURATOR.configureReserveAsCollateral({
      asset: GHST,
      ltv: GHST_LTV,
      liquidationThreshold: GHST_LIQ_THRESHOLD,
      liquidationBonus: GHST_LIQ_BONUS
    });
  }
}
```

## References

A list of relevant links like for this proposal e.g.

- [forum discussion](https://governance.aave.com/t/arfc-ghst-polygon-v3-soft-freeze/12192)
- [tests](https://github.com/bgd-labs/aave-proposals/blob/master/src/test/polygon/GHSTV3PolRiskParamPayloadTest.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-proposals/blob/master/src/contracts/polygon/GHSTV3PolRiskParamPayload.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
