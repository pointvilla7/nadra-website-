import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HBFC Ghar Pakistan Housing Scheme 2026: Home Construction Loan',
  description: 'Apply for House Building Finance Company (HBFC) Ghar Pakistan Scheme up to PKR 4.5 Million. Subsidized mortgage financing, monthly installment calculator, and forms.',
  openGraph: {
    title: 'HBFC Ghar Pakistan Housing Scheme 2026: Home Construction Loan',
    description: 'Apply for House Building Finance Company (HBFC) Ghar Pakistan Scheme up to PKR 4.5 Million. Subsidized mortgage financing, monthly installment calculator, and forms.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/loans/hbfc-ghar-pakistan-housing-loan',
  },
};

export default function Page() {
  const article = ARTICLES['hbfc-ghar-pakistan-housing-loan'];
  return <ArticleLayout article={article} />;
}

