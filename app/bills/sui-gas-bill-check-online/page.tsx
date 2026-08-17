import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sui Gas Bill Check Online 2026: SNGPL & SSGC Duplicate Bill Portal',
  description: 'Check Sui Northern (SNGPL) and Sui Southern (SSGC) gas bills online by Consumer Number / Account ID. Free PDF duplicate bill viewer for Pakistan.',
  openGraph: {
    title: 'Sui Gas Bill Check Online 2026: SNGPL & SSGC Duplicate Bill Portal',
    description: 'Check Sui Northern (SNGPL) and Sui Southern (SSGC) gas bills online by Consumer Number / Account ID. Free PDF duplicate bill viewer for Pakistan.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/sui-gas-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['sui-gas-bill-check-online'];
  return <ArticleLayout article={article} />;
}

