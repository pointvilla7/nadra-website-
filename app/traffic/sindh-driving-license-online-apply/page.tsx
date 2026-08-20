import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sindh Driving License Online Guide 2026: DLIMS Karachi & Appointment",
  description: "Apply online for Sindh Driving License (Karachi, Hyderabad, Sukkur) via dlims.sindh.gov.pk. Learner permit fee, appointment booking, and license renewal.",
  openGraph: {
    title: "Sindh Driving License Online Guide 2026: DLIMS Karachi & Appointment",
    description: "Apply online for Sindh Driving License (Karachi, Hyderabad, Sukkur) via dlims.sindh.gov.pk. Learner permit fee, appointment booking, and license renewal.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/traffic/sindh-driving-license-online-apply',
  },
};

export default function Page() {
  const article = ARTICLES['sindh-driving-license-online-apply'];
  return <ArticleLayout article={article} />;
}

