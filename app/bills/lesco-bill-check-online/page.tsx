import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LESCO Bill Check Online 2026: Download Duplicate Electricity Bill PDF',
  description: 'Check and download your LESCO electricity bill online using 14-digit Reference Number or 10-digit Customer ID. Print duplicate bill for Lahore, Okara, Kasur, Sheikhupura.',
  openGraph: {
    title: 'LESCO Bill Check Online 2026: Download Duplicate Electricity Bill PDF',
    description: 'Check and download your LESCO electricity bill online using 14-digit Reference Number or 10-digit Customer ID. Print duplicate bill for Lahore, Okara, Kasur, Sheikhupura.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/lesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['lesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}

