/**
 * Single source of truth for how clients reach Carmen.
 *
 * The number was previously hardcoded in six places in two different formats
 * (`tel:4696649996` and `tel:+14696649996`). Local-SEO citation matching compares
 * these strings, so they need to agree — import from here rather than retyping.
 */

export const PHONE_DISPLAY = '(469) 664-9996';

/** E.164 — the format Google and the schema markup expect. */
export const PHONE_E164 = '+14696649996';

export const PHONE_TEL = `tel:${PHONE_E164}`;

/**
 * `?&body=` is the cross-platform spelling: iOS wants `&body=`, Android wants
 * `?body=`, and this form is understood by both.
 */
export const PHONE_SMS = `sms:${PHONE_E164}?&body=${encodeURIComponent(
  "Hi! I'd like to book a free 15-minute consultation."
)}`;

/** Pre-fills the text with the service the client was looking at. */
export const smsAbout = (serviceName: string) =>
  `sms:${PHONE_E164}?&body=${encodeURIComponent(
    `Hi! I'm interested in ${serviceName}. Can you tell me more?`
  )}`;
