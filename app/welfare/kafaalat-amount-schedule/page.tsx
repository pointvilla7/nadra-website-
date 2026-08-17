import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benazir Kafaalat Amount & Payment Schedule 2026 (PKR 10,500 Quarterly)',
  description: 'Check current Benazir Kafaalat cash stipend amount (PKR 10,500) and official 2026 disbursement schedule phases across districts in Pakistan.',
  openGraph: {
    title: 'Benazir Kafaalat Amount & Payment Schedule 2026 (PKR 10,500 Quarterly)',
    description: 'Check current Benazir Kafaalat cash stipend amount (PKR 10,500) and official 2026 disbursement schedule phases across districts in Pakistan.',
    url: 'https://pakistaninfohub.com/welfare/kafaalat-amount-schedule',
  },
};

export default function Page() {
  const article = ARTICLES['kafaalat-amount-schedule'];
  return <ArticleLayout article={article} />;
}
