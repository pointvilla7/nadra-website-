import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Intiqal Registration Online Punjab 2026 – PLRA Land Mutation",
  description: "Register property Intiqal (mutation) online in Punjab via PLRA (punjab-zameen.gov.pk). Check Arazi Record Center token fees, registry mutation, and inheritance Fard.",
  openGraph: {
    title: "Intiqal Registration Online Punjab 2026 – PLRA Land Mutation",
    description: "Register property Intiqal (mutation) online in Punjab via PLRA (punjab-zameen.gov.pk). Check Arazi Record Center token fees, registry mutation, and inheritance Fard.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/intiqal-registration-online-punjab',
  },
};

export default function Page() {
  const article = ARTICLES['intiqal-registration-online-punjab'];
  return <ArticleLayout article={article} />;
}
