import type { AppDocument } from "./types";

// Published from the client privacy information and pilot terms Daniel approved
// on 2026-10-05 (TrickTic-CRM repository, docs/pilot/client/{privacy,terms}.md,
// with the owner choices in docs/pilot/decisions.md). Owner changes on
// 2026-10-07: providers are described by role, not name, except Google, as on
// the Studio page; the terms gain the approved Studio age, warranty, liability
// and governing-law clauses. Support stays support@tricktic.com, the CRM's
// chosen contact; CRM has no store listing.
//
// DRAFT for the messaging stage (TrickTic-CRM card CRM-79, plan
// docs/plans/messaging-workspace.md, decisions D-4, D-7, D-8, D-10, D-14 and
// D-16): Instagram and WhatsApp conversations in both directions, sending on
// the owner's instruction, stored files, WhatsApp history, marking a chat as
// personal and Meta's deletion request. Meta is named, as Google is, because
// the channels cannot be described by role. The draft also brings three
// statements in line with what CRM already does: notice emails carry the lead's
// details (CRM-46), and follow-ups can reach the owner's calendar through a
// subscription link (CRM-60) or Google Calendar (CRM-69). Not approved and not
// published until Daniel says so; the effective date is set at publication.
export const trickticCrmPrivacyPolicy: AppDocument = {
  slug: "tricktic-crm",
  appName: "TrickTic-CRM",
  title: "TrickTic-CRM Privacy Policy",
  lastUpdated: "Effective: October 12, 2026",
  description: "What TrickTic-CRM stores, including Instagram and WhatsApp conversations, who processes it, how long it is kept and how to export or delete it.",
  intro: [
    { type: "linked-paragraph", parts: ["Effective 2026-10-12. Provider: TrickTic, operated by Daniel Shedrinsky. Questions or requests: ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, "."] },
    { type: "paragraph", text: "This policy covers TrickTic-CRM at crm.tricktic.com, a workspace for the leads and conversations that businesses receive from their landing pages, Instagram and WhatsApp. Access is by invitation." },
  ],
  sections: [
    { heading: "Who is responsible", blocks: [
      { type: "paragraph", text: "Your business decides which leads to collect and what to do with them. TrickTic runs TrickTic-CRM for you and processes lead data to provide the service." },
      { type: "paragraph", text: "Your landing page needs its own privacy notice for visitors. It should say that form submissions go to your business and its service providers." },
      { type: "paragraph", text: "If you connect an Instagram or WhatsApp account, the people who write to that account are your customers. Their messages reach CRM because you connected the account, and TrickTic handles them only to show them to you and to send the replies you write. Your own privacy notice should say that messages sent to your business are handled by your service providers." },
      { type: "paragraph", text: "TrickTic does not sell the data in CRM, does not use it for advertising and does not use it for any purpose other than providing the service to your business." },
    ] },
    { heading: "What CRM stores", blocks: [
      { type: "table", head: ["Data", "Where it comes from"], rows: [
        ["Lead details: name, phone, email, message, requested service, preferred time", "Your connected forms and integrations, manual entry or a CSV file you import"],
        ["Source of each submission: site, page, form, time submitted, campaign (UTM) fields if your page sends them", "The sending site or the channel used"],
        ["Instagram and WhatsApp conversations, if you connect an account: the text of the messages your customers send and of the messages you send, reactions, the time of each message and whether it was sent, delivered and read", "Meta, for the account you connected, and you"],
        ["The sender's details as Meta supplies them: profile name, Instagram username, WhatsApp phone number, the identifiers Meta gives the person and each message, and the ad, post or story a message answers", "Meta"],
        ["Pictures, voice messages, video and files that your customers send you or that you send, up to a size limit", "Meta and you"],
        ["Earlier WhatsApp chats: when you connect a WhatsApp Business app number and confirm it in WhatsApp, the chats of about the last six months on that number", "Meta, after your confirmation in WhatsApp"],
        ["Your Instagram or WhatsApp connection: the account's name and identifier, and the access key Meta issues, stored encrypted", "Meta, when you connect"],
        ["Your calendar connection, if you set one up: a private subscription link, or the access key Google issues for one calendar that CRM creates, stored encrypted", "You and Google"],
        ["Your work on leads: stages, notes, follow-ups, contact confirmations, outcomes and amounts you declare", "You"],
        ["Your login: the email address and account identifier Google returns", "Google sign-in"],
        ["History and audit records of changes, exports and deletions", "CRM"],
      ] },
      { type: "paragraph", text: "CRM does not store card or payment details. CRM sends a message to a customer only when you write it and press send: one message, to one person. It does not send anything automatically, in bulk or on a schedule, and it does not send paid template messages." },
      { type: "paragraph", text: "CRM's features do not use AI to read, sort, score or answer your leads or their messages." },
      { type: "paragraph", text: "A connected Instagram or WhatsApp account brings every chat on it into CRM, including private chats with friends, family or suppliers. You can mark a conversation as personal. CRM then deletes its stored messages and files and stops keeping later messages from that person, until you undo it." },
    ] },
    { heading: "Who else processes data", blocks: [
      { type: "table", head: ["Service", "Role", "What it receives"], rows: [
        ["A hosting provider", "Hosts the CRM server and database", "All CRM data, on a server dedicated to CRM"],
        ["A network provider", "Network protection and HTTPS for crm.tricktic.com", "Traffic to CRM, including submitted forms in transit"],
        ["Google", "Sign-in, with the openid and email permissions. If you connect Google Calendar: one calendar that CRM creates in your Google account for your follow-ups", "Your sign-in. If you connect Google Calendar: for each follow-up, the kind of step and the client's name, the date or time and the meeting place. CRM gets no access to your Gmail, Drive, contacts or other calendars"],
        ["Meta (Instagram and WhatsApp)", "Carries messages between your customers and the Instagram or WhatsApp account you connected", "The messages and files you send from CRM. Meta delivers your customers' messages to CRM and handles them under its own terms with you and with your customers"],
        ["A file storage provider", "Stores the pictures, voice messages, video and files of your conversations", "Those files, encrypted by CRM before they are stored. They are never public and are shown only to you, signed in to CRM"],
        ["An email delivery provider", "Sends your new-lead and follow-up emails", "Your email address and the notice. So that you can act from the email, a notice includes the lead's name, phone, email, source and message. Open and click tracking are off"],
        ["The calendar app you add CRM's private subscription link to", "Shows your open follow-ups in your own calendar", "For each follow-up, the kind of step and the client's name, the date or time and the meeting place. Anyone who has the link can read these, so keep it private. You can replace it or turn it off"],
        ["Encrypted backups on a separate TrickTic-operated server", "Recovery", "Database copies, encrypted before they leave the CRM server"],
        ["Integration services used to deliver submissions", "Pass form submissions from your landing page to CRM", "The form submission"],
        ["AI tools from external providers", "Used by TrickTic when operating, maintaining, securing or supporting the service", "Lead data only where needed for those purposes, under the provider's confidentiality terms"],
      ] },
      { type: "paragraph", text: "Providers may change as the service develops, and they may process data outside your country. A current list is available from support." },
      { type: "paragraph", text: "Server logs keep request status and timing only, not form contents." },
    ] },
    { heading: "Access to your data", blocks: [
      { type: "paragraph", text: "Authorized TrickTic personnel and service providers may access lead data where necessary to operate, maintain, secure or support the service. Access is limited to what is needed for those purposes and is subject to confidentiality obligations." },
    ] },
    { heading: "How long data is kept", blocks: [
      { type: "table", head: ["Data", "Kept"], rows: [
        ["Leads and your work on them", "Until you delete them or your account is deleted"],
        ["Instagram and WhatsApp messages and their files", "With the lead they belong to: until you delete that lead, mark the conversation as personal, or your account is deleted"],
        ["A message its sender withdraws", "Its stored text and file are deleted when Meta reports the withdrawal"],
        ["A conversation you mark as personal", "Its stored messages and files are deleted immediately, and later messages from that person are not kept"],
        ["When you disconnect an account, or remove CRM's access at Instagram or WhatsApp", "CRM stops receiving for that account immediately and deletes its access key. When Meta sends its data deletion request for the account, CRM deletes the stored message text, the senders' identifiers and the connection's details. Leads you already have stay until you delete them"],
        ["After you delete a lead or your account", "Removed from the live database immediately, together with the stored files"],
        ["Encrypted backups", "All copies for 48 hours, one a day for 14 days, one a week for 8 weeks. A deleted lead can stay inside older backups for up to about 8 weeks"],
        ["Restoring from a backup", "Deletions are applied again before anyone gets access, so deleted data does not come back"],
        ["Deletion record", "A record that a deletion happened is kept indefinitely, without names, phones or messages, so a restore or a repeated old submission cannot bring the lead back"],
        ["Your account after access ends", "You may request an export through support for 30 days, unless you request earlier deletion. After 30 days the account is deleted"],
      ] },
      { type: "paragraph", text: "Deleting data from CRM does not delete copies held in other systems, downloaded exports or previously delivered emails. It does not delete the messages in Instagram, in WhatsApp or on your customers' phones, or follow-ups already written to your calendar. Copies in systems you control must be deleted separately." },
    ] },
    { heading: "Exports and deletion", blocks: [
      { type: "paragraph", text: "In the app's privacy screen you can:" },
      { type: "list", items: [
        "download all your data (JSON), including conversations and their files, and your lead list (CSV),",
        "delete one lead (including leads merged into it, their conversations and files),",
        "delete your whole account.",
      ] },
      { type: "paragraph", text: "Each deletion asks you to type a confirmation. If a lead asks you to see or delete their details, you can do it in the app, or ask support to help." },
    ] },
    { heading: "If you wrote to a business that uses CRM", blocks: [
      { type: "linked-paragraph", parts: ["If you filled in a form or sent an Instagram or WhatsApp message to a business that uses TrickTic-CRM, that business decides what is done with your details. To see them or have them deleted, ask the business. You can also write to ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, " and name the business: we pass your request to it and help it carry the request out."] },
    ] },
    { heading: "Security incidents", blocks: [
      { type: "paragraph", text: "We will notify you without undue delay after becoming aware of a security incident affecting your personal data, and no later than 72 hours after becoming aware. We will share the information available and provide further updates as our investigation progresses. Where applicable law requires earlier notification or reporting, we will comply with that requirement." },
    ] },
    { heading: "Contact", blocks: [
      { type: "email", label: "Questions or requests:", address: "support@tricktic.com" },
    ] },
  ],
};

export const trickticCrmTermsOfUse: AppDocument = {
  slug: "tricktic-crm",
  appName: "TrickTic-CRM",
  title: "TrickTic-CRM Pilot Terms",
  lastUpdated: "Effective: October 12, 2026",
  description: "Terms for the invitation-only TrickTic-CRM pilot: service scope, Instagram and WhatsApp messaging, responsibilities, support and ending the pilot.",
  intro: [
    { type: "linked-paragraph", parts: ["Effective 2026-10-12. Provider: TrickTic, operated by Daniel Shedrinsky. Support: ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, "."] },
    { type: "paragraph", text: "These terms apply to the invitation-only TrickTic-CRM pilot at crm.tricktic.com." },
  ],
  sections: [
    { heading: "The service", blocks: [
      { type: "paragraph", text: "TrickTic-CRM is a Hebrew, phone-first workspace for your leads and your conversations with them. During the pilot it includes:" },
      { type: "list", items: [
        "leads received from connected forms and integrations, manual entry and CSV import, each labelled with its source,",
        "Instagram and WhatsApp conversations for the accounts you connect: messages in both directions, pictures, voice messages, video and files,",
        "replying from CRM while the channel's free reply time is open (after it, CRM opens the chat in Instagram or WhatsApp and you answer there),",
        "earlier WhatsApp chats, brought in once when you connect a number and confirm it in WhatsApp,",
        "marking a conversation as personal, which removes it from CRM,",
        "stages, notes, history, follow-ups and the Today list,",
        "your follow-ups in your own calendar, through a private subscription link or a Google Calendar connection,",
        "WhatsApp, phone and email links (opening a link does not record contact; you mark contact yourself),",
        "email notices for new leads and due follow-ups,",
        "paying-client outcomes and a report per source,",
        "export and deletion of your data.",
      ] },
      { type: "paragraph", text: "Not included: invoicing, payments, billing, automatic, scheduled or bulk sending, paid template messages, AI features, teams with several users, and public signup." },
    ] },
    { heading: "Price", blocks: [
      { type: "list", items: [
        "The pilot is free and has no fixed end date.",
        "CRM sends only inside the channel's free reply time and sends no paid template messages. What Meta charges for an account you connect is between you and Meta.",
        "If TrickTic introduces pricing, it tells you at least 30 days before. Nothing is charged without a separate written agreement.",
      ] },
    ] },
    { heading: "Availability and support", blocks: [
      { type: "list", items: [
        "The pilot is a test service without an uptime guarantee. TrickTic monitors CRM and its backups and responds to alerts during working hours (Sunday–Thursday), and on a best-effort basis at other times.",
        "Support: support@tricktic.com, answered within 7 working days.",
        "We will notify you without undue delay after becoming aware of a security incident affecting your personal data, and no later than 72 hours after becoming aware. We will share the information available and provide further updates as our investigation progresses. Where applicable law requires earlier notification or reporting, we will comply with that requirement.",
      ] },
    ] },
    { heading: "Your responsibilities", blocks: [
      { type: "list", items: [
        "Be at least 18 years old and have authority to act for the business that uses CRM.",
        "Collect leads lawfully and keep a privacy notice on your landing page.",
        "Import only data you are allowed to use.",
        "Keep your Google account secure and tell support if you think it is compromised.",
        "Contacting leads is your action. CRM sends a message only when you write it and press send, and never contacts anyone by itself.",
        "Connect only Instagram and WhatsApp accounts that belong to your business and that you are allowed to connect, and keep to Meta's terms for them, including its rules for business messaging.",
        "Connecting an account brings its chats into CRM, private ones included and, for WhatsApp, earlier chats. Mark the conversations that are not business as personal.",
        "Your customers may send sensitive material, such as identity documents. You decide what to keep, and you delete what you do not need.",
        "Say in your own privacy notice that messages sent to your business are handled by your service providers.",
        "Connecting a WhatsApp Business app number changes some WhatsApp features on that number, as WhatsApp explains when you connect it.",
      ] },
    ] },
    { heading: "TrickTic's responsibilities", blocks: [
      { type: "linked-paragraph", parts: ["TrickTic will use lead data only to provide the service, as described in the ", { text: "TrickTic-CRM privacy policy", href: "https://legal.tricktic.com/tricktic-crm/privacy" }, ". It will also:"] },
      { type: "list", items: [
        "keep your business's data separate from other businesses,",
        "keep encrypted backups and test restoring them,",
        "give you your data on request and delete it as described.",
      ] },
    ] },
    { heading: "Ending the pilot", blocks: [
      { type: "list", items: [
        "Either side can end the pilot at any time.",
        "Before access ends, you can export your data from the privacy screen.",
        "When access ends, TrickTic stops receiving leads and messages for you, disconnects your Instagram and WhatsApp accounts from CRM and ends your sessions. After access ends, you may request an export through support for 30 days, unless you request earlier deletion. After 30 days your account is deleted.",
        "Deleting data from CRM does not delete copies held in other systems, downloaded exports or previously delivered emails. It does not delete the messages in Instagram, in WhatsApp or on your customers' phones, or follow-ups already written to your calendar. Copies in systems you control must be deleted separately.",
      ] },
    ] },
    { heading: "No warranty and limitation of liability", blocks: [
      { type: "paragraph", text: "The pilot is provided free of charge, “as is” and “as available”, without any warranty that it will be uninterrupted, error-free, secure or suitable for a particular purpose." },
      { type: "paragraph", text: "To the fullest extent permitted by applicable law, TrickTic and Daniel Shedrinsky are not liable for any loss or damage arising from your use of, or inability to use, the service. This includes lost, delayed or duplicated leads, messages or files; messages that are not sent or not delivered; missed follow-ups or email notices; outages or errors; third-party services, including Meta (Instagram and WhatsApp), the limits or suspensions Meta applies to an account, and the sites and integration services that send submissions; and lost profits, lost business or any indirect, incidental or consequential damage. You are responsible for how you contact and handle your leads." },
      { type: "paragraph", text: "Nothing in these terms excludes liability that cannot lawfully be excluded, such as liability for fraud, intentional harm or gross negligence, or for death or personal injury caused by negligence, or takes away mandatory consumer rights or remedies." },
    ] },
    { heading: "Changes", blocks: [
      { type: "paragraph", text: "TrickTic tells you about changes to these terms at least 30 days before they apply." },
    ] },
    { heading: "Governing law, contact and disputes", blocks: [
      { type: "paragraph", text: "These terms are governed by the laws of the State of Israel. If you use the service as a consumer, this does not take away the protection of mandatory laws of the country where you live, and you may bring a claim in any court available to you under those laws." },
      { type: "email", label: "For support, a concern about these terms or a dispute, contact:", address: "support@tricktic.com" },
      { type: "paragraph", text: "We will consider concerns in good faith. Contacting us does not limit your right to approach a competent court, consumer authority or other legally available dispute-resolution body, and these terms do not shorten statutory time limits." },
    ] },
  ],
};
