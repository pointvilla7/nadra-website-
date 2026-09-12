import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pakistan Multi-Year Hajj Policy 2027–2030: Pre-Registration Portal & Waiting List",
  description: "Federal Cabinet approved Hajj Policy 2027-2030: Register once via MORA Hajj Management System & Pak Hajj App for any year (2027-2030). CNIC-only pre-registration, zero fee.",
  openGraph: {
    title: "Pakistan Multi-Year Hajj Policy 2027–2030: Pre-Registration Portal & Waiting List",
    description: "Federal Cabinet approved Hajj Policy 2027-2030: Register once via MORA Hajj Management System & Pak Hajj App for any year (2027-2030). CNIC-only pre-registration, zero fee.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-registration-portal-pakistan-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-registration-portal-pakistan-2026',
  },
};

export default function Page() {
  const article = ARTICLES['hajj-registration-portal-pakistan-2026'];
  return <ArticleLayout article={article} />;
}
