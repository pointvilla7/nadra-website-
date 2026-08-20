import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Police Character Certificate (PCC) Apply Online for Visas",
  description: "Apply for an official Police Character Certificate (Clearance Certificate) in Pakistan via Police Khidmat Markaz (PKM). Required for foreign student and work visas.",
  openGraph: {
    title: "Police Character Certificate (PCC) Apply Online for Visas",
    description: "Apply for an official Police Character Certificate (Clearance Certificate) in Pakistan via Police Khidmat Markaz (PKM). Required for foreign student and work visas.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/police-character-certificate-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['police-character-certificate-apply-online'];
  return <ArticleLayout article={article} />;
}
