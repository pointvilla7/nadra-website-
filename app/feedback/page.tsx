import type { Metadata } from 'next';
import FeedbackClient from './FeedbackClient';

export const metadata: Metadata = {
  title: "Citizen Feedback & Procedure Corrections | Pakistan Info Hub",
  description: "Share feedback, report outdated government fees, or submit correction requests to help keep Pakistan Info Hub accurate for everyone.",
  openGraph: {
    title: "Citizen Feedback & Procedure Corrections | Pakistan Info Hub",
    description: "Share feedback, report outdated government fees, or submit correction requests to help keep Pakistan Info Hub accurate for everyone.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/feedback",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/feedback",
  },
};

export default function Page() {
  return <FeedbackClient />;
}
