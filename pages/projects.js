import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { PageSeo } from '../components/SEO/index'
import siteMetadata from '../data/siteMetadata'
import Date from '../lib/date'

import { getSortedPostsData } from '../lib/posts'

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Projects({ allPostsData }) {
  // Declare what category should be shown
  const [viewCategory, setCategory] = useState('all')

  return (
    // begin page
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />

      {/* Begin Title */}
      <section className="flex flex-col justify-center content-center items-center align-middle w-1/2 p-4 m-3 mx-auto font-sans">
        <h1 className="text-6xl text-center font-black border-b-4 border-gray-500 pb-5 mb-6 txt-gray-900  dark:text-gray-50">
          Projects
        </h1>
        <br />
        <p className="text-gray-900 dark:text-gray-50 text-sm">
          <span className="font-black text-xl text-gray-700 dark:text-gray-200 ">NOTE: </span>
          Click on one the categories below and a list of projects will display in a list, choose
          one and you will be taken to a dynamically generated page with an embedded display of that
          site for your examination purposes after a short introduction to the site itself and why
          it was written.
        </p>
      </section>
      {/* End Title */}
      {/* Categorical Buttons  */}
      <section
        className=" justify-center mb-4 ml-6 mr-6 content-center items-center align-middle  flex rounded-lg "
        role="group"
      >
        <button
          className="text-gray-50 w-full dark:text-gray-500 text-2xl dark:hover:text-gray-600 border-4 border-gray-200   bg-hero-morphing-diamonds-dark hover:text-gray-200 dark:hover:border-gray-600 bg-gray-800 dark:bg-gray-50 px-5 py-3 rounded-xl  mx-6 font-black dark:hover:bg-hero-morphing-diamonds shadow-lg"
          onClick={() => setCategory(viewCategory === 'HTML' ? 'all' : 'HTML')}
        >
          HTML
        </button>
        <button
          className="text-gray-50 w-full dark:text-gray-500 text-2xl dark:hover:text-gray-600 border-4 border-gray-200   bg-hero-morphing-diamonds-dark hover:text-gray-200 dark:hover:border-gray-600 bg-gray-800 dark:bg-gray-50 px-5 py-3 rounded-xl  mx-6 font-black dark:hover:bg-hero-morphing-diamonds shadow-lg"
          onClick={() => setCategory(viewCategory === 'Javascript' ? 'all' : 'Javascript')}
        >
          Javascript
        </button>
        <button
          className="text-gray-50 w-full dark:text-gray-500 text-2xl dark:hover:text-gray-600 border-4 border-gray-200   bg-hero-morphing-diamonds-dark hover:text-gray-200 dark:hover:border-gray-600 bg-gray-800 dark:bg-gray-50 px-5 py-3 rounded-xl ml-6 mr-6 font-black dark:hover:bg-hero-morphing-diamonds shadow-lg"
          onClick={() => setCategory(viewCategory === 'React' ? 'all' : 'React')}
        >
          React
        </button>
      </section>
      {/* End Categorical Buttons */}
      {/* Posts Displayed */}
      <section>
        <ul className="max-w-xl p-4 mx-auto">
          {allPostsData.map(({ id, category, date, title }) => (
            <li
              className="p-4 text-center align-middle border-b-4 border-gray-300"
              key={id}
              style={{
                display:
                  // Presently set to none, makes a cleaner interface
                  viewCategory === category || viewCategory === 'none' ? 'block' : 'none',
              }}
            >
              {/* Creates Post Link as Heading  */}
              <Link href="/[category]/[id]" as={`/${category}/${id}`}>
                <a className="text-2xl font-bold text-gray-600 hover:text-blue-500 dark:text-gray-200 dark:hover:text-gray-50">
                  {title}
                </a>
              </Link>
              <br />
              <small className="text-gray-400 dark:text-gray-300">
                {/* Posts Date */}
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* End Posts Displayed */}
      {/* End Page */}
    </>
  )
}
// Props
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
