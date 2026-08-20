import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Check FIR Status Online – Police Investigation Tracker",
  description: "Track police FIR status online in Pakistan by FIR number, district, and police station via the Police Record Management System (PRMS) and 1787 SMS portal.",
  openGraph: {
    title: "How to Check FIR Status Online – Police Investigation Tracker",
    description: "Track police FIR status online in Pakistan by FIR number, district, and police station via the Police Record Management System (PRMS) and 1787 SMS portal.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/how-to-check-fir-status-online',
  },
};

export default function Page() {
  const article = ARTICLES['how-to-check-fir-status-online'];
  return <ArticleLayout article={article} />;
}
