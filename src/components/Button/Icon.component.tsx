import clsx from "clsx";
import { forwardRef } from "react";

import type { ButtonHTMLAttributes } from "react";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
  { children, className, onClick, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={clsx("group", "btn-icon", className)}
      onClick={(e): void => onClick && onClick(e)}
      {...rest}
    >
      {children}
    </button>
  );
});
