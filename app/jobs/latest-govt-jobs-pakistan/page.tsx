import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Govt Jobs in Pakistan August 2026: Federal & Provincial Vacancies',
  description: 'Daily updated list of federal and provincial government job vacancies in Pakistan. Education department, Pakistan Army, Police, Health, Railways, and Banks.',
  openGraph: {
    title: 'Latest Govt Jobs in Pakistan August 2026: Federal & Provincial Vacancies',
    description: 'Daily updated list of federal and provincial government job vacancies in Pakistan. Education department, Pakistan Army, Police, Health, Railways, and Banks.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/jobs/latest-govt-jobs-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['latest-govt-jobs-pakistan'];
  return <ArticleLayout article={article} />;
}

