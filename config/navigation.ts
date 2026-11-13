export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = {
  product: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#download" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Data Deletion Policy", href: "/data-deletion-policy" },
    { label: "Data Collection & Permission Policy", href: "/acceptable-use-policy" },
    { label: "Copyright Policy", href: "/copyright-policy" },
  ],
} as const;