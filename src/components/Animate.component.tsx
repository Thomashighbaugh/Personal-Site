import { animate, spring } from "motion";
import { isCrawlerUserAgent } from "is-web-crawler";
import { useEffect, useRef } from "react";
import { useMedia } from "react-use";

import { usePersistentState } from "~/lib";

import type {
  AnimationOptionsWithOverrides,
  MotionKeyframesDefinition,
} from "@motionone/dom";
import type { ComponentPropsWithRef, ElementType } from "react";

type AnimateProps<T extends ElementType> = {
  animation: MotionKeyframesDefinition;
  as?: T;
  enabled?: boolean;
  transition?: AnimationOptionsWithOverrides;
} & Omit<ComponentPropsWithRef<T>, "animation" | "as" | "transition">;

const defaultTransition: AnimationOptionsWithOverrides = {
  delay: 1.25,
  duration: 1000,
  easing: spring(),
  repeat: 0,
};

export function Animate<T extends ElementType>({
  animation,
  as: Component = "div" as T,
  children,
  enabled = true,
  transition,
  ...rest
}: AnimateProps<T>): JSX.Element {
  const prefersReducedMotion = useMedia("(prefers-reduced-motion)", true);

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (
      ref.current &&
      enabled &&
      !(prefersReducedMotion || isCrawlerUserAgent())
    )
      animate(ref.current, animation, {
        ...defaultTransition,
        ...transition,
      });
  }, [animation, enabled, prefersReducedMotion, transition]);

  return (
    // @ts-expect-error Valid component
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
}
