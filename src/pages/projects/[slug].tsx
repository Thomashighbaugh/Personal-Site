import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import {
  childVariants,
  EnterTransition,
} from '../../components/EnterTransition';
import { MetaTags } from '../../components/MetaTags';
import { Layout } from '../../layouts';
import { getAllProjectSlugs, renderMdxForProjectSlug } from '../../content';
import React from 'react';
import { GitHub, Globe } from 'react-feather';

interface Props {
  content: any;
  frontMatter: {
    title: string;
    summary: string;
    date: string;
    category: string;
    siteUrl: string;
    github: string;
    layout: string;
  };
}

const ProjectPage: NextPage<Props> = ({ content, frontMatter }) => {
  return (
    <Layout>
      <MetaTags
        title={frontMatter.title}
        description={frontMatter.summary}
        article
      />
      <EnterTransition>
        <section className="flex-wrap m-auto">
          {
            <motion.div
              variants={childVariants}
              className="mb-4 items-center flex flex-row justify-between align-middle"
            >
              <button className="bg-gray-500 p-4 rounded-xl border-2 border-gray-200">
                <a href={frontMatter.siteUrl}>
                  <Globe />
                </a>
              </button>
              <h1 className="mb-8 width-50 text-5xl text-center">
                {frontMatter.title}
              </h1>
              <button className="bg-gray-500 p-4 rounded-xl border-2 border-gray-200 ">
                <a href={frontMatter.siteUrl}>
                  <GitHub />
                </a>
              </button>
            </motion.div>
          }
        </section>

        <motion.div variants={childVariants}>
          <div className="prose prose-lg dark:prose-light   m-auto mx-32">
            <MDXRemote {...content} components={{}} />
            <div className="justify-between flex flex-row mt-12"></div>
          </div>

          <hr className="border-gray-600  mt-4 mb-10" />

          <div className="mx-auto ml-6 mr-6 spacing-x-6">
            <iframe
              src={frontMatter.siteUrl}
              title={frontMatter.title}
              height="1200"
              width="1600"
            />
          </div>
        </motion.div>
      </EnterTransition>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const projectSlugs = getAllProjectSlugs();

  return {
    paths: projectSlugs.map((projectSlug) => ({
      params: { slug: projectSlug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { mdxContent, frontMatter } = await renderMdxForProjectSlug(slug);

  return {
    props: {
      content: mdxContent,
      frontMatter,
    },
  };
};

export default ProjectPage;
