import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Polio & Yellow Fever Travel Vaccination Certificate',
  description: 'Download international Polio Vaccination Certificate (OPV Card) with QR code online from NADRA NIMS portal (nims.nadra.gov.pk) for foreign travel.',
  openGraph: {
    title: 'Online Polio & Yellow Fever Travel Vaccination Certificate',
    description: 'Download international Polio Vaccination Certificate (OPV Card) with QR code online from NADRA NIMS portal (nims.nadra.gov.pk) for foreign travel.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/health/polio-yellow-fever-vaccine-certificate-travel',
  },
};

export default function Page() {
  const article = ARTICLES['polio-yellow-fever-vaccine-certificate-travel'];
  return <ArticleLayout article={article} />;
}
