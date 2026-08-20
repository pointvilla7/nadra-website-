import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PSEB Freelancer & IT Company Registration for 100% Tax Relief',
  description: 'Register with Pakistan Software Export Board (PSEB) to enjoy 0.25% reduced export tax, subsidized foreign office space, commercial forex accounts, and visa facilitation.',
  openGraph: {
    title: 'PSEB Freelancer & IT Company Registration for 100% Tax Relief',
    description: 'Register with Pakistan Software Export Board (PSEB) to enjoy 0.25% reduced export tax, subsidized foreign office space, commercial forex accounts, and visa facilitation.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/pseb-freelancer-it-company-registration',
  },
};

export default function Page() {
  const article = ARTICLES['pseb-freelancer-it-company-registration'];
  return <ArticleLayout article={article} />;
}
