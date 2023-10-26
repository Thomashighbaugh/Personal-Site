import NProgress from "nprogress";
import splitbee from "@splitbee/web";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffectOnce, useEvent } from "react-use";
import { useRouter } from "next/router";
import "~/styles/global.css";
import "nprogress/nprogress.css";
import "windi.css";

import { useClick } from "~/lib";
import { Theme } from "~/types";

NProgress.configure({
  easing: "ease-out",
  minimum: 0.3,
  showSpinner: false,
  speed: 800,
});

export { reportWebVitals } from "next-axiom";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [play] = useClick();

  useEvent("mousedown", () => play());
  useEvent("mouseup", () => play());

  useEffectOnce(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());

    if (process.env.NODE_ENV === "production")
      splitbee.init({
        disableCookie: true,
      });
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={Theme.SYSTEM}
      themes={Object.values(Theme)}
    >
      <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
