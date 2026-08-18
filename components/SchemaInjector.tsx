'use client';

import React from 'react';

import { Article, FAQItem } from '@/lib/data/articles';
import { BreadcrumbItem } from './Breadcrumbs';
import { getAuthorForCategory } from '@/lib/data/authors';

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

  // Organization Schema (Sitewide Publisher Entity)
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
    sameAs: [
      'https://twitter.com/PakistanInfoHub',
      'https://www.facebook.com/PakistanInfoHub',
    ],
  });

  // WebSite Schema with SearchAction (Sitewide AI & search crawler discovery)
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

  // Article Schema & Author Person Schema for Guide pages
  if (article) {
    const authorData = getAuthorForCategory(article.categoryId);
    const parsedDate = article.lastVerified ? new Date(article.lastVerified) : new Date('2026-08-17');
    const isoDateModified = !isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : '2026-08-17T00:00:00+05:00';

    // Person Schema for Author (E-E-A-T)
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `https://pakistaninfohub.com/authors/${authorData.slug}#person`,
      name: authorData.name,
      jobTitle: authorData.role,
      description: authorData.bioEn,
      url: `https://pakistaninfohub.com/authors/${authorData.slug}`,
      worksFor: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://pakistaninfohub.com',
      },
    });

    // Article / Guide Schema
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
        '@type': 'Person',
        '@id': `https://pakistaninfohub.com/authors/${authorData.slug}#person`,
        name: authorData.name,
        url: `https://pakistaninfohub.com/authors/${authorData.slug}`,
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
        text: st.detailEn,
        url: `https://pakistaninfohub.com${article.fullPath}#step-${st.stepNumber}`,
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
          item: b.url
            ? (b.url.startsWith('http') ? b.url : `https://pakistaninfohub.com${b.url}`)
            : (article ? `https://pakistaninfohub.com${article.fullPath}` : undefined),
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
