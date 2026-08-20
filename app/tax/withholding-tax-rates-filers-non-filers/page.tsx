import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Withholding Tax Rates 2026: Filer vs Non-Filer Comparison',
  description: 'Compare withholding tax (WHT) rates 2026 in Pakistan. Learn exact tax percentages on property purchase, vehicle registration, bank transactions, and prize bonds.',
  openGraph: {
    title: 'Withholding Tax Rates 2026: Filer vs Non-Filer Comparison',
    description: 'Compare withholding tax (WHT) rates 2026 in Pakistan. Learn exact tax percentages on property purchase, vehicle registration, bank transactions, and prize bonds.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/tax/withholding-tax-rates-filers-non-filers',
  },
};

export default function Page() {
  const article = ARTICLES['withholding-tax-rates-filers-non-filers'];
  return <ArticleLayout article={article} />;
}
