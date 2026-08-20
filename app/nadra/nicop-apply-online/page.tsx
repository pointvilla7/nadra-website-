import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NADRA NICOP Apply Online 2026: Overseas Pakistani Card Fees & Process",
  description: "Complete online NICOP application guide for overseas Pakistanis and dual nationals. Verified Zone A & Zone B country fee tables, online Pak-ID steps, and visa-free travel benefits.",
  openGraph: {
    title: "NADRA NICOP Apply Online 2026: Overseas Pakistani Card Fees & Process",
    description: "Complete online NICOP application guide for overseas Pakistanis and dual nationals. Verified Zone A & Zone B country fee tables, online Pak-ID steps, and visa-free travel benefits.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/nicop-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['nicop-apply-online'];
  return <ArticleLayout article={article} />;
}

