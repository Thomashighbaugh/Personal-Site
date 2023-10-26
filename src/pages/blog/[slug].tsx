import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

import { Blog, Pill } from "~/components";
import { getPost, getAllPostSlugs } from "~/lib/post";
import { Layout } from "~/layouts";

import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { Post } from "~/types";

import profile from "~/data/profile.json";
import type { Profile } from "~/types/profile";
const { alias } = profile as unknown as Profile;

interface PathProps extends ParsedUrlQuery {
  slug: string;
}

interface BlogPostProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const posts = await getAllPostSlugs();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.md/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps, PathProps> = async ({
  params,
}) => {
  const { frontmatter, source } = await getPost(params.slug);

  return {
    props: {
      post: {
        frontmatter,
        source,
      },
    },
  };
};

export default function BlogPost({ post }: BlogPostProps): JSX.Element {
  return (
    <>
      <Layout.Blog
        seo={{
          title: `${post.frontmatter.title} ─ blog ─ ${alias}`,
          description: post.frontmatter.description ?? undefined,
          openGraph: {
            title: post.frontmatter.title,
            images: [
              {
                url: post.frontmatter.banner ?? "/banner.png",
                alt: post.frontmatter.description,
                width: 1280,
                height: 720,
              },
            ],
          },
        }}
      >
        <div className="relative overflow-hidden px-4 py-16">
          <div className="relative px-4 sm:px-6 lg:px-8">
            {post.frontmatter.banner &&
              (post.frontmatter.banner_show ?? true) && (
                <div className="relative mx-auto my-2 sm:my-4 sm:max-w-2xl lg:sm:max-w-6xl">
                  <div className="mb-8 h-64 h-full w-full rounded-3xl bg-primary-200 motion-safe:animate-pulse dark:bg-primary-600 lg:h-96" />
                  <Image
                    alt={post.frontmatter.banner_alt ?? post.frontmatter.title}
                    className="default-transition absolute left-0 top-0 mb-8 h-auto max-h-64 w-full select-none rounded-3xl object-cover shadow-xl lg:max-h-96"
                    draggable={false}
                    layout="fill"
                    src={post.frontmatter.banner}
                  />
                </div>
              )}

            <div className="mx-auto my-4 flex max-w-6xl flex-col space-y-4 text-center text-lg">
              <div>
                {post.frontmatter.title_prefix && (
                  <span className="block text-center text-xl font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-100">
                    {post.frontmatter.title_prefix}
                  </span>
                )}
                <span className="blog-title text-center text-4xl font-extrabold leading-8 tracking-tight text-primary-900 dark:text-white sm:text-5xl">
                  {post.frontmatter.title}
                </span>
              </div>

              <span className="flex items-center justify-center">
                <Pill.Date>{post.frontmatter.date}</Pill.Date>
              </span>

              {post.frontmatter.description &&
                post.frontmatter.description_show && (
                  <p className="mt-8 text-xl leading-8 text-primary-400">
                    {post.frontmatter.description}
                  </p>
                )}
            </div>

            <article className="prose prose-primary prose-lg mx-auto max-w-6xl rounded-xl border border-gray-300 bg-white bg-opacity-75 p-12 text-primary-500 dark:border-gray-400 dark:bg-primary-900  dark:text-white">
              <MDXRemote {...post.source} components={Blog.X} />
            </article>
          </div>
        </div>
      </Layout.Blog>
      <Blog.Styles.Code />
      <Blog.Styles.Elements />
    </>
  );
}
