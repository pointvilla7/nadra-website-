'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function EhsaasGuidePage() {
  const article = ARTICLES['ehsaas-program-guide'];
  return <ArticleLayout article={article} />;
}
