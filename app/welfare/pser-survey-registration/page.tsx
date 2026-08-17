import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PSER Survey Registration Punjab 2026: Portal Guide & Status Check',
  description: 'Complete guide to Punjab Socio-Economic Registry (PSER) survey registration. Register online at pser.punjab.gov.pk for CM targeted subsidy schemes.',
  openGraph: {
    title: 'PSER Survey Registration Punjab 2026: Portal Guide & Status Check',
    description: 'Complete guide to Punjab Socio-Economic Registry (PSER) survey registration. Register online at pser.punjab.gov.pk for CM targeted subsidy schemes.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/welfare/pser-survey-registration',
  },
};

export default function Page() {
  const article = ARTICLES['pser-survey-registration'];
  return <ArticleLayout article={article} />;
}

