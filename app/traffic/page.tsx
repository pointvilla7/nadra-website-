import type { Metadata } from 'next';
import TrafficCategoryClient from './TrafficCategoryClient';

export const metadata: Metadata = {
  title: "Traffic Police, Driving License & Vehicle Verification 2026 | Pakistan Info Hub",
  description: "Official guides for DLIMS driving license apply and renewal, e-challan payment, excise vehicle verification, and token tax calculators in Pakistan.",
  openGraph: {
    title: "Traffic Police, Driving License & Vehicle Verification 2026 | Pakistan Info Hub",
    description: "Official guides for DLIMS driving license apply and renewal, e-challan payment, excise vehicle verification, and token tax calculators in Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/traffic",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/traffic",
  },
};

export default function Page() {
  return <TrafficCategoryClient />;
}
