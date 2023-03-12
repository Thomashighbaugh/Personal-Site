import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<body className="antialiased font-inter bg-white text-primary-600 dark:bg-primary-900 selection:bg-primary-900 selection:dark:bg-white selection:text-white selection:dark:text-primary-600 min-h-full min-w-full h-full">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
