import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#8b9cbe" />
          <meta name="msapplication-TileColor" content="#8b9cbe" />
          <meta name="theme-color" content="#8b9cbe" />
          <link rel="alternate" type="application/rss+xml" href="/index.xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap"
              rel="stylesheet"
            />
          </noscript>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="/static/images/twitter-card.png" />
          <meta name="twitter:image" content="/static/images/twitter-card.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content="/static/images/twitter-card.png" />
          <meta property="og:site_name" content="Thomas Leon Highbaugh Portfolio Site" />
          <meta name="twitter:site" content="@thomashighbaugh" />
          <meta name="twitter:creator" content="@thomashighbaugh" />
        </Head>
        <body className="antialiased bg-white dark:bg-gray-900 bg-hero-morphing-diamonds-dark dark:bg-hero-morphing-diamonds-darker font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
