import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NICOP Renewal from Abroad 2026 – Pak-ID App & Embassy Guide',
  description: 'Renew your expired NADRA NICOP online from USA, UK, Canada, Saudi Arabia & UAE via the Pak-ID Mobile App or web portal. Get doorstep home delivery worldwide.',
  openGraph: {
    title: 'NICOP Renewal from Abroad 2026 – Pak-ID App & Embassy Guide',
    description: 'Renew your expired NADRA NICOP online from USA, UK, Canada, Saudi Arabia & UAE via the Pak-ID Mobile App or web portal. Get doorstep home delivery worldwide.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/overseas/nicop-renewal-from-abroad',
  },
};

export default function Page() {
  const article = ARTICLES['nicop-renewal-from-abroad'];
  return <ArticleLayout article={article} />;
}
