import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NUST Entry Test (NET) Admission 2026: Exam Pattern, Merit & Dates',
  description: 'NUST Entry Test (NET-1, NET-2, NET-3, NET-4) admission process 2026. NET weightage (75%), Engineering/Computer Science syllabus, fees, and closing merit lists.',
  openGraph: {
    title: 'NUST Entry Test (NET) Admission 2026: Exam Pattern, Merit & Dates',
    description: 'NUST Entry Test (NET-1, NET-2, NET-3, NET-4) admission process 2026. NET weightage (75%), Engineering/Computer Science syllabus, fees, and closing merit lists.',
    url: 'https://pakistaninfohub.com/education/nust-admission-process',
  },
};

export default function Page() {
  const article = ARTICLES['nust-admission-process'];
  return <ArticleLayout article={article} />;
}
