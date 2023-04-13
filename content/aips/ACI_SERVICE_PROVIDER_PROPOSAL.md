---
title: ACI Service Provider Proposal
author: Marc Zeller (@marczeller), Aave-Chan initiative
shortDescription: ACI Service Provider Proposal
discussions: https://governance.aave.com/t/arfc-aci-service-provider-6-month-proposal/12513
created: 2023-04-12
---

## Simple Summary

This AIP proposal presents Aave with the opportunity to onboard Aave-Chan Initiative (ACI) as a service provider for the Aave protocol.

## Motivation

The Aave Chan Initiative has been a dedicated contributor to the Aave ecosystem. The 6-Month Budget Proposal aims to secure the necessary resources to continue the ACI's work, ensuring that we can maintain our level of commitment and contribution to the Aave ecosystem. For more details about the ACI proposal, please refer to the [TEMP CHECK](https://governance.aave.com/t/temp-check-aave-chan-initiative-6-month-budget-proposal/12344) version of the current proposal.

## Specification

If this proposal is approved, a stream of the allocated budget will be activated, with [treasury.aavechan.eth](https://etherscan.io/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922) as the recipient.

This will allow the ACI to periodically claim a fraction of the budget for the duration of the stream.

The proposed budget is 250k aUSDT for a period of 6 months.

The proposal payload uses the delegatecall pattern with a pre-deployed payload. The payload creates a 180 days stream with the following parameters:

```solidity
contract ProposalPayload is IProposalGenericExecutor {
  address public constant ACI_TREASURY = 0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922;
  address public constant AUSDT = AaveV2EthereumAssets.USDT_A_TOKEN;
  address public constant COLLECTOR = AaveV2Ethereum.COLLECTOR;
  address public constant RESERVE_CONTROLLER = AaveV2Ethereum.COLLECTOR_CONTROLLER;
  uint256 public constant STREAM_AMOUNT = 250000e6;
  uint256 public constant STREAM_DURATION = 180 days;

  function execute() external {
    uint256 ACTUAL_STREAM_AMOUNT_AUSDT = (STREAM_AMOUNT / STREAM_DURATION) * STREAM_DURATION;

    IAaveEcosystemReserveController(RESERVE_CONTROLLER).createStream(
      COLLECTOR,
      ACI_TREASURY,
      ACTUAL_STREAM_AMOUNT_AUSDT,
      AUSDT,
      block.timestamp,
      block.timestamp + STREAM_DURATION
    );
  }
}
```	

## References

A list of relevant links like for this proposal:

- [forum discussion](https://governance.aave.com/t/arfc-aci-service-provider-6-month-proposal/12513)
- [tests](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3ACIProposal_20230411/AaveV3ACIProposal_20230411Test.t.sol)
- [proposalCode](https://github.com/bgd-labs/aave-v3-crosschain-listing-template/blob/main/src/AaveV3ACIProposal_20230411/AaveV3ACIProposal_20230411.sol)

## Security Considerations

The proposal Payload was reviewed by [Bored Ghost Developing](https://bgdlabs.com/).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).