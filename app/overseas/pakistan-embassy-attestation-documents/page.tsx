import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakistan Embassy & MOFA Document Attestation Guidelines 2026',
  description: 'Complete guide for attesting educational degrees, marriage certificates, power of attorney, and birth certificates from Pakistan Embassies and MOFA online.',
  openGraph: {
    title: 'Pakistan Embassy & MOFA Document Attestation Guidelines 2026',
    description: 'Complete guide for attesting educational degrees, marriage certificates, power of attorney, and birth certificates from Pakistan Embassies and MOFA online.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/overseas/pakistan-embassy-attestation-documents',
  },
};

export default function Page() {
  const article = ARTICLES['pakistan-embassy-attestation-documents'];
  return <ArticleLayout article={article} />;
}
