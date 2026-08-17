import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Akhuwat Interest-Free Loan Application Guide 2026 (50k to 5 Lakhs)',
  description: 'Apply for Akhuwat Foundation interest-free loans (0% Riba) for small business & house construction up to PKR 500,000. Branch application form & rules.',
  openGraph: {
    title: 'Akhuwat Interest-Free Loan Application Guide 2026 (50k to 5 Lakhs)',
    description: 'Apply for Akhuwat Foundation interest-free loans (0% Riba) for small business & house construction up to PKR 500,000. Branch application form & rules.',
    url: 'https://pakistaninfohub.com/loans/akhuwat-interest-free-loan-application',
  },
};

export default function Page() {
  const article = ARTICLES['akhuwat-interest-free-loan-application'];
  return <ArticleLayout article={article} />;
}
