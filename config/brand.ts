export const brand = {
  name: "Fourth Idly",
  tagline:
    "Three idlies satisfies your hunger, but the fourth idly is for others.",
  description:
    "Fourth Idly connects verified NGOs with generous donors across India. Share what you can — food, support, or time — and see real impact reach the people who need it most.",
  colors: {
    primary: "#7C3E46",
    primaryDark: "#5E2F35",
    primaryLight: "#A85A64",
    primaryMuted: "#F5ECEE",
    secondary: "#FFFFFF",
    background: "#FFFFFF",
    foreground: "#1A1214",
    muted: "#6B5B5E",
    border: "#E8DEDF",
  },
  fonts: {
    sans: "Poppins",
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    full: "9999px",
  },
} as const;

export type Brand = typeof brand;