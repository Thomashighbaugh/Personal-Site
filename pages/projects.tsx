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
      <h1>Blog</h1>
      <p>Check out my blog projects here.</p>
      <div className="max-w-6xl bg-gray-50 bg-opacity-50 border-2 border-gray-500 dark:bg-gray-900 dark:bg-opacity-75 rounded-2xl p-4 my-20 mx-auto">
        {projects.map((project) => (
          <article key={project.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(project.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a className="text-gray-900 dark:text-gray-50 dark:hover:text-blue-400">
                  {project.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{project.description}</p>
            <p>
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
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
