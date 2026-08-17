import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISE Board Paper Rechecking & Recounting Procedure 2026',
  description: 'How to apply for BISE matric and FSc paper rechecking. Fee structure per subject (PKR 1,000–1,500), 15-day deadline, and online application form.',
  openGraph: {
    title: 'BISE Board Paper Rechecking & Recounting Procedure 2026',
    description: 'How to apply for BISE matric and FSc paper rechecking. Fee structure per subject (PKR 1,000–1,500), 15-day deadline, and online application form.',
    url: 'https://pakistaninfohub.com/education/bise-paper-rechecking-procedure',
  },
};

export default function Page() {
  const article = ARTICLES['bise-paper-rechecking-procedure'];
  return <ArticleLayout article={article} />;
}
