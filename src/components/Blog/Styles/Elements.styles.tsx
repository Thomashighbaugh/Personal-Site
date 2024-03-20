export function ElementsStyles(): JSX.Element {
  return (
    <style global jsx>
      {`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          @apply text-primary-600 dark:text-white;
        }
        a {
          @apply rounded no-underline transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2 dark:text-gray-50;

          .item {
            @apply border-b-0 no-underline opacity-60 transition duration-300 ease-in-out;

            &:hover {
              @apply opacity-100;
            }
          }
        }

        p,
        ul,
        li {
          @apply text-primary-600 dark:text-white;
        }

        strong {
          @apply dark:text-white;
        }

        img {
          @apply select-none rounded-3xl object-cover transition duration-300 ease-in-out hover:shadow-xl;
        }

        figcaption {
          @apply text-center text-primary-200 dark:text-primary-200;
        }

        hr {
          @apply my-4 dark:border-primary-600;
        }

        code {
          @apply bg-primary-200 text-blue-500;

          &:after,
          &:before {
            @apply hidden;
          }
        }

        pre {
          @apply m-0 rounded-xl border-2 border-primary-400 dark:border-primary-400 dark:text-white;
        }

        th {
          @apply rounded-xl dark:text-white;
        }

        td {
        }

        ol li::before {
          @apply rounded-xl;
        }

        .remark-code-title {
          @apply g-white rounded-lg border-2 border-primary-600 px-4 py-2 font-medium text-primary-600 dark:border-primary-400 dark:text-white;
        }
      `}
    </style>
  );
}
