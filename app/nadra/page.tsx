import type { Metadata } from 'next';
import NadraCategoryClient from './NadraCategoryClient';

export const metadata: Metadata = {
  title: "NADRA CNIC, B-Form & Family Certificates 2026 | Pakistan Info Hub",
  description: "Official verified guides for NADRA identity cards, Smart CNIC renewal, B-Form tracking, NICOP fee calculator, and FRC application procedures.",
  openGraph: {
    title: "NADRA CNIC, B-Form & Family Certificates 2026 | Pakistan Info Hub",
    description: "Official verified guides for NADRA identity cards, Smart CNIC renewal, B-Form tracking, NICOP fee calculator, and FRC application procedures.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/nadra",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/nadra",
  },
};

export default function Page() {
  return <NadraCategoryClient />;
}
