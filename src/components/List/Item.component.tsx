import Link from 'next/link';
import { Icon } from '@iconify/react';

import { Action } from './Action.component';
import { ListActionType } from '~/types';

import type { ReactNode } from 'react';

import type { ListAction, WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	actions?: Array<ListAction>;
	description?: string;
	icon?: string | ReactNode;
	iconColor?: string;
	title: string;
}

export function Item({ actions, children, description, title }: ItemProps): JSX.Element {
	return (
		<li className="bg-white bg-opacity-50 dark:bg-primary-900 max-h-full min-h-full h-full dark:bg-opacity-10 backdrop-filter backdrop-blur-sm border border-primary-100 dark:border-primary-300 rounded-xl transition ease-in-out duration-300">
			<div className="flex flex-col h-full   px-4 py-4 sm:px-6">
		
						<h1 className="text-primary-700 dark:text-white text-2xl w-full text-center  project-title overflow-hidden">
							{title}
						</h1>
						{description && (
							<p className="flex-1 items-center mt-2 text-primary-500 dark:text-primary-200 text-sm">
								{description}
							</p>
						)}
	

				{actions && (
					<div className="inline-flex place-content-end items-center align-middle justify-end relative end-0 right-0  bottom-0 w-full  mt-1 sm:mt-1">
						{actions.map((action, index) => {
							switch (action.type) {
								case ListActionType.BUTTON:
									return (
										<Action
											aria-label={action.label}
											key={index}
											onClick={action.onClick}
										>
											<span className="sr-only">{action.label}</span>
											<Icon className="  self-center" icon={action.icon} />
										</Action>
									);
								case ListActionType.LINK:
									if (action.external ?? true)
										return (
											<Action
												as="a"
												aria-label={action.label}
												href={action.href}
												key={index}
												onClick={action.onClick}
												rel="noopener noreferrer"
												target="_blank"
											>
												<span className="sr-only">{action.label}</span>
												<Icon className=" self-center" icon={action.icon} />
											</Action>
										);

									return (
										<Link href={action.href} passHref>
											<Action
												as="a"
												aria-label={action.label}
												key={index}
												onClick={action.onClick}
											>
												<span className="sr-only">{action.label}</span>
												<Icon
													className="  self-center"
													icon={action.icon}
												/>
											</Action>
										</Link>
									);
							}
						})}
					</div>
				)}
			</div>
			{children}
		</li>
	);
}
