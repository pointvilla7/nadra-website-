import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ramzan Relief Package 2026: Free Rashan Subsidy & Utility Stores Discount',
  description: 'Government Ramzan Relief Package 2026 guidelines: Free Rashan hamper delivery, Utility Stores subsidies on flour (Atta), sugar, ghee, and 8070 SMS check.',
  openGraph: {
    title: 'Ramzan Relief Package 2026: Free Rashan Subsidy & Utility Stores Discount',
    description: 'Government Ramzan Relief Package 2026 guidelines: Free Rashan hamper delivery, Utility Stores subsidies on flour (Atta), sugar, ghee, and 8070 SMS check.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/welfare/ramzan-relief-package',
  },
};

export default function Page() {
  const article = ARTICLES['ramzan-relief-package'];
  return <ArticleLayout article={article} />;
}

