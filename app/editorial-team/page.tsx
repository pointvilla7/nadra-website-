import type { Metadata } from 'next';
import EditorialTeamClient from './EditorialTeamClient';

export const metadata: Metadata = {
  title: "Editorial Board & Civic Fact-Checkers | Pakistan Info Hub",
  description: "Meet our team of civic documentation analysts and regulatory specialists verifying government procedures across Pakistan.",
  openGraph: {
    title: "Editorial Board & Civic Fact-Checkers | Pakistan Info Hub",
    description: "Meet our team of civic documentation analysts and regulatory specialists verifying government procedures across Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/editorial-team",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/editorial-team",
  },
};

export default function Page() {
  return <EditorialTeamClient />;
}
