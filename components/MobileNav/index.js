import { useState } from "react";
import Link from "../Link";
import headerNavLinks from "@/data/headerNavLinks";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className="md:hidden ">
      <button
        type="button"
        className="w-16 h-16 ml-16 mr-5 bg-gray-500 dark:bg-gray-50 rounded-2xl bg-hero-morphing-diamonds-dark   transform rotate-0 hover:rotate-8 dark:bg-gray-50 transition-transform ease-linear border-2 p-2"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-50  dark:text-gray-500"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed w-full h-screen top-32 right-0 bg-gray-50 dark:bg-gray-800
  opacity-90 z-10 transform ease-in-out duration-1000 ${
    navShow ? "translate-x-0" : "translate-x-full"
  }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full    bg-hero-morphing-diamonds-dark 
 h-full cursor-auto focus:outline-none align-middle"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link) => (
            <div
              key={link.title}
              className="my-12 mx-half border-2 rounded-2xl p-4 text-center w-full m-0justify-items-center justify-center bg-hero-d
              dark:hover:border-gray-200 hover:border-blue-500  bg-gray-700  "
            >
              <Link
                href={link.href}
                className="text-6xl font-black tracking-widest    text-gray-500
                hover:text-blue-500
                dark:hover:text-gray-200  dark:text-gray-50 "
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
