import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benazir Nashonuma Program 2026: PKR 2,500 Monthly Cash & Food Support',
  description: 'Benazir Nashonuma Program eligibility, registration at Tehsil Nashonuma Centers, PKR 2,000 (boy) / PKR 2,500 (girl) monthly stipend for pregnant mothers & infants.',
  openGraph: {
    title: 'Benazir Nashonuma Program 2026: PKR 2,500 Monthly Cash & Food Support',
    description: 'Benazir Nashonuma Program eligibility, registration at Tehsil Nashonuma Centers, PKR 2,000 (boy) / PKR 2,500 (girl) monthly stipend for pregnant mothers & infants.',
    url: 'https://pakistaninfohub.com/welfare/benazir-nashonuma-program-guide',
  },
};

export default function Page() {
  const article = ARTICLES['benazir-nashonuma-program-guide'];
  return <ArticleLayout article={article} />;
}
