import clsx from "clsx";
import { Icon } from "@iconify/react";

import type { WithChildren, WithClassName } from "~/types";

interface PrefixPillProps extends WithClassName, WithChildren {
  small?: boolean;
}

export function PrefixPill({
  children,
  className,
  small = false,
}: PrefixPillProps): JSX.Element {
  return (
    <div
      className={clsx(
        "max-w-72 tracking wide justify-center rounded-lg border-2 border-primary-700 bg-white bg-white bg-opacity-10 text-xl font-extrabold  uppercase text-primary-500 saturate-200 backdrop-blur-sm backdrop-filter dark:border-primary-400 dark:bg-primary-900 dark:bg-opacity-10 dark:text-white sm:w-auto ",
        small ? "px-2 py-1" : "px-4 py-2",
        className,
      )}
    >
      <Icon
        className={clsx("mt-0.5", small ? "mr-1.5" : "mr-3")}
        icon="feather:laptop"
      />
      {children}
    </div>
  );
}
