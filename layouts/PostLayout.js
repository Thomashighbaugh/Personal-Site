import tinytime from 'tinytime'
import Link from '@/components/Link/index'

import SectionContainer from '@/components/SectionContainer/index'
import PageTitle from '@/components/PageTitle/index'
import { BlogSeo } from '@/components/SEO/index'
import Tag from '@/components/Tag/index'
import siteMetdata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetdata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetdata.siteUrl}/blog/${slug}`)}`

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetdata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article className="xl:divide-y dark:bg-gray-800 dark:bg-opacity-25  bg-opacity-75 rounded-2xl p-4 divide-gray-200 dark:divide-gray-700">
        <header className=" xl:pb-4">
          <div className="space-y-1 text-center">
            <dl>
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-lg font-bold text-gray-500 dark:text-gray-50">
                  <time dateTime={date}>{postDateTemplate.render(new Date(date))}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-6xl font-extrabold text-gray-500 text-shadow-lg lg:text-6xl dark:text-gray-100 md:text-5xl">
                {title}
              </h1>
            </div>
          </div>
        </header>
        <div
          className="pb-8 divide-y divide-gray-200  xl:divide-y-0 dark:divide-gray-600 xl:grid xl:grid-cols-4 xl:gap-x-6"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 dark:text-gray-50 xl:pb-0 xl:col-span-3 xl:row-span-2">
            <div className="p-10 prose text-gray-600 dark:prose-dark dark:text-gray-50  max-w-none">
              {children}
            </div>
            <div className="pt-6 pb-6 text-sm text-gray-600 dark:text-gray-100">
              <Link href={discussUrl(slug)} rel="nofollow">
                {'Discuss on Twitter'}
              </Link>
              {` • `}
              <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
            </div>
          </div>
          <footer className="text-sm font-medium dark:text-gray-100 leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
            {tags && (
              <div className="py-4 xl:py-4">
                <h2 className="text-lg tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Tags
                </h2>
                <div className="space-x-3 xl:flex-row lg:flex-col dark:text-gray-50 xl:space-x-0">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
            {(next || prev) && (
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                {prev && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-100">
                      Previous Article
                    </h2>
                    <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                    </div>
                  </div>
                )}
                {next && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-100">
                      Next Article
                    </h2>
                    <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="pt-4 xl:pt-8">
              <Link
                href="/blog"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                &larr; Back to the Blog Roll
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
