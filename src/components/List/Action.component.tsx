import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';

type ActionProps = {
	as?: ElementType;
} & (
	| ({
			as?: 'button';
	  } & ButtonHTMLAttributes<HTMLButtonElement>)
	| ({
			as?: 'a';
	  } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function Action({
	as: Component = 'button',
	children,
	className,
	...rest
}: ActionProps): JSX.Element {
	return (
		<Component
			className={clsx(
				'relative bottom-0  inline-flex border-1 mx-1 dark:border-primary-400 border-primary-700 justify-center h-12 w-12 self-center px-1 py-1 bg-white text-primary-700 dark:(text-primary-50 bg-primary-900) hover:(text-primary-900 bg-primary-200) dark:(hover:bg-primary-700 hover:text-primary-300) rounded-xl transform rotate-0 hover:-rotate-22 transition-transform ease-linear',
				className,
			)}
			{...rest}
		>
			{children}
		</Component>
	);
}
