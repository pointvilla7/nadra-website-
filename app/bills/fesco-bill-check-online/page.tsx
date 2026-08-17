import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FESCO Bill Check Online 2026: Faisalabad Electricity Duplicate Bill',
  description: 'Check and print FESCO duplicate electricity bill online for Faisalabad, Jhang, Sargodha, Toba Tek Singh, and Chiniot by 14-digit reference number.',
  openGraph: {
    title: 'FESCO Bill Check Online 2026: Faisalabad Electricity Duplicate Bill',
    description: 'Check and print FESCO duplicate electricity bill online for Faisalabad, Jhang, Sargodha, Toba Tek Singh, and Chiniot by 14-digit reference number.',
    url: 'https://pakistaninfohub.com/bills/fesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['fesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
