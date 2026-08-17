import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Pakistan BISE Board Results 2026: Check Matric & Inter Gazette Online',
  description: 'Unified result checker tool for all 25+ BISE educational boards in Pakistan. Check 9th, 10th (Matric), 11th, and 12th (Inter) annual exam results 2026 for Punjab, Sindh, KPK, Federal, and AJK.',
  openGraph: {
    title: 'All Pakistan BISE Board Results 2026: Check Matric & Inter Gazette Online',
    description: 'Unified result checker tool for all 25+ BISE educational boards in Pakistan. Check 9th, 10th (Matric), 11th, and 12th (Inter) annual exam results 2026 for Punjab, Sindh, KPK, Federal, and AJK.',
    url: 'https://pakistaninfohub.com/education/bise-result-check-2026',
  },
};

export default function Page() {
  const article = ARTICLES['bise-result-check-2026'];
  return <ArticleLayout article={article} />;
}
