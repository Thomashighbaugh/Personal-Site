import Image from 'next/image';

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
				className="object-cover w-full h-full rounded-3xl select-none hover:shadow-xl"
				draggable={false}
				layout="responsive"
				src={src}
			/>
			<figcaption>{alt ?? caption}</figcaption>
		</figure>
	);
}
