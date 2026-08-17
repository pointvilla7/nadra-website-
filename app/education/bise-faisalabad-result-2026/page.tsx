import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISE Faisalabad Board Result 2026: 9th, 10th, 11th & 12th Class',
  description: 'BISE Faisalabad matric and FSc result check online by roll number and SMS 800299. Official gazette search for SSC & HSSC.',
  openGraph: {
    title: 'BISE Faisalabad Board Result 2026: 9th, 10th, 11th & 12th Class',
    description: 'BISE Faisalabad matric and FSc result check online by roll number and SMS 800299. Official gazette search for SSC & HSSC.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/education/bise-faisalabad-result-2026',
  },
};

export default function Page() {
  const article = ARTICLES['bise-faisalabad-result-2026'];
  return <ArticleLayout article={article} />;
}

