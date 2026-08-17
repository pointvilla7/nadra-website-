import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISP Registration Guide 2026: Dynamic NSER Survey & Office Process',
  description: 'Learn how to register for Benazir Income Support Programme (BISP) via dynamic NSER survey at Tehsil offices. Required documents, PMT calculation, and registration steps.',
  openGraph: {
    title: 'BISP Registration Guide 2026: Dynamic NSER Survey & Office Process',
    description: 'Learn how to register for Benazir Income Support Programme (BISP) via dynamic NSER survey at Tehsil offices. Required documents, PMT calculation, and registration steps.',
    url: 'https://pakistaninfohub.com/welfare/bisp-how-to-register',
  },
};

export default function Page() {
  const article = ARTICLES['bisp-how-to-register'];
  return <ArticleLayout article={article} />;
}
