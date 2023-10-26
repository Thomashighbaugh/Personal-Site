import { Blog } from "~/components";
import { getAllPostsFrontMatter } from "~/lib/post";
import { Layout } from "~/layouts";

import type { GetStaticProps } from "next";
import { Pill } from "~/components";
import type { FrontMatter } from "~/types";
import { Animate, List } from "~/components";
import profile from "~/data/profile.json";
import type { Profile } from "~/types/profile";
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

export default function BlogPage({
  serialisedFrontmatters,
}: BlogProps): JSX.Element {
  const frontmatters = JSON.parse(serialisedFrontmatters) as Array<FrontMatter>;

  if (frontmatters.length <= 0) return <Blog.Error routeBlog={false} />;

  const latestPost = frontmatters.shift();

  return (
    <Layout.Default seo={{ title: `${alias} ─ blog` }}>
      <div className="mx-0 mb-20 mt-8 sm:mx-6 sm:mt-16 lg:mx-8 lg:mb-28">
        <Animate
          as="h1"
          animation={{
            opacity: [0, 1],
            scale: [0.25, 1],
          }}
          className="text-primary-50 z-5 blog-title col-start-1 row-start-1 content-center items-center justify-center  self-center text-center align-middle text-2xl font-extrabold tracking-tight opacity-100 drop-shadow-xl dark:text-white sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          <Pill.Standard>Recent Blog Posts</Pill.Standard>
        </Animate>
        <div className="relative mx-auto w-full max-w-6xl">
          <Blog.Latest frontmatter={latestPost} />
          <div className="mt-4 grid grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-3">
            {frontmatters.map((frontmatter, i) => (
              <Blog.Post key={i} frontmatter={frontmatter} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Layout.Default>
  );
}
