import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Apply for Sehat Sahulat Card – Family Registration Guide',
  description: 'Learn how to register your family with NADRA to activate Sehat Card benefits. Link newborn children via B-Form and update marital status for universal coverage.',
  openGraph: {
    title: 'How to Apply for Sehat Sahulat Card – Family Registration Guide',
    description: 'Learn how to register your family with NADRA to activate Sehat Card benefits. Link newborn children via B-Form and update marital status for universal coverage.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/health/how-to-apply-for-sehat-sahulat-card',
  },
};

export default function Page() {
  const article = ARTICLES['how-to-apply-for-sehat-sahulat-card'];
  return <ArticleLayout article={article} />;
}
