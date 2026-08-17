import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electricity Bill Extension & Installment Application Guide 2026',
  description: 'How to get electricity bill installments approved at LESCO, IESCO, K-Electric, MEPCO customer centers. NEPRA consumer rules, due date extension, and surge relief.',
  openGraph: {
    title: 'Electricity Bill Extension & Installment Application Guide 2026',
    description: 'How to get electricity bill installments approved at LESCO, IESCO, K-Electric, MEPCO customer centers. NEPRA consumer rules, due date extension, and surge relief.',
    url: 'https://pakistaninfohub.com/bills/electricity-bill-installment-guide',
  },
};

export default function Page() {
  const article = ARTICLES['electricity-bill-installment-guide'];
  return <ArticleLayout article={article} />;
}
