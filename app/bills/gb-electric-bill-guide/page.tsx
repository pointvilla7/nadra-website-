import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gilgit-Baltistan Electricity Bill Guide 2026: Water & Power Dept GB Billing & Contacts",
  description: "Official guide for Gilgit-Baltistan electricity consumers: Water & Power Department GB billing procedures, Gilgit, Skardu, Hunza, Diamer, tariffs, and helplines.",
  openGraph: {
    title: "Gilgit-Baltistan Electricity Bill Guide 2026: Water & Power Dept GB Billing & Contacts",
    description: "Official guide for Gilgit-Baltistan electricity consumers: Water & Power Department GB billing procedures, Gilgit, Skardu, Hunza, Diamer, tariffs, and helplines.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/gb-electric-bill-guide',
  },
};

export default function Page() {
  const article = ARTICLES['gb-electric-bill-guide'];
  return <ArticleLayout article={article} />;
}
