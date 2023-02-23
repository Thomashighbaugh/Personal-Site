import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllProjects } from '../lib/api-projects';
import { ProjectType } from '../types/projects';

type BlogProps = {
  projects: ProjectType[];
};

export const Blog = ({ projects }: BlogProps): JSX.Element => {
  return (
    <Layout>
      <div className=" bg-gray-50 bg-opacity-70 border-2 border-gray-400 dark:bg-gray-900  dark:border-gray-200  dark:bg-opacity-90 rounded-2xl p-6 my-4 mx-auto">
        <h1 className="lg:text-7xl text-5xl mb-0 pb-0 dark:text-gray-50 colorful font-bold mx-auto text-center ">
          <span className="bg-gradient-to-br bg-clip-text mb-0 pb-0 from-gray-600 to-gray-300 dark:from-gray-50 dark:to-gray-300">
            Projects
          </span>
        </h1>
        <p className="text-lg font-bold px-4">
          A curated selection of my web projects available for demonstration
          within iframes on pages generated from MDX files by Next.js. Links to
          the site, generously hosted by Vercel and the GitHub repository from
          which is being sourced are provided on each individual page for the
          convenience of the viewer.
        </p>
      </div>
      <div className="grid text-xl sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-coils-3 gap-4 mb-2 ">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="border-2 border-gray-400 dark:border-gray-200  p-4 bg-gray-50 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-90 h-full min-h-full   rounded-2xl flex flex-col"
          >
            <p className="mb-1 text-lg text-gray-700 dark:text-gray-400">
              {format(parseISO(project.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a className="text-gray-400 dark:text-gray-50 dark:hover:text-gray-400 text-3xl">
                  {project.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3 text-sm font-bold">{project.description}</p>
            <br />
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects(['date', 'description', 'slug', 'title']);

  return {
    props: { projects },
  };
};

export default Blog;
