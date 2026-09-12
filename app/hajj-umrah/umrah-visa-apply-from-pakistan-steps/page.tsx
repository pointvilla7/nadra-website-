import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Umrah Visa Apply from Pakistan 2026: 30-Day Entry Rule, Nusuk & Steps",
  description: "Apply for Umrah visa from Pakistan for 1448 AH: Note the new 30-day entry validity window (shortened from 90 days), Nusuk platform requirements, and Rawdah permits.",
  openGraph: {
    title: "Umrah Visa Apply from Pakistan 2026: 30-Day Entry Rule, Nusuk & Steps",
    description: "Apply for Umrah visa from Pakistan for 1448 AH: Note the new 30-day entry validity window (shortened from 90 days), Nusuk platform requirements, and Rawdah permits.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/umrah-visa-apply-from-pakistan-steps',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/hajj-umrah/umrah-visa-apply-from-pakistan-steps',
  },
};

export default function Page() {
  const article = ARTICLES['umrah-visa-apply-from-pakistan-steps'];
  return <ArticleLayout article={article} />;
}
