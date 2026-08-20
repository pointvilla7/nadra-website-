import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Overseas Pakistanis Foundation (OPF) Schemes & Benefits Guide",
  description: "Explore Overseas Pakistanis Foundation (OPF) welfare schemes: housing society quotas, OPF school discounts, financial aid for deceased workers, and duty-free allowances.",
  openGraph: {
    title: "Overseas Pakistanis Foundation (OPF) Schemes & Benefits Guide",
    description: "Explore Overseas Pakistanis Foundation (OPF) welfare schemes: housing society quotas, OPF school discounts, financial aid for deceased workers, and duty-free allowances.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/overseas/overseas-pakistanis-foundation-opf-schemes',
  },
};

export default function Page() {
  const article = ARTICLES['overseas-pakistanis-foundation-opf-schemes'];
  return <ArticleLayout article={article} />;
}
