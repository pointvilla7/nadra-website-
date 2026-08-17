'use client';

import React from 'react';

import { Article, FAQItem } from '@/lib/data/articles';
import { BreadcrumbItem } from './Breadcrumbs';

interface SchemaInjectorProps {
  article?: Article;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  siteSearch?: boolean;
  isHomepage?: boolean;
  categoryName?: string;
  categoryArticles?: Article[];
  customSchema?: any;
}

export const SchemaInjector: React.FC<SchemaInjectorProps> = ({
  article,
  breadcrumbs,
  faqs,
  siteSearch = false,
  isHomepage = false,
  categoryName,
  categoryArticles,
  customSchema,
}) => {
  const schemas: any[] = [];

  if (customSchema) {
    schemas.push(customSchema);
  }

  // Organization Schema (Sitewide & Homepage)
  if (isHomepage || siteSearch) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pakistan Info Hub',
      url: 'https://pakistaninfohub.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pakistaninfohub.com/icon.png',
      },
      description: 'Verified civic and public services information directory for Pakistan.',
    });
  }

  // WebSite Schema with SearchAction
  if (siteSearch || isHomepage) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Pakistan Info Hub',
      url: 'https://pakistaninfohub.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://pakistaninfohub.com/tracker?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    });
  }

  // CollectionPage / ItemList Schema for Category pages
  if (categoryName && categoryArticles && categoryArticles.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${categoryName} Verified Guides & Services 2026`,
      url: `https://pakistaninfohub.com/${categoryArticles[0]?.categoryId || ''}`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: categoryArticles.map((art, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: art.titleEn,
          url: `https://pakistaninfohub.com${art.fullPath}`,
        })),
      },
    });
  }

  // Article Schema for Guide pages
  if (article) {
    const isoDateModified = article.lastVerified
      ? new Date(article.lastVerified).toISOString()
      : '2026-08-16T08:00:00+05:00';

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.titleEn,
      description: article.metaDescriptionEn,
      datePublished: '2026-01-01T08:00:00+05:00',
      dateModified: isoDateModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://pakistaninfohub.com${article.fullPath}`,
      },
      author: {
        '@type': 'Organization',
        name: article.author?.name || 'Pakistan Info Hub Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://pakistaninfohub.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pakistaninfohub.com/icon.png',
        },
      },
    });
  }

  // FAQPage Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.questionEn,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answerEn,
        },
      })),
    });
  }

  // HowTo Schema Stacking for Step-by-Step Guides
  if (article && article.steps && article.steps.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: article.titleEn,
      description: article.metaDescriptionEn,
      totalTime: 'PT15M',
      step: article.steps.map((st) => ({
        '@type': 'HowToStep',
        position: st.stepNumber,
        name: st.titleEn,
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: st.detailEn,
          },
        ],
      })),
    });
  }

  // BreadcrumbList Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://pakistaninfohub.com',
        },
        ...breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: b.nameEn,
          item: b.url ? `https://pakistaninfohub.com${b.url}` : undefined,
        })),
      ],
    });
  }

  if (schemas.length === 0) return null;

  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
};
