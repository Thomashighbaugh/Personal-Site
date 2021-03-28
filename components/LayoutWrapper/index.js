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
      <header className="flex items-center justify-between px-8 py-0 bg-white border-4 border-gray-500 rounded-2xl dark:bg-gray-900 dark:border-gray-300">
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
        <div className="flex items-center leading-5">
          <div className="hidden md:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 text-xl font-black text-links sm:p-4 hover:text-blue-300 dark:hover:text-gray-50"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main className="p-6 pt-24 pb-24 mt-2 mb-2 bg-white border-4 border-gray-500 rounded-2xl dark:bg-gray-900 dark:bg-gray-700 dark:border-gray-300">
        {children}
      </main>
      <Footer />
    </SectionContainer>
  )
}

export default LayoutWrapper
