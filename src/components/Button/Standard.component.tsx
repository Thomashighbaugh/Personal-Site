import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { NavigationItemType } from "~/types";

import type { MouseEvent } from "react";

import type { WithChildren, WithClassName } from "~/types";

interface DefaultProps extends WithClassName, WithChildren {
  icon?: string;
}

type StandardProps =
  | ({
      type: NavigationItemType.ACTION;
      onClick: (e: MouseEvent) => void;
    } & DefaultProps)
  | ({
      type: NavigationItemType.LINK;
      href: string;
      external?: boolean;
    } & DefaultProps);

const ButtonStyles =
  "flex justify-center items-center h-12 px-8 py-4 bg-white hover:(bg-opacity-10 text-primary-600) dark:(bg-primary-900 hover:bg-opacity-10 ) bg-opacity-10 hover:bg-opacity-50 text-base font-bold text-primary-600 rounded-lg backdrop-filter backdrop-blur-sm filter default-transition default-focus";

export function Standard({
  children,
  className,
  icon,
  ...rest
}: StandardProps): JSX.Element {
  switch (rest.type) {
    case NavigationItemType.LINK:
      if (rest.external ?? true)
        return (
          <a {...rest} className={clsx(ButtonStyles, className)}>
            {icon && <Icon className="mr-2" icon={icon} />}
            {children}
          </a>
        );

      return (
        <Link
          {...rest}
          className={clsx(ButtonStyles, className)}
          href={rest.href}
        >
          {icon && <Icon className="mr-2" icon={icon} />}
          {children}
        </Link>
      );

    case NavigationItemType.ACTION:
      return (
        <button
          {...rest}
          className={clsx(ButtonStyles, className)}
          onClick={(e): void => rest.onClick(e)}
          type="button"
        >
          {icon && <Icon className="mr-2" icon={icon} />}
          {children}
        </button>
      );
  }
}
