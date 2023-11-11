import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";
import { Animate } from "~/components";
import Image from "next/image";

interface CardProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function Card({ children, ...rest }: CardProps): JSX.Element {
  const description = `Web Developer | Linux Professional | Digital Artist`;
  const location = `San Francisco, California`;
  return (
    <Animate
      as="div"
      animation={{
        opacity: [0, 1],
        scale: [0.25, 1],
      }}
      className="col-start-1 row-start-1 content-center items-center justify-center self-center text-center align-middle text-4xl font-extrabold tracking-tight text-black dark:text-white"
    >
      <div className="mx-2 mr-0 flex uppercase content-center justify-center rounded-md border-b-6 border-r-6 border-l-2 border-t-2 dark:border-white border-black dark:bg-primary-800 bg-white p-2 font-black shadow-md shadow-black sm:mr-0 md:mr-4 md:inline-flex lg:mr-4 lg:inline-flex xl:mr-4 xl:inline-flex">
        <div className="max-w-5xl">
          <h1 className="pb-3 pt-4 text-left text-xl text-gray-700 shadow-[0 1.2px 1.2px_rgba(0,0,0,0.8)] md:text-2xl lg:text-3xl dark:text-white xl:text-3xl">
            Thomas Leon Highbaugh
          </h1>
          <h2 className="text-left font-black text-black text-sm sm:text-md  motion-safe:animate-pulse md:text-lg lg:text-lg xl:text-xl dark:text-primary-50 ">
            {description}
            <br />
            {location}
          </h2>
        </div>
        <Image
          className="min-w-36 min-h-36 justify-center"
          height={108}
          width={108}
          src="/hero-image.png"
          alt="logo of Thomas Leon Highbaugh"
        />
      </div>
    </Animate>
  );
}
