import type { Metadata } from 'next';
import LoansCategoryClient from './LoansCategoryClient';

export const metadata: Metadata = {
  title: "Government Loan Schemes & Housing Finance 2026 | Pakistan Info Hub",
  description: "Verified guides for Prime Minister Youth Loan Scheme, Apni Chhat Apna Ghar, interest-free microfinance, and spotting illegal loan app scams in Pakistan.",
  openGraph: {
    title: "Government Loan Schemes & Housing Finance 2026 | Pakistan Info Hub",
    description: "Verified guides for Prime Minister Youth Loan Scheme, Apni Chhat Apna Ghar, interest-free microfinance, and spotting illegal loan app scams in Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/loans",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/loans",
  },
};

export default function Page() {
  return <LoansCategoryClient />;
}
