import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../Link'
import SectionContainer from '../SectionContainer'
import Footer from '../Footer'
import MobileNav from '../MobileNav'
import ThemeSwitch from '../ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <header className="flex items-center justify-between px-8 py-2 mt-4 lg:mt-0 bg-white border-4 border-gray-500 rounded-2xl dark:bg-gray-800 dark:border-gray-300 bg-opacity-75 dark:bg-opacity-75">
        <div>
          <div className="relative inline-block transform group ">
            <Link
              href="/"
              className="inline-block transition-transform ease-linear transform rotate-0 group-hover:-rotate-22 duration-400 "
            >
              <Logo />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 text-sm text-links sm:p-4 hover:text-blue-300 dark:hover:text-gray-50 dark:text-gray-200 font-headline"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main className="pr-4 pl-4  pt-8 pb-8 lg:p-4 lg:pt-4 lg:pb-4  my-6  font-sans bg-white border-4 border-gray-500 rounded-2xl dark:bg-gray-800 dark:border-gray-300 dark:bg-opacity-75 bg-opacity-75">
        {children}
      </main>
      <Footer />
    </SectionContainer>
  )
}

export default LayoutWrapper
