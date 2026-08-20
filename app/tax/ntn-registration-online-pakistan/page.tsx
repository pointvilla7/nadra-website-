import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NTN Registration Online Pakistan 2026 – FBR Iris Step-by-Step',
  description: 'Register National Tax Number (NTN) online in Pakistan for salaried, business, and freelancers via FBR Iris 2.0 (iris.fbr.gov.pk) in 15 minutes with zero fee.',
  openGraph: {
    title: 'NTN Registration Online Pakistan 2026 – FBR Iris Step-by-Step',
    description: 'Register National Tax Number (NTN) online in Pakistan for salaried, business, and freelancers via FBR Iris 2.0 (iris.fbr.gov.pk) in 15 minutes with zero fee.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/tax/ntn-registration-online-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['ntn-registration-online-pakistan'];
  return <ArticleLayout article={article} />;
}
