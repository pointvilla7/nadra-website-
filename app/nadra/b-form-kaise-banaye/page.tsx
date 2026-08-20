import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA B-Form (CRC) Registration Guide 2026: Documents & Fee',
  description: 'Complete guide to get a NADRA B-Form (Child Registration Certificate) in Pakistan. Union Council birth certificate prerequisites, official PKR 50 fee, documents, and center process.',
  openGraph: {
    title: 'NADRA B-Form (CRC) Registration Guide 2026: Documents & Fee',
    description: 'Complete guide to get a NADRA B-Form (Child Registration Certificate) in Pakistan. Union Council birth certificate prerequisites, official PKR 50 fee, documents, and center process.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/b-form-kaise-banaye',
  },
};

export default function Page() {
  const article = ARTICLES['b-form-kaise-banaye'];
  return <ArticleLayout article={article} />;
}

