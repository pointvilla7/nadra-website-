'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function TaleemiWazaifPage() {
  const article = ARTICLES['taleemi-wazaif'];
  return <ArticleLayout article={article} />;
}
