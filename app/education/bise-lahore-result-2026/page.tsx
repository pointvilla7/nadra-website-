import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISE Lahore Board Result 2026 Online Check (Matric & Intermediate)',
  description: 'Check BISE Lahore Board Class 9th, 10th (Matric), 11th (1st Year), and 12th (2nd Year / FSc) annual exam results 2026 by Roll Number, Name, or SMS to 800291.',
  openGraph: {
    title: 'BISE Lahore Board Result 2026 Online Check (Matric & Intermediate)',
    description: 'Check BISE Lahore Board Class 9th, 10th (Matric), 11th (1st Year), and 12th (2nd Year / FSc) annual exam results 2026 by Roll Number, Name, or SMS to 800291.',
    url: 'https://pakistaninfohub.com/education/bise-lahore-result-2026',
  },
};

export default function Page() {
  const article = ARTICLES['bise-lahore-result-2026'];
  return <ArticleLayout article={article} />;
}
