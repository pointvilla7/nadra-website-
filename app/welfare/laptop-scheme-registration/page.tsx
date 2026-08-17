import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PM & CM Laptop Scheme Registration 2026: Student Online Portal',
  description: 'Apply for PM Youth Laptop Scheme and CM Punjab Free Laptop Scheme 2026. Eligibility criteria for university & college students, merit lists, and HEC portal.',
  openGraph: {
    title: 'PM & CM Laptop Scheme Registration 2026: Student Online Portal',
    description: 'Apply for PM Youth Laptop Scheme and CM Punjab Free Laptop Scheme 2026. Eligibility criteria for university & college students, merit lists, and HEC portal.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/welfare/laptop-scheme-registration',
  },
};

export default function Page() {
  const article = ARTICLES['laptop-scheme-registration'];
  return <ArticleLayout article={article} />;
}

