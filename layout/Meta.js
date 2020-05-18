import PropTypes from 'prop-types';
import Head from 'next/head';
import data from '../data/config.json';

function Meta({ title }) {
  const { site, description, url, twitterHandle } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="height=device-height,
                      width=device-width, initial-scale=1.0,
                      minimum-scale=1.0, maximum-scale=5.0"
      />
      <meta name="Description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content={site} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_GB" />
      <meta
        property="og:image"
        content="https://thomasleonhighbaugh.me/dogpatchcircuit.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630"></meta>

      <meta name="msapplication-TileColor" content="#8265ff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="msapplication-config" content="/browserconfig.xml" />

      <link
        href="https://fonts.googleapis.com/css?family=Bungee|Kanit&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/logo.svg" />
      <link rel="apple-touch-icon" href="/logo.svg" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8265ff" />

      <link rel="canonical" href={url} />
    </Head>
  );
}

Meta.propTypes = {
  title: PropTypes.string,
};

export default Meta;
