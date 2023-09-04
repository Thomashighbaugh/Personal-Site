import Image from 'next/image';
import Link from 'next/link';

import { Pill } from '~/components';

import type { FrontMatter } from '~/types';
import clsx from 'clsx';

interface PostProps {
	index: number;
	frontmatter: FrontMatter;
}

export function _Post({ index, frontmatter }: PostProps): JSX.Element {
	const ariaLabel = `Read blog post: ${frontmatter.title}`;
	const href = `/blog/${frontmatter.slug}`;

	return (
		<Link aria-label={ariaLabel} href={href} passHref>
			<a
				aria-label={ariaLabel}
				className="flex flex-col bg-white bg-opacity-75 dark:bg-primary-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border-2 border-primary-100 dark:border-primary-400 rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer transform motion-safe:hover:-translate-y-1 default-transition default-focus"
				href={href}
			>
				{frontmatter.banner && (
					<div className="relative flex justify-center w-full max-w-xl my-auto rounded-t-lg overflow-hidden">
						<div className="w-full h-full lg:h-48 bg-primary-200 dark:bg-primary-600 motion-safe:animate-pulse" />
						<Image
							alt={frontmatter.title}
							className="absolute top-0 left-0 w-full h-48 object-cover select-none"
							draggable={false}
							layout="fill"
							loading="lazy"
							src={frontmatter.banner}
						/>
					</div>
				)}

				<div
					className={clsx(
						'flex-1 flex flex-col justify-between p-6 rounded-2xl ',
						frontmatter.banner && index <= 2 && 'lg:(rounded-tr-none rounded-tl-none)',
					)}
				>
					<div className="flex flex-col flex-1 justify-around rounded-lg text-primary-600 dark:text-white default-focus">
						<h4 className="text-xl font-bold text-primary-900 dark:text-primary-50 post-title">
							{frontmatter.title}
						</h4>
						{((frontmatter.description && frontmatter.description_show) || true) && (
							<p
								aria-label={frontmatter.description}
								className="mt-3 text-base line-clamp-2"
							>
								{frontmatter.description}
							</p>
						)}
						<div className="flex items-start space-x-1 mt-4 text-sm">
							<Pill.Date>{frontmatter.date}</Pill.Date>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
}
