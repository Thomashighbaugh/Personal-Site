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
      <div className="max-w-6xl bg-gray-50 bg-opacity-50 border-2 border-gray-500 dark:bg-gray-900 dark:border-gray-50 dark:bg-opacity-75 rounded-2xl p-4 my-20 mx-auto">
        <h1>Blog</h1>
        <p>Check out my blog posts here.</p>
        {posts.map((post) => (
          <article key={post.slug} className="mt-3">
            <p className="mb-1 text-sm text-gray-400 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-800 dark:text-gray-50 dark:hover:text-gray-400">
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
