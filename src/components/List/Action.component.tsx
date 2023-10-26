import clsx from "clsx";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
} from "react";
import {Button} from '~/components';

type ActionProps = {
  as?: ElementType;
} & (
  | ({
      as?: "button";
    } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Action({
  as: Component = "button",
  children,
  className,
  ...rest
}: ActionProps): JSX.Element {
  return (
    <Button.Standard
      className={clsx(
        "border-1 dark:(text-primary-50  bg-primary-900) hover:(text-primary-900 bg-primary-200) dark:(hover:bg-primary-700 hover:text-primary-300) hover:-rotate-22 relative bottom-0 mx-1 inline-flex h-12 w-12 rotate-0 transform justify-center self-center rounded-xl border-primary-700 bg-white px-1 py-1 text-primary-700 transition-transform ease-linear dark:border-primary-400",
        className,
      )}
      {...rest}
    >
      {children}
    </Button.Standard>
  );
}
