import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';

export const WEBSITE_HOST_URL = 'https://thomasleonhighbaugh.me';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'TLH || Portfolio',
    description:
      'Full Stack Web Developer, Linux Professional, Digital Artist.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Thomas Leon Highbaugh - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thomashighbaugh" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}

      <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/android-icon-72x72.png"
      />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon-144.png" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  );
};

export default Head;
