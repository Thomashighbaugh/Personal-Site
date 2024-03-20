import Image from "next/image";
import Link from "next/link";

import { Pill } from "~/components";

import type { FrontMatter } from "~/types";

interface LatestProps {
  frontmatter: FrontMatter;
}

export function Latest({ frontmatter }: LatestProps): JSX.Element {
  const ariaLabel = `Read blog post: ${frontmatter.title}`;
  const href = `/blog/${frontmatter.slug}`;

  return (
    <Link
      aria-label={ariaLabel}
      className="default-transition default-focus mt-12 flex transform cursor-pointer flex-col rounded-2xl border-2 border-primary-100 bg-white/75 backdrop-blur-sm backdrop-filter hover:shadow-xl motion-safe:hover:-translate-y-1 dark:border-primary-500 dark:bg-primary-900/75 lg:flex-row"
      href={href}
    >
      {(frontmatter.banner_show ?? true) && (
        <div className="default-transition relative my-auto flex h-48 w-full justify-center overflow-hidden rounded-2xl rounded-b-none border-b-2 border-primary-100 dark:border-primary-500 sm:h-48 sm:border-0 sm:border-r-2 lg:h-64 lg:max-w-xl lg:rounded-l-2xl lg:rounded-r-none xl:w-2/4">
          <div className="lg:(rounded-l-lg motion-safe:animate-pulse) mb-8 h-full w-full rounded-lg rounded-l-none rounded-r-none bg-primary-200 dark:bg-primary-600" />
          <Image
            alt={frontmatter.banner_alt ?? frontmatter.title}
            className="lg:(rounded-l-lg rounded-r-none) absolute left-0 top-0 h-full w-full select-none rounded-lg rounded-b-none object-cover"
            draggable={false}
            layout="fill"
            src={frontmatter.banner}
          />
        </div>
      )}
      <div className="m-auto flex flex-1 flex-col justify-evenly pb-3 text-primary-300 dark:text-primary-400 sm:m-0 sm:p-1 sm:pt-0 lg:px-12">
        <h2 className="blog-title mx-4 mt-6 line-clamp-4 py-4 text-left text-3xl font-bold text-primary-500 dark:text-white sm:text-4xl lg:mx-0 lg:mt-0 lg:text-5xl">
          {frontmatter.title || frontmatter.title}
        </h2>
        {((frontmatter.description && frontmatter.description_show) ||
          true) && (
          <p className="mx-6 mt-6 line-clamp-3 text-lg lg:mx-0 lg:mt-0">
            {frontmatter.description || frontmatter.description}
          </p>
        )}
        <div className="mx-6 mt-6 flex items-center pb-4 lg:mx-0 lg:mt-0 lg:pb-0">
          <Pill.Date>{frontmatter.date}</Pill.Date>
        </div>
      </div>
    </Link>
  );
}
