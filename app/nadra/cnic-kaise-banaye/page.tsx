import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Apply for New NADRA CNIC in Pakistan (2026 Complete Guide)',
  description: 'Complete step-by-step guide to apply for a new NADRA Smart CNIC in Pakistan. Verified 2026 fee table, mandatory document checklist, biometric attestation rules, Pak-ID app, and tracking.',
  openGraph: {
    title: 'How to Apply for New NADRA CNIC in Pakistan (2026 Complete Guide)',
    description: 'Complete step-by-step guide to apply for a new NADRA Smart CNIC in Pakistan. Verified 2026 fee table, mandatory document checklist, biometric attestation rules, Pak-ID app, and tracking.',
    url: 'https://pakistaninfohub.com/nadra/cnic-kaise-banaye',
  },
};

export default function Page() {
  const article = ARTICLES['cnic-kaise-banaye'];
  return <ArticleLayout article={article} />;
}
