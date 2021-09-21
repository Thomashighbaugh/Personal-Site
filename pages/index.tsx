import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Next.js starter for your next blog or personal site. Built with:</p>
      <div className="max-w-6xl bg-gray-50 bg-opacity-50 border-2 border-gray-500 dark:bg-gray-900 dark:bg-opacity-75 rounded-2xl p-4 my-20 mx-auto">
        <h1 className="text-6xl dark:text-gray-50 colorful font-bold mx-auto max-w-6xl mb-2">
          <span className=" bg-gradient-to-r bg-clip-text from-gray-600 to-gray-400 dark:from-gray-200 dark:to-gray-500">
            Thomas Leon Highbaugh
          </span>
        </h1>
        <div className="flex justify-center items-center ">
          <svg
            className="  text-gray-300"
            width="400"
            height="400"
            viewBox="0 0 160 160"
            fill="url(#Gradient2)"
            stroke="#00000066"
            strokeWidth="2px"
          >
            <defs>
              <linearGradient id="Gradient3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#e9efff" stopOpacity="10" />
                <stop offset="60%" stopColor="#8b9cbe" stopOpacity="10" />
                <stop offset="100%" stopColor="#555e70" stopOpacity="10" />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="1" y2="1">
                <stop offset="0%" stopColor="#b2bfd9" stopOpacity="30" />
                <stop offset="70%" stopColor="#8b9cbe" stopOpacity="80" />
                <stop offset="100%" stopColor="#555e70" stopOpacity="90" />
              </linearGradient>
              <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#e9efff" stopOpacity="80" />
                <stop offset="50%" stopColor="#b2bfd9" stopOpacity="100" />
                <stop offset="100%" stopColor="#8b9cbe" stopOpacity="80" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="50" fill="url(#Gradient2)" />
            <g transform=" matrix(0.866, -0.5, -0.25, -0.443, 80, 80)">
              <path
                d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                fill="url(#Gradient1)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 -10 10"
                  to="0 0 0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            <path
              d="M 50,0 A 50,50 0 0,0 -50,0Z"
              fill="url(#Gradient3)"
              transform="matrix(0.836, -0.495, 0.495, 0.836, 80, 80)"
              stroke="none"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <div className="text-gray-700 dark:text-gray-50 text-center xl:text-3txl lg:text-3xl text-3xl">
            <Typewriter
              options={{
                autoStart: true,
                cursor: '|',
                loop: true,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(500)
                  .typeString(
                    'Web Developer | Linux Professional | Digital Artist'
                  )
                  .changeDeleteSpeed(0.01)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
      </div>

      <a
        href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
        className="inline-block px-7 py-3 rounded-md text-gray-50 dark:text-gray-50 bg-gray-500 hover:bg-gray-700 hover:text-gray-50 dark:hover:text-gray-50"
      >
        Check Out the source code!
      </a>

      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-gray-50 dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
