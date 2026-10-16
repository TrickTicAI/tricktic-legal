import type { AppDocument } from "./types";

// Published from the client privacy information and pilot terms Daniel approved
// on 2026-10-05 (TrickTic-CRM repository, docs/pilot/client/{privacy,terms}.md,
// with the owner choices in docs/pilot/decisions.md). Owner changes on
// 2026-10-07: providers are described by role, not name, except Google, as on
// the Studio page; the terms gain the approved Studio age, warranty, liability
// and governing-law clauses. Support stays support@tricktic.com, the CRM's
// chosen contact; CRM has no store listing.
//
// Messaging stage (TrickTic-CRM card CRM-79, plan
// docs/plans/messaging-workspace.md, decisions D-4, D-7, D-8, D-10, D-14 and
// D-16): Instagram and WhatsApp conversations in both directions, sending on
// the owner's instruction, stored files, WhatsApp history, marking a chat as
// personal and Meta's deletion request. Meta is named, as Google is, because
// the channels cannot be described by role. The draft also brings three
// statements in line with what CRM already does: notice emails carry the lead's
// details (CRM-46), and follow-ups can reach the owner's calendar through a
// subscription link (CRM-60) or Google Calendar (CRM-69). Daniel approved the
// text on 2026-10-12, left the AI tools sentence unchanged and replaced the
// 30 days' notice of changes to the terms: changes apply when published. The
// 30 days' notice before any pricing stays.
//
// Business package (TrickTic-CRM card CRM-112, plan
// docs/plans/business-package.md, decisions D-19 to D-22, D-26, D-27, D-35,
// D-40 and D-41; designs docs/architecture/ai-assistant.md (CRM-107),
// docs/research/voice-agents.md (CRM-111) and
// docs/architecture/contract-signing.md (CRM-106)): parts TrickTic switches
// on per business: the assistant's reply drafts and replies inside the free
// reply time, calls answered by a voice assistant, contracts and quotes sent
// by email and signed or approved online, payment records, and the booking
// page (CRM-116), whose confirmation emails made the earlier "does not send
// anything automatically" untrue. The AI model provider and the voice-agent
// provider are described by role, like the other providers. The text says
// nothing beyond what is built or carded; the table of statements not yet
// built is in the CRM repository, docs/ops/privacy.md.
export const trickticCrmPrivacyPolicy: AppDocument = {
  slug: "tricktic-crm",
  appName: "TrickTic-CRM",
  title: "TrickTic-CRM Privacy Policy",
  lastUpdated: "Effective: October 17, 2026",
  description: "What TrickTic-CRM stores, including conversations, the assistant, calls, contracts, payment records and bookings, who processes it, how long it is kept and how to export or delete it.",
  intro: [
    { type: "linked-paragraph", parts: ["Effective 2026-10-17. Provider: TrickTic, operated by Daniel Shedrinsky. Questions or requests: ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, "."] },
    { type: "paragraph", text: "This policy covers TrickTic-CRM at crm.tricktic.com, a workspace for the leads and conversations that businesses receive from their landing pages, Instagram, WhatsApp, phone calls and booking page. Access is by invitation." },
    { type: "paragraph", text: "Some parts of CRM are switched on by TrickTic for each business separately: the assistant, the voice assistant, contracts and quotes, payment records and the booking page. A part that is off for your business collects nothing for it." },
  ],
  sections: [
    { heading: "Who is responsible", blocks: [
      { type: "paragraph", text: "Your business decides which leads to collect and what to do with them. TrickTic runs TrickTic-CRM for you and processes lead data to provide the service." },
      { type: "paragraph", text: "Your landing page needs its own privacy notice for visitors. It should say that form submissions go to your business and its service providers." },
      { type: "paragraph", text: "If you connect an Instagram or WhatsApp account, the people who write to that account are your customers. Their messages reach CRM because you connected the account, and TrickTic handles them only to show them to you and to send the replies you write. Your own privacy notice should say that messages sent to your business are handled by your service providers." },
      { type: "paragraph", text: "The same applies to the people who call your business when the voice assistant answers, who sign a contract or answer a quote you send, and who book on your booking page: they are your customers, and TrickTic handles their details for your business. If you use the assistant or the voice assistant, your privacy notice should also say that messages and calls may be answered by an automated assistant that uses AI service providers." },
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
        ["The assistant, if it is on: the knowledge card you write about your business (services, prices, hours, area, frequent questions, tone and your hand-over text), suggested replies, the replies the assistant sends, marked as the assistant's, and a record of each use: when, what for, the outcome and its size, without the text", "You and CRM"],
        ["Calls answered by the voice assistant, if it is on: the caller's number, the time and length of the call, the details the assistant collected, a summary and a transcript of the call. CRM does not store the call's audio", "The voice-agent provider"],
        ["Contracts and quotes you send: the text, the items and prices, your business details on them, the customer's email address, when the link was opened, and whether it was signed, approved or withdrawn", "You"],
        ["The signing record: the name the customer typed, their drawn or typed signature on a contract or their approval or refusal of a quote with any note they add, the wording they agreed to, the time, their IP address and browser, a fingerprint of the text they saw, their ID number if your contract template asks for it (stored encrypted), and a PDF of the signed contract or answered quote, stored encrypted", "Your customer, on the signing page"],
        ["Payment records: the amount you agreed with a client, each deposit or payment you record with its date, method and note, and the payment details you save for payment requests (for example a Bit or PayBox number or your bank account)", "You"],
        ["Bookings on your booking page: the service, the time, the customer's name and phone, and their email and note if they give them", "Your customer, on your booking page"],
        ["Your business details for documents: logo, legal and trade name, business type and number, address and contact details", "You or TrickTic, when setting up your business"],
        ["Your work on leads: stages, notes, follow-ups, contact confirmations, outcomes and amounts you declare", "You"],
        ["Your login: the email address and account identifier Google returns", "Google sign-in"],
        ["History and audit records of changes, exports and deletions", "CRM"],
      ] },
      { type: "paragraph", text: "CRM records the amounts and payments you enter. It does not take payments, create payment links, store card details or issue invoices or receipts, and a payment record or quote is not a tax document." },
      { type: "paragraph", text: "CRM sends a message to a customer only in these cases: when you write it and press send, one message to one person; when you press send on a contract or quote, one email to one person, and after they answer it, a copy of the signed contract or answered quote to them; when the assistant is on for that channel, as described below; and the confirmation and change emails of a booking, sent to the customer who booked if they gave an email address. It does not send in bulk or on a schedule, and it does not send paid template messages." },
      { type: "paragraph", text: "The assistant is an AI feature that TrickTic switches on for a business. It can suggest a reply that you edit and send yourself. If TrickTic also switches on its replies for an Instagram or WhatsApp account, it answers a customer who writes to you, only while the channel's free reply time is open, and passes the conversation to you when it cannot answer. It answers only from your knowledge card and the current conversation. It does not see files, notes, payments, contracts, other clients or other businesses, and it does not write first, book, change records or send anything other than its reply. It stops in a conversation you answer yourself, pause or mark as personal." },
      { type: "paragraph", text: "CRM does not use AI to sort or score your leads. The order of the Today list is a fixed rule." },
      { type: "paragraph", text: "A connected Instagram or WhatsApp account brings every chat on it into CRM, including private chats with friends, family or suppliers. You can mark a conversation as personal. CRM then deletes its stored messages and files and stops keeping later messages from that person, until you undo it." },
    ] },
    { heading: "Who else processes data", blocks: [
      { type: "table", head: ["Service", "Role", "What it receives"], rows: [
        ["A hosting provider", "Hosts the CRM server and database", "All CRM data, on a server dedicated to CRM"],
        ["A network provider", "Network protection and HTTPS for crm.tricktic.com", "Traffic to CRM, including submitted forms, signatures and bookings in transit"],
        ["Google", "Sign-in, with the openid and email permissions. If you connect Google Calendar: one calendar that CRM creates in your Google account for your follow-ups and bookings. If you also allow it for your booking page: whether times in your main calendar are busy", "Your sign-in. If you connect Google Calendar: for each follow-up, the kind of step and the client's name, the date or time and the meeting place. CRM gets no access to your Gmail, Drive, contacts or other calendars, and for the busy check it sees only busy or free, not your events"],
        ["Meta (Instagram and WhatsApp)", "Carries messages between your customers and the Instagram or WhatsApp account you connected", "The messages and files you send from CRM and the assistant's replies. Meta delivers your customers' messages to CRM and handles them under its own terms with you and with your customers"],
        ["An AI model provider, chosen by TrickTic", "Writes the assistant's suggested replies and replies", "For each reply: fixed instructions, your business's name and knowledge card, and the recent messages of that one conversation, with phone numbers, email addresses and ID-like numbers masked. Not names or other details from your records, files, other conversations or identifiers. The provider keeps requests under its own terms, and TrickTic has turned off their use for training its models"],
        ["A voice-agent provider, chosen by TrickTic", "Answers the calls your business forwards to it, with a voice assistant that uses speech and AI models, and sends CRM the result", "The calls: the caller's number and voice, and what is said. It records and transcribes each call and sends CRM the number, the transcript, a summary and the details collected. TrickTic sets it to keep recordings and transcripts for no more than 30 days"],
        ["A file storage provider", "Stores the pictures, voice messages, video and files of your conversations, and the PDFs of signed contracts and answered quotes", "Those files, encrypted by CRM before they are stored. They are never public and are shown only to you, signed in to CRM"],
        ["An email delivery provider", "Sends your new-lead and follow-up emails, the contracts and quotes you send, their PDFs once answered, and booking emails", "Your email address and the notice. So that you can act from the email, a notice includes the lead's name, phone, email, source and message. For contracts, quotes and bookings: the customer's email address, the link and, once answered, the PDF, sent to the customer and to you. Open and click tracking are off"],
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
        ["The assistant's suggested replies", "Deleted when you use them, or after 24 hours. A reply the assistant sends is kept as a message of that conversation"],
        ["The knowledge card, and the record of each use of the assistant", "The card until you change it or your account is deleted; the records of use with the lead they concern. The text sent to the AI model provider is not kept in CRM"],
        ["Calls answered by the voice assistant", "In CRM: with the lead they belong to. At the voice-agent provider: recordings and transcripts for no more than 30 days"],
        ["Contracts, quotes, signing records and their PDFs", "With the lead they belong to. A signing or approval link works for 30 days, or until the end of the quote's validity, unless you withdraw it earlier"],
        ["Payment records and bookings", "With the lead they belong to. Your payment details until you change them or your account is deleted"],
        ["After you delete a lead or your account", "Removed from the live database immediately, together with the stored files and PDFs"],
        ["Encrypted backups", "All copies for 48 hours, one a day for 14 days, one a week for 8 weeks. A deleted lead can stay inside older backups for up to about 8 weeks"],
        ["Restoring from a backup", "Deletions are applied again before anyone gets access, so deleted data does not come back"],
        ["Deletion record", "A record that a deletion happened is kept indefinitely, without names, phones or messages, so a restore or a repeated old submission cannot bring the lead back"],
        ["Your account after access ends", "You may request an export through support for 30 days, unless you request earlier deletion. After 30 days the account is deleted"],
      ] },
      { type: "paragraph", text: "Deleting data from CRM does not delete copies held in other systems, downloaded exports or previously delivered emails, including contracts, quotes and their PDFs already emailed to you or your customer. It does not delete the messages in Instagram, in WhatsApp or on your customers' phones, or follow-ups already written to your calendar. When you delete a lead, CRM asks the voice-agent provider to delete that lead's calls where the provider allows it; otherwise they are removed within its 30 days. Copies in systems you control must be deleted separately." },
    ] },
    { heading: "Exports and deletion", blocks: [
      { type: "paragraph", text: "In the app's privacy screen you can:" },
      { type: "list", items: [
        "download all your data (JSON), including conversations and their files, the assistant's replies and knowledge card, calls, contracts, quotes and their PDFs, payment records and bookings, and your lead list (CSV),",
        "delete one lead (including leads merged into it, their conversations, files, calls, contracts, quotes and their PDFs, payment records and bookings),",
        "delete your whole account.",
      ] },
      { type: "paragraph", text: "Each deletion asks you to type a confirmation. If a lead asks you to see or delete their details, you can do it in the app, or ask support to help." },
    ] },
    { heading: "If you contacted a business that uses CRM", blocks: [
      { type: "linked-paragraph", parts: ["If you filled in a form, sent an Instagram or WhatsApp message, called, signed a contract, answered a quote or booked a time with a business that uses TrickTic-CRM, that business decides what is done with your details. To see them or have them deleted, ask the business. You can also write to ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, " and name the business: we pass your request to it and help it carry the request out."] },
      { type: "paragraph", text: "When a business's voice assistant answers your call, it says at the start that it is a digital assistant and that the call is recorded and transcribed. When you sign a contract online, the business keeps the signing record described above as evidence of who signed and what." },
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
  lastUpdated: "Effective: October 17, 2026",
  description: "Terms for the invitation-only TrickTic-CRM pilot: service scope, messaging, the assistant, calls, contracts and payment records, responsibilities, support and ending the pilot.",
  intro: [
    { type: "linked-paragraph", parts: ["Effective 2026-10-17. Provider: TrickTic, operated by Daniel Shedrinsky. Support: ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, "."] },
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
      { type: "paragraph", text: "TrickTic can also switch on these parts for your business:" },
      { type: "list", items: [
        "the assistant: suggested replies that you edit and send, and, where TrickTic switches them on, replies to customers on Instagram or WhatsApp while the free reply time is open, with the conversation passed to you when it cannot answer,",
        "the voice assistant: calls your business forwards to it are answered, recorded and transcribed by a voice-agent provider, and each call arrives in CRM as a lead with a summary and transcript,",
        "contracts and quotes: sent by email as a link, one to one person, and signed or answered by your customer on a page CRM hosts, with a PDF and a record of the answer kept,",
        "payment records: the amount agreed, deposits and payments received and the balance, and payment requests you send yourself with your own payment details,",
        "a booking page where customers book a time from the hours you set.",
      ] },
      { type: "paragraph", text: "Not included: invoicing, receipts, taking payments, payment links, billing, bulk or scheduled sending, paid template messages, calls made by an AI assistant, teams with several users, and public signup." },
    ] },
    { heading: "Price", blocks: [
      { type: "list", items: [
        "The pilot is free and has no fixed end date. This includes the assistant and the voice assistant when TrickTic switches them on.",
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
        "Contacting leads is your action. CRM sends a message only when you write it and press send, and never contacts anyone by itself, except for the assistant's replies where TrickTic switched them on and the emails about contracts, quotes and bookings described in the privacy policy.",
        "Connect only Instagram and WhatsApp accounts that belong to your business and that you are allowed to connect, and keep to Meta's terms for them, including its rules for business messaging.",
        "Connecting an account brings its chats into CRM, private ones included and, for WhatsApp, earlier chats. Mark the conversations that are not business as personal.",
        "Your customers may send sensitive material, such as identity documents. You decide what to keep, and you delete what you do not need.",
        "Say in your own privacy notice that messages sent to your business are handled by your service providers, and, if you use the assistant or the voice assistant, that messages and calls may be answered by an automated assistant.",
        "Connecting a WhatsApp Business app number changes some WhatsApp features on that number, as WhatsApp explains when you connect it.",
        "The assistant and the voice assistant can be wrong. Keep your knowledge card accurate, read a suggested reply before you send it, and check what the assistant answered. What they tell your customers is said on behalf of your business.",
        "If a law requires your business to keep call recordings or give them to customers, tell TrickTic before the voice assistant is switched on. CRM does not keep the audio of calls.",
        "You are responsible for the contracts and quotes you send: their content, their prices and whether signing online suits the agreement. TrickTic does not check them and does not give legal advice. CRM keeps a record of the signing, but TrickTic does not promise that a court or authority will accept it.",
        "Payment records are for your own tracking. They are not invoices, receipts or tax documents; issue those in the software you use for them. CRM does not check your payment details or move money.",
      ] },
    ] },
    { heading: "TrickTic's responsibilities", blocks: [
      { type: "linked-paragraph", parts: ["TrickTic will use lead data only to provide the service, as described in the ", { text: "TrickTic-CRM privacy policy", href: "https://legal.tricktic.com/tricktic-crm/privacy" }, ". It will also:"] },
      { type: "list", items: [
        "keep your business's data separate from other businesses,",
        "keep encrypted backups and test restoring them,",
        "give you your data on request and delete it as described,",
        "update the privacy policy before any new AI use of your data is switched on.",
      ] },
    ] },
    { heading: "Ending the pilot", blocks: [
      { type: "list", items: [
        "Either side can end the pilot at any time.",
        "Before access ends, you can export your data from the privacy screen.",
        "When access ends, TrickTic stops receiving leads, messages and calls for you, disconnects your Instagram and WhatsApp accounts and the voice assistant from CRM, switches off the assistant, the booking page and open signing links, and ends your sessions. After access ends, you may request an export through support for 30 days, unless you request earlier deletion. After 30 days your account is deleted.",
        "Deleting data from CRM does not delete copies held in other systems, downloaded exports or previously delivered emails. It does not delete the messages in Instagram, in WhatsApp or on your customers' phones, or follow-ups already written to your calendar. Copies in systems you control must be deleted separately.",
      ] },
    ] },
    { heading: "No warranty and limitation of liability", blocks: [
      { type: "paragraph", text: "The pilot is provided free of charge, “as is” and “as available”, without any warranty that it will be uninterrupted, error-free, secure or suitable for a particular purpose." },
      { type: "paragraph", text: "To the fullest extent permitted by applicable law, TrickTic and Daniel Shedrinsky are not liable for any loss or damage arising from your use of, or inability to use, the service. This includes lost, delayed or duplicated leads, messages, calls or files; messages, contracts or quotes that are not sent or not delivered; missed follow-ups, bookings or email notices; replies, summaries or transcripts written by the assistant or the voice assistant; the validity or enforceability of a contract, quote or electronic signature; payment records you enter; outages or errors; third-party services, including Meta (Instagram and WhatsApp), the limits or suspensions Meta applies to an account, the AI model and voice-agent providers, and the sites and integration services that send submissions; and lost profits, lost business or any indirect, incidental or consequential damage. You are responsible for how you contact and handle your leads." },
      { type: "paragraph", text: "Nothing in these terms excludes liability that cannot lawfully be excluded, such as liability for fraud, intentional harm or gross negligence, or for death or personal injury caused by negligence, or takes away mandatory consumer rights or remedies." },
    ] },
    { heading: "Changes", blocks: [
      { type: "paragraph", text: "TrickTic may update these terms. The current version and its effective date are always on this page. Changes apply when they are published, and TrickTic tells you by email about changes that matter to you." },
    ] },
    { heading: "Governing law, contact and disputes", blocks: [
      { type: "paragraph", text: "These terms are governed by the laws of the State of Israel. If you use the service as a consumer, this does not take away the protection of mandatory laws of the country where you live, and you may bring a claim in any court available to you under those laws." },
      { type: "email", label: "For support, a concern about these terms or a dispute, contact:", address: "support@tricktic.com" },
      { type: "paragraph", text: "We will consider concerns in good faith. Contacting us does not limit your right to approach a competent court, consumer authority or other legally available dispute-resolution body, and these terms do not shorten statutory time limits." },
    ] },
  ],
};
