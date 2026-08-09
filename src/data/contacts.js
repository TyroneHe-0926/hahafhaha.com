// Single source of truth for contact identities.
// Consumed by both the sidebar (icon rows + social icons) and the contact page namecard,
// so the two can't drift apart the way they did before.
//
// `label` is what the sidebar shows; `cardLabel` overrides it on the namecard.

export const DIRECT_CONTACTS = [
  {
    id: "email",
    label: "Email",
    cardLabel: "Gmail",
    value: "tyrone99926@gmail.com",
    href: "mailto:tyrone99926@gmail.com",
    icon: "mail-outline",
  },
  {
    id: "phone",
    label: "Phone",
    cardLabel: "Cell",
    value: "+1 (778) 988-2087",
    href: "tel:+17789882087",
    icon: "phone-portrait-outline",
  },
];

export const SOCIAL_CONTACTS = [
  {
    id: "discord",
    label: "Discord",
    value: "hahafhaha",
    href: "https://discord.com/users/396910997928935434",
    icon: "logo-discord",
  },
  {
    id: "github",
    label: "GitHub",
    value: "TyroneHe-0926",
    href: "https://github.com/TyroneHe-0926",
    icon: "logo-github",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "hahafhaha123",
    href: "https://www.instagram.com/hahafhaha123/",
    icon: "logo-instagram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Qirong He",
    href: "https://ca.linkedin.com/in/qirong-he-69b154198",
    icon: "logo-linkedin",
  },
  {
    id: "steam",
    label: "Steam",
    value: "hahafhaha666",
    href: "https://steamcommunity.com/id/hahafhaha666/",
    icon: "logo-steam",
  },
];
