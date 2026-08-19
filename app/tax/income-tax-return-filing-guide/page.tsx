import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Income Tax Return Filing Guide Pakistan 2026 (Salaried & Business)',
  description: 'Complete tutorial for filing annual income tax returns in Pakistan 2026 on FBR Iris. Learn salaried tax slabs, wealth statement reconciliation, and Nil returns.',
  openGraph: {
    title: 'Income Tax Return Filing Guide Pakistan 2026 (Salaried & Business)',
    description: 'Complete tutorial for filing annual income tax returns in Pakistan 2026 on FBR Iris. Learn salaried tax slabs, wealth statement reconciliation, and Nil returns.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/tax/income-tax-return-filing-guide',
  },
};

export default function Page() {
  const article = ARTICLES['income-tax-return-filing-guide'];
  return <ArticleLayout article={article} />;
}
