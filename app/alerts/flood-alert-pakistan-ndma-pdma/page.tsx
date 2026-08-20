import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flood Alert Pakistan Today – NDMA & PDMA Live River Inflow Updates',
  description: 'Live flood warnings and river discharge monitoring for Indus, Chenab, Jhelum, Ravi, and Sutlej rivers. Tarbela and Mangla dam water levels and emergency flood advisories.',
  openGraph: {
    title: 'Flood Alert Pakistan Today – NDMA & PDMA Live River Inflow Updates',
    description: 'Live flood warnings and river discharge monitoring for Indus, Chenab, Jhelum, Ravi, and Sutlej rivers. Tarbela and Mangla dam water levels and emergency flood advisories.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/alerts/flood-alert-pakistan-ndma-pdma',
  },
};

export default function Page() {
  const article = ARTICLES['flood-alert-pakistan-ndma-pdma'];
  return <ArticleLayout article={article} />;
}
