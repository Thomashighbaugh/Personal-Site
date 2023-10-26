import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function Standard({
  children,
  className,
  ...rest
}: StandardPillProps): JSX.Element {
  return (
    <div
      className={clsx(
        "default-transition default-focus inline-flex rounded-2xl border-2 border-primary-700 bg-white bg-opacity-20 px-4 py-4 filter backdrop-blur-sm backdrop-filter dark:border-primary-300 dark:bg-primary-900 dark:bg-opacity-20 dark:text-white lg:px-8 xl:px-8",
        className,
      )}
      target="_blank"
      rel="noreferrer noopener"
      {...rest}
    >
      {children}
    </div>
  );
}
