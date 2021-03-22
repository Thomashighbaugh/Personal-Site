import Link from '@/components/Link/index'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="flex rounded-2xl m-0 flex-row align-center center justify-center py-2 items-center bg-white dark:bg-gray-900 border-4 border-gray-500 dark:border-gray-400">
      <div className="  text-gray-500 dark:text-gray-400">
        <div className="relative inline-block transform group ">
          <Link
            href="/"
            className="inline-block   font-sans font-black transform -rotate-1 md:rotate-0 group-hover:-rotate-6 border-0 transition-transform   uppercase  rounded-md shadow-md dark:hover:text-gray-50 hover:text-blue-500"
          >
            {siteMetadata.author}
            {''}
            {''}
            {` © ${new Date().getFullYear()}`} {''}
          </Link>
        </div>
      </div>

      <div className="inline-flex  ml-6 space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="9" />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="9" />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size="9" />
        <SocialIcon kind="github" href={siteMetadata.github} size="9" />
      </div>
    </footer>
  )
}
