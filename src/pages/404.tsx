import { Icon } from "@iconify/react";

import { Button } from "~/components";
import { Layout } from "~/layouts";
import { NavigationItemType } from "~/types";

export default function Error(): JSX.Element {
  return (
    <Layout.Error>
      <div className="flex min-h-full flex-grow pb-12 pt-16">
        <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Icon
              className="h-12 w-auto text-primary-500"
              icon="feather:alert-triangle"
            />
          </div>
          <div className="py-4 text-center">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-primary-500 dark:text-white sm:text-5xl">
              Whoops!
            </h1>
            <p className="mt-8 text-sm font-medium text-primary-300 dark:text-primary-400">
              You have navigated to a page that does not exist! If you were
              brought here by an internal link please send me an email{" "}
              <a href="mailto:me@thomasleonhighbaugh.me">
                me@thomasleonhighbaugh.me
              </a>
              .
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <Button.Standard
                type={NavigationItemType.ACTION}
                onClick={(): void => history.go(-1)}
                icon="feather:arrow-left"
              >
                Back
              </Button.Standard>
              <Button.Standard
                type={NavigationItemType.LINK}
                href="/"
                icon="feather:home"
              >
                Home
              </Button.Standard>
            </div>
          </div>
        </div>
      </div>
    </Layout.Error>
  );
}
