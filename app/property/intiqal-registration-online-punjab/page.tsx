import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Intiqal Registration Online Punjab 2026: PLRA Land Mutation & One-Counter Guide",
  description: "Register property Intiqal online in Punjab via PLRA (punjab-zameen.gov.pk). New PLRA-FBR One-Counter system, inheritance stamp duty exemption, fees & ARC token.",
  openGraph: {
    title: "Intiqal Registration Online Punjab 2026: PLRA Land Mutation & One-Counter Guide",
    description: "Register property Intiqal online in Punjab via PLRA (punjab-zameen.gov.pk). New PLRA-FBR One-Counter system, inheritance stamp duty exemption, fees & ARC token.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/intiqal-registration-online-punjab',
  },
};

export default function Page() {
  const article = ARTICLES['intiqal-registration-online-punjab'];
  return <ArticleLayout article={article} />;
}
