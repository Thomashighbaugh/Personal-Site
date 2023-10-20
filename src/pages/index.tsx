import { Icon } from '@iconify/react';

import { Animate, Button, Pill } from '~/components';
import { NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { NavigationItem } from '~/types';

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/blog',
		icon: <Icon className="mr-3" icon="feather:edit-3" />,
		text: 'Blog',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/Thomashighbaugh',
		icon: <Icon className="mr-3" icon="feather:github" />,
		text: 'GitHub',
	},
];

export default function HomePage(): JSX.Element {
	const description = `Web Developer | Linux Professional | Digital Artist`;
	const location = `San Francisco, California`;
	return (
		<Layout.Default>
			<div className="min-h-screen flex flex-col items-center justify-between py-12">
				<div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-4 text-center grid ">
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.25, 1],
						}}
						className="col-start-1 row-start-1 self-center text-center justify-center align-middle items-center content-center  dark:text-white text-primary-50 text-4xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight font-extrabold drop-shadow-xl opacity-100 z-5 index-title"
					>
						<Pill.Standard>Thomas Leon Highbaugh</Pill.Standard>
					</Animate>
					<Animate
						as="div"
						animation={{
							opacity: [0, 1],
							scale: [0.25, 1],
						}}
						className="text-primary-600 col-start-1 row-start-1 self-center text-center justify-center align-middle items-center content-center  dark:text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight font-extrabold col-start-1 row-start-1 "
					>
						<svg
							className="mx-auto self-center z-50 "
							width="480"
							height="480"
							viewBox="0 0 160 160"
							fill="url(#Gradient2)"
							stroke="#333333aa"
							strokeWidth="2px"
						>
							<defs>
								<linearGradient id="Gradient3" x1="0" x2="0" y1="0" y2="1">
									<stop offset="0%" stopColor="#94e4ff" stopOpacity="10" />
									<stop offset="60%" stopColor="#0badff" stopOpacity="10" />
									<stop offset="100%" stopColor="#0872A8" stopOpacity="10" />
								</linearGradient>
								<linearGradient id="Gradient2" x1="0" x2="0" y1="1" y2="1">
									<stop offset="0%" stopColor="#00caff" stopOpacity="30" />
									<stop offset="70%" stopColor="#0badff" stopOpacity="80" />
									<stop offset="100%" stopColor="#0872A8" stopOpacity="90" />
								</linearGradient>
								<linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
									<stop offset="0%" stopColor="#e9efff" stopOpacity="80" />
									<stop offset="50%" stopColor="#f5143d" stopOpacity="100" />
									<stop offset="100%" stopColor="#feee70" stopOpacity="80" />
								</linearGradient>
							</defs>
							<circle cx="80" cy="80" r="50" fill="url(#Gradient2)" />
							<g transform=" matrix(0.866, -0.5, -0.25, -0.443, 80, 80)">
								<path
									d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
									fill="url(#Gradient1)"
									stroke="#222222aa"
									strokeWidth="1px"
								>
									<animateTransform
										attributeName="transform"
										type="rotate"
										from="360 -10 10"
										to="0 0 0"
										dur="8s"
										repeatCount="indefinite"
									/>
								</path>
							</g>

							<path
								d="M 50,0 A 50,50 0 0,0 -50,0Z"
								fill="url(#Gradient3)"
								stroke="#00000000"
								strokeWidth="1px"
								transform="matrix(0.836, -0.495, 0.495, 0.836, 80, 80)"
							/>
						</svg>
					</Animate>
					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="w-full mt-0 mb-2  mx-auto text-base dark:text-primary-200 text-primary-700 font-bold sm:text-lg md:text-xl "
						transition={{
							delay: 1.25,
						}}
					>
						{description}
						<br />
						{location}
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-1 sm:space-y-0 w-full mt-6 sm:mt-2">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}
								>
									<Button.Outline href={action.href}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
