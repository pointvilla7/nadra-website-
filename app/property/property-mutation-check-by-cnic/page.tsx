import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Mutation Check by CNIC – PLRA Arazi Record Center",
  description: "Check property mutation (Intiqal) status online in Pakistan by 13-digit CNIC. Verify digital land ownership, Khewat number, and plot dimensions across Punjab & Sindh.",
  openGraph: {
    title: "Property Mutation Check by CNIC – PLRA Arazi Record Center",
    description: "Check property mutation (Intiqal) status online in Pakistan by 13-digit CNIC. Verify digital land ownership, Khewat number, and plot dimensions across Punjab & Sindh.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/property-mutation-check-by-cnic',
  },
};

export default function Page() {
  const article = ARTICLES['property-mutation-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
