// Replace with Google Play Store URL after app release.
export const PLAY_STORE_URL = "#";

export const contact = {
  email: "charitey12@gmail.com", // change later if you have a Fourth Idly email
  subject: "Support Request from Fourth Idly Website",
  body: "Hi Fourth Idly team,\n\nI would like to enquire about...\n\nThanks.",
} as const;

/** Pre-filled mailto — widely supported across desktop and mobile clients */
export function getContactMailto() {
  const subject = encodeURIComponent(contact.subject);
  const body = encodeURIComponent(contact.body);

  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}