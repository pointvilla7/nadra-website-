import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FBISE Federal Board Result 2026: SSC & HSSC Check Online',
  description: 'Check FBISE Federal Board Islamabad matric (SSC I & II) and FSc (HSSC I & II) result online by roll number, name, or SMS 5050.',
  openGraph: {
    title: 'FBISE Federal Board Result 2026: SSC & HSSC Check Online',
    description: 'Check FBISE Federal Board Islamabad matric (SSC I & II) and FSc (HSSC I & II) result online by roll number, name, or SMS 5050.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/fbise-federal-board-result-2026',
  },
};

export default function Page() {
  const article = ARTICLES['fbise-federal-board-result-2026'];
  return <ArticleLayout article={article} />;
}

