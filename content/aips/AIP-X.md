---
aip: <to be assigned>
title: Listing due diligence with the Kleros T2CR
status: Proposed
author: Clément Lesaege (@clesaege) <clement@kleros.io>
discussions: https://governance.aave.com/t/arc-listing-due-diligence-with-the-kleros-t2cr/1363
created: 2020-07-12
---

## Simple Summary

We propose to create two Aave badges (one for listing assets and another
for listing them as collateral) on the [*Token² Curated
Registry*](https://tokens.kleros.io/). This registry will validate that
assets requesting a listing satisfy Aave risk criteria. Assets getting
an Aave badge can be put to vote on Aave governance for listing.

## Abstract


Listing assets on Aave and in particular assets as collateral is an
important part of protocol governance:

-   Assets which can be borrowed on Aave. Those need to have smart
    contracts compatible with Aave and be of relative interest in order
    not to clutter the UI and use gas for nothing. They should also have
    enough liquidity to avoid huge price increases (drops are fine) in a
    short time period which would make some
    positions undercollateralized.
-   Assets which can also act as collateral. Those are particularly
    critical to Aave. In case of rapid price change of the asset, some
    loans could end up undercollateralized which would lead to staked
    AAVE being auctioned to reimburse outstanding protocol debt. Even
    worse, in case the asset is compromised (either due to a smart
    contract bug or a misbehavior of an actor managing the system), all
    the money in Aave could be stolen.

The Aave team used to handle the listing process and had set up a risk
team to do due diligence on assets to be listed on the protocol. With
the value in Aave increasing and the listing process being transferred
to the decentralized governance system, additional due diligence tools
are needed to keep the system at the highest safety standards.

We propose to create two Aave badges on the [*Token² Curated
Registry*](https://tokens.kleros.io) as an additional due diligence tool
for token listing. Anyone will be able request an Aave badge for an
asset by putting a deposit. Anyone would be able to challenge an Aave
badge explaining why the asset risks exceed the acceptable risks as
defined by the Aave risk methodology. In this case a Kleros dispute
would be created. Unchallenged assets and assets who won their disputes
can be put to vote for listing on Aave governance.


## Motivation

## Risks of listing assets

We briefly examine the risks of listing assets going through the three
main sources of risks described in [*Aave risk
methodology*](https://docs.aave.com/risk/asset-risk/methodology) and how
they would benefit from additional curation. We’ll classify them either
as reimbursement risks (staked Aave would need to be sold to pay for
system debt) and collapse risks (all assets in Aave could be lost).

### Market Risk

The first risk of adding an asset is the market risk. Asset prices can
drop at a rapid pace leaving some positions undercollateralized.

Let’s assume that tokens A and token B trade at 1\$ each and the loan to
value (LTV) of the asset is 50%.\
Alice deposits 100 A tokens to borrow 50 B tokens. But the price of
token A drops rapidly (before she could be liquidated) to 0.25\$ making
her undercollateralized (she now has 100\*0.25=25\$ worth of assets
deposited but 50\$ of debt).

Since the system cannot take other assets from Alice, Aave would suffer
a 25\$ loss causing a [*shortfall
event*](https://docs.aave.com/aavenomics/safety-module#shortfall-events)
leading to some staked AAVE being auctioned to cover system debt.

Rapid drop in prices can happen due to various events:

-   Exit scam / Project team dump: Project team selling most of their
    tokens at once, crashing the price.
-   Liquidation spiral: The price drops leading to some positions being
    liquidated as their debt ratio drops below the LTV of the asset.
    Liquidated assets are auctioned on the market leading to the price
    dropping even further and triggering additional liquidations. Those
    liquidations further decrease the price triggering additional
    liquidations, etc. Assets with low liquidity are particularly prone
    to this risk.
-   Project failure: The project the token is related to suffers from a
    serious failure, such as some of their smart contracts being hacked,
    the team running out of funds or the premise of the project being
    demonstrated to be invalid. Once this information is known, the
    market price suddenly drops.
-   Unpredictable market conditions (blackswan events).

Market risks are inherent to collateralized debt systems such as Aave
and AAVE stakers are taking this risk in exchange of getting extra AAVE
(see [*safety module*](https://docs.aave.com/aavenomics/safety-module)).
However, additional curation will allow to filter assets with high
market risks and lower the frequency staked AAVE has to be auctioned
(reimbursement risk).


The badge will use the methodology designed by the Aave risk team to
determine market risk.\
A separate proposal will be made to modify some of the criteria. In
particular to stop using volume to evaluate risk (as volume comes
primarily from washtrading, thus is a bad indicator) but to use the “-2%
Depth” which better reflects how likely sudden market crashes are.

### Counterparty Risk

The second risk is the counterparty risk. It is related to how likely it
is for the entities governing the asset to misuse their privilege.


Assets can be governed by centralized entities which may be malicious
and use their admin privilege to steal assets on their protocol or other
protocols. Even honest teams may be victims of bad key management
practice or physical threats (such as kidnapping keyholders or people
close to them) leading to a malicious party being in control of admin
keys.

Assets governed by DAOs are less likely to suffer from those issues as
an attacker generally requires a dishonest majority (note that sometimes
a relative majority is enough to perform malicious actions as in the
case of MakerDAO governance). Those kinds of attacks are still possible
if the governance rights are not widely distributed, voting/staking
turnout is low and if the asset conferring voting right is easy to
borrow (ironically the counterparty risks of an asset used for
governance is likely to increase as a result of being listed on Aave).

There are 2 main ways that governance malfunction could adversely impact
Aave:

-   **Asset failure:** Admin control can be used to steal/destroy value
    in the system related to the token. For example, this could be used
    to steal assets backing the token, freeze it, destroy tokens
    deposited in Aave. This can result in irremediable asset failures
    and the token price dropping close to 0.\
    As with market risk, it would trigger the [*safety
    module*](https://docs.aave.com/aavenomics/safety-module) leading to
    staked Aave being auctioned (reimbursement risk).
-   **Unlimited minting:** Admin control could be used to mint an
    arbitrary high amount of tokens and deposit them on Aave and use
    them to borrow other assets, before the Chainlink oracle would be
    able to update the price (this could even be done in a
    single transaction). This would lead to the loss of all assets held
    in Aave.\
    A similar attack can be carried when the governance mechanism allows
    moving tokens owned by other entities. An attacker would be able to
    deposit tokens on Aave, move them back to him, redeposit them, etc.
    This would result in a really high aToken balance that the attacker
    could use to borrow all the available assets of Aave
    (collapse risk).

The badges will use the methodology designed by the Aave risk team to
determine counterparty risk.\
A separate proposal may be made to modify some of the criteria. In
particular the grading criteria could be updated to give more importance
to the likelihood of unlimited minting / moving tokens.\

### Smart contract risks

The third risk comes from smart contract hacking. Smart contracts being
a relatively new technology this risk is often significant. Audits, bug
bounties, transaction amounts and age (the longest a contract has been
on mainnet unbroken, the less likely it is to be broken in the future)
are good indicators of the security of a smart contract.

There are 2 main ways that smart contract vulnerabilities could
adversely impact Aave:

-   **Asset failure: **Bugs in smart contracts can result in the loss of
    assets backing the token or in the system using the token
    becoming inoperant. In both cases, token value would suffer from a
    rapid drop leading to some positions being undercollateralized and
    part of AAVE stakes being auctioned in order to reimburse those.\
    The bugs can also affect smart contracts leading to freezing of the
    token, destruction of Aave smart contract balance or
    preventing transfers. This would prevent those tokens from being
    borrowed or corresponding aTokens to be redeemed and would lead an
    auction of staked AAVE (reimbursement risk).
-   **Unlimited minting: **A bug in the smart contract or a smart
    contract it relies on could allow an unlimited amount of tokens to
    be minted, deposited on Aave and used to borrow all the available
    assets (before any oracle update). This would lead to the loss of
    all assets held in Aave.\
    Similarly, a bug which would allow the transfer of assets from the
    Aave contract to an attacker could allow him to steal the assets and
    redeposit them multiple times (receiving aTokens each time). He
    could then borrow all the assets on Aave and never repay them
    leading to a collapse of the system (collapse risk).

The badge will use the methodology designed by the Aave risk team to
determine counterparty risk.

### Risk Summary

We’ve seen 3 sources of risks and how they can lead to either:

-   **A reimbursement risk**: Where staked Aave would need to be sold to
    reimburse system debt due to some position being
    undercollateralized.\
    Note that the risk of reimbursement can increase with new asset
    listings, but the relative cost of such a reimbursement would
    decrease with more assets being listed. Therefore listing new assets
    would overall decrease reimbursement risk impact (assuming they have
    similar risk profiles to currently listed assets).\
    This risk can also be reduced by decreasing the LTV (Loan To Value)
    of an asset.
-   **A collapse risk**: Where all assets in Aave could be borrowed and
    stolen due to a smart contract or governance malfunction. Since the
    TVL (Total Value Locked) of Aave is greater than the market
    capitalization of the AAVE token, it would not be possible to
    auction enough staked AAVE to reimburse the system debt which would
    lead to a collapse of the system.\
    Note that each asset added as collateral increases this risk and
    that this risk does not depend on the LTV (as long as LTV&gt;0).
    Assuming that there are assets as collateral with a yearly risk *
    *of leading to a collapse (by smart contract minting hack or
    governance malicious minting), the yearly risk of AAVE collapse is .
    As displayed in *Fig1*, collapse risk for individual listed assets
    should be extremely low (lower than 0.05% per year with 20-30
    assets listed) to have a collapse risk lower than the APR.



*Fig1: Collapse risk of Aave by collapse risk per individual collateral
and amount of collaterals.*

To sum up, listing assets for borrowing is relatively safe, but listing
assets accepted as collateral is particularly risky as a
single malfunctioning asset could be enough to make the whole system
collapse.\
With 1B\$ of TVL (total value locked), there is a de facto equal amount
bounty in listing a malicious asset as collateral and it is likely
someone would try. Either by listing a malicious asset they made for
this purpose or by listing an asset on which they had discovered a 0-day
vulnerability in order to amplify their gain.

## Kleros Token² Curated Registry

### Overview

The Token² Curated Registry is a TCR (Token Curated Registry) relying on
the Kleros dispute resolution system. It was released 17 months ago
(March 2019), has 493 submissions and 395 tokens accepted, it has
processed a total of 950k\$ of deposits (see [*this
dashboard*](https://t2cr-dashboard.kleros.io/)). You can see this
registry at [*tokens.kleros.io*](https://tokens.kleros.io/tokens) or as
an [*Uniswap
list*](https://tokenlists.org/token-list?url=t2crtokens.eth).

*Fig2: Token² Curated Registry*

### Mechanism

The process to register a token is as follows:

A.  A submitter needs to provide required information (Name, Logo,
    Ticker and Network address) with a deposit (in ETH). This deposit
    acts like a bounty to correct the information.
B.  Anyone can challenge the submission by putting a deposit (in ETH).
    If no one challenges the information within a defined time period,
    the token is added to the registry and the **process ends**. If
    someone challenges the submission a Kleros dispute is created.
C.  Parties of both sides are able to provide evidence for or against
    the submission. They can refer to the [*listing
    criterion*](https://ipfs.kleros.io/ipfs/QmbqgkZoGu7jJ8nTqee4NypEhK7YVBEJJmPJbJxz8Bx8nY/t2cr-primary-doc.pdf).
D.  Kleros jurors are drawn, those are specialized jurors as they are
    drawn from the set of jurors who specifically staked in a
    token-listing court. They vote on whether or not the submission
    should be accepted.
E.  There is then a period for appeal where each side can submit an
    additional deposit to go to appeal. The time for the side which lost
    the vote is shorter to fund the appeal compared to the side
    which won. In case only one side funded the appeal, this side is
    considered the winner. In case no side funded the appeal the juror
    vote is final. In case both sides funded the appeal, the amount of
    jurors is increased and we **go back to D**.
F.  Once the result is known, parties which contributed for deposits of
    the winning side get their deposits reimbursed and win the deposits
    of the losing side (minus arbitration fees). Jurors who voted
    coherently with jurors of the last round get arbitration fees in ETH
    and win some PNK, jurors who voted incoherently lose some PNK.
    Depending on the result, the token is either rejected or added to
    the list.

### Badges

The registry in itself is only used to verify the token information is
correct but does not give a judgement on the qualities of the tokens.
This is done through the badge system.

Badges can be added to tokens via a similar process. Organisations such
as Aave DAO can create and administer badges setting parameters and
criteria required for obtaining the badge.\
Tokens which could be listed on Aave would probably already be in the
registry, so the due diligence would be done via Aave badges (Aave and
Aave Collateral).

### Usage

The Token² Curated Registry has been used to list tokens [*on
Ethfinex*](https://blog.kleros.io/the-ethfinex-listing-guide/). It is
now one of the [*lists*](https://tokenlists.org/) of the decentralized
exchange [*Uniswap*](https://app.uniswap.org/#/swap). It is also used to
list tokens on the [*Kleros escrow*](https://escrow.kleros.io/).

## Specification

We propose to create 2 badges on the [*Token² Curated
Registry*](https://tokens.kleros.io/) as part of a preliminary due
diligence process for listing tokens on Aave:

-   The Aave badge: For assets to be listed on Aave (but not
    as collateral).
-   The Aave Collateral badge: For assets to be listed on Aave
    as collateral. This second badge would have more stringent rules due
    to collateral assets being more risky for the protocol.

The badges will be controlled by the Aave governance which will be able
to determine the listing criteria and the badge parameters (such as the
deposits).\
If this proposal passes the listing criteria and the parameters will be
the subject of another proposal made in collaboration with Aave risk
team. The listing criterion will mainly be taken from current risk
[*methodology*](https://docs.aave.com/risk/asset-risk/methodology) with
a few improvements to be discussed (see the Risk section for improvement
ideas).

Teams or community members wishing to have their assets listed on Aave
(simple listing or listing as collateral) will first need to have their
token receive the corresponding badge before creating a governance
proposal. This will create an additional due diligence step and be
enforced at the governance level.

The governance would still have the possibility to reject tokens getting
the badge. The debates and evidence submitted during a badge dispute
would provide relevant information for AAVE token holders to vote on a
token.

## Rationale

As we’ve seen in the risk section, there are significant risks in
listing malicious assets and part of those risks are cumulative. With
Aave growing, the amount of listed assets is likely to increase, so will
the value at stake. This leads to the need of additional security
procedures before listing an asset.\
\
Requiring Aave governance to vote on asset listing has the benefit of
bringing additional eyes to assets to be listed. But this benefit is of
a different kind as those which would be brought by using the Token²
Curated Registry which are:

-   **An external procedure**: Challengers and Kleros jurors (generally)
    do not belong to the Aave ecosystem. In a manner similar to external
    auditors, those do not have conflict of interests and have no
    incentives to understate risks to grow protocol usage. Adding an
    external procedure can then reassure users (convincibility) that
    listed assets have a low risk of leading to a loss of funds or a
    protocol collapse.
-   **An adversarial procedure**: There is a clear interest for a
    project to have their token listed and this interest is generally
    represented by a few actors (like project teams). However, the
    interest of not having a token listed is less clear. It could
    decrease system security but this risk is split among a large number
    of actors (AAVE stakers and Aave users) and is probabilistic so less
    evident for those actors. Having a dispute mechanism giving
    incentives to challengers and jurors who voted against the listing,
    ensures that there are incentivized actors defending the “Don’t
    list” side.
-   **A need for filtering**: A decent amount of governance discussions
    (see [*forum*](https://governance.aave.com/)) are about listing
    new assets. The majority of those assets would not pass the risk
    evaluation and are consuming governance ressources. The badge system
    would weed-out risky assets early in the process to allow the Aave
    governance to focus on assets with a decent chance of listing.\
    By having clear rules about how an asset should be to be put for
    listing, we also allow project teams to evaluate their own assets
    early in the process and only submit it if they believe it
    satisfies them.
-   **A well tested system**: The registry has been up since March 2019
    and was the 2nd TCR to be released and is the oldest TCR in
    operation (the first one was
    [*AdChain*](http://publisher.adchain.com) which is now dead).\
    Disputes on other badges, notably as part of the Ethfinex listing
    process has shown that the system allowed to discover criteria
    violations (for example in [*this
    dispute*](https://tokens.kleros.io/badge/0x916deaB80DFbc7030277047cD18B233B3CE5b4Ab/0x21aB6c9fAC80C59D401b37cB43F81ea9DDe7Fe34)
    someone managed to [*prove that the CTO of a project had a fake
    resume*](https://ipfs.kleros.io/ipfs/Qma7DBDjpWXKxnT2tNPG1cEjf61UTnJDGrgxcppxqoq31z/claim-against-brc-token-elligibility(2).pdf)
    and even went as far as to contact Oxford university to confirm he
    had never worked there).
-   **Redundancy**: By having multiple uncorrelated mechanisms to reject
    risky assets we reduce the likelihood of such assets being listed.

## Implementation

The Token² Curated Registry will act as an information provider and this
proposal would make Aave technically dependent on it, so this proposal
has no technical implementation.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
