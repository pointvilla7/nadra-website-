import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KPK Excise Online Vehicle Verification & Token Tax Guide 2026',
  description: 'Online vehicle verification for Peshawar & Khyber Pakhtunkhwa vehicles at excise.kp.gov.pk. Zameen Zoya app, token tax payment, and smart card status.',
  openGraph: {
    title: 'KPK Excise Online Vehicle Verification & Token Tax Guide 2026',
    description: 'Online vehicle verification for Peshawar & Khyber Pakhtunkhwa vehicles at excise.kp.gov.pk. Zameen Zoya app, token tax payment, and smart card status.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/traffic/kpk-excise-vehicle-verification',
  },
};

export default function Page() {
  const article = ARTICLES['kpk-excise-vehicle-verification'];
  return <ArticleLayout article={article} />;
}

