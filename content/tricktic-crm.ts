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
// built is in the CRM repository, docs/ops/privacy.md. Daniel approved the
// text on 2026-10-17 and asked for it to be published that day; the voice
// statements are kept by card CRM-133.
//
// Decision models (TrickTic-CRM cards CRM-231 to CRM-234 and CRM-256, plan
// docs/plans/decision-models.md, decisions D-57 and D-68; terms of record in
// docs/ops/privacy.md): a decision model, described by role like the other
// providers, sorts messages, comments, inquiries, reviews, recommendations and
// import column headings for a business where TrickTic switches it on. It
// replaces "CRM does not use AI to sort or score your leads"; leads are still
// not scored and Today stays a fixed rule. Daniel approved the provider's
// terms and this update on 2026-10-31.
//
// Decision models in TrickTic's operator area (TrickTic-CRM card CRM-281,
// docs/ops/privacy.md, "/ops triage"): a decision-model provider, described by
// role, labels the problem reports owners send TrickTic and the customer
// questions the assistant handed over, masked, and returns labels only.
// Daniel approved the text on 2026-10-31.
//
// CRM-279: the same provider suggests which WhatsApp or Instagram
// conversations look personal (mostly after a chat history import), from the
// newest messages with names and numbers masked; the mark stays the owner's
// press.
//
// CRM-280: the same provider suggests, from a customer's own message, which
// of the business's saved services it asks about, when to follow up, and that
// a payment was made; each only prefills the owner's own action.
//
// Daniel approved the CRM-279 and CRM-280 text on 2026-11-01 and asked for it
// to be published; the CRM-281 row is folded into the one provider row.
//
// Health declarations and the customer pages (TrickTic-CRM card CRM-418,
// docs/pilot/client/privacy.md and terms.md, docs/ops/privacy.md): health
// declarations and consent forms (CRM-142), questionnaires (CRM-180), the
// customer page, recommendations (CRM-128), referral links (CRM-129), before
// and after photos and client files (CRM-169, CRM-216), the business as
// controller and TrickTic as processor, and the AI client summary (CRM-117)
// and first drafts of quotes and contracts (CRM-118), which were built but not
// yet described. Daniel approved the text on 2026-11-10.
export const trickticCrmPrivacyPolicy: AppDocument = {
  slug: "tricktic-crm",
  appName: "TrickTic-CRM",
  title: "TrickTic-CRM Privacy Policy",
  lastUpdated: "Effective: November 10, 2026",
  description: "What TrickTic-CRM stores, including conversations, the assistant, calls, contracts, health declarations, questionnaires, payment records, bookings, recommendations and referrals, who processes it, how long it is kept and how to export or delete it.",
  intro: [
    { type: "linked-paragraph", parts: ["Effective 2026-11-10. Provider: TrickTic, operated by Daniel Shedrinsky. Questions or requests: ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, "."] },
    { type: "paragraph", text: "This policy covers TrickTic-CRM at crm.tricktic.com, a workspace for the leads and conversations that businesses receive from their landing pages, Instagram, WhatsApp, phone calls and booking page. Access is by invitation." },
    { type: "paragraph", text: "Some parts of CRM are switched on by TrickTic for each business separately: the assistant, the voice assistant, contracts and quotes, payment records, the booking page, health declarations and consent forms, questionnaires, the customer page, recommendations and referral links. A part that is off for your business collects nothing for it." },
  ],
  sections: [
    { heading: "Who is responsible", blocks: [
      { type: "paragraph", text: "Your business decides which leads and clients to collect and what to do with them: it is the controller of that data (in Israeli law, the owner of the database). TrickTic runs TrickTic-CRM for you and processes the data only on your behalf, to provide the service." },
      { type: "paragraph", text: "Your landing page needs its own privacy notice for visitors. It should say that form submissions go to your business and its service providers." },
      { type: "paragraph", text: "If you connect an Instagram or WhatsApp account, the people who write to that account are your customers. Their messages reach CRM because you connected the account, and TrickTic handles them only to show them to you and to send the replies you write. Your own privacy notice should say that messages sent to your business are handled by your service providers." },
      { type: "paragraph", text: "The same applies to the people who call your business when the voice assistant answers, who sign a contract or answer a quote you send, and who book on your booking page: they are your customers, and TrickTic handles their details for your business. If you use the assistant, the voice assistant or the decision model, your privacy notice should also say that messages and calls may be answered by an automated assistant, and messages sorted by AI, using AI service providers." },
      { type: "paragraph", text: "Health declarations and consent forms hold information about your clients' health, which the law treats as especially sensitive. Your business decides which forms to use, what they ask and how long the answers are kept, and is responsible for asking only what it needs and for any consent the law requires. Your privacy notice should tell your clients that their answers are kept by your service providers. TrickTic offers a short Hebrew template for that notice." },
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
        ["The assistant, if it is on: the knowledge card you write about your business (services, prices, hours, area, frequent questions, tone and your hand-over text), suggested replies, the replies the assistant sends, marked as the assistant's, the summaries of a client's conversation and the first drafts of quotes and contracts you ask for, and a record of each use: when, what for, the outcome and its size, without the text", "You and CRM"],
        ["Calls answered by the voice assistant, if it is on: the caller's number, the time and length of the call, the details the assistant collected, a summary and a transcript of the call. CRM does not store the call's audio", "The voice-agent provider"],
        ["Contracts and quotes you send: the text, the items and prices, your business details on them, the customer's email address, when the link was opened, and whether it was signed, approved or withdrawn", "You"],
        ["The signing record: the name the customer typed, their drawn or typed signature on a contract or their approval or refusal of a quote with any note they add, the wording they agreed to, the time, their IP address and browser, a fingerprint of the text they saw, their ID number if your contract template asks for it (stored encrypted), and a PDF of the signed contract or answered quote, stored encrypted", "Your customer, on the signing page"],
        ["Payment records: the amount you agreed with a client, each deposit or payment you record with its date, method and note, and the payment details you save for payment requests (for example a Bit or PayBox number or your bank account)", "You"],
        ["Bookings on your booking page: the service, the time, the customer's name and phone, and their email and note if they give them", "Your customer, on your booking page"],
        ["Health declarations and consent forms, if they are on: the forms you write or copy from an example (text, questions, how long a signature is valid, whether an ID number is asked), each form as it was sent, the client's answers, and the signing record described above. The answers, the ID number and the PDF of the signed form are stored encrypted", "You, and your client on the signing page"],
        ["Questionnaires, if they are on: the questions you write, each questionnaire as sent, the answers and photos the client sends (with what the camera wrote into the file removed), and for a public questionnaire the name and phone of the person who fills it in. Unsent answers that the client saves to finish later are kept for up to seven days and are not shown to you", "You, and your client or the person filling in a public questionnaire"],
        ["The customer page, if it is on: the client's link, the steps you ask the client to take with their order and target dates, and the days on which the page was opened", "You and CRM"],
        ["Recommendations, if they are on: the client's words, star rating and picture, how their name appears, the exact wording of their consent to publish and its time, your approval or hiding, and a record that consent was withdrawn", "Your client, on the recommendation page, and you"],
        ["Referral links, if they are on: each client's link and whether the page shows their first name, who brought whom, the name, phone and, if given, email and message of the friend who fills in the form, the answer to 'how did you hear about us' on the booking page, and the thanks you record (what, when, and an amount if you add one)", "You, your client and the friend who fills in the form"],
        ["Before and after photos and client files you keep: the pictures, videos and documents you add, with what the camera wrote removed, and the client's consent to show a photo if you record it (who, when, how)", "You"],
        ["Your business details for documents: logo, legal and trade name, business type and number, address and contact details", "You or TrickTic, when setting up your business"],
        ["Your work on leads: stages, notes, follow-ups, contact confirmations, outcomes and amounts you declare", "You"],
        ["Your login: the email address and account identifier Google returns", "Google sign-in"],
        ["History and audit records of changes, exports and deletions", "CRM"],
      ] },
      { type: "paragraph", text: "CRM records the amounts and payments you enter. It does not take payments, create payment links, store card details or issue invoices or receipts, and a payment record or quote is not a tax document." },
      { type: "paragraph", text: "CRM sends a message to a customer only in these cases: when you write it and press send, one message to one person; when you press send on a contract or quote, one email to one person, and after they answer it, a copy of the signed contract or answered quote to them; when the assistant is on for that channel, as described below; and the confirmation and change emails of a booking, sent to the customer who booked if they gave an email address. It does not send in bulk or on a schedule, and it does not send paid template messages." },
      { type: "paragraph", text: "The assistant is an AI feature that TrickTic switches on for a business. It can suggest a reply that you edit and send yourself. If TrickTic also switches on its replies for an Instagram or WhatsApp account, it answers a customer who writes to you, only while the channel's free reply time is open, and passes the conversation to you when it cannot answer. It answers only from your knowledge card and the current conversation. It does not see files, notes, payments, contracts, other clients or other businesses, and it does not write first, book, change records or send anything other than its reply. It stops in a conversation you answer yourself, pause or mark as personal." },
      { type: "paragraph", text: "When the assistant is on, you can also ask it for a short summary of one client's conversation, written from that client's messages, form texts and your notes on them and marked as written by the AI. It may suggest the client's name, what they need and their budget; a suggestion changes nothing until you accept it. A summary is written again by itself when new messages arrive. You can also ask it for a first draft of a quote or contract, from your price list, the template you choose and that client's conversation; the draft stays yours to edit and send." },
      { type: "paragraph", text: "Only you, signed in to CRM, can see the answers to a health declaration, and each viewing is recorded in your business's activity log. A signed health form is never sent by email and is not offered for download on the customer page. TrickTic personnel can open answers only through a recorded emergency access, with a stated reason (your request, a legal demand or a fault), and each such opening is recorded and reported to TrickTic's operator. No AI receives the answers unless you switch on 'AI can read the answers' for your business. If you do, the summary of a client can also use that client's signed answers, with phone numbers, email addresses and ID-like numbers masked; the assistant's replies, drafts and documents never use them. CRM does not send clients reminders to fill in a form: you send the link, one to one person, or the client sees it after booking." },
      { type: "paragraph", text: "If TrickTic switches it on for your business, a decision model, a kind of AI that chooses among fixed answers and writes no text, sorts some of what reaches CRM: whether a customer's message is a complaint, a change or cancellation, a request to stop, or needs no reply; whether it tries to misuse the assistant; whether the assistant's reply promises something its knowledge does not say; whether a comment or a message matches one of your rules or flows; whether an inquiry looks like spam or a test; whether a review is negative or needs a reply soon; whether a recommendation contains contact details or insults; which field a column of a file you import belongs to; whether an Instagram or WhatsApp conversation, for example one brought in with your chat history, looks personal (a friend, family or a supplier) rather than a customer's; and, from a customer's own message, which of your saved services it asks about, whether the customer asked to be contacted later, and whether the customer says they paid and how. With that answer CRM passes the conversation to you, pauses the assistant for that person and tells you, keeps the assistant's reply as a draft for you, sends the reply or starts the flow you set up, or shows you a suggestion. A suggested service, follow-up date or payment only fills in the form you then save yourself; CRM works out the date and the amount itself. It does not mark, hide, approve, delete or reorder anything by itself." },
      { type: "paragraph", text: "CRM does not use AI to score your leads. The order of the Today list is a fixed rule." },
      { type: "paragraph", text: "A connected Instagram or WhatsApp account brings every chat on it into CRM, including private chats with friends, family or suppliers. You can mark a conversation as personal. CRM then deletes its stored messages and files and stops keeping later messages from that person, until you undo it. If TrickTic switches it on, CRM suggests which conversations look personal; only your press marks one." },
    ] },
    { heading: "Who else processes data", blocks: [
      { type: "table", head: ["Service", "Role", "What it receives"], rows: [
        ["A hosting provider", "Hosts the CRM server and database", "All CRM data, on a server dedicated to CRM"],
        ["A network provider", "Network protection and HTTPS for crm.tricktic.com, and the check that a person, not a program, sends a public questionnaire", "Traffic to CRM, including submitted forms, signatures and bookings in transit. The questionnaire check receives no answers, names or phones"],
        ["Google", "Sign-in, with the openid and email permissions. If you connect Google Calendar: one calendar that CRM creates in your Google account for your follow-ups and bookings. If you also allow it for your booking page: whether times in your main calendar are busy", "Your sign-in. If you connect Google Calendar: for each follow-up, the kind of step and the client's name, the date or time and the meeting place. CRM gets no access to your Gmail, Drive, contacts or other calendars, and for the busy check it sees only busy or free, not your events"],
        ["Meta (Instagram and WhatsApp)", "Carries messages between your customers and the Instagram or WhatsApp account you connected", "The messages and files you send from CRM and the assistant's replies. Meta delivers your customers' messages to CRM and handles them under its own terms with you and with your customers"],
        ["An AI model provider, chosen by TrickTic", "Writes the assistant's suggested replies and replies, the summaries of a client's conversation and first drafts of quotes and contracts you ask for, and recommendation requests", "For each reply: fixed instructions, your business's name and knowledge card, and the recent messages of that one conversation, with phone numbers, email addresses and ID-like numbers masked. Not names or other details from your records, files, other conversations or identifiers. For a summary: your business's name, the date, and that client's recent messages, form texts and your notes, masked the same way, without the client's name, phone or record fields, and that client's signed health answers only if you switched on 'AI can read the answers'. For a first draft: your price list, the template you choose and that client's conversation, masked. For a recommendation request: your business's name, the kind of work, the service booked and the tone from your knowledge card, not the client's name or link. The provider keeps requests under its own terms, and TrickTic has turned off their use for training its models"],
        ["A decision-model provider, chosen by TrickTic", "Sorts messages, comments, inquiries, reviews, recommendations, import columns and personal-looking conversations, and suggests a service, a follow-up date or a payment from a customer's message, as described above, for a business where TrickTic switched it on; and labels the problem reports you send TrickTic. It writes no text", "For each question: your business's name and type and one of these: the recent messages of one conversation, with phone numbers, email addresses and ID-like numbers masked; the assistant's reply with the knowledge it was given; a comment, or a message that answers one of your rules or flows, shortened; an inquiry's name, message and questionnaire answers, without its phone or email; a review's or recommendation's words and stars; one column heading of a file you import, without its cells; to suggest whether a conversation looks personal, only its newest messages from both sides, with names, phone numbers, email addresses and ID-like numbers masked; one customer message, with phone numbers, email addresses and ID-like numbers masked, and for a service question the names of your saved services; or the text of a problem report you send TrickTic, or a customer's question that the assistant handed to you, with phone numbers, email addresses and identifying numbers removed. CRM keeps only the labels. The provider keeps requests under its own terms and does not use them to train its models"],
        ["A voice-agent provider, chosen by TrickTic", "Answers the calls your business forwards to it, with a voice assistant that uses speech and AI models, and sends CRM the result", "The calls: the caller's number and voice, and what is said. It records and transcribes each call and sends CRM the number, the transcript, a summary and the details collected. TrickTic sets it to keep recordings and transcripts for no more than 30 days"],
        ["A file storage provider", "Stores the pictures, voice messages, video and files of your conversations, the PDFs of signed contracts, answered quotes and signed health forms, the photos of questionnaires and recommendations, and your before and after photos and client files", "Those files, encrypted by CRM before they are stored. They are never public and are shown only to you, signed in to CRM"],
        ["An email delivery provider", "Sends your new-lead and follow-up emails, the contracts and quotes you send, their PDFs once answered, and booking emails", "Your email address and the notice. So that you can act from the email, a notice includes the lead's name, phone, email, source and message. For contracts, quotes and bookings: the customer's email address, the link and, once answered, the PDF, sent to the customer and to you. A signed health form is never emailed. Open and click tracking are off"],
        ["The calendar app you add CRM's private subscription link to", "Shows your open follow-ups in your own calendar", "For each follow-up, the kind of step and the client's name, the date or time and the meeting place. Anyone who has the link can read these, so keep it private. You can replace it or turn it off"],
        ["Encrypted backups on a separate TrickTic-operated server", "Recovery", "Database copies, encrypted before they leave the CRM server"],
        ["Integration services used to deliver submissions", "Pass form submissions from your landing page to CRM", "The form submission"],
        ["AI tools from external providers", "Used by TrickTic when operating, maintaining, securing or supporting the service", "Lead data only where needed for those purposes, under the provider's confidentiality terms"],
      ] },
      { type: "paragraph", text: "To sort the problem reports you send us, and to group the same problem reported by several businesses, we send the text of a report, with phone numbers, email addresses and identifying numbers removed, to a decision-model provider, which returns labels only. To show a business which questions its assistant could not answer, we send a customer's question that the assistant handed to the business, with the same details removed, and keep only its topic." },
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
        ["The knowledge card, the record of each use of the assistant, and the decision model's answers", "The card until you change it or your account is deleted; the records of use and the answers with the lead they concern. The text sent to the AI model provider or the decision-model provider is not kept in CRM"],
        ["Calls answered by the voice assistant", "In CRM: with the lead they belong to. At the voice-agent provider: recordings and transcripts for no more than 30 days"],
        ["Contracts, quotes, signing records and their PDFs", "With the lead they belong to. A signing or approval link works for 30 days, or until the end of the quote's validity, unless you withdraw it earlier"],
        ["Payment records and bookings", "With the lead they belong to. Your payment details until you change them or your account is deleted"],
        ["Health declaration answers, the ID number and the signed copy", "For the period your business sets, from 30 days to 10 years after signing (three years until you choose), then deleted automatically. A record that the form was signed, by whom and when, stays with the lead"],
        ["Questionnaires, their answers and photos, the customer page, before and after photos, client files, and the assistant's summaries and drafts", "With the lead they belong to. A summary is also deleted when a message or note it came from is deleted, or the conversation is marked as personal"],
        ["Recommendations", "With the lead. When the client withdraws consent, the words and picture are deleted immediately, and a record that consent was given and withdrawn stays"],
        ["Referral links, who brought whom and thanks", "With the lead. Deleting a client deletes their link, their mark, the marks that name them as the one who brought someone, and the thanks recorded for them"],
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
        "download all your data (JSON), including conversations and their files, the assistant's replies and knowledge card, calls, contracts, quotes and their PDFs, payment records and bookings, health declarations with their answers and signed copies, questionnaires and their photos, the customer page, recommendations, referrals, before and after photos and client files, and your lead list (CSV),",
        "delete one lead (including leads merged into it, their conversations, files, calls, contracts, quotes and their PDFs, payment records, bookings, health declarations, questionnaires, recommendations, referrals, photos and files),",
        "delete your whole account.",
      ] },
      { type: "paragraph", text: "Each deletion asks you to type a confirmation. If a lead asks you to see or delete their details, you can do it in the app, or ask support to help." },
    ] },
    { heading: "If you contacted a business that uses CRM", blocks: [
      { type: "linked-paragraph", parts: ["If you filled in a form, a health declaration, a questionnaire, a recommendation or a friend's referral form, sent an Instagram or WhatsApp message, called, signed a contract, answered a quote or booked a time with a business that uses TrickTic-CRM, that business decides what is done with your details. To see them or have them deleted, ask the business. You can also write to ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, " and name the business: we pass your request to it and help it carry the request out."] },
      { type: "paragraph", text: "When a business's voice assistant answers your call, it says at the start that it is a digital assistant and that the call is recorded and transcribed. When you sign a contract online, the business keeps the signing record described above as evidence of who signed and what." },
      { type: "paragraph", text: "If a friend gave you a referral link, the business learns that you came through that friend, and the page may show the friend's first name. If you withdraw your consent to a recommendation, it is removed from the business's page." },
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
  lastUpdated: "Effective: November 10, 2026",
  description: "Terms for the invitation-only TrickTic-CRM pilot: service scope, messaging, the assistant, calls, contracts, health declarations, questionnaires and payment records, responsibilities, support and ending the pilot.",
  intro: [
    { type: "linked-paragraph", parts: ["Effective 2026-11-10. Provider: TrickTic, operated by Daniel Shedrinsky. Support: ", { text: "support@tricktic.com", href: "mailto:support@tricktic.com" }, "."] },
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
        "a booking page where customers book a time from the hours you set,",
        "health declarations and consent forms: forms you write or adapt from an example, sent by you as a link, one to one person, or shown to a client after booking, and signed on a page CRM hosts, with the answers kept encrypted and readable only by you,",
        "questionnaires: questions and photos a client answers before a quote or a meeting, by a personal link or a public one,",
        "a customer page: one link per client with what you ask them to do and what is open for them,",
        "recommendations: a client writes a recommendation and agrees to publish it, and after your approval it appears on your recommendations page,",
        "referral links: a client shares a link, the friend leaves their details, and CRM records who brought whom and the thanks you give.",
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
        "Health declarations and consent forms: the example forms are a starting point, not legal advice. Review and adapt an example before you use it, ask only what you need for the service, choose how long answers are kept, and obtain any consent the law requires. Your own privacy notice must tell your clients that their answers are kept by your service providers. TrickTic does not check your forms.",
        "Publish only recommendations your client approved, and do not offer anything in return for a review. Show a client's name on a referral page only if they agreed.",
        "Before and after photos and client files: add only what your client knows about, and show a photo only with their consent.",
        "Payment records are for your own tracking. They are not invoices, receipts or tax documents; issue those in the software you use for them. CRM does not check your payment details or move money.",
      ] },
    ] },
    { heading: "TrickTic's responsibilities", blocks: [
      { type: "linked-paragraph", parts: ["TrickTic will use lead data only to provide the service, as described in the ", { text: "TrickTic-CRM privacy policy", href: "https://legal.tricktic.com/tricktic-crm/privacy" }, ". It will also:"] },
      { type: "list", items: [
        "keep your business's data separate from other businesses,",
        "keep encrypted backups and test restoring them,",
        "give you your data on request and delete it as described,",
        "keep health declaration answers encrypted and readable only by you, open them only through a recorded emergency access with a reason, and delete them after the period you set,",
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
      { type: "paragraph", text: "To the fullest extent permitted by applicable law, TrickTic and Daniel Shedrinsky are not liable for any loss or damage arising from your use of, or inability to use, the service. This includes lost, delayed or duplicated leads, messages, calls or files; messages, contracts or quotes that are not sent or not delivered; missed follow-ups, bookings or email notices; replies, summaries or transcripts written by the assistant or the voice assistant; the validity or enforceability of a contract, quote or electronic signature; the content of the health declarations, consent forms and questionnaires you use; payment records you enter; outages or errors; third-party services, including Meta (Instagram and WhatsApp), the limits or suspensions Meta applies to an account, the AI model and voice-agent providers, and the sites and integration services that send submissions; and lost profits, lost business or any indirect, incidental or consequential damage. You are responsible for how you contact and handle your leads." },
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
