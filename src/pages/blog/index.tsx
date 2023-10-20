import { Blog } from '~/components';
import { getAllPostsFrontMatter } from '~/lib/post';
import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';
import { Pill } from '~/components';
import type { FrontMatter } from '~/types';
import { Animate, List } from '~/components';
import profile from '~/data/profile.json';
import type { Profile } from '~/types/profile';
const { alias } = profile as unknown as Profile;

interface BlogProps {
	serialisedFrontmatters: string;
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const frontmatters = await getAllPostsFrontMatter();

	return {
		props: {
			serialisedFrontmatters: JSON.stringify(frontmatters),
		},
	};
};

export default function BlogPage({ serialisedFrontmatters }: BlogProps): JSX.Element {
	const frontmatters = JSON.parse(serialisedFrontmatters) as Array<FrontMatter>;

	if (frontmatters.length <= 0) return <Blog.Error routeBlog={false} />;

	const latestPost = frontmatters.shift();

	return (
		<Layout.Default seo={{ title: `${alias} ─ blog` }}>
			<div className="mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8">
      				<Animate
					as="h1"
					animation={{
						opacity: [0, 1],
						scale: [0.25, 1],
					}}
					className="col-start-1 row-start-1 self-center text-center justify-center align-middle items-center content-center  dark:text-white text-primary-50 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight font-extrabold drop-shadow-xl opacity-100 z-5 blog-title"
				>

      <Pill.Standard>Recent Blog Posts</Pill.Standard>
</Animate>
<div className="relative max-w-6xl w-full mx-auto">
					<Blog.Latest frontmatter={latestPost} />
					<div className="mt-4 lg:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:max-w-none">
						{frontmatters.map((frontmatter, i) => (
							<Blog.Post key={i} frontmatter={frontmatter} index={i} />
						))}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
