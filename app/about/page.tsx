import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Us — E-E-A-T & Editorial Standards | Pakistan Info Hub",
  description: "Learn about Pakistan Info Hub, our editorial rigor, fact-checking methodology, and mission to deliver authoritative civic guides for Pakistanis.",
  openGraph: {
    title: "About Us — E-E-A-T & Editorial Standards | Pakistan Info Hub",
    description: "Learn about Pakistan Info Hub, our editorial rigor, fact-checking methodology, and mission to deliver authoritative civic guides for Pakistanis.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/about",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
