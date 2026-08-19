import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Union Council Character Certificate Application Procedure',
  description: 'Obtain a certified Character Certificate from your local Union Council or Nazim / Councilor in Pakistan for college admissions and private employment.',
  openGraph: {
    title: 'Union Council Character Certificate Application Procedure',
    description: 'Obtain a certified Character Certificate from your local Union Council or Nazim / Councilor in Pakistan for college admissions and private employment.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/certificates/character-certificate-union-council',
  },
};

export default function Page() {
  const article = ARTICLES['character-certificate-union-council'];
  return <ArticleLayout article={article} />;
}
