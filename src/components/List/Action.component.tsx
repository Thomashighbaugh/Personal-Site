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
				'relative inline-flex justify-center h-16 w-16 self-center px-3 py-2 bg-white text-primary-700 dark:(text-primary-50 bg-primary-900) hover:(text-primary-900 bg-primary-200) dark:(hover:bg-primary-700 hover:text-primary-300) rounded-xl',
				className,
			)}
			{...rest}>
			{children}
		</Component>
	);
}
