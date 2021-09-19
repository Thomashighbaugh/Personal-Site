import { compareDesc, format } from 'date-fns';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

import {
  childVariants,
  EnterTransition,
} from '../../components/EnterTransition';
import { MetaTags } from '../../components/MetaTags';
import { getAllProjectData } from '../../content';
import { Layout } from '../../layouts';

interface Props {
  projects: Array<{
    slug: string;
    frontMatter: {
      title: string;
      summary: string;
      date: string;
      category: string;
      siteUrl: string;
      github: string;
      layout: string;
    };
  }>;
}

const ProjectPage: React.FunctionComponent<Props> = ({ projects }) => {
  return (
    <Layout>
      <MetaTags
        title="Projects"
        description="Example websites and/or slides about various projects I have worked on personally for you to check out and evaluate all without leaving the site."
      />

      <EnterTransition>
        <section className="flex flex-col items-center  m-auto">
          <motion.h1
            variants={childVariants}
            className="text-5xl mb-12 font-extrabold"
          >
            Project Demo Lab
          </motion.h1>

          <ul className="list-none p-0 grid grid-cols-3 gap-6 ">
            {projects
              .sort((first, second) =>
                compareDesc(
                  new Date(first.frontMatter.date),
                  new Date(second.frontMatter.date)
                )
              )
              .map((project) => (
                <motion.li
                  variants={childVariants}
                  key={project.slug}
                  className="mb-24 last:mb-0 border-2 border-gray-500  rounded-xl dark:border-gray-50 p-4 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75 flex flex-col justify-between "
                >
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      <a className="no-underline text-3xl font-bold">
                        {project.frontMatter.title}
                      </a>
                    </Link>
                  </h3>

                  <p className="mt-8 mb-4 text-lg text-gray-700 dark:text-gray-400 ">
                    {project.frontMatter.summary}
                  </p>
                  <div>
                    <Link href={`/project/${project.slug}`}>
                      <a className=" underline inline-flex items-center hover:text-gray-600 bg-gray-50 dark:bg-gray-900 border-2 dark:hover:border-gray-300 dark:hover:bg-gray-200 dark:hover:text-gray-800 border-gray-500 dark:border-gray-50 p-2 no-underline rounded-lg">
                        <span className="mr-1   ">Check it out</span>{' '}
                        <ArrowRight size={20} />
                      </a>
                    </Link>
                  </div>
                </motion.li>
              ))}
          </ul>
        </section>
      </EnterTransition>
    </Layout>
  );
};

export async function getStaticProps() {
  const projectData = getAllProjectData();

  return {
    props: {
      projects: projectData,
    },
  };
}

export default ProjectPage;
