import type { WithChildren } from '~/types';

interface ContainerProps extends WithChildren {}

export function Container({ children }: ContainerProps): JSX.Element {
	return (
		<ul
			className=" pt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
			role="list"
		>
			{children}
		</ul>
	);
}
