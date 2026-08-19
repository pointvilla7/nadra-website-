import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patwari Record Online Check – Computerized Fard Malkiat Download',
  description: 'Download computerized Fard Malkiat (فرد ملکیت) online in Pakistan for property sale, electricity connection, and court bail via Arazi Record Center (ARC).',
  openGraph: {
    title: 'Patwari Record Online Check – Computerized Fard Malkiat Download',
    description: 'Download computerized Fard Malkiat (فرد ملکیت) online in Pakistan for property sale, electricity connection, and court bail via Arazi Record Center (ARC).',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/property/patwari-record-online-check',
  },
};

export default function Page() {
  const article = ARTICLES['patwari-record-online-check'];
  return <ArticleLayout article={article} />;
}
