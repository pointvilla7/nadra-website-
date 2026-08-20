import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Register Small Business in Pakistan – SME & SMEDA Guide',
  description: 'Step-by-step guide for small businesses, startups, and SMEs to register in Pakistan with SMEDA, FBR, and provincial revenue authorities for subsidized grants.',
  openGraph: {
    title: 'How to Register Small Business in Pakistan – SME & SMEDA Guide',
    description: 'Step-by-step guide for small businesses, startups, and SMEs to register in Pakistan with SMEDA, FBR, and provincial revenue authorities for subsidized grants.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/how-to-register-small-business-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['how-to-register-small-business-pakistan'];
  return <ArticleLayout article={article} />;
}
