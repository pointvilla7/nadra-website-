import type { Metadata } from 'next';
import EducationCategoryClient from './EducationCategoryClient';

export const metadata: Metadata = {
  title: "Education & Board Examination Results 2026 | Pakistan Info Hub",
  description: "Comprehensive guides for BISE 9th, 10th, 11th, 12th class board results, HEC degree attestation, IBCC equivalence, and college admissions in Pakistan.",
  openGraph: {
    title: "Education & Board Examination Results 2026 | Pakistan Info Hub",
    description: "Comprehensive guides for BISE 9th, 10th, 11th, 12th class board results, HEC degree attestation, IBCC equivalence, and college admissions in Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/education",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/education",
  },
};

export default function Page() {
  return <EducationCategoryClient />;
}
