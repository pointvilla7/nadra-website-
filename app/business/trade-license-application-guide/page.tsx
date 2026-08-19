import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade License Application Guide – Municipal Corporation Rules',
  description: 'Apply for a commercial Municipal Trade License in Lahore (MCL), Karachi (KMC), and Islamabad (MCI). Learn annual professional tax and shop registration fees.',
  openGraph: {
    title: 'Trade License Application Guide – Municipal Corporation Rules',
    description: 'Apply for a commercial Municipal Trade License in Lahore (MCL), Karachi (KMC), and Islamabad (MCI). Learn annual professional tax and shop registration fees.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/business/trade-license-application-guide',
  },
};

export default function Page() {
  const article = ARTICLES['trade-license-application-guide'];
  return <ArticleLayout article={article} />;
}
