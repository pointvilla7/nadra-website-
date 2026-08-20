import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kamyab Jawan Program 2026: Youth Business Loan Online Registration',
  description: 'Complete registration guide for Kamyab Jawan Youth Business & Agriculture Loans 2026. Tier 1 (up to 5 Lakhs @ 0%), Tier 2 (up to 10 Million @ 5%), and Tier 3 rules.',
  openGraph: {
    title: 'Kamyab Jawan Program 2026: Youth Business Loan Online Registration',
    description: 'Complete registration guide for Kamyab Jawan Youth Business & Agriculture Loans 2026. Tier 1 (up to 5 Lakhs @ 0%), Tier 2 (up to 10 Million @ 5%), and Tier 3 rules.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/loans/kamyab-jawan-program',
  },
};

export default function Page() {
  const article = ARTICLES['kamyab-jawan-program'];
  return <ArticleLayout article={article} />;
}

