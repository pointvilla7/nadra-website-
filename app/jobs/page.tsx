import type { Metadata } from 'next';
import JobsCategoryClient from './JobsCategoryClient';

export const metadata: Metadata = {
  title: "Government Jobs, FPSC, PPSC & Career Portals 2026 | Pakistan Info Hub",
  description: "Official verified procedures for applying to federal and provincial government jobs, FPSC, PPSC, BEOE protector registration, and avoiding job scams.",
  openGraph: {
    title: "Government Jobs, FPSC, PPSC & Career Portals 2026 | Pakistan Info Hub",
    description: "Official verified procedures for applying to federal and provincial government jobs, FPSC, PPSC, BEOE protector registration, and avoiding job scams.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/jobs",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/jobs",
  },
};

export default function Page() {
  return <JobsCategoryClient />;
}
