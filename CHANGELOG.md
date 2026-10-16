# Changelog

All notable changes to what legal.tricktic.com serves. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the version is
`version` in `package.json`: PATCH for a fix, MINOR for a new document.

## [Unreleased]

- Docs: the old addresses are redirected by tricktic.com's nginx
  (tricktic-infra), not a Cloudflare rule. No change to the site.
- Live on legal.tricktic.com since 2026-10-05. The repository moved to the
  TrickTicAI organization, which has verified tricktic.com for GitHub Pages.

## [1.6.0] - 2026-10-17

### Changed

- TrickTic-CRM privacy policy and pilot terms cover the business package
  (TrickTic-CRM card CRM-112), whose parts TrickTic switches on per business:
  the assistant's suggested replies and its replies inside the free reply
  time, with what is sent to an AI model provider and what is not; calls
  answered by a voice assistant, with the provider's recordings and
  transcripts kept for no more than 30 days and no audio in CRM; contracts and
  quotes sent by email and signed or answered online, with the signing record
  and PDF; payment records that are not invoices; and the booking page. Both
  new providers are described by role.
- "CRM's features do not use AI" and "AI features" in the list of what is not
  included are replaced. Today's order stays a fixed rule without AI.
- The pages now match what CRM already does: booking confirmations are
  emailed to the customer who booked, so "does not send anything
  automatically" is replaced by the list of what CRM sends.
- The terms add the owner's responsibilities for the assistant's answers,
  call-recording duties, contract content and electronic signatures, and
  payment records, and the matching limits of liability.
- Approved by Daniel on 2026-10-17 and published the same day, effective
  2026-10-17. The voice statements are kept by TrickTic-CRM card CRM-133.

## [1.5.0] - 2026-10-12

### Changed

- TrickTic-CRM privacy policy and pilot terms cover the messaging stage
  (TrickTic-CRM card CRM-79): Instagram and WhatsApp conversations in both
  directions, sending only when the owner writes and presses send, stored
  pictures, voice messages, video and files in outside storage, earlier
  WhatsApp chats, marking a conversation as personal, and deletion including
  Meta's data deletion request. Meta is named; other providers stay described
  by role. A section tells people who wrote to a business how to ask for their
  details or their deletion.
- The same pages now match what CRM already does: notice emails carry the
  lead's details, and follow-ups can reach the owner's calendar through a
  private subscription link or a Google Calendar connection.
- Changes to the terms apply when they are published, with an email about
  changes that matter to the client, instead of 30 days' notice. The 30 days'
  notice before any pricing stays.
- Approved by Daniel on 2026-10-12, effective the same day.

## [1.4.0] - 2026-10-09

### Added

- Public, unlisted TrickTic Dictate account-deletion resource at
  `/tricktic-dictate/delete-account`, with the in-app path, an email request
  method, ownership verification and the boundaries of cloud/local deletion.

### Changed

- Clarified the shipped account identity, each selective sync category, Firebase
  security metadata and retained deletion receipts. Current Google Play remains
  account-free; the private Android account build is described explicitly.
- Dictate privacy/security references now use the current legal.tricktic.com URLs.

## [1.3.1] - 2026-10-08

### Changed

- TrickTic Studio privacy policy and terms, at Daniel's request for the
  self-running pilot (Studio TTS-47): invitation and reminder emails and their
  delivery provider (by role), the 30-day email record and unused-invitation
  retention, each person's pilot dates and support time, what the operator's
  pilot overview shows and does not, what stops when a free pilot ends, and a
  free period of at least 30 days from first sign-in with a reminder.

## [1.3.0] - 2026-10-07

### Added

- TrickTic-CRM privacy policy and pilot terms at `/tricktic-crm/privacy` and
  `/tricktic-crm/terms`, from the client documents Daniel approved on
  2026-10-05. Providers other than Google are described by role, and the terms
  gain the approved Studio age, warranty, liability and governing-law clauses
  (Daniel, 2026-10-07).

## [1.2.0] - 2026-10-07

### Added

- TrickTic Studio privacy policy and pilot terms of service at
  `/tricktic-studio/privacy` and `/tricktic-studio/terms`. Providers are
  described by role, not name or location. Wording approved by Daniel on
  2026-10-07.

## [1.1.0] - 2026-10-06

### Added

- ADE privacy policy migrated verbatim from the approved hosted policy, retaining
  its September 29 effective date and operational reference links.
- ADE pilot terms of service; owner review required before publication.
- Plain escaped inline references and explicit ADE legacy-URL handling; existing
  Timer, Dictate and TikTok page output is unchanged.

## [1.0.0] - 2026-10-05

### Added

- The TrickTic app legal documents as a static site for legal.tricktic.com,
  moved from tricktic.com/automation/legal with their text unchanged:
  - TrickTic Timer privacy policy
  - TrickTic Dictate privacy policy, terms of use and security policy
  - TikTok integration privacy policy and terms of service (not indexed)
- An index page listing the Timer and Dictate documents, and a 404 page.
- REDIRECTS.md: the old-to-new URL table and the Cloudflare rule that
  redirects the old addresses.
- Local checks before every push: verbatim text, no trackers or external
  resources, robots and canonical tags per page, and a fresh build. A live
  check (`pnpm check:live`) for after go-live.
