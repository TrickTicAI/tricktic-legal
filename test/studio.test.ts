import assert from "node:assert/strict";
import { test } from "node:test";
import { readBuilt, mainText, links } from "./helpers.ts";
import { legacyUrl } from "../src/site.ts";

test("Studio privacy keeps its provider, retention and deletion clauses", () => {
  const html = readBuilt("tricktic-studio/privacy.html");
  const visible = mainText(html);
  for (const clause of [
    "Published and operated by TrickTic (Daniel Shedrinsky)",
    "invitation-only hosted TrickTic Studio service at studio.tricktic.com",
    "We also store the latest accepted profile photo URL and your optional preset icon choice.",
    "your browser loads it directly from the sign-in provider's image service without sending a referrer",
    "We do not accept photo uploads or keep provider access tokens.",
    "It does not use advertising or cross-site tracking cookies.",
    "Providers may change as the service develops",
    "We configure these providers not to use your content to train their models.",
    "A current list is available from the privacy contact above.",
    "We do not sell your information or use it for advertising.",
    "Studio is not end-to-end encrypted",
    "Encrypted backups are made daily and kept for at most 7 days.",
    "Files are then removed from storage after at least 125 seconds",
    "Studio is intended for people aged 18 or older",
    "Emails we send you: the invitation and a reminder before your pilot ends.",
    "An email delivery provider sends invitation and reminder emails.",
    "This overview does not include your videos, clips, transcripts, scripts, project names or Copilot conversations.",
    "Records of invitation and reminder emails are kept for 30 days.",
    "An invitation that is never used is deleted 30 days after it expires or is revoked.",
  ]) assert.ok(visible.includes(clause), clause);
  assert.ok(links(html).some((link) => link.href === "mailto:contact@tricktic.com"));
  // Providers are described by role so infrastructure can change (owner, 2026-10-07).
  for (const name of ["HOSTKEY", "Cloudflare", "OpenAI", "France", "R2", "SMTP2GO"]) {
    assert.ok(!visible.includes(name), `names a provider or location: ${name}`);
  }
});

test("Studio privacy covers the Android app as built (TTS-250)", () => {
  const visible = mainText(readBuilt("tricktic-studio/privacy.html"));
  for (const clause of [
    "and the TrickTic Studio Android app, which opens the same service",
    "records your phone's name or model",
    "we store the phone's push-notification token, linked to that phone's session",
    "Notifications are off until you allow them.",
    "kept in the phone's secure storage, for that phone only",
    "The app is excluded from Android cloud backup and device-to-device transfer.",
    "Uninstalling the app removes what it kept on the phone; it does not delete your Studio account.",
    "The app contains no analytics, advertising or crash-reporting component.",
    "Only the files you pick or record are uploaded",
    "The app does not ask for camera, microphone, storage, contacts or location permissions.",
    "It contains no project title, name, transcript, video or account detail.",
    "Google's push-notification service (Firebase Cloud Messaging) delivers notifications to the Android app.",
    "A phone's push-notification token is removed when you sign out of the app",
    "Notifications not delivered within a day are cancelled, and their records are deleted after 7 days.",
    "on the web or in the Android app, by typing DELETE ACCOUNT",
  ]) assert.ok(visible.includes(clause), clause);
});

test("Studio terms keep the free pilot, content rights and liability boundaries", () => {
  const html = readBuilt("tricktic-studio/terms.html");
  const visible = mainText(html);
  for (const clause of [
    "operated by TrickTic (Daniel Shedrinsky)",
    "at least 18 years old",
    "free for at least 30 days from each customer's activation, which is the first sign-in",
    "we email you a reminder before it ends",
    "does not automatically turn into a paid subscription",
    "require your agreement before a charge",
    "at least 30 days' notice before deleting your account",
    "These terms do not transfer ownership",
    "TrickTic does not verify it and does not grant any licence to third-party material",
    "Studio is not a backup or archive service",
    "To the fullest extent permitted by applicable law",
    "Nothing in these terms excludes liability that cannot lawfully be excluded",
    "governed by the laws of the State of Israel",
    "mandatory laws of the country where you live",
    "and the TrickTic Studio Android app, operated by TrickTic",
    "Google Play's own terms apply to downloading the app from Google Play.",
    "Uninstalling the app does not delete your account.",
  ]) assert.ok(visible.includes(clause), clause);
  assert.ok(links(html).some((link) => link.href === "https://legal.tricktic.com/tricktic-studio/privacy"));
});

test("Studio documents are new and have no legacy URL", () => {
  assert.equal(legacyUrl("/tricktic-studio/privacy"), null);
  assert.equal(legacyUrl("/tricktic-studio/terms"), null);
});
