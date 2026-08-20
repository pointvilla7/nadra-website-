import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benazir Taleemi Wazaif 2026: Education Stipend Amounts & Registration',
  description: 'Complete guide to Benazir Taleemi Wazaif for primary, secondary, and higher secondary students. Check quarterly stipend amounts, 75% attendance rule, and bonus grants.',
  openGraph: {
    title: 'Benazir Taleemi Wazaif 2026: Education Stipend Amounts & Registration',
    description: 'Complete guide to Benazir Taleemi Wazaif for primary, secondary, and higher secondary students. Check quarterly stipend amounts, 75% attendance rule, and bonus grants.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/taleemi-wazaif',
  },
};

export default function Page() {
  const article = ARTICLES['taleemi-wazaif'];
  return <ArticleLayout article={article} />;
}

