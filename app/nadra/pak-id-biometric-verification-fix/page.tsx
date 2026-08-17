import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pak-ID Mobile App Fingerprint Biometric Troubleshooting Guide',
  description: 'Fix Pak-ID app camera fingerprint scanning errors, glare issues, lighting alignment, and biometric verification failure on Android & iOS.',
  openGraph: {
    title: 'Pak-ID Mobile App Fingerprint Biometric Troubleshooting Guide',
    description: 'Fix Pak-ID app camera fingerprint scanning errors, glare issues, lighting alignment, and biometric verification failure on Android & iOS.',
    url: 'https://pakistaninfohub.com/nadra/pak-id-biometric-verification-fix',
  },
};

export default function Page() {
  const article = ARTICLES['pak-id-biometric-verification-fix'];
  return <ArticleLayout article={article} />;
}
