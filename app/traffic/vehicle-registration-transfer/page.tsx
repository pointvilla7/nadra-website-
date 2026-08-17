import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Ownership Registration Transfer Guide 2026 (Biometric Transfer)',
  description: 'Step-by-step procedure to transfer vehicle ownership in Pakistan. Mandatory NADRA Biometric verification rules for buyer & seller, fee challan, and smart card fees.',
  openGraph: {
    title: 'Vehicle Ownership Registration Transfer Guide 2026 (Biometric Transfer)',
    description: 'Step-by-step procedure to transfer vehicle ownership in Pakistan. Mandatory NADRA Biometric verification rules for buyer & seller, fee challan, and smart card fees.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/traffic/vehicle-registration-transfer',
  },
};

export default function Page() {
  const article = ARTICLES['vehicle-registration-transfer'];
  return <ArticleLayout article={article} />;
}

