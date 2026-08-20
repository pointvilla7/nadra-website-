import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BISE Rawalpindi Board Result 2026: 9th, 10th, 11th & 12th Class",
  description: "BISE Rawalpindi matric (SSC) and intermediate (HSSC) result check online by roll number and SMS 800296. Official gazette and mark sheet.",
  openGraph: {
    title: "BISE Rawalpindi Board Result 2026: 9th, 10th, 11th & 12th Class",
    description: "BISE Rawalpindi matric (SSC) and intermediate (HSSC) result check online by roll number and SMS 800296. Official gazette and mark sheet.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/bise-rawalpindi-result-2026',
  },
};

export default function Page() {
  const article = ARTICLES['bise-rawalpindi-result-2026'];
  return <ArticleLayout article={article} />;
}

