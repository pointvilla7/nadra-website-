'use client';

import React from 'react';
import Script from 'next/script';

export const GoogleAnalytics: React.FC = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId || gaId.trim() === '' || gaId === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
