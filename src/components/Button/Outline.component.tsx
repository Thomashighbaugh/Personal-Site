import clsx from 'clsx';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import type { AnchorHTMLAttributes } from 'react';

import type { WithClassName } from '~/types';

interface OutlineProps extends AnchorHTMLAttributes<HTMLAnchorElement>, WithClassName {
	external?: boolean;
	icon?: string;
	small?: boolean;
}

export function Outline({
	children,
	className,
	external = false,
	href,
	icon,
	onClick,
	small = false,
	...rest
}: OutlineProps): JSX.Element {
	return (
		<Link passHref
				className={clsx(
					'inline-flex items-center justify-center  w-full sm:w-auto hover:bg-white hover:text-primary-400 dark:hover:bg-opacity-50 dark:(border-primary-400 hover:border-primary-600 bg-opacity-20 bg-primary-900 hover:bg-primary-900) dark:(text-white hover:text-primary-100) text-primary-700 font-extrabold border-2 border-primary-600 rounded-lg cursor-pointer backdrop-filter backdrop-blur-sm filter default-transition default-focus',
					small ? 'px-4 py-1 text-sm' : 'px-8 py-2',
					className,
				)}
				href={href}
				onClick={(...args): void => onClick && onClick(...args)}
				rel="noopener noreferrer"
				target={external ? '_blank' : undefined}
				{...rest}
			>
				{icon && <Icon className="mt-1 mr-3" icon={icon} />}
				{children}

		</Link>
	);
}
