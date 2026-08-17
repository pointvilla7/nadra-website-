import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K-Electric Duplicate Bill Online Check 2026 (Karachi Electricity Bill)',
  description: 'Check K-Electric Karachi duplicate bill online using 13-digit Account Number. View payment history, unit charges, and download bill print copy.',
  openGraph: {
    title: 'K-Electric Duplicate Bill Online Check 2026 (Karachi Electricity Bill)',
    description: 'Check K-Electric Karachi duplicate bill online using 13-digit Account Number. View payment history, unit charges, and download bill print copy.',
    url: 'https://pakistaninfohub.com/bills/k-electric-duplicate-bill',
  },
};

export default function Page() {
  const article = ARTICLES['k-electric-duplicate-bill'];
  return <ArticleLayout article={article} />;
}
