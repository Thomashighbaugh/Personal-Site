import { NextSeo } from 'next-seo';

import { Navbar } from '~/components';
import { useSeoProps } from '~/lib';

import type { WithChildren, WithProps } from '~/types';


interface DefaultLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function DefaultLayout({
	children,
	seo: customSeo,
}: DefaultLayoutProps): JSX.Element {
	const seo = useSeoProps(customSeo);

	return (
		<>
			<NextSeo {...seo} />
			<Navbar.Standard />
			<main className="flex flex-col justify-center px-8 min-h-full min-w-full">
				{children}
			</main> 
		</>
	);
}
