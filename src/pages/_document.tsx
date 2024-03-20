import { Head, Html, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className="font-inter h-full min-h-full min-w-full bg-white text-primary-600 antialiased selection:bg-primary-900 selection:text-white dark:bg-primary-900 selection:dark:bg-white selection:dark:text-primary-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
