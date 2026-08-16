'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PassportRenewalDocumentsPage() {
  const article = ARTICLES['renewal-documents'];
  return <ArticleLayout article={article} />;
}
