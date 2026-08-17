import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Punjab University (PU) Admission 2026: BS & Master Programs, Merit Formula',
  description: 'University of the Punjab Lahore admission guide 2026. Online admission portal (admissions.pu.edu.pk), PU entry test registration, fee structure, and merit calculator.',
  openGraph: {
    title: 'Punjab University (PU) Admission 2026: BS & Master Programs, Merit Formula',
    description: 'University of the Punjab Lahore admission guide 2026. Online admission portal (admissions.pu.edu.pk), PU entry test registration, fee structure, and merit calculator.',
    url: 'https://pakistaninfohub.com/education/punjab-university-admission-2026',
  },
};

export default function Page() {
  const article = ARTICLES['punjab-university-admission-2026'];
  return <ArticleLayout article={article} />;
}
