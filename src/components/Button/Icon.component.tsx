import clsx from 'clsx';
import { forwardRef } from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
	{ children, className, onClick, ...rest },
	ref,
) {
	return (
		<button
			ref={ref}
			className={clsx(
				'group',
				'relative inline-flex items-center px-3 py-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm filter border-2 border-primary-700 hover:(bg-primary-100 text-primary-700) dark:(bg-primary-900 hover:bg-primary-700 hover:text-white border-primary-300 bg-opacity-10 backdrop-filter backdrop-blur-sm) text-primary-600 dark:text-white rounded-lg text-sm font-medium default-transition default-focus transform rotate-0 hover:-rotate-22 transition-transform ease-linear',
				className,
			)}
			onClick={(e): void => onClick && onClick(e)}
			{...rest}
		>
			{children}
		</button>
	);
});
