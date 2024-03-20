import clsx from "clsx";
import { Icon } from "@iconify/react";

import type { WithChildren, WithClassName } from "~/types";

interface DatePillProps extends WithClassName, WithChildren {
  small?: boolean;
}

export function DatePill({
  children,
  className,
  small = false,
}: DatePillProps): JSX.Element {
  return (
    <div
      className={clsx(
        "inline-flex w-full justify-center rounded-lg border-2 border-primary-700 bg-white bg-opacity-15 text-sm text-primary-500 saturate-200 backdrop-blur-sm backdrop-filter dark:border-primary-400 dark:text-white sm:w-auto ",
        small ? "px-2 py-1" : "px-4 py-2",
        className,
      )}
    >
      <Icon
        className={clsx("mt-0.5", small ? "mr-1.5" : "mr-3")}
        icon="feather:calendar"
      />
      {children}
    </div>
  );
}
