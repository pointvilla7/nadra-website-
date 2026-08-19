import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SNGPL Online Bill Check 2026 – Sui Gas Duplicate Bill Download & Payment | Pakistan Info Hub',
  description: 'Check SNGPL online bill 2026 using 14-digit or 10-digit consumer number. Download Sui Northern & SSGC duplicate gas bill PDF, view tariffs, and pay online.',
  openGraph: {
    title: 'SNGPL Online Bill Check 2026 – Sui Gas Duplicate Bill Download & Payment | Pakistan Info Hub',
    description: 'Check SNGPL online bill 2026 using 14-digit or 10-digit consumer number. Download Sui Northern & SSGC duplicate gas bill PDF, view tariffs, and pay online.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/sngpl-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['sui-gas-bill-check-online'];
  return <ArticleLayout article={article} />;
}
