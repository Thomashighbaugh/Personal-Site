import type { WithChildren } from '~/types';

interface ContainerProps extends WithChildren {}

export function Container({ children }: ContainerProps): JSX.Element {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 space-y-4" role="list">
			{children}
		</ul>
	);
}
