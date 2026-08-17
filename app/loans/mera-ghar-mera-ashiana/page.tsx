import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mera Ghar Mera Ashiana Housing Scheme 2026: Subsidized Home Financing',
  description: 'Guide for Mera Ghar Mera Ashiana Low-Cost Housing Financing 2026. Subsidized mortgage rates, Naya Pakistan Housing registration, eligibility by CNIC.',
  openGraph: {
    title: 'Mera Ghar Mera Ashiana Housing Scheme 2026: Subsidized Home Financing',
    description: 'Guide for Mera Ghar Mera Ashiana Low-Cost Housing Financing 2026. Subsidized mortgage rates, Naya Pakistan Housing registration, eligibility by CNIC.',
    url: 'https://pakistaninfohub.com/loans/mera-ghar-mera-ashiana',
  },
};

export default function Page() {
  const article = ARTICLES['mera-ghar-mera-ashiana'];
  return <ArticleLayout article={article} />;
}
