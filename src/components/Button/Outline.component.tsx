import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@iconify/react";

import type { AnchorHTMLAttributes } from "react";

import type { WithClassName } from "~/types";

interface OutlineProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    WithClassName {
  external?: boolean;
  icon?: string;
  small?: boolean;
}

export function Outline({
  children,
  className,
  external = false,
  href,
  icon,
  onClick,
  small = false,
  ...rest
}: OutlineProps): JSX.Element {
  return (
    <Link
      passHref
      className={clsx(
        "dark:(border-primary-300 text-white) default-transition default-focus inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-primary-800 bg-white  bg-opacity-10 bg-opacity-10 font-extrabold text-primary-700 filter backdrop-blur-sm backdrop-filter hover:bg-opacity-50 dark:hover:bg-opacity-50 dark:hover:text-primary-300 sm:w-auto",
        small ? "px-4 py-1 text-sm" : "px-8 py-2",
        className,
      )}
      href={href}
      onClick={(...args): void => onClick && onClick(...args)}
      rel="noopener noreferrer"
      target={external ? "_blank" : undefined}
      {...rest}
    >
      {icon && <Icon className="mr-3 mt-1" icon={icon} />}
      {children}
    </Link>
  );
}
