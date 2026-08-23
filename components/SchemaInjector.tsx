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
  categoryName,
  categoryArticles,
  customSchema,
}) => {
  const schemas: any[] = [];

  if (customSchema) {
    schemas.push(customSchema);
  }

  // 1. Organization Schema (Sitewide Publisher Entity)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.pakistaninfohub.com/#organization',
    name: 'Pakistan Info Hub',
    url: 'https://www.pakistaninfohub.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.pakistaninfohub.com/icon.png',
      width: 512,
      height: 512,
    },
    description: 'Verified civic and public services information directory for Pakistani citizens and overseas diaspora.',
    sameAs: [
      'https://twitter.com/PakistanInfoHub',
      'https://www.facebook.com/PakistanInfoHub',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Editorial & Civic Guidance Helpline',
      availableLanguage: ['English', 'Urdu'],
      areaServed: 'PK',
    },
  });

  // 2. WebSite Schema with SearchAction (Sitewide Search Crawler Discovery)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.pakistaninfohub.com/#website',
    name: 'Pakistan Info Hub',
    url: 'https://www.pakistaninfohub.com',
    publisher: {
      '@id': 'https://www.pakistaninfohub.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.pakistaninfohub.com/tracker?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  });

  // 3. CollectionPage / ItemList Schema for Category pages
  if (categoryName && categoryArticles && categoryArticles.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${categoryName} Verified Guides & Services 2026`,
      url: `https://www.pakistaninfohub.com/${categoryArticles[0]?.categoryId || ''}`,
      isPartOf: {
        '@id': 'https://www.pakistaninfohub.com/#website',
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: categoryArticles.map((art, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: art.titleEn,
          url: `https://www.pakistaninfohub.com${art.fullPath}`,
        })),
      },
    });
  }

  // 4. Article Schema & Author Person Schema for Guide pages
  if (article) {
    const authorData = getAuthorForCategory(article.categoryId);
    const parsedDate = article.lastVerified ? new Date(article.lastVerified) : new Date('2026-08-17');
    const isoDateModified = !isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : '2026-08-17T00:00:00+05:00';

    // Person Schema for Author (E-E-A-T)
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `https://www.pakistaninfohub.com/authors/${authorData.slug}#person`,
      name: authorData.name,
      jobTitle: authorData.role,
      description: authorData.bioEn,
      url: `https://www.pakistaninfohub.com/authors/${authorData.slug}`,
      worksFor: {
        '@id': 'https://www.pakistaninfohub.com/#organization',
      },
    });

    // Article / Guide Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.titleEn,
      description: article.metaDescriptionEn,
      image: [
        'https://www.pakistaninfohub.com/og-default.jpg',
      ],
      datePublished: '2026-01-01T08:00:00+05:00',
      dateModified: isoDateModified,
      inLanguage: ['en-PK', 'ur-PK'],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.pakistaninfohub.com${article.fullPath}`,
      },
      author: {
        '@id': `https://www.pakistaninfohub.com/authors/${authorData.slug}#person`,
      },
      publisher: {
        '@id': 'https://www.pakistaninfohub.com/#organization',
      },
    });

    // WebApplication Schema for Interactive Tools
    const isInteractiveTool = 
      article.slug.includes('check') || 
      article.slug.includes('status') || 
      article.slug.includes('tracker') || 
      article.slug.includes('calculator') || 
      article.slug.includes('verification') || 
      article.slug.includes('duplicate-bill') ||
      article.slug.includes('slip');

    if (isInteractiveTool) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: article.titleEn,
        operatingSystem: 'All',
        applicationCategory: 'UtilitiesApplication',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        url: `https://www.pakistaninfohub.com${article.fullPath}`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'PKR',
        },
      });
    }
  }

  // 5. FAQPage Schema (from page FAQ item list)
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

  // 6. HowTo Schema Stacking for Step-by-Step Guides
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
        url: `https://www.pakistaninfohub.com${article.fullPath}#step-${st.stepNumber}`,
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: st.detailEn,
          },
        ],
      })),
    });
  }

  // 7. BreadcrumbList Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.pakistaninfohub.com',
        },
        ...breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: b.nameEn,
          item: b.url
            ? (b.url.startsWith('http') ? b.url : `https://www.pakistaninfohub.com${b.url}`)
            : (article ? `https://www.pakistaninfohub.com${article.fullPath}` : undefined),
        })),
      ],
    });
  }

  // 8. VideoObject Schema for Embedded Video Guides
  if (article && article.videoGuide) {
    const vg = article.videoGuide;
    const activeVideoId = vg.youtubeIdUr || vg.youtubeIdEn || 'ScMzIvxBSi4';
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: vg.titleEn,
      description: vg.descriptionEn,
      thumbnailUrl: [
        `https://img.youtube.com/vi/${activeVideoId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${activeVideoId}/hqdefault.jpg`,
      ],
      uploadDate: vg.uploadDate || '2026-08-01',
      duration: vg.duration || 'PT4M15S',
      embedUrl: `https://www.youtube.com/embed/${activeVideoId}`,
      contentUrl: `https://www.youtube.com/watch?v=${activeVideoId}`,
      transcript: vg.transcriptEn,
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.pakistaninfohub.com/icon.png',
        },
      },
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
