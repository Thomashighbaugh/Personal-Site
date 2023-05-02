import NProgress from 'nprogress';
import splitbee from '@splitbee/web';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffectOnce, useEvent } from 'react-use';
import { useRouter } from 'next/router';

import 'inter-ui/inter.css';
import 'nprogress/nprogress.css';
import 'windi.css';

import { colors, useClick } from '~/lib';
import { Theme } from '~/types';

NProgress.configure({
	easing: 'ease',
	minimum: 0.3,
	showSpinner: false,
	speed: 800,
});

export { reportWebVitals } from 'next-axiom';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	const [play] = useClick();

	useEvent('mousedown', () => play());
	useEvent('mouseup', () => play());

	useEffectOnce(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());

		if (process.env.NODE_ENV === 'production')
			splitbee.init({
				disableCookie: true,
			});
	});

	return (
		<ThemeProvider attribute="class" defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)}>
			<Analytics />
			<Component {...pageProps} />
			<style jsx global>{`
				@font-face {
					font-family: 'Dimitri';
					src: url('/fonts/dimitri.woff') format('woff');
				}
				html,
				body {
					min-height: 100vh !important;
					background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 11%, 0)'/><path d='M0 0v6.77L6.72 0H0zm8.91 0L0 8.96v3.86L12.83 0H8.91zm6.11 0L0 15.06v3.87L18.9 0h-3.88zm6.11 0L0 21.12v3.92L25 0h-3.87zM25 0l25 24.99v-3.87L28.87 0H25zm25 24.99l25 24.98L100 25 75 0 50 24.99zm-50 .05v3.87l21.13 21.12H25l-25-25zm25 24.99h3.87L50 28.9v-3.87L25 50.03zm0 0L0 75 25 100l25-24.99-25-24.98zM50 75l25-24.98h-3.87L50 71.14v3.87zm0 0v3.87L71.13 100H75L50 75.01zM75 100h3.87L100 78.88v-3.87L75 100zm25-24.99v-3.87L78.87 50.03H75L100 75zM31.1 0L50 18.93v-3.87L34.98 0h-3.87zm6.07 0L50 12.82V8.96L41.04 0h-3.87zm6.1 0L50 6.77V0h-6.72zM25 2.19L2.14 25.04H25V2.19zm0 22.85v22.8l22.81-22.8H25zM75 3.92l21.13 21.12L75 46.16 53.87 25.04 75 3.92zm0 2.19L56.06 25.04l18.89 18.88 18.94-18.88L75 6.1zm0 3.92l15.07 15L75 40.06 59.98 25.04 75 10.03zm0 2.18L62.17 25.04 75 37.86l12.83-12.82L75 12.2zm0 3.82l8.96 9L75 33.95 66.04 25 75 16.03zm0 2.24l-6.72 6.77L75 31.76l6.77-6.72h-.05L75 18.27zM0 31.09v3.87l15.02 15.07h3.87L0 31.09zm50 0L31.1 50.03h3.88L50 34.96V31.1zM0 37.2v3.87l8.91 8.96h3.92L0 37.2zm50 0L37.17 50.03h3.87L50 41.07V37.2zM0 43.3v6.73h6.72L0 43.3zm50 0l-6.72 6.73H50V43.3zm0 6.73v6.71l6.72-6.71H50zm8.96 0L50 58.93v3.92l12.83-12.82h-3.87zm6.06 0L50 65.03v3.88l18.94-18.88h-3.92zm16.09 0L100 68.9v-3.87L84.98 50.03h-3.87zm6.11 0L100 62.85v-3.92l-8.91-8.9h-3.87zm6.06 0l6.72 6.71v-6.71h-6.72zM75 52.2l-22.81 22.8H75v-22.8zm0 22.8v22.8l22.81-22.8H75zM25 53.9l21.13 21.12L25 96.13 3.87 75.01 25 53.9zm0 2.2L6.1 74.95l18.95 18.88 18.9-18.88L25 56.08zM25 60l15.02 15.01L25 90.03 9.98 75 25 60zm0 2.19L12.17 75 25 87.84 37.83 75 25 62.2zm0 3.87L33.96 75 25 83.97 16.04 75 25 66.06zm0 2.23l-6.72 6.72L25 81.73l6.72-6.72L25 68.3zm25 12.83v3.87L65.02 100h3.87L50 81.12zm50 0L81.1 100h3.88L100 84.99v-3.87zm-50 6.06v3.86l8.96 8.96h3.87L50 87.18zm50 0L87.22 100h3.87l8.91-8.96v-3.86zm-50 6.1V100h6.72L50 93.28zm50 0L93.28 100H100v-6.72z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 28%, 0.2)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
				}
				.index-title {
					font-family: 'Dimitri', sans;
					text-shadow: 1px 1px 1px #2d2f32, 1px 2px 1px #2d2f32, 1px 3px 1px #2d2f32,
						1px 4px 1px #575760, 1px 5px 1px #575760, 1px 6px 1px #575760,
						1px 7px 1px #575760, 1px 8px 1px #575760, 1px 9px 1px #6d6e71,
						1px 10px 1px #6d6e71, 1px 18px 6px rgba(16, 16, 16, 0.4),
						1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
						1px 30px 60px rgba(16, 16, 16, 0.4);
				}
				.project-title,
				.post-title,
				.blog-title {
					font-family: 'Dimitri', sans;
				}
				#nprogress .bar {
					height: 0.25rem;
					background-color: ${colors.primary[500]};
					color: ${colors.primary[900]};
				}
			`}</style>
		</ThemeProvider>
	);
}
