import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Lahore Bill Online Check 2026 – Water & Sewerage Duplicate Bill | Pakistan Info Hub",
  description: "WASA Lahore bill online check 2026. Download duplicate water and sanitation bill for Lahore city using 8-digit consumer number via WASA portal and ePay Punjab.",
  openGraph: {
    title: "WASA Lahore Bill Online Check 2026 – Water & Sewerage Duplicate Bill | Pakistan Info Hub",
    description: "WASA Lahore bill online check 2026. Download duplicate water and sanitation bill for Lahore city using 8-digit consumer number via WASA portal and ePay Punjab.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-lahore-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-lahore-bill-check-online'];
  return <ArticleLayout article={article} />;
}
