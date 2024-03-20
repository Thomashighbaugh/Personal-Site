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
      className={clsx("pill-standard", className)}
      target="_blank"
      rel="noreferrer noopener"
      {...rest}
    >
      {children}
    </div>
  );
}
