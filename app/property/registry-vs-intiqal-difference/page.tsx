import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registry vs Intiqal Difference in Pakistan – Legal Rights Explained',
  description: 'Understand the critical legal differences between Registry (Sale Deed) and Intiqal (Mutation) in Pakistani real estate law. Protect your plot from fraudulent double-sale.',
  openGraph: {
    title: 'Registry vs Intiqal Difference in Pakistan – Legal Rights Explained',
    description: 'Understand the critical legal differences between Registry (Sale Deed) and Intiqal (Mutation) in Pakistani real estate law. Protect your plot from fraudulent double-sale.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/property/registry-vs-intiqal-difference',
  },
};

export default function Page() {
  const article = ARTICLES['registry-vs-intiqal-difference'];
  return <ArticleLayout article={article} />;
}
