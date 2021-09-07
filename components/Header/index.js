/* eslint-disable no-undef */
import Link from '@/components/Link/index'

import MobileNav from '../MobileNav'
import ThemeSwitch from '../ThemeSwitch'
import { Logo } from '@/data/logo.svg'
export default function Footer() {
  return (
    <header className="flex items-center justify-between px-8 mt-0 bg-opacity-75 bg-white border-4 border-gray-500 lg:py-0 rounded-2xl dark:bg-gray-800 dark:border-gray-300">
      <div>
        <div className="relative inline-block transform group bg-opacity-75 ">
          <Link
            href="/"
            className="inline-block transition-transform ease-linear transform rotate-0 group-hover:-rotate-22 duration-400 "
          >
            <Logo />
          </Link>
        </div>
      </div>
      <div className="flex items-center bg-opacity-75">
        <div className="hidden md:block ">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 text-xl font-black transition-transform ease-linear transform rotate-0 text-links sm:p-4 hover:text-blue-300 dark:hover:text-gray-50 group-hover:-rotate-22 duration-400 "
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
