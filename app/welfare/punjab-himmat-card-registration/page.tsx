import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CM Punjab Himmat Card Scheme 2026: 10,500 PKR Quarterly Aid",
  description: "Himmat Card Scheme 2026 online registration at swd.punjab.gov.pk. PKR 10,500 quarterly financial assistance for non-working disabled individuals in Punjab.",
  openGraph: {
    title: "CM Punjab Himmat Card Scheme 2026: 10,500 PKR Quarterly Aid",
    description: "Himmat Card Scheme 2026 online registration at swd.punjab.gov.pk. PKR 10,500 quarterly financial assistance for non-working disabled individuals in Punjab.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/punjab-himmat-card-registration',
  },
};

export default function Page() {
  const article = ARTICLES['punjab-himmat-card-registration'];
  return <ArticleLayout article={article} />;
}

