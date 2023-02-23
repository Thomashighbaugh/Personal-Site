import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { ProjectType } from '../../types/projects';
import * as Button from '../../components/Button';
import { projectFilePaths, PROJECTS_PATH } from '../../utils/mdxProjects';
import { Github, Globe } from 'lucide-react';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
};

type ProjectPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: ProjectType;
};

const ProjectPage = ({
  source,
  frontMatter,
}: ProjectPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Thomas Leon Highbaugh`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
    siteUrl: frontMatter.siteUrl,
    github: frontMatter.github,
  };
  return (
    <Layout customMeta={customMeta}>
      <article className="max-w-full p-4 my-6 border-2 border-gray-800 dark:border-gray-200 bg-gray-50 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 rounded-xl  justify-center block">
        <h1 className="mb-3 text-gray-700 dark:text-gray-50 mt-4">
          {frontMatter.title}
          <div className="flex flex-row self-center justify-center float-right ">
            <Button.Button>
              <a href={frontMatter.siteUrl}>
                <Globe height={36} width={36} />
              </a>
            </Button.Button>

            <Button.Button>
              <a href={frontMatter.github}>
                <Github height={36} width={36} />{' '}
              </a>
            </Button.Button>
          </div>
        </h1>

        <div className="prose dark:prose-dark font-bold mt-3 justify-center self-center px-0 mx-0 overflow-visible">
          <MDXRemote {...source} components={components} />

          <iframe src={frontMatter.siteUrl} height="900" width="1370" />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ProjectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(ProjectFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
