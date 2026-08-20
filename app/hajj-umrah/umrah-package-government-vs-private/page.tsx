import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umrah Package Government vs Private – Cost & Facility Comparison',
  description: 'Compare economy, 4-star, and 5-star Umrah packages in Pakistan for 2026. Differences in flight tickets, hotel distances from Haram, and group transport costs.',
  openGraph: {
    title: 'Umrah Package Government vs Private – Cost & Facility Comparison',
    description: 'Compare economy, 4-star, and 5-star Umrah packages in Pakistan for 2026. Differences in flight tickets, hotel distances from Haram, and group transport costs.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/umrah-package-government-vs-private',
  },
};

export default function Page() {
  const article = ARTICLES['umrah-package-government-vs-private'];
  return <ArticleLayout article={article} />;
}
