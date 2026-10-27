import assert from "node:assert/strict";
import { test } from "node:test";
import { readBuilt, mainText, links } from "./helpers.ts";
import { legacyUrl } from "../src/site.ts";

test("CRM privacy keeps its provider, retention and deletion clauses", () => {
  const html = readBuilt("tricktic-crm/privacy.html");
  const visible = mainText(html);
  for (const clause of [
    "Provider: TrickTic, operated by Daniel Shedrinsky",
    "TrickTic-CRM at crm.tricktic.com",
    "CRM sends a message to a customer only in these cases: when you write it and press send, one message to one person;",
    "It does not send in bulk or on a schedule, and it does not send paid template messages.",
    "the confirmation and change emails of a booking, sent to the customer who booked",
    "A part that is off for your business collects nothing for it.",
    // Business package (CRM-112): the assistant, calls, contracts, payments.
    "The assistant is an AI feature that TrickTic switches on for a business.",
    "only while the channel's free reply time is open, and passes the conversation to you when it cannot answer",
    "It does not see files, notes, payments, contracts, other clients or other businesses",
    "CRM does not use AI to sort or score your leads. The order of the Today list is a fixed rule.",
    "with phone numbers, email addresses and ID-like numbers masked",
    "TrickTic has turned off their use for training its models",
    "Deleted when you use them, or after 24 hours.",
    "CRM does not store the call's audio",
    "TrickTic sets it to keep recordings and transcripts for no more than 30 days",
    "it says at the start that it is a digital assistant and that the call is recorded and transcribed",
    "their IP address and browser, a fingerprint of the text they saw",
    "their ID number if your contract template asks for it (stored encrypted)",
    "It does not take payments, create payment links, store card details or issue invoices or receipts, and a payment record or quote is not a tax document.",
    "Bookings on your booking page: the service, the time, the customer's name and phone",
    "for the busy check it sees only busy or free, not your events",
    "CRM gets no access to your Gmail, Drive, contacts or other calendars",
    "TrickTic does not sell the data in CRM, does not use it for advertising",
    "the text of the messages your customers send and of the messages you send",
    "profile name, Instagram username, WhatsApp phone number",
    "Pictures, voice messages, video and files that your customers send you or that you send, up to a size limit",
    "the chats of about the last six months on that number",
    "You can mark a conversation as personal.",
    "Those files, encrypted by CRM before they are stored.",
    "a notice includes the lead's name, phone, email, source and message",
    "Its stored text and file are deleted when Meta reports the withdrawal",
    "When Meta sends its data deletion request for the account",
    "It does not delete the messages in Instagram, in WhatsApp or on your customers' phones",
    "If you filled in a form, sent an Instagram or WhatsApp message, called, signed a contract, answered a quote or booked a time with a business that uses TrickTic-CRM",
    "Open and click tracking are off",
    "Providers may change as the service develops",
    "A current list is available from support.",
    "Server logs keep request status and timing only, not form contents.",
    "A deleted lead can stay inside older backups for up to about 8 weeks",
    "Deletions are applied again before anyone gets access",
    "A record that a deletion happened is kept indefinitely",
    "You may request an export through support for 30 days",
    "no later than 72 hours after becoming aware",
    // Error monitoring and problem reports (CRM-214).
    "Collects technical reports of errors in the CRM app, the phone app and the CRM servers",
    "the screen as a pattern rather than its address",
    "Before a report leaves the CRM server, names, phone numbers, email addresses, messages, form answers, files, the links' secret codes and any Hebrew or other non-Latin text are removed, and IP addresses are not stored.",
    "Your problem report notes and screenshots are not sent to it.",
    "Its data is kept in the European Union",
    "At the error monitoring provider: 30 days",
    "Neither includes your note or screenshot, which stay in CRM.",
    "the problem reports you sent",
  ]) assert.ok(visible.includes(clause), clause);
  assert.ok(links(html).some((link) => link.href === "mailto:support@tricktic.com"));
  // Providers other than Google and Meta are described by role (owner,
  // 2026-10-07; Meta is the channel itself and cannot be described by role).
  // The AI model and voice-agent providers are described by role too (CRM-112).
  // So is the error monitoring provider (CRM-214).
  for (const name of ["HOSTKEY", "Cloudflare", "SMTP2GO", "n8n", "R2", "Amazon", "OpenAI", "Anthropic", "Claude", "Codex", "ChatGPT", "ElevenLabs", "Vapi", "Retell", "Voicy", "Yappr", "Sentry", "GlitchTip"]) {
    assert.ok(!visible.includes(name), `names a provider: ${name}`);
  }
});

test("CRM terms keep the free pilot, support and liability boundaries", () => {
  const html = readBuilt("tricktic-crm/terms.html");
  const visible = mainText(html);
  for (const clause of [
    "Provider: TrickTic, operated by Daniel Shedrinsky",
    "opening a link does not record contact; you mark contact yourself",
    "The pilot is free and has no fixed end date.",
    "Nothing is charged without a separate written agreement.",
    "answered within 7 working days",
    "Be at least 18 years old",
    "Contacting leads is your action. CRM sends a message only when you write it and press send, and never contacts anyone by itself, except for the assistant's replies where TrickTic switched them on",
    "replying from CRM while the channel's free reply time is open",
    "Not included: invoicing, receipts, taking payments, payment links, billing, bulk or scheduled sending, paid template messages, calls made by an AI assistant",
    // Business package (CRM-112).
    "The assistant and the voice assistant can be wrong.",
    "TrickTic does not check them and does not give legal advice.",
    "They are not invoices, receipts or tax documents",
    "CRM does not keep the audio of calls.",
    "update the privacy policy before any new AI use of your data is switched on",
    "What Meta charges for an account you connect is between you and Meta.",
    "keep to Meta's terms for them, including its rules for business messaging",
    "Mark the conversations that are not business as personal.",
    "disconnects your Instagram and WhatsApp accounts and the voice assistant from CRM",
    "third-party services, including Meta (Instagram and WhatsApp)",
    "Either side can end the pilot at any time.",
    "To the fullest extent permitted by applicable law",
    "Nothing in these terms excludes liability that cannot lawfully be excluded",
    "Changes apply when they are published, and TrickTic tells you by email about changes that matter to you.",
    "it tells you at least 30 days before. Nothing is charged without a separate written agreement.",
    "governed by the laws of the State of Israel",
    "mandatory laws of the country where you live",
  ]) assert.ok(visible.includes(clause), clause);
  assert.ok(links(html).some((link) => link.href === "https://legal.tricktic.com/tricktic-crm/privacy"));
});

test("CRM documents are new and have no legacy URL", () => {
  assert.equal(legacyUrl("/tricktic-crm/privacy"), null);
  assert.equal(legacyUrl("/tricktic-crm/terms"), null);
});
