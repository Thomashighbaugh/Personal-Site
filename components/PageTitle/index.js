export default function PageTitle({ children }) {
  return (
    <h1 className="text-5xl leading-9 tracking-tight text-gray-400 text-extrabold dark:text-gray-50 sm:text-4xl ">
      {children}
    </h1>
  );
}
