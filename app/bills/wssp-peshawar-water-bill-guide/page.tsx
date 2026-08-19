import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WSSP Peshawar Water Bill Guide 2026: Tariff Slabs, Payment Points & 1337 Helpline",
  description: "Official guide for WSSP (Water and Sanitation Services Peshawar). Consumer billing procedures, meter tariffs, payment points at Bank of Khyber, and 1337 helpline.",
  openGraph: {
    title: "WSSP Peshawar Water Bill Guide 2026: Tariff Slabs, Payment Points & 1337 Helpline",
    description: "Official guide for WSSP (Water and Sanitation Services Peshawar). Consumer billing procedures, meter tariffs, payment points at Bank of Khyber, and 1337 helpline.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/wssp-peshawar-water-bill-guide',
  },
};

export default function Page() {
  const article = ARTICLES['wssp-peshawar-water-bill-guide'];
  return <ArticleLayout article={article} />;
}
