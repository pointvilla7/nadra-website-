import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDMA Disaster Relief Compensation Registration & Relief Fund',
  description: 'Apply for government financial compensation for flood, earthquake, and rain damage to houses and livestock via NDMA and BISP emergency relief disbursements.',
  openGraph: {
    title: 'NDMA Disaster Relief Compensation Registration & Relief Fund',
    description: 'Apply for government financial compensation for flood, earthquake, and rain damage to houses and livestock via NDMA and BISP emergency relief disbursements.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/alerts/ndma-disaster-relief-compensation-registration',
  },
};

export default function Page() {
  const article = ARTICLES['ndma-disaster-relief-compensation-registration'];
  return <ArticleLayout article={article} />;
}
