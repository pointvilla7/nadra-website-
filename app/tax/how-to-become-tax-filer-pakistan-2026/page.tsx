import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Become a Tax Filer in Pakistan (2026 Iris Complete Guide)',
  description: 'Learn how to become a tax filer in Pakistan 2026. Step-by-step FBR Iris registration, filing annual income tax return, wealth statement, and ATL activation.',
  openGraph: {
    title: 'How to Become a Tax Filer in Pakistan (2026 Iris Complete Guide)',
    description: 'Learn how to become a tax filer in Pakistan 2026. Step-by-step FBR Iris registration, filing annual income tax return, wealth statement, and ATL activation.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/tax/how-to-become-tax-filer-pakistan-2026',
  },
};

export default function Page() {
  const article = ARTICLES['how-to-become-tax-filer-pakistan-2026'];
  return <ArticleLayout article={article} />;
}
