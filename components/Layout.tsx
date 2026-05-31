import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import { useRouter } from "next/router";

type LayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

function Layout({ title, description, children }: LayoutProps) {
  const router = useRouter();
  const baseUrl = "https://ascension-botanicals.com";
  const fullUrl = `${baseUrl}${router.asPath}`;
  const siteName = "Ascension Botanicals";
  const defaultDescription =
    "Premium botanical products delivered discreetly and quickly across the U.S.";

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title ? `${title}` : siteName}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={fullUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Robots: allow indexing */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Facebook/LinkedIn */}
        <meta property="og:title" content={title || siteName} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />
      </Head>

      {/* Google Analytics */}
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />

      {/* Organization structured data */}
      <Script
        id="organization-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: baseUrl,
            logo: `${baseUrl}/images/Ascension-Logo.png`,
            sameAs: [
              "https://www.instagram.com/ascensionbotanicals",
              "https://www.facebook.com/ascensionbotanicals",
            ],
            description: defaultDescription,
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@ascension-botanicals.com",
              contactType: "Customer Service",
              areaServed: "US",
              availableLanguage: "en",
            },
          }),
        }}
      />

      {/* WebSite structured data */}
      <Script
        id="website-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: baseUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${baseUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
