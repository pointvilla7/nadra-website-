import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISP NSER Dynamic Survey Tehsil Centers & In-Person Registration',
  description: 'Find local BISP Tehsil Registration Desk locations for NSER dynamic survey updates. Required documents, counter timings, token system, and scam protection.',
  openGraph: {
    title: 'BISP NSER Dynamic Survey Tehsil Centers & In-Person Registration',
    description: 'Find local BISP Tehsil Registration Desk locations for NSER dynamic survey updates. Required documents, counter timings, token system, and scam protection.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/bisp-nser-survey-center-locations',
  },
};

export default function Page() {
  const article = ARTICLES['bisp-nser-survey-center-locations'];
  return <ArticleLayout article={article} />;
}

