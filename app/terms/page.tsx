import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: "Terms of Service & Usage Policy | Pakistan Info Hub",
  description: "Terms and conditions governing the use of Pakistan Info Hub guides, calculators, and informational resources.",
  openGraph: {
    title: "Terms of Service & Usage Policy | Pakistan Info Hub",
    description: "Terms and conditions governing the use of Pakistan Info Hub guides, calculators, and informational resources.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/terms",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/terms",
  },
};

export default function Page() {
  return <TermsClient />;
}
