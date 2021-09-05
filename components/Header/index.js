import Link from '@/components/Link/index'

import MobileNav from '../MobileNav'
import ThemeSwitch from '../ThemeSwitch'
export default function Footer() {
  return (
    <header className="flex items-center justify-between px-8 lg:py-0  mt-0 bg-white border-4 border-gray-500 rounded-2xl dark:bg-gray-800 dark:border-gray-300">
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
              className="p-1 text-xl font-black text-links sm:p-4 hover:text-blue-300 dark:hover:text-gray-50 transform rotate-0 group-hover:-rotate-22 duration-400 "
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}
