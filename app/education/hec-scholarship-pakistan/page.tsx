import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEC Scholarships 2026 in Pakistan & Abroad: Ehsaas, USAID & Foreign Schemes',
  description: 'Apply for HEC (Higher Education Commission) undergraduate and postgraduate scholarships in Pakistan. Ehsaas Undergraduate, Commonwealth, China, and Hungary scholarship guides.',
  openGraph: {
    title: 'HEC Scholarships 2026 in Pakistan & Abroad: Ehsaas, USAID & Foreign Schemes',
    description: 'Apply for HEC (Higher Education Commission) undergraduate and postgraduate scholarships in Pakistan. Ehsaas Undergraduate, Commonwealth, China, and Hungary scholarship guides.',
    url: 'https://pakistaninfohub.com/education/hec-scholarship-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['hec-scholarship-pakistan'];
  return <ArticleLayout article={article} />;
}
