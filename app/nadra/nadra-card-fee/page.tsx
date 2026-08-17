import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA Card Fee Structure 2026 (CNIC, NICOP, FRC & Renewal Rates)',
  description: 'Official NADRA Card Fee Schedule 2026. Verified rates for Smart CNIC, renewal, modification, duplicate card, FRC (PKR 1000), and overseas NICOP Zone A/B tariffs.',
  openGraph: {
    title: 'NADRA Card Fee Structure 2026 (CNIC, NICOP, FRC & Renewal Rates)',
    description: 'Official NADRA Card Fee Schedule 2026. Verified rates for Smart CNIC, renewal, modification, duplicate card, FRC (PKR 1000), and overseas NICOP Zone A/B tariffs.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/nadra/nadra-card-fee',
  },
};

export default function Page() {
  const article = ARTICLES['nadra-card-fee'];
  return <ArticleLayout article={article} />;
}

