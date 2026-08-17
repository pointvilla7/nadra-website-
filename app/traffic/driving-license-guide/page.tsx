import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakistan Driving License Guide 2026: DLIMS Online Apply & Renewal',
  description: 'How to apply for Learner Permit and International Driving License online via DLIMS Punjab (dlims.punjab.gov.pk) or Sindh Police. Fees, test rules, and electronic DL download.',
  openGraph: {
    title: 'Pakistan Driving License Guide 2026: DLIMS Online Apply & Renewal',
    description: 'How to apply for Learner Permit and International Driving License online via DLIMS Punjab (dlims.punjab.gov.pk) or Sindh Police. Fees, test rules, and electronic DL download.',
    url: 'https://pakistaninfohub.com/traffic/driving-license-guide',
  },
};

export default function Page() {
  const article = ARTICLES['driving-license-guide'];
  return <ArticleLayout article={article} />;
}
