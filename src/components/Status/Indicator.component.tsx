import clsx from "clsx";

import type { WithClassName } from "~/types";

interface IndicatorProps extends WithClassName {
  color?: string;
  pulse?: boolean;
}

export function Indicator({
  className,
  pulse = false,
}: IndicatorProps): JSX.Element {
  return (
    <span
      className={clsx(
        "relative mr-3 inline-flex h-5 w-5 items-center justify-center",
        className,
      )}
    >
      <span className="absolute flex h-3 w-3">
        {pulse && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75 motion-safe:animate-ping" />
        )}
        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-600" />
      </span>
    </span>
  );
}
