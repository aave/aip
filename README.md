## Contributing

If you plan to add a new *Aave Improvement Proposal (AIP)* follow this guide:

1. Fork [this repository](https://github.com/aave/aip) by clicking 'Fork' in the top right.
2. Add your AIP to your fork of the repository in the `content/aips/` directory. Use the [AIP template](https://github.com/aave/aip/blob/master/X-AIP.md).
3. Install the project dependencies: `npm install`. Note the repository works with `Node v12`.
3. Generate the AIP identifier using the following command: `npm run generate-filename '[title]' '[date]'`. Replace the `title` and `date` placeholders with the `title` and `created` tags of the AIP md file.
4. Use the generated identifier for the AIP filename. The final name of the AIP file should be: `[generated_identifier]-AIP-[title_abbrev].md`.
4. Submit a [Pull Request (PR)](https://github.com/aave/aip/pulls) to the [Pending AIPs branch](https://github.com/aave/aip/tree/Pending-AIPs).

Your first PR should be a draft of the final AIP. It must follow the formatting criteria enforced by the build, as detailed in the AIP template. Make sure you include a `discussions-to` header with the URL to a discussion forum or open GitHub issue where people can discuss the AIP as a whole.

If your AIP requires images, the image files should be included in a subdirectory of the `assets` folder for that AIP as follow: `assets/[generated_identifier]-AIP-[title_abbrev]` (for AIP **[generated_identifier]-AIP-[title_abbrev]**). When linking to an image in the AIP, use relative links such as `../assets/[generated_identifier]-AIP-[title_abbrev]/image.png`.

When you believe your AIP is mature and ready to progress past the WIP phase, feel free to change its status to `Proposed`.

### Contribution example

Let's imagine we believe a parameter of the `AAVE` reserve should be changed for the common good of the community, in particular, an increase of the liquidation bonus. If we propose the change to the community and consensus is reached, we will make this happen.

First of all, an *Aave Request for Comment (ARC)* had to be initiated in the [Governance Forum](https://governance.aave.com/), so the community can participate and provide feedback. Here you can find [instructions](https://docs.aave.com/governance/arcs) about it.

If the community is aligned with our change proposal, we can start working on the AIP. There is an example of the AIP at the [sample-aip branch](https://github.com/aave/aip/tree/sample-aip) and the  [Pull Request (PR)](https://github.com/aave/aip/pull/118) to the [Pending AIPs branch](https://github.com/aave/aip/tree/Pending-AIPs) that it is needed to be done.

And Voila, we have created our AIP for the proposal!

Now it's time to prepare everything for the proposal submission. Some AIPs are more sophisticated than others, so need tests and even some contract code. In this case, we would just need to prepare the call to the Governance contract with adequate parameters, which can be done with a Payload contract or directly using calldatas. We recommend using a Payload contract since it is much more clarifying, transparent and less error-prone than calldatas.

Here you can find two examples of Payload contracts: 
- [AssetListingProposalGenericExecutor](https://github.com/aave/aave-asset-listing/blob/master/contracts/assetListing/AssetListingProposalGenericExecutor.sol) - Payload contract to add new assets to the Aave protocol.
- [ProposalIncentivesExecutor](https://github.com/aave/incentives-proposal/blob/master/contracts/proposals/ProposalIncentivesExecutor.sol) - Payload contract used to bootstrap the incentives program.

> **Note**: If the proposal is an asset listing here you have some [helpful docs](https://docs.aave.com/governance/guides/new-asset-listing) about the process to follow.

Once all is ready for the proposal, submit the proposal to [Aave Governance](https://app.aave.com/governance).


## AIP Statuses

- **WIP** - an AIP that is still being developed.
- **Proposed** - an AIP that is ready to be proposed on-chain.
- **Approved** - an AIP that has been accepted for implementation by the Aave community.
- **Implemented** - an AIP that has been released to mainnet.
- **Rejected** - an AIP that has been rejected.
