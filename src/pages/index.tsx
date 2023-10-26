import { Icon } from "@iconify/react";

import { Animate, Button, Pill, Hero } from "~/components";
import { NavigationItemType } from "~/types";
import { Layout } from "~/layouts";

import type { NavigationItem } from "~/types";

const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: "/blog",
    icon: <Icon className="mr-3" icon="feather:edit-3" />,
    text: "Blog",
  },
  {
    type: NavigationItemType.LINK,
    href: "/projects",
    icon: <Icon className="mr-3" icon="feather:copy" />,
    text: "Projects",
  },
  {
    type: NavigationItemType.LINK,
    external: true,
    href: "https://github.com/Thomashighbaugh",
    icon: <Icon className="mr-3" icon="feather:github" />,
    text: "GitHub",
  },
];

export default function HomePage(): JSX.Element {
  const description = `Web Developer | Linux Professional | Digital Artist`;
  const location = `San Francisco, California`;
  return (
    <Layout.Default>
      <div className="flex min-h-screen flex-col items-center justify-between py-4">
        <div className="space-2 grid w-full max-w-md text-center sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl">
          <Animate
            as="h1"
            animation={{
              opacity: [0, 1],
              scale: [0.25, 1],
            }}
            className="z-5 index-title col-start-1 row-start-1 content-center items-center justify-center self-center text-center align-middle text-4xl font-black tracking-tight text-white opacity-100 drop-shadow-md dark:text-white sm:text-4xl md:text-4xl lg:text-5xl"
          >
            <Pill.Standard>Thomas Leon Highbaugh</Pill.Standard>
          </Animate>
          <Hero.SVG />

          <Animate
            as="p"
            animation={{
              opacity: [0, 1],
              scale: [0.75, 1],
            }}
            className="mx-auto mb-2 mt-0 w-full items-center justify-center self-center text-center text-base font-black text-primary-700 drop-shadow-md dark:text-white sm:text-lg md:text-xl"
            transition={{
              delay: 1.25,
            }}
          >
            {description}
            <br />
            {location}
          </Animate>

          <div className="mt-6 flex w-full flex-col items-center justify-center space-y-1 sm:mt-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            {ACTIONS.map((action, index) => {
              if (action.type !== NavigationItemType.LINK) return null;

              return (
                <Animate
                  animation={{
                    y: [50, 0],
                    opacity: [0, 1],
                  }}
                  className="w-full sm:w-auto"
                  key={index}
                  transition={{
                    delay: 0.1 * (index + 2) + 0.5,
                  }}
                >
                  <Button.Outline href={action.href}>
                    {action.icon}
                    <span>{action.text}</span>
                  </Button.Outline>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>
    </Layout.Default>
  );
}
