'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function BispRegisterGuidePage() {
  const article = ARTICLES['bisp-how-to-register'];
  return <ArticleLayout article={article} />;
}
