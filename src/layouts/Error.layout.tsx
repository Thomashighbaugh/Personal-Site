import { NextSeo } from "next-seo";

import { useSeoProps } from "~/lib";

import type { WithChildren, WithProps } from "~/types";

import profile from "~/data/profile.json";
import type { Profile } from "~/types/profile";
const { alias } = profile as unknown as Profile;

interface DefaultLayoutProps extends WithChildren {
  seo?: Partial<WithProps<typeof NextSeo>>;
}

export function ErrorLayout({
  children,
  seo,
}: DefaultLayoutProps): JSX.Element {
  const seoProps = useSeoProps({
    title: `${alias} ─ Page Reached In Error!`,
    ...seo,
  });

  return (
    <>
      <NextSeo {...seoProps} />
      <main className="flex flex-col justify-center px-8">
        <div className="relative h-screen px-4 pb-20 pt-24 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28">
          {children}
        </div>
      </main>
    </>
  );
}
