import Link from '@/components/Link/index'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center py-2 m-0 bg-white border-4 border-gray-500 rounded-2xl align-center center dark:bg-gray-900 dark:border-gray-400">
      <div className="text-gray-500 dark:text-gray-300">
        <div className="relative inline-block transform group ">
          <Link
            href="/"
            className="inline-block p-6 font-headline text-sm font-black uppercase transition-transform transform border-0 rounded-md  -rotate-1 md:rotate-0 group-hover:-rotate-2 dark:hover:text-gray-50 hover:text-blue-500 hover:animate-pulse"
          >
            {siteMetadata.author}
            {` © ${new Date().getFullYear()}`}
          </Link>
        </div>
      </div>
      <div className="inline-flex ml-6 space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        <SocialIcon kind="github" href={siteMetadata.github} size="6" />
      </div>
    </footer>
  )
}
