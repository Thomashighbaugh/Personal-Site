import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function Standard({ children, className, ...rest }: StandardPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-4 lg:px-8 xl:px-8 py-4 dark:bg-primary-800 bg-white bg-opacity-30 dark:bg-opacity-20  dark:border-primary-300 border-primary-700 border-2 backdrop-filter backdrop-blur-sm filter dark:text-white rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}
		>
			{children}
		</div>
	);
}
