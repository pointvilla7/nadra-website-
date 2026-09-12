import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Pakistan Info Hub – Complete Civic Directory & Verification Guides 2026",
  description: "Pakistan's trusted civic documentation repository for NADRA, Passport, Utility Bills, Tax, Driving Licenses, and Government Welfare Schemes.",
  openGraph: {
    title: "Pakistan Info Hub – Complete Civic Directory & Verification Guides 2026",
    description: "Pakistan's trusted civic documentation repository for NADRA, Passport, Utility Bills, Tax, Driving Licenses, and Government Welfare Schemes.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com",
  },
};

export default function Page() {
  return <HomePageClient />;
}
