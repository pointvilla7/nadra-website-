import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sehat Card Eligibility Check by CNIC 2026 – 8500 SMS & Portal',
  description: 'Check Sehat Sahulat Card eligibility online in 2026 by 13-digit CNIC or SMS to 8500. Free indoor medical treatment up to PKR 1 Million across empaneled hospitals.',
  openGraph: {
    title: 'Sehat Card Eligibility Check by CNIC 2026 – 8500 SMS & Portal',
    description: 'Check Sehat Sahulat Card eligibility online in 2026 by 13-digit CNIC or SMS to 8500. Free indoor medical treatment up to PKR 1 Million across empaneled hospitals.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/health/sehat-card-eligibility-check-by-cnic',
  },
};

export default function Page() {
  const article = ARTICLES['sehat-card-eligibility-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
