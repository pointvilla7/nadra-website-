import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pakistan Passport Office Directory 2026: Contacts & Addresses",
  description: "Find addresses, phone numbers, and helpline of Regional Passport Offices in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad.",
  openGraph: {
    title: "Pakistan Passport Office Directory 2026: Contacts & Addresses",
    description: "Find addresses, phone numbers, and helpline of Regional Passport Offices in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/office-contact-directory',
  },
};

export default function Page() {
  const article = ARTICLES['office-contact-directory'];
  return <ArticleLayout article={article} />;
}

