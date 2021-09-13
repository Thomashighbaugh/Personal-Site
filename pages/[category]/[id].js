import Head from "next/head";
import Date from "../../lib/date";

import { getAllPostIds, getPostData } from "../../lib/posts";

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Post({ postData }) {
  return (
    <>
      <h2 className="mt-12 text-3xl text-gray-600 dark:text-gray-50">
        {" "}
        {postData.title}
      </h2>
      <br />
      <p className="mx-8 text-gray-400">
        {" "}
        <Date dateString={postData.date} />
      </p>
      <p className="mx-8 text-gray-600 dark:text-gray-50">
        {" "}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </p>
      <button className="px-4 py-2 m-8 mx-1 text-lg text-white bg-gray-700 border-2 outline-none hover:bg-gray-400 rounded-2xl focus:shadow-outline dark:bg-gray-400 dark:border-white dark:hover:bg-white dark:hover:text-gray-600 dark:hover:border-gray-600">
        <a href={postData.github}>See It on Github</a>
      </button>
      <button className="px-4 py-2 m-8 mx-1 text-lg text-white bg-gray-700 border-2 outline-none hover:bg-gray-400 rounded-2xl focus:shadow-outline dark:bg-gray-400 dark:border-white dark:hover:bg-white dark:hover:text-gray-600 dark:hover:border-gray-600">
        <a href={postData.url}>See It in Production</a>
      </button>
      <iframe
        src={postData.url}
        height="1200px"
        width="100%"
        display="initial"
        position="relative"
        title={postData.title}
      />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.category, params.id);
  return {
    props: {
      postData,
    },
  };
}
