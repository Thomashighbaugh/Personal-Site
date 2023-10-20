import clsx from 'clsx';
import { Icon } from '@iconify/react';

import type { WithChildren, WithClassName } from '~/types';

interface PrefixPillProps extends WithClassName, WithChildren {
	small?: boolean;
}

export function PrefixPill({ children, className, small = false }: PrefixPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'justify-center max-w-72 tracking wide uppercase font-extrabold sm:w-auto bg-white bg-opacity-10 backdrop-filter bg-white dark:bg-opacity-10  dark:bg-primary-900 backdrop-blur-sm saturate-200 rounded-lg text-xl text-primary-500 dark:text-white border-2 border-primary-700 dark:border-primary-400 ',
				small ? 'px-2 py-1' : 'px-4 py-2',
				className,
			)}
		>
			<Icon className={clsx('mt-0.5', small ? 'mr-1.5' : 'mr-3')} icon="feather:laptop" />
			{children}
		</div>
	);
}
