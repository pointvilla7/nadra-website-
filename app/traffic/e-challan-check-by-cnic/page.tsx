import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Challan Check by CNIC 2026: Search Traffic Violations by Owner ID',
  description: 'Search pending traffic e-challans registered against your CNIC number in Punjab, Karachi, and Islamabad. Print duplicate challan receipts online.',
  openGraph: {
    title: 'E-Challan Check by CNIC 2026: Search Traffic Violations by Owner ID',
    description: 'Search pending traffic e-challans registered against your CNIC number in Punjab, Karachi, and Islamabad. Print duplicate challan receipts online.',
    url: 'https://pakistaninfohub.com/traffic/e-challan-check-by-cnic',
  },
};

export default function Page() {
  const article = ARTICLES['e-challan-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
