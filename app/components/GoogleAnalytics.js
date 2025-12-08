'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag('config', 'G-X2657S73YN', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X2657S73YN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X2657S73YN');
        `}
      </Script>
    </>
  );
}
