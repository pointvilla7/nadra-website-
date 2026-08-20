import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SNGPL Sui Gas Bill Online Check 2026 – Punjab & KPK Duplicate Gas Bill | Pakistan Info Hub",
  description: "SNGPL gas bill check online 2026. Check duplicate Sui Northern gas bill for Lahore, Rawalpindi, Islamabad, Peshawar, Faisalabad, Multan with 11-digit consumer number.",
  openGraph: {
    title: "SNGPL Sui Gas Bill Online Check 2026 – Punjab & KPK Duplicate Gas Bill | Pakistan Info Hub",
    description: "SNGPL gas bill check online 2026. Check duplicate Sui Northern gas bill for Lahore, Rawalpindi, Islamabad, Peshawar, Faisalabad, Multan with 11-digit consumer number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/sui-gas-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['sui-gas-bill-check-online'];
  return <ArticleLayout article={article} />;
}
