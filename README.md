## Contributing

If you plan to add a new _Aave Improvement Proposal (AIP)_ follow this guide:

1. Fork [this repository](https://github.com/aave/aip) by clicking 'Fork' in the top right.
2. Add your AIP to your fork of the repository in the `content/aips/` directory. Use the [AIP template](https://github.com/aave/aip/blob/master/X-AIP.md).
3. Install the project dependencies: `npm install`. Note the repository works with `Node v12`.
4. Generate the AIP identifier using the following command: `npm run generate-filename '[title]' '[date]'`. Replace the `title` and `date` placeholders with the `title` and `created` tags of the AIP md file.
5. Use the generated identifier for the AIP filename. The final name of the AIP file should be: `[generated_identifier]-AIP-[title_abbrev].md`.
6. Submit a [Pull Request (PR)](https://github.com/aave/aip/pulls) to the [Pending AIPs branch](https://github.com/aave/aip/tree/Pending-AIPs).

Your first PR should be a draft of the final AIP. It must follow the formatting criteria enforced by the build, as detailed in the AIP template. Make sure you include a `discussions-to` header with the URL to a discussion forum or open GitHub issue where people can discuss the AIP as a whole.

If your AIP requires images, the image files should be included in a subdirectory of the `assets` folder for that AIP as follow: `assets/[generated_identifier]-AIP-[title_abbrev]` (for AIP **[generated_identifier]-AIP-[title_abbrev]**). When linking to an image in the AIP, use relative links such as `../assets/[generated_identifier]-AIP-[title_abbrev]/image.png`.

When you believe your AIP is mature and ready to progress past the WIP phase, feel free to change its status to `Proposed`.

### Contribution example

Let's imagine we believe a parameter of the `AAVE` reserve should be changed for the common good of the community, in particular, an increase of the liquidation bonus. If we propose the change to the community and consensus is reached, we will make this happen.

First of all, an _Aave Request for Comment (ARC)_ had to be initiated in the [Governance Forum](https://governance.aave.com/), so the community can participate and provide feedback. Here you can find [instructions](https://docs.aave.com/governance/arcs) about it.

If the community is aligned with our change proposal, we can start working on the AIP. There is an example of the AIP at the [sample-aip branch](https://github.com/aave/aip/tree/sample-aip) and the [Pull Request (PR)](https://github.com/aave/aip/pull/118) to the [Pending AIPs branch](https://github.com/aave/aip/tree/Pending-AIPs) that it is needed to be done.

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

<!-- ### AIPs table start ### -->
### AIPs

| AIP | hash | encoded hash |
| --- | --- | --- |
| [006E2100C20F-AIP-ADD-CVX-TO-AAVE-V2](./content/ipfs-aips/006E2100C20F-AIP-ADD-CVX-TO-AAVE-V2-Ipfs-hashes.json) | QmXB6uMp4TEnEkSqyTHckxetW49RUjF2yRvXwzzqTkQMuK | 0x8346fdee34f7a14f3293ddc57b74e15d3194beee0c6db998a2dd43418cc907b2 |
| [08C1D37498C4-AIP-AAVE-BGD](./content/ipfs-aips/08C1D37498C4-AIP-AAVE-BGD-Ipfs-hashes.json) | QmW2Mw15fhopJN7Tt9SJc3MHqJ5zPQrnFuPqDrf34TWmW9 | 0x722e11fe1e1a1cbeb06c64a278d343a2537b5f9f80975cc5f7788e9f402ce852 |
| [0DC11FACBC53-AIP-RENEW_AAVE_GRANTS](./content/ipfs-aips/0DC11FACBC53-AIP-RENEW_AAVE_GRANTS-Ipfs-hashes.json) | QmQh4kBVdvj6m3eXmxns5ovehwa9bisgWxkz6eGSgRuE7B | 0x22f22ad910127d3ca76dc642f94db34397f94ca969485a216b9d82387808cdfa |
| [1B0F30D959FD-AIP-AAVE_STARKNET_PHASE_I](./content/ipfs-aips/1B0F30D959FD-AIP-AAVE_STARKNET_PHASE_I-Ipfs-hashes.json) | QmSszWnxSTrud1Ne7yfpbxNL2mjwx1RArWTrDAbfmbXQvZ | 0x4376257429a3c556225d6ebbefa674b6c2732913ac7cbaecd6459950549b962e |
| [1E6D88C52590-AIP-CONTINUOUS-FORMAL-VERIFICATION-CERTORA](./content/ipfs-aips/1E6D88C52590-AIP-CONTINUOUS-FORMAL-VERIFICATION-CERTORA-Ipfs-hashes.json) | QmXz9i8zYz2g9XpTP63eKYPZxPftF76hQXr2jzWTMX7zY4 | 0x8f54769ae1c70e337e25314b0118ec69c439dfe701e6d0b3bb9ae28c7ae2655d |
| [1F43FC2F4FC1-AIP-UPDATE-POLYGON-MARKET](./content/ipfs-aips/1F43FC2F4FC1-AIP-UPDATE-POLYGON-MARKET-Ipfs-hashes.json) | QmNfvidaw1j1CjktDoC4BU3aYdzHZqZErMynhV5wmNuJr9 | 0x04f0230984b6b2973cd7c5408910b643145f2ca35161ac0592c6ef024b593ff6 |
| [29720ED10AEA-AIP-ADD-CLAIMREWARDSTOSELF-TO-INCENTIVES](./content/ipfs-aips/29720ED10AEA-AIP-ADD-CLAIMREWARDSTOSELF-TO-INCENTIVES-Ipfs-hashes.json) | Qmb3G1SprTa7zGPbhrCqKRBu61g7J7qF4sfSSN8hjuhsUo | 0xbcb3635cddd0d4de418c48e98e1a8af8dd2278db1e1cc4f05de387f7bdd1d794 |
| [298883DBD784-AIP-ADD-MAI-TO-AAVE-V3](./content/ipfs-aips/298883DBD784-AIP-ADD-MAI-TO-AAVE-V3-Ipfs-hashes.json) | QmexRaUuRPSZY9UTKAj1YZCtjc3QzWjSEaUUhUxoFzp37a | 0xf6e50d5a3f824f5ab4ffa15fb79f4fa1871b8bf7af9e9b32c1aaaa9ea633006d |
| [30C900A596F6-AIP-APP-SECURITIZE-WHITELISTER-TO-AAVE-ARC](./content/ipfs-aips/30C900A596F6-AIP-APP-SECURITIZE-WHITELISTER-TO-AAVE-ARC-Ipfs-hashes.json) | QmcPRbuStE4YeLupPYAyVp4PLw5VvJqcdRQgBfEHyXhKQC | 0xd0b98a12db1859322818b5943127735ca545d437d09dc0aa7dbcf9e66ac01569 |
| [3C58C5F00209-AIP-SIGP](./content/ipfs-aips/3C58C5F00209-AIP-SIGP-Ipfs-hashes.json) | QmeG65FVH8rVNDpAiNC2Rwsh3RyLdPceoyWj9GLxqUGEUB | 0xec8fc43da4504c01c0aaf85dec47289e5d3abcc3bc08b90c3018c15acd373644 |
| [412B6185D705-AIP-ADD-STETH-TO-AAVE-V2](./content/ipfs-aips/412B6185D705-AIP-ADD-STETH-TO-AAVE-V2-Ipfs-hashes.json) | QmeNFhjbauqGnnkNmFrUb724gfVT3ubJvCtxgFMTyit7Er | 0xee24239693c6aa34bc58543a522c009c4fdf1c23994d9275513691d99f9c7703 |
| [4C7076AA6CC7-AIP-FIREBLOCKS-WHITELISTER-ON-AAVE-ARC](./content/ipfs-aips/4C7076AA6CC7-AIP-FIREBLOCKS-WHITELISTER-ON-AAVE-ARC-Ipfs-hashes.json) | QmR1wBgVnieDz3GUoxs6XEK8VgG65zdZtXWy48GP9opzvE | 0x27c7a77c3127ef93b409b291cbf3726ea80b9ce00bc3e2967bc7027b0c89f04b |
| [541C8BE22C02-AIP-AAVE_STARKNET_PHASE_I_PART2](./content/ipfs-aips/541C8BE22C02-AIP-AAVE_STARKNET_PHASE_I_PART2-Ipfs-hashes.json) | QmTDH2nsmCJsh2NHJG2GiZS7p17gzo9x8RT6zgeFGfj2nC | 0x4866db95bac1722f825c8eaaebc47409068cc7075e6dda228effe10a71ac47b1 |
| [720A45A31DA6-AIP-ADD-1INCH-TO-AAVE-V2](./content/ipfs-aips/720A45A31DA6-AIP-ADD-1INCH-TO-AAVE-V2-Ipfs-hashes.json) | QmNszq2QvphaVqboeCV83yUsgj9JyRLSCHHTacQvzxTx6J | 0x0807c1081243b87ff499e9af640afab121f24a693b289c11ea301cad1fd51ccf |
| [7896B42652EF-AIP-RENEW-ALLOWANCE-AAVE-SM](./content/ipfs-aips/7896B42652EF-AIP-RENEW-ALLOWANCE-AAVE-SM-Ipfs-hashes.json) | QmTGzYiWMBG5pdUL5pc5i4jTSkad366rwtXnb2bmbSNYEo | 0x495a8adb28587f0b208aaa0fcb19686c15cd344e5d360480220b0d2f1ff86694 |
| [8E70B487F248-AIP-CONSOLIDATE-RESERVE-FACTORS-ENABLE-DPI](./content/ipfs-aips/8E70B487F248-AIP-CONSOLIDATE-RESERVE-FACTORS-ENABLE-DPI-Ipfs-hashes.json) | QmTbLK5j28Ucb8RsasTQ1VLt7ML7RUKg5ASqrj9RWiMng8 | 0x4e0d5862024779efb91195469aa852e3a664221d01fb1c0b5c2ae4d7dd8cd401 |
| [8EB7754E04CE-AIP-BOUNTY-TO-HACXYK-FALLBACK-ORACLE](./content/ipfs-aips/8EB7754E04CE-AIP-BOUNTY-TO-HACXYK-FALLBACK-ORACLE-Ipfs-hashes.json) | QmcpAZfpiaWmLhfUFg9PyrT4AvzVBBV5hH6SJMyMrrwgbN | 0xd7100e323d90e31a5af8b57d1ab43180ab1ffb8c7a3a53daa311bfe909fff365 |
| [922C7BCAA707-AIP-RENEW_AAVE_GRANTS_DAO](./content/ipfs-aips/922C7BCAA707-AIP-RENEW_AAVE_GRANTS_DAO-Ipfs-hashes.json) | QmW1YMEnJX8SMWZEf6uUvNYqLA72VXuWnxMvBnfHXmtVjo | 0x71f844dcbbdec5423168216c396d02ac6804a0655d347bdbb6401c0b8a80ff1a |
| [9DDCC8B77A40-AIP-AUTHORIZE-GUARDIAN-TO-HOLD-EMERGENCY-KEYS-FOR-V2](./content/ipfs-aips/9DDCC8B77A40-AIP-AUTHORIZE-GUARDIAN-TO-HOLD-EMERGENCY-KEYS-FOR-V2-Ipfs-hashes.json) | QmadwASW4nrYi3k2F7WcVaCefqGa3ykjWvTtxrhpv8GMXP | 0xb6b9b8b4775946ac698b7257e5909eebbffa963b2469a88a216d5dd97fc6685a |
| [AB128F4E15AE-AIP-CONSOLIDATE-RESERVE-FACTORS-ENABLE-DPI](./content/ipfs-aips/AB128F4E15AE-AIP-CONSOLIDATE-RESERVE-FACTORS-ENABLE-DPI-Ipfs-hashes.json) | QmaqqGyP76hDi5ywqSoF5r63jVrG7TdZVNzcm8Zdwa4PeM | 0xb9c608ca7bc75d445c771464870514b2a829823713e5efc7e7ca713054f8ead6 |
| [AIP-1](./content/ipfs-aips/AIP-1-Ipfs-hashes.json) | QmXTJCpQewBLeVpehu8NFa1vNfUwrvcEkBV79UWwRV5e71 | 0x876d101db93e098b91046c83f57bcfbd4cfcc0a08af8ed460ce151920f7a69f0 |
| [AIP-10](./content/ipfs-aips/AIP-10-Ipfs-hashes.json) | QmYFSYTNqafvDsU1fUvCeAqJk1AuePJ2qvpE3XanJo6ZH6 | 0x933f3568af3f6528df60bc0f4eb7e6d60f75043316b9de3f1d7f62389815752d |
| [AIP-11](./content/ipfs-aips/AIP-11-Ipfs-hashes.json) | QmXwFPhN3ABDzBuEhPTzeXzuQdGkHfWtEZn348LQWxuFFZ | 0x8e9625443f5a606408e94696458da7d47efb7cb68015b4c672ffe13372dd6934 |
| [AIP-12](./content/ipfs-aips/AIP-12-Ipfs-hashes.json) | QmZZ7JqvEx99u7dMNFPBBnew3BgepLCmXRMrNi8y5ndpXn | 0xa6a199f5378d27b8be29b8ea648b60006f6a4d0cfb15c7951c6e06a1c4b6f705 |
| [AIP-13](./content/ipfs-aips/AIP-13-Ipfs-hashes.json) | QmY4AYSTrxVvqTprSjwuaTiECzrWEs2JJFwTx6UNpYMepW | 0x905bba68f66fa57260d86112be64a179903c10061ac0379f008c34dcfbd41b27 |
| [AIP-14](./content/ipfs-aips/AIP-14-Ipfs-hashes.json) | QmQJorQkaHfWV3JfEZFWXEaQxjdjoZ8BqdwXJjhLFh52AD | 0x1d3e8cea0d2274c89d6bfd0add77eebc441d07b25bcdb04b354e83dff43dd7da |
| [AIP-15](./content/ipfs-aips/AIP-15-Ipfs-hashes.json) | QmQyj7Drrk2NESFCSUs5EPjVaDRkfv7KAK5RkeH3gWzbvR | 0x2736d655ab1f623c524505a0a0f12d37355987d6a13b9a154988e5a42b433b7a |
| [AIP-16](./content/ipfs-aips/AIP-16-Ipfs-hashes.json) | Qmf1JeXiw8BDUoKJ89VmUJ8wy22D2udqL4HxprCG7DZ5zG | 0xf7a1f565fcd7684fba6fea5d77c5e699653e21cb6ae25fbf8c5dbc8d694c7949 |
| [AIP-17](./content/ipfs-aips/AIP-17-Ipfs-hashes.json) | QmURZNW6PT4z3e4DZqxHMAW1bWRFvxZjtyQZqhnhgdLB6R | 0x5a67fd6a4da402d9c3aeaf65b1f0d22c73801bd587999d0fd4deffa3d66d89ba |
| [AIP-18](./content/ipfs-aips/AIP-18-Ipfs-hashes.json) | QmTYMox4aBpyQH53LwMzTuJY2z7Df7ANUSakeeeWWUoXmJ | 0x4d4a4bda3036f8da3f6911941df8c185f0e4ec248de44b44253dae5a4798a001 |
| [AIP-19](./content/ipfs-aips/AIP-19-Ipfs-hashes.json) | QmTrcBCNxEx5Ur6HnKXhF8Ds3wvvFY1QYMQvz6WozR2EVH | 0x51f6feb2dcb9da8154354179fc0ef62dfb63b0be422c7629290c24cd99854084 |
| [AIP-2](./content/ipfs-aips/AIP-2-Ipfs-hashes.json) | QmaV9J1VFNP7K1XqDGcVcf7oXquM1Yg4uvNr2zQxJ8mrVd | 0xb47935d0c2c4d7b020aba36add1982d1df6456bf70043e19c48908359b576c90 |
| [AIP-20](./content/ipfs-aips/AIP-20-Ipfs-hashes.json) | QmfYfZhLe5LYpCocm1JxdJ7sajV1QTjrK5UCF1TGe5HTfy | 0xffaa9d3c5810d40206e289407e9935e447e1fa4183c672e03fa69486e7d8b41c |
| [AIP-21](./content/ipfs-aips/AIP-21-Ipfs-hashes.json) | Qmb4cXBMga15bEHe84BeRXj7gY1tfXom8sr9WyZDwhJPGa | 0xbd0c29a45fd25d7c77e3d31efddd83131e4e82630ce7a11b418bb5b9c79c8887 |
| [AIP-22](./content/ipfs-aips/AIP-22-Ipfs-hashes.json) | QmZmGy1Bm1v3pPdJdYCCe7EyujW2i169eNq6txpQg4NsSn | 0xa9bf7dc9c6d546c9d2262b1d3dff9fab1528bb1c34b745e14fe37d542c1094f7 |
| [AIP-23](./content/ipfs-aips/AIP-23-Ipfs-hashes.json) | QmcznTifYPKHcna8o37MmTKMYhRzhXtVmJVjYEVGEq2gsC | 0xd9c873eea9fa90a9f24a33398cd38eb4791133c197cec9d87d0cca983b3460e3 |
| [AIP-24](./content/ipfs-aips/AIP-24-Ipfs-hashes.json) | QmcPSftyJoKUHKHg3YxFGpx91Y63UxCPV1aRuWAL7XuH2w | 0xd0babf74a475611225510ea385d0ff0f6baaa594a9757307137f61ff813e0eb0 |
| [AIP-25](./content/ipfs-aips/AIP-25-Ipfs-hashes.json) | QmbxV3o8wYZSNDzMTatBcCAkHkxsUa4p2VaEZGGUm8xv74 | 0xca55ea7db44a796d879b9325f5a3b13a2bcc1cd95d290c65983086516bda3c9b |
| [AIP-26](./content/ipfs-aips/AIP-26-Ipfs-hashes.json) | QmVXVtoDGzNtAPDCTWg7vYaezadKwsuHLrbgaTDRESQKzB | 0x6ac93abe9135d97377d4b2ebafddf8012d8c767117979499b12e1d61fc7df6c4 |
| [AIP-27](./content/ipfs-aips/AIP-27-Ipfs-hashes.json) | QmdfFTxuuu7jQv9se4XFUy3w2RCh35kfp4ocUqr69q1X8W | 0xe3a30eb1373b01235923215abf4ae32fbc1dd81e0036a882392c3d6c706147ab |
| [AIP-28](./content/ipfs-aips/AIP-28-Ipfs-hashes.json) | QmaVRJEWEbik6kcDQSpVvgVM9DLUciNJ9BJAUKp9LwK6iW | 0xb48b4e4c293b6cd05ed1d31f9283838cc7d495ad51ef356a50d51613e9e7d9ab |
| [AIP-29](./content/ipfs-aips/AIP-29-Ipfs-hashes.json) | Qmby95BYfKszQxMPDmbyGzF6vnkpPQCjsMaJLyx9sxixUH | 0xca80e8e504ac451697e1dc2aeb34fb8fbf6c17f42cd691306d4876ffa3923682 |
| [AIP-3](./content/ipfs-aips/AIP-3-Ipfs-hashes.json) | QmaTgsrVaUhkKgwKa1GVMnmJmh91TcABTkuLDTpjVBnqjg | 0xb419c29d58017ef4f69c3b527a0a45facbd26abcde922d2f3c03a674c25ffb93 |
| [AIP-32](./content/ipfs-aips/AIP-32-Ipfs-hashes.json) | QmREXhrYkWCmKJhQX5X5dWMfFBis2khmD9i9VCyUuJeT3W | 0x2b01a7f5dc2819f0bb23a352df48c100da5a0c97502523ba045b88399a820051 |
| [AIP-33](./content/ipfs-aips/AIP-33-Ipfs-hashes.json) | QmbfLFGJdZQn21pwJGQzVnFqLk4vXHTmHUhio8ArWmvVqZ | 0xc5f116e77129bd672679d021ff5902b98e371f42aa8000dfd1d1bf9468edeed8 |
| [AIP-35](./content/ipfs-aips/AIP-35-Ipfs-hashes.json) | QmVxgx9psqGpkSWX1Q7EA46WwQo8JXnLVX5Gem8hKYk4G4 | 0x713d40baca96b7f7aad64d697c4ad38eff24d77c17b014d7212d05a861f6b73d |
| [AIP-37](./content/ipfs-aips/AIP-37-Ipfs-hashes.json) | QmePHWTUk1bgh7RqpgtSpBj3kBEPEsLoPhiYjCen4y1obL | 0xee67c2e93b082190dac62cbead2f7ace23f7d1d838d1cbae9613b9722313b15f |
| [AIP-4](./content/ipfs-aips/AIP-4-Ipfs-hashes.json) | QmYZYRQoT1PBHBawsQ6rVZgPauc6mPZjj2mquY92awzd8k | 0x97e24f61a3ff7dc3bbdf4711fee1272bf35f32e6259c02adafe59f78f7e929f9 |
| [AIP-5](./content/ipfs-aips/AIP-5-Ipfs-hashes.json) | Qma2zXR6NP7K5hVBzQQU1pt2kwT96hbC7KmgVceKg7vQx6 | 0xadc631b825d9825f6d5f9a1125c4573b2c9d859d74d7f32895c4c54867ea6abf |
| [AIP-6](./content/ipfs-aips/AIP-6-Ipfs-hashes.json) | QmWpdVz9G1rzNQCBgcuV6LP39JoA5EZ3vDmVSLnwzmePU4 | 0x7e08641d409c005bc9363a187c6782b9b596cb438715a6090a26f3cfe8091561 |
| [AIP-7](./content/ipfs-aips/AIP-7-Ipfs-hashes.json) | QmTEiiqRrHTi25gAHJdbDDptehE36TzSTxYSuA1R5o2NsN | 0x48c57c9f586007fd148dea7e9f44b2f4714cfe1a34b378736dfe5e34a3825be5 |
| [AIP-8](./content/ipfs-aips/AIP-8-Ipfs-hashes.json) | QmRT8PiQwzPUYZVvURqYBDpb8M6EveRUwkMY4uoTJXNmMm | 0x2e3bd8c71beab0e5bbe32e4fba436bd6ba2eda311f9fa9cd21aeec692e17772c |
| [AIP-9](./content/ipfs-aips/AIP-9-Ipfs-hashes.json) | QmS8SNqXhvHHUuXBhch2iUkRDpRnM2ds9iqeSdgxjSVSmU | 0x384dd57abcd23aae459877625228062db4082485a0ac1fc45eb54524f5836507 |
| [C80DBB8511E8-AIP-OPTIMIZING-ETH-RATES](./content/ipfs-aips/C80DBB8511E8-AIP-OPTIMIZING-ETH-RATES-Ipfs-hashes.json) | QmU8YK9g7ELcjJx75roKGaLMSm2kg7DxTxZQjZencbVRH3 | 0x560beb8b858395e146aaaf9d242f7a4da3569311fa288eaf63648402ca929a22 |
| [C8A2BBD97C9C-AIP-ADD-ENS-TO-AAVE-V2](./content/ipfs-aips/C8A2BBD97C9C-AIP-ADD-ENS-TO-AAVE-V2-Ipfs-hashes.json) | QmU4MH1mps19vXJzWeV555T6yhqX2sqSceaN1fkkxgFDe1 | 0x54f91e12ea75ccaf9101fa8d59bf08b9edab7a745f16ca0ac26b668e47b93952 |
| [CCE7B8AF0848-AIP-ADD-GUNI-TO-AMM-MARKET](./content/ipfs-aips/CCE7B8AF0848-AIP-ADD-GUNI-TO-AMM-MARKET-Ipfs-hashes.json) | QmTYrqAZFmc8EfrMTh4PFPBSFwsZ1TqNZ5KR3KnwqB6NeM | 0x4d6b1c42fc3074bd21262225f025191900ddaad321896abfd9ee03dee39ccfd2 |
| [E96287A0963D-AIP-ADD-TERRA-USD-(UST)-TO-AAVE-V2](./content/ipfs-aips/E96287A0963D-AIP-ADD-TERRA-USD-(UST)-TO-AAVE-V2-Ipfs-hashes.json) | QmYcKbka4WWgwVTcxE7esz2NJfzQbza5ya6oTUKhuFzPrN | 0x98988e11b4db662760cd10652f66abeef3ad17e242091b360fe6dfd681e4608f |
| [EACB2C901249-AIP-SEBA-BANK-WHITELISTER-ON-AAVE-ARC](./content/ipfs-aips/EACB2C901249-AIP-SEBA-BANK-WHITELISTER-ON-AAVE-ARC-Ipfs-hashes.json) | QmRw3MDvmjqyX825Yyw6chbXoQ9DcE4yjEoj48FEv3vWG7 | 0x35626848bc220e0bf46adf4a40c3be50894e860a0f91c6f3a1dd4d46bdb68048 |
| [F93E2038F139-AIP-BAL-AAVE-TOKEN-SWAP](./content/ipfs-aips/F93E2038F139-AIP-BAL-AAVE-TOKEN-SWAP-Ipfs-hashes.json) | QmefFRkSojKFqr8qchKDdTKT67WgE1rgfd3rRESxKMeJXj | 0xf27eb37dc1f6129638e61204393c7f27bafa4c4f9ae4ea6170132af7f51bc7e2 |
| [undefined](./content/ipfs-aips/all-aips.json) | undefined | undefined |

<!-- ### AIPs table end ### -->
