import Image from "next/image";
import Link from "next/link";

import { Pill } from "~/components";

import type { FrontMatter } from "~/types";
import clsx from "clsx";

interface PostProps {
  index: number;
  frontmatter: FrontMatter;
}

export function _Post({ index, frontmatter }: PostProps): JSX.Element {
  const ariaLabel = `Read blog post: ${frontmatter.title}`;
  const href = `/blog/${frontmatter.slug}`;

  return (
    <Link
      aria-label={ariaLabel}
      className="default-transition default-focus flex transform cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-primary-100 bg-white bg-opacity-75 backdrop-blur-sm backdrop-filter hover:shadow-xl motion-safe:hover:-translate-y-1 dark:border-primary-400 dark:bg-primary-900 dark:bg-opacity-75"
      href={href}
    >
      {frontmatter.banner && (
        <div className="relative my-auto flex w-full max-w-xl justify-center overflow-hidden rounded-t-lg">
          <div className="h-full w-full bg-primary-200 motion-safe:animate-pulse dark:bg-primary-600 lg:h-48" />
          <Image
            alt={frontmatter.title}
            className="absolute left-0 top-0 h-48 w-full select-none object-cover"
            draggable={false}
            width="100"
            height="100"
            loading="lazy"
            src={frontmatter.banner}
          />
        </div>
      )}

      <div
        className={clsx(
          "flex flex-1 flex-col justify-between rounded-2xl p-6 ",
          frontmatter.banner &&
            index <= 2 &&
            "lg:(rounded-tr-none rounded-tl-none)",
        )}
      >
        <div className="default-focus flex flex-1 flex-col justify-around rounded-lg text-primary-600 dark:text-white">
          <h4 className="dark:text-primary-50 text-lg font-black uppercase text-primary-900">
            {frontmatter.title}
          </h4>
          {((frontmatter.description && frontmatter.description_show) ||
            true) && (
            <p
              aria-label={frontmatter.description}
              className="mt-3 line-clamp-2 text-base"
            >
              {frontmatter.description}
            </p>
          )}
          <div className="mt-4 flex items-start space-x-1 text-sm">
            <Pill.Date>{frontmatter.date}</Pill.Date>
          </div>
        </div>
      </div>
    </Link>
  );
}
