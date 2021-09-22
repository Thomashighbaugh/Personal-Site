import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type BlogProps = {
  posts: PostType[];
};

export const Blog = ({ posts }: BlogProps): JSX.Element => {
  return (
    <Layout>
      <div className="max-w-6xl bg-gray-50 bg-opacity-95 border-2 border-gray-500 dark:bg-gray-900 dark:border-gray-50 dark:bg-opacity-95 rounded-2xl p-6 my-20 mx-auto text-lg">
        <h1 className="colorful text-5xl text-center">Blog</h1>
        <p className="indent-lg text-xl px-6 font-bold">
          My blog, which I have reorganized to be more code focused and less of
          me droning on and on about my opinions that no one really cares about.
          New posts will use a <i>semiliterate</i> style and tackle things with
          limited amounts of documentaiton, like configuring AwesomeWM.
        </p>
        <hr />
        {posts.map((post) => (
          <div key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-400 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h2 className="mb-2 text-xl ">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-700 dark:text-gray-50 dark:hover:text-gray-400">
                  {post.title}
                </a>
              </Link>
            </h2>
            <p className="mb-3">{post.description}</p>
            <p className="flex flex-end justify-between flex-row">
              <div className="w-12"  />
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="p-2 bg-gray-500 border-2 border-gray-700 dark:border-gray-50 text-gray-50 rounded-lg hover:bg-gray-200">
                  
                
                  Read More
                </a>
              </Link>
            </p>
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Blog;
