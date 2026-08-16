'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function DrivingLicensePage() {
  const article = ARTICLES['driving-license-guide'];
  return <ArticleLayout article={article} />;
}
