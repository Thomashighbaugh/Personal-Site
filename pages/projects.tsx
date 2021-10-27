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
      <div className=" bg-gray-50 bg-opacity-100 border-4 border-gray-400 dark:bg-gray-900 dark:bg-opacity-75 dark:border-gray-50 rounded-2xl p-6 my-20 mx-auto">
        <h1>Projects</h1>
        <p className="text-xl">A curated selection of my web projects available for demonstration within iframes on pages generated from MDX files by Next.js.</p>
      </div>
      <div className="grid text-xl grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="border-4 border-gray-400 dark:border-gray-50 p-4 bg-gray-50 dark:bg-gray-900 bg-opacity-100 dark:bg-opacity-75 rounded-2xl"
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
            <p className="mb-3">{project.description}</p>
            <br/>
            <footer className="mt-2 align-bottom justify-end flex">
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a className="text-right text-gray-400 dark:text-gray-50 static bottom-0 right-0 dark:hover:text-gray-400 text-lg border-4 border-gray-400 dark:border-gray-50 p-2 rounded-lg ">Check It Out</a>
              </Link>
            </footer>
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
