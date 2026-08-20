import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Divorce Registration in Pakistan – Talaq & Khula Certificate',
  description: 'Legal process for obtaining a computerized Divorce Certificate (Talaq / Khula) from Union Council in Pakistan under Section 7 of Muslim Family Laws Ordinance.',
  openGraph: {
    title: 'Divorce Registration in Pakistan – Talaq & Khula Certificate',
    description: 'Legal process for obtaining a computerized Divorce Certificate (Talaq / Khula) from Union Council in Pakistan under Section 7 of Muslim Family Laws Ordinance.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/family-registration/divorce-registration-pakistan-online',
  },
};

export default function Page() {
  const article = ARTICLES['divorce-registration-pakistan-online'];
  return <ArticleLayout article={article} />;
}
