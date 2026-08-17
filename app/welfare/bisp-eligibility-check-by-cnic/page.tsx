import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISP 8171 Eligibility Check by CNIC 2026: Online Web Portal & SMS Guide',
  description: 'Check your Benazir Income Support Programme (BISP) 8171 eligibility status online by CNIC. Step-by-step 8171 web portal walkthrough, PMT score guidelines, SMS 8171, and scam protection.',
  openGraph: {
    title: 'BISP 8171 Eligibility Check by CNIC 2026: Online Web Portal & SMS Guide',
    description: 'Check your Benazir Income Support Programme (BISP) 8171 eligibility status online by CNIC. Step-by-step 8171 web portal walkthrough, PMT score guidelines, SMS 8171, and scam protection.',
    url: 'https://pakistaninfohub.com/welfare/bisp-eligibility-check-by-cnic',
  },
};

export default function Page() {
  const article = ARTICLES['bisp-eligibility-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
