import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISE Lahore Board Result 2026 Online Check (Matric & Intermediate) | Pakistan Info Hub',
  description:
    'Check BISE Lahore Board Class 9th, 10th (Matric), 11th (1st Year), and 12th (2nd Year / FSc) annual exam results 2026 by Roll Number, Name, or SMS to 800291.',
  openGraph: {
    title: 'BISE Lahore Board Result 2026 Online Check (Matric & Intermediate)',
    description:
      'Check BISE Lahore Board Class 9th, 10th (Matric), 11th (1st Year), and 12th (2nd Year / FSc) annual exam results 2026 by Roll Number, Name, or SMS to 800291.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/bise-lahore-result-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/education/bise-lahore-result-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'BISE Lahore Result 2026',
          item: 'https://www.pakistaninfohub.com/education/bise-lahore-result-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'BISE Lahore Board Result 2026 Online Check (Matric & Intermediate)',
      description:
        'Official marksheet search and verification guide for BISE Lahore 9th, 10th, 11th, and 12th annual examinations.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-15',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/bise-lahore-result-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I check my BISE Lahore result by SMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Type your examination roll number and send an SMS to 800291 to receive your BISE Lahore total marks and passing status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I check BISE Lahore board result by name?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, full result gazettes are uploaded to the official BISE Lahore website (biselahore.com) where candidates can search by student or father name.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const article = ARTICLES['bise-lahore-result-2026'];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleLayout article={article} />
    </>
  );
}
