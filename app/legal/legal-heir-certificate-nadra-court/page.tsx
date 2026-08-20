import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Heir Certificate (Wirasat Nama) – NADRA vs Civil Court',
  description: 'Learn how to obtain a Legal Heir Declaration (Wirasat Nama) in Pakistan. Understand the difference between a NADRA Succession Certificate and a Civil Court Declaration.',
  openGraph: {
    title: 'Legal Heir Certificate (Wirasat Nama) – NADRA vs Civil Court',
    description: 'Learn how to obtain a Legal Heir Declaration (Wirasat Nama) in Pakistan. Understand the difference between a NADRA Succession Certificate and a Civil Court Declaration.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/legal-heir-certificate-nadra-court',
  },
};

export default function Page() {
  const article = ARTICLES['legal-heir-certificate-nadra-court'];
  return <ArticleLayout article={article} />;
}
