import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Power of Attorney Attestation for Overseas Pakistanis',
  description: 'Execute and attest a digital Power of Attorney (PoA) from abroad without visiting an embassy via NADRA\'s online PoA portal (poa.nadra.gov.pk) with video interview.',
  openGraph: {
    title: 'Digital Power of Attorney Attestation for Overseas Pakistanis',
    description: 'Execute and attest a digital Power of Attorney (PoA) from abroad without visiting an embassy via NADRA\'s online PoA portal (poa.nadra.gov.pk) with video interview.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/overseas/power-of-attorney-attestation-overseas',
  },
};

export default function Page() {
  const article = ARTICLES['power-of-attorney-attestation-overseas'];
  return <ArticleLayout article={article} />;
}
