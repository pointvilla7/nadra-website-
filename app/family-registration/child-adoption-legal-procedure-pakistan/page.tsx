import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Child Adoption Procedure & Guardian Certificate in Pakistan',
  description: 'Complete legal process for child adoption in Pakistan under Guardians and Wards Act 1890. Guardian Court decree, NADRA B-Form / FRC update, and child welfare trust rules.',
  openGraph: {
    title: 'Legal Child Adoption Procedure & Guardian Certificate in Pakistan',
    description: 'Complete legal process for child adoption in Pakistan under Guardians and Wards Act 1890. Guardian Court decree, NADRA B-Form / FRC update, and child welfare trust rules.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/family-registration/child-adoption-legal-procedure-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['child-adoption-legal-procedure-pakistan'];
  return <ArticleLayout article={article} />;
}
