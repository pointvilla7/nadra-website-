'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function BFormGuidePage() {
  const article = ARTICLES['b-form-kaise-banaye'];
  return <ArticleLayout article={article} />;
}
