import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CM Punjab Kisan Card Scheme 2026: 1.5 Lakh PKR Interest-Free Credit',
  description: 'Kisan Card Punjab 2026 apply online at kisancard.punjab.gov.pk. PKR 150,000 interest-free agricultural credit per season for seed, fertilizer, and pesticides.',
  openGraph: {
    title: 'CM Punjab Kisan Card Scheme 2026: 1.5 Lakh PKR Interest-Free Credit',
    description: 'Kisan Card Punjab 2026 apply online at kisancard.punjab.gov.pk. PKR 150,000 interest-free agricultural credit per season for seed, fertilizer, and pesticides.',
    url: 'https://pakistaninfohub.com/welfare/kisan-card-punjab-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['kisan-card-punjab-apply-online'];
  return <ArticleLayout article={article} />;
}
