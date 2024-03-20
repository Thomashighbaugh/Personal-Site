import { Icon } from "@iconify/react";
import { Layout } from "~/layouts";
import { Button } from "..";
import { NavigationItemType } from "~/types";

interface ErrorProps {
  routeBlog?: boolean;
}

export function Error({ routeBlog = true }: ErrorProps): JSX.Element {
  return (
    <Layout.Error>
      <div className="flex min-h-full flex-grow pb-12 pt-16">
        <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Icon
              className="h-12 w-auto text-primary-500"
              icon="feather:alert-circle"
            />
          </div>
          <div className="py-4 text-center">
            <h1 className="blog-title mt-2 text-4xl font-extrabold tracking-tight text-primary-500 dark:text-white sm:text-5xl">
              No Posts Found
            </h1>
            <p className="mt-4 text-sm font-medium text-primary-300 dark:text-primary-400">
              Sorry, we couldn’t find any blog posts ¯\_(ツ)_/¯
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <Button.Standard
                icon="feather:arrow-left"
                onClick={(): void => history.go(-1)}
                type={NavigationItemType.ACTION}
              >
                Back
              </Button.Standard>
              <Button.Standard
                href="/"
                icon="feather:home"
                type={NavigationItemType.LINK}
              >
                Home
              </Button.Standard>
              {routeBlog && (
                <Button.Standard
                  href="/blog"
                  icon="feather:book"
                  type={NavigationItemType.LINK}
                >
                  Blog
                </Button.Standard>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout.Error>
  );
}
