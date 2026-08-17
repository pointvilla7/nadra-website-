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
    url: 'https://pakistaninfohub.com/jobs/latest-govt-jobs-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['latest-govt-jobs-pakistan'];
  return <ArticleLayout article={article} />;
}
