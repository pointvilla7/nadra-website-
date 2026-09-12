import type { Metadata } from 'next';
import DisclaimerClient from './DisclaimerClient';

export const metadata: Metadata = {
  title: "Public Service Disclaimer & Notice | Pakistan Info Hub",
  description: "Important public service disclaimer: Pakistan Info Hub is an independent civic portal and not directly affiliated with any government agency.",
  openGraph: {
    title: "Public Service Disclaimer & Notice | Pakistan Info Hub",
    description: "Important public service disclaimer: Pakistan Info Hub is an independent civic portal and not directly affiliated with any government agency.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/disclaimer",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/disclaimer",
  },
};

export default function Page() {
  return <DisclaimerClient />;
}
