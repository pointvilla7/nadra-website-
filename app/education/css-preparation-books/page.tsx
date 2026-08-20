import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSS Exam Preparation Books & Syllabus 2026: FPSC Recommended List',
  description: 'Federal Public Service Commission (FPSC) CSS exam recommended book list 2026 for compulsory and optional subjects. MPT screening test guidelines and age limits.',
  openGraph: {
    title: 'CSS Exam Preparation Books & Syllabus 2026: FPSC Recommended List',
    description: 'Federal Public Service Commission (FPSC) CSS exam recommended book list 2026 for compulsory and optional subjects. MPT screening test guidelines and age limits.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/css-preparation-books',
  },
};

export default function Page() {
  const article = ARTICLES['css-preparation-books'];
  return <ArticleLayout article={article} />;
}

