import type { Metadata } from 'next';
import TrackerClient from './TrackerClient';

export const metadata: Metadata = {
  title: "Civic Application Tracking Portal 2026 | Pakistan Info Hub",
  description: "Unified tracking gateway for NADRA CNIC, DGIP passport tokens, BISP 8171, and provincial government housing applications.",
  openGraph: {
    title: "Civic Application Tracking Portal 2026 | Pakistan Info Hub",
    description: "Unified tracking gateway for NADRA CNIC, DGIP passport tokens, BISP 8171, and provincial government housing applications.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/tracker",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/tracker",
  },
};

export default function Page() {
  return <TrackerClient />;
}
