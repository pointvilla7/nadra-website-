import type { Metadata } from 'next';
import HowWeVerifyClient from './HowWeVerifyClient';

export const metadata: Metadata = {
  title: "How We Verify Official Procedures & Gazettes | Pakistan Info Hub",
  description: "Detailed breakdown of our 4-stage verification process: Gazette notifications, official portals, telephone verifications, and user submissions.",
  openGraph: {
    title: "How We Verify Official Procedures & Gazettes | Pakistan Info Hub",
    description: "Detailed breakdown of our 4-stage verification process: Gazette notifications, official portals, telephone verifications, and user submissions.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/how-we-verify",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/how-we-verify",
  },
};

export default function Page() {
  return <HowWeVerifyClient />;
}
