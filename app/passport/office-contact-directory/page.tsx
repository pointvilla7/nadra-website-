'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PassportOfficeContactPage() {
  const article = ARTICLES['office-contact-directory'];
  return <ArticleLayout article={article} />;
}
