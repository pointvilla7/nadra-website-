import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Umrah Visa Apply from Pakistan Steps – Nusuk Portal Complete Guide",
  description: "Apply for Saudi tourist & Umrah e-visa directly from Pakistan via the official Nusuk portal (nusuk.sa). 90-day multiple entry visa fees, hotel booking, and Rawdah permits.",
  openGraph: {
    title: "Umrah Visa Apply from Pakistan Steps – Nusuk Portal Complete Guide",
    description: "Apply for Saudi tourist & Umrah e-visa directly from Pakistan via the official Nusuk portal (nusuk.sa). 90-day multiple entry visa fees, hotel booking, and Rawdah permits.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/umrah-visa-apply-from-pakistan-steps',
  },
};

export default function Page() {
  const article = ARTICLES['umrah-visa-apply-from-pakistan-steps'];
  return <ArticleLayout article={article} />;
}
