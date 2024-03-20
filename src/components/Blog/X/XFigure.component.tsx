import Image from "next/image";

interface XFigureProps {
  alt?: string;
  caption?: string;
  src: string;
}

export function XFigure({ alt, caption, src }: XFigureProps): JSX.Element {
  return (
    <figure>
      <Image
        alt={alt ?? caption}
        className="h-full w-full select-none rounded-3xl object-cover hover:shadow-xl"
        draggable={false}
        layout="responsive"
        src={src}
      />
      <figcaption>{alt ?? caption}</figcaption>
    </figure>
  );
}
