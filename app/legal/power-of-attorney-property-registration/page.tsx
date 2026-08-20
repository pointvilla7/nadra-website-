import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Power of Attorney (Mukhtar Nama) Property Registration Rules",
  description: "Complete legal rules for executing General Power of Attorney (Mukhtar Nama Am) and Special Power of Attorney (Mukhtar Nama Khas) for property in Pakistan.",
  openGraph: {
    title: "Power of Attorney (Mukhtar Nama) Property Registration Rules",
    description: "Complete legal rules for executing General Power of Attorney (Mukhtar Nama Am) and Special Power of Attorney (Mukhtar Nama Khas) for property in Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/power-of-attorney-property-registration',
  },
};

export default function Page() {
  const article = ARTICLES['power-of-attorney-property-registration'];
  return <ArticleLayout article={article} />;
}
