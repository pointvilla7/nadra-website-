import type { Metadata } from 'next';
import WelfareCategoryClient from './WelfareCategoryClient';

export const metadata: Metadata = {
  title: "Social Welfare, BISP 8171 & Sehat Card 2026 | Pakistan Info Hub",
  description: "Official citizen guides for BISP 8171 Kafaalat payment check, Sehat Sahulat Card hospital list, EOBI pension verification, and PSER survey registration.",
  openGraph: {
    title: "Social Welfare, BISP 8171 & Sehat Card 2026 | Pakistan Info Hub",
    description: "Official citizen guides for BISP 8171 Kafaalat payment check, Sehat Sahulat Card hospital list, EOBI pension verification, and PSER survey registration.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/welfare",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/welfare",
  },
};

export default function Page() {
  return <WelfareCategoryClient />;
}
