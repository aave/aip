// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface ILendingPoolConfiguratorAIP {
  function setPoolPause(bool pause) external;
}

interface ILendingPoolAddressesProviderAIP {
  function setEmergencyAdmin(address admin) external;

  function transferOwnership(address newOwner) external;
}

interface IPermissionManagerAIP {
  function addPermissionAdmins(address[] calldata admins) external;
}

interface IProposalExecutor {
  function execute() external;
}

contract EnableArcProposal is IProposalExecutor {
  address public constant ARC_POOL_ADDRESSES_PROVIDER_ADDRESS =
    0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00;
  address public constant ARC_POOL_CONFIGURATOR_ADDRESS =
    0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA;
  address public constant ARC_PERMISSION_MANAGER_ADDRESS =
    0xF4a1F5fEA79C3609514A417425971FadC10eCfBE;

  // SEBA's Address
  address public constant SEBA_ADDRESS = 0x____SEBA_ETH_ADDRESS____;

  // ARC Timelock Veto DAO
  address public constant ARC_TIMELOCK_VETO_DAO_ADDRESS =
    0x33B09130b035d6D7e57d76fEa0873d9545FA7557;

  // ARC Multisig
  address public constant ARC_MARKET_MULTISIG_ADDRESS = 0x23c155C1c1ecB18a86921Da29802292f1d282c68;

  function execute() external override {
    address[] memory admins = new address[](1);
    admins[0] = SEBA_ADDRESS;

    // Add SEBA as PermissionAdmin
    IPermissionManagerAIP(ARC_PERMISSION_MANAGER_ADDRESS).addPermissionAdmins(admins);

    // Enable Arc market
    ILendingPoolConfiguratorAIP(ARC_POOL_CONFIGURATOR_ADDRESS).setPoolPause(false);

    // Transfer Emergency Admin and Market Owner
    ILendingPoolAddressesProviderAIP provider = ILendingPoolAddressesProviderAIP(
      ARC_POOL_ADDRESSES_PROVIDER_ADDRESS
    );
    provider.setEmergencyAdmin(ARC_TIMELOCK_VETO_DAO_ADDRESS);
    provider.transferOwnership(ARC_MARKET_MULTISIG_ADDRESS);
  }
}