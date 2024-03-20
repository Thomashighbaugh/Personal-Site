interface XStreamableProps {
  id: string;
  loop?: boolean;
  title: string;
}

export function XStreamable({
  id,
  loop = false,
  title,
}: XStreamableProps): JSX.Element {
  return (
    <div className="relative my-2 h-0 w-full pb-[56.250%]">
      <iframe
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg border-none"
        frameBorder={0}
        height="100%"
        loading="lazy"
        src={`https://streamable.com/e/${id}?loop=${Number(loop)}`}
        title={title}
        width="100%"
      />
    </div>
  );
}
