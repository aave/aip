---
aip: 1
title: AIP Purpose and Guidelines
status: Implemented
author: David Truong (@daveytea)
discussions-to: -
created: 2020-04-24
updated: N/A
---

## What is an AIP?

AIP stands for Aave Improvement Proposal. It has been heavily adapted from the SIP (Synthetix Improvement Proposal), which in turn was adapted from EIP (Ethereum Improvement Proposal). The purpose of this process is to ensure changes to Aave are transparent and well governed. An AIP is a design document providing information to the Aave community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## AIP Rationale

We intend AIPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Aave. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single AIP contain a **single** key proposal or new idea. The more focused the AIP, the more successful it is likely to be.

An AIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## AIP Work Flow

Parties involved in the process are the *author*, the [*AIP editors*](#AIP-editors), and the [Aave Team].

:warning: Before you begin, vet your idea, this will save you time. Ask the Aave community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your AIP is the [the Aave Discord].

Your role as the champion is to write the AIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful AIP will move along:

```
[ WIP ] -> [ PROPOSED ] -> [ APPROVED ] -> [ IMPLEMENTED ]
```

Each status change is requested by the AIP author and reviewed by the AIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your AIP. The AIP editors will process these requests as per the conditions below.

* **Work in progress (WIP)** -- Once the champion has asked the Aave community whether an idea has any chance of support, they will write a draft AIP as a [pull request]. Consider including an implementation if this will aid people in studying the AIP.
* **Proposed** If agreeable, AIP editor will assign the AIP a number (generally the issue or PR number related to the AIP) and merge your pull request. The AIP editor will not unreasonably deny an AIP. Proposed AIPs will be discussed in Discord. If there is a reasonable level of consensus around the change on Discord, the change will be moved to approved. If the change is contentious a vote of token holders may be held to resolve the issue or approval may be delayed until consensus is reached.
* **Approved** -- This AIP has passed community governance and is now being prioritised for development.
* **Implemented** -- This AIP has been implemented and deployed to mainnet.

## What belongs in a successful AIP?

Each AIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the AIP, including the AIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the AIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (*optional) - The motivation is critical for AIPs that want to change Aave. It should clearly explain why the existing specification is inadequate to address the problem that the AIP solves. AIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All AIPs must be in the public domain. See the bottom of this AIP for an example copyright waiver.

## AIP Formats and Templates

AIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that AIP as follows: `assets/AIP-X` (for AIP **X**). When linking to an image in the AIP, use relative links such as `../assets/AIP-X/image.png`.

## AIP Header Preamble

Each AIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "*" are optional and are described below. All other headers are required.

` AIP:` <AIP number> (this is determined by the AIP editor)

` title:` <AIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread or Github issue\>

` status:` < WIP | PROPOSED | APPROVED | IMPLEMENTED >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <AIP number(s)>

` * resolution:` \<a url pointing to the resolution of this AIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the AIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an AIP is in WIP or Proposed status, a `discussions-to` header will indicate the mailing list or URL where the AIP is being discussed.

#### `created` header

The `created` header records the date that the AIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the AIP was updated with "substantial" changes. This header is only valid for AIPs of Draft and Active status.

#### `requires` header

AIPs may have a `requires` header, indicating the AIP numbers that this AIP depends on.

## Auxiliary Files

AIPs may include auxiliary files such as diagrams. Such files must be named AIP-XXXX-Y.ext, where “XXXX” is the AIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## AIP Editors

The current AIP editors are

` * David Truong (@daveytea)`

` * Jordan Lazaro Gustave (@JordanLzG)`

` * Stani Kulechov (@StaniKulechov)`

## AIP Editor Responsibilities

For each new AIP that comes in, an editor does the following:

- Read the AIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the AIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the AIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the AIP is ready for the repository, the AIP editor will:

- Assign an AIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this AIP)

- Merge the corresponding pull request

- Send a message back to the AIP author with the next step.

Many AIPs are written and maintained by developers with write access to the Aave codebase. The AIP editors monitor AIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on AIPs. We merely do the administrative & editorial part.

## History

The AIP document was derived heavily from the SIP Synthetix Improvement Proposal, which was derived heavily from the EIP Ethereum Improvement Proposal document. In many places text was simply copied and modified. Any comments about the AIP document should be directed to the AIP editors. The history of the SIP and EIP is quoted below from the SIP document for context:

* *"The SIP document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the SIP document should be directed to the SIP editors. The history of the EIP is quoted below from the EIP document for context:"* *
* *"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."* *

April 24, 2020: AIP-1 has been drafted.


See [the revision history for further details](https://github.com/aave/aip/), which is also available by clicking on the History button in the top right of the AIP.

### Bibliography

[the Aave Discord]: https://discord.gg/fVaDMqT
[pull request]: https://github.com/aave/aip/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[Bitcoin's BIP-0001]: https://github.com/bitcoin/bips
[Python's PEP-0001]: https://www.python.org/dev/peps/
[Aave Team]: https://aave.com/about

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).