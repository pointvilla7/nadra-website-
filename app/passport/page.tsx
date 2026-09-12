import type { Metadata } from 'next';
import PassportCategoryClient from './PassportCategoryClient';

export const metadata: Metadata = {
  title: "Passport Services, Fees & Online Tracking 2026 | Pakistan Info Hub",
  description: "Official verified guides for Pakistani passport renewal, urgent passport fees, online tracking, e-passport system, and lost passport reissuance.",
  openGraph: {
    title: "Passport Services, Fees & Online Tracking 2026 | Pakistan Info Hub",
    description: "Official verified guides for Pakistani passport renewal, urgent passport fees, online tracking, e-passport system, and lost passport reissuance.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/passport",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/passport",
  },
};

export default function Page() {
  return <PassportCategoryClient />;
}
