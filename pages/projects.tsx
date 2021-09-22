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
      <div className=" bg-gray-50 bg-opacity-95 border-2 border-gray-500 dark:bg-gray-900 dark:bg-opacity-95 dark:border-gray-50 rounded-2xl p-6 my-20 mx-auto">
        <h1>Projects</h1>
        <p>Check out my blog projects here.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="border-2 border-gray-500 dark:border-gray-50 p-4 bg-gray-50 dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 rounded-2xl"
          >
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(project.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a className="text-gray-700 dark:text-gray-50 dark:hover:text-blue-400">
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
