import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MEPCO Bill Check Online 2026: Multan Electricity Duplicate Bill',
  description: 'MEPCO online duplicate bill check for Multan, Sahiwal, D.G. Khan, Bahawalpur, Rahim Yar Khan & Khanewal. Print duplicate bill by 14-digit reference number.',
  openGraph: {
    title: 'MEPCO Bill Check Online 2026: Multan Electricity Duplicate Bill',
    description: 'MEPCO online duplicate bill check for Multan, Sahiwal, D.G. Khan, Bahawalpur, Rahim Yar Khan & Khanewal. Print duplicate bill by 14-digit reference number.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/mepco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['mepco-bill-check-online'];
  return <ArticleLayout article={article} />;
}

