import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: "Privacy Policy | Pakistan Info Hub",
  description: "Our privacy policy explains how Pakistan Info Hub protects user information and ensures secure browsing.",
  openGraph: {
    title: "Privacy Policy | Pakistan Info Hub",
    description: "Our privacy policy explains how Pakistan Info Hub protects user information and ensures secure browsing.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/privacy",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/privacy",
  },
};

export default function Page() {
  return <PrivacyClient />;
}
