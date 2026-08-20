import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "E-Challan Check Online 2026 – Punjab, Islamabad, Karachi & PSCA Verification | Pakistan Info Hub",
  description: "Check and pay traffic e-challan online in Pakistan (Punjab, Islamabad, Karachi). Search by vehicle number or CNIC via PSCA and Islamabad Traffic Police gateways.",
  openGraph: {
    title: "E-Challan Check Online 2026 – Punjab, Islamabad, Karachi & PSCA Verification | Pakistan Info Hub",
    description: "Check and pay traffic e-challan online in Pakistan (Punjab, Islamabad, Karachi). Search by vehicle number or CNIC via PSCA and Islamabad Traffic Police gateways.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/traffic/e-challan-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['e-challan-check-online'];
  return <ArticleLayout article={article} />;
}
