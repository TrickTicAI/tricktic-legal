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
    "CRM does not store card or payment details.",
    "CRM sends a message to a customer only when you write it and press send: one message, to one person.",
    "It does not send anything automatically, in bulk or on a schedule, and it does not send paid template messages.",
    "CRM's features do not use AI to read, sort, score or answer your leads or their messages.",
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
    "If you filled in a form or sent an Instagram or WhatsApp message to a business that uses TrickTic-CRM",
    "Open and click tracking are off",
    "Providers may change as the service develops",
    "A current list is available from support.",
    "Server logs keep request status and timing only, not form contents.",
    "A deleted lead can stay inside older backups for up to about 8 weeks",
    "Deletions are applied again before anyone gets access",
    "A record that a deletion happened is kept indefinitely",
    "You may request an export through support for 30 days",
    "no later than 72 hours after becoming aware",
  ]) assert.ok(visible.includes(clause), clause);
  assert.ok(links(html).some((link) => link.href === "mailto:support@tricktic.com"));
  // Providers other than Google and Meta are described by role (owner,
  // 2026-10-07; Meta is the channel itself and cannot be described by role).
  for (const name of ["HOSTKEY", "Cloudflare", "SMTP2GO", "n8n", "R2", "Amazon"]) {
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
    "Contacting leads is your action. CRM sends a message only when you write it and press send, and never contacts anyone by itself.",
    "replying from CRM while the channel's free reply time is open",
    "automatic, scheduled or bulk sending, paid template messages, AI features",
    "What Meta charges for an account you connect is between you and Meta.",
    "keep to Meta's terms for them, including its rules for business messaging",
    "Mark the conversations that are not business as personal.",
    "disconnects your Instagram and WhatsApp accounts from CRM",
    "third-party services, including Meta (Instagram and WhatsApp)",
    "Either side can end the pilot at any time.",
    "To the fullest extent permitted by applicable law",
    "Nothing in these terms excludes liability that cannot lawfully be excluded",
    "at least 30 days before they apply",
    "governed by the laws of the State of Israel",
    "mandatory laws of the country where you live",
  ]) assert.ok(visible.includes(clause), clause);
  assert.ok(links(html).some((link) => link.href === "https://legal.tricktic.com/tricktic-crm/privacy"));
});

test("CRM documents are new and have no legacy URL", () => {
  assert.equal(legacyUrl("/tricktic-crm/privacy"), null);
  assert.equal(legacyUrl("/tricktic-crm/terms"), null);
});
