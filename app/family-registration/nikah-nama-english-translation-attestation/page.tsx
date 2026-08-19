import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nikah Nama English Translation & MOFA Attestation Procedure',
  description: 'Get your Urdu Nikah Nama officially translated into English, notarized, and attested by the Ministry of Foreign Affairs (MOFA) for foreign spouse visa applications.',
  openGraph: {
    title: 'Nikah Nama English Translation & MOFA Attestation Procedure',
    description: 'Get your Urdu Nikah Nama officially translated into English, notarized, and attested by the Ministry of Foreign Affairs (MOFA) for foreign spouse visa applications.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/family-registration/nikah-nama-english-translation-attestation',
  },
};

export default function Page() {
  const article = ARTICLES['nikah-nama-english-translation-attestation'];
  return <ArticleLayout article={article} />;
}
