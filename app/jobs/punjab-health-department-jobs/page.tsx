import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Primary & Secondary Healthcare Punjab Jobs 2026: Doctors & Nurses',
  description: 'Primary & Secondary Healthcare Department Punjab jobs 2026. Online apply at pshealthpunjab.gop.pk, Medical Officer (BPS-17), Charge Nurse (BPS-16), and Allied Staff.',
  openGraph: {
    title: 'Primary & Secondary Healthcare Punjab Jobs 2026: Doctors & Nurses',
    description: 'Primary & Secondary Healthcare Department Punjab jobs 2026. Online apply at pshealthpunjab.gop.pk, Medical Officer (BPS-17), Charge Nurse (BPS-16), and Allied Staff.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/jobs/punjab-health-department-jobs',
  },
};

export default function Page() {
  const article = ARTICLES['punjab-health-department-jobs'];
  return <ArticleLayout article={article} />;
}

