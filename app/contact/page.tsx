import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Our Editorial & Verification Desk | Pakistan Info Hub",
  description: "Get in touch with the Pakistan Info Hub editorial team, submit regulatory corrections, or request civic procedure assistance.",
  openGraph: {
    title: "Contact Our Editorial & Verification Desk | Pakistan Info Hub",
    description: "Get in touch with the Pakistan Info Hub editorial team, submit regulatory corrections, or request civic procedure assistance.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/contact",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
