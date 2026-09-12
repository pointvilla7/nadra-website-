import type { Metadata } from 'next';
import BillsCategoryClient from './BillsCategoryClient';

export const metadata: Metadata = {
  title: "Electricity, Gas & Water Utility Bills Online 2026 | Pakistan Info Hub",
  description: "Official verified duplicate bill checking guides for LESCO, MEPCO, IESCO, FESCO, GEPCO, K-Electric, SNGPL, SSGC, and WASA across Pakistan.",
  openGraph: {
    title: "Electricity, Gas & Water Utility Bills Online 2026 | Pakistan Info Hub",
    description: "Official verified duplicate bill checking guides for LESCO, MEPCO, IESCO, FESCO, GEPCO, K-Electric, SNGPL, SSGC, and WASA across Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/bills",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/bills",
  },
};

export default function Page() {
  return <BillsCategoryClient />;
}
