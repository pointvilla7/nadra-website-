import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ehsaas Program Complete Guide 2026: Sub-Schemes & Eligibility Check',
  description: 'Overview of all social relief programs under the Ehsaas and BISP umbrella in Pakistan. Ehsaas Amdan, Nashonuma, Undergraduate Scholarships, and emergency relief.',
  openGraph: {
    title: 'Ehsaas Program Complete Guide 2026: Sub-Schemes & Eligibility Check',
    description: 'Overview of all social relief programs under the Ehsaas and BISP umbrella in Pakistan. Ehsaas Amdan, Nashonuma, Undergraduate Scholarships, and emergency relief.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/welfare/ehsaas-program-guide',
  },
};

export default function Page() {
  const article = ARTICLES['ehsaas-program-guide'];
  return <ArticleLayout article={article} />;
}

