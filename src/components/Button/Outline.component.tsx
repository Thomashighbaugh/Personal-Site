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
        " btn-outline text-black ",
        small ? "px-4 py-2 text-sm w-auto" : "px-8 py-4",
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
