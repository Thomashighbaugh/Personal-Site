import { useState } from 'react'
import tinytime from 'tinytime'
import Link from '@/components/Link/index'
import Tag from '@/components/Tag/index'

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function ListLayout({ posts, title }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) =>
    frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <div className="md:divide-y bg-opacity-75 ">
        <div className="flex justify-between bg-opacity-75  pt-6 pb-8  md:space-y-5">
          <h1 className="font-extrabold text-gray-700 lg:text-6xl leading-1  dark:text-gray-100 sm:leading-10 sm:text-5xl md:leading-14">
            {title}
          </h1>

          <div className="relative inline-flex">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="inline-block w-full px-2 py-2 text-gray-900 bg-white border-2 border-gray-300 rounded-xl dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-50"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {filteredBlogPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li
                key={slug}
                className="py-2  border-t-2 border-gray-100 dark:border-gray-800 min-w-half justify-between"
              >
                <article className="p-6 space-y-2  rounded-2xl dark:bg-gray-800 bg-white border-4 border-solid border-gray-400 bg-opacity-75 xl:grid xl:grid-cols-4 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="pr-12 text-xl font-extrabold text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{postDateTemplate.render(new Date(date))}</time>
                    </dd>
                  </dl>
                  <div className="space-x-1 space-y-0 xl:col-span-3">
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-500 hover:text-blue-500  mt-0 pt-0 dark:hover:text-gray-200 dark:text-gray-100"
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className="space-x-2 font-black mt-3">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose font-bold text-gray-500 max-w-none dark:text-gray-200">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
