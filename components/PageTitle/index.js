export default function PageTitle({ children }) {
  return (
    <h1 className="text-5xl leading-9 text-extrabold tracking-tight text-gray-400 dark:text-gray-50 sm:text-4xl sm:leading-10 md:leading-14">
      {children}
    </h1>
  );
}
