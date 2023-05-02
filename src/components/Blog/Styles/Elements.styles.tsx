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
					@apply dark:text-white text-primary-600;
				}
				a {
					@apply dark:text-gray-50 no-underline rounded transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2;

					.item {
						@apply border-b-0 opacity-60 no-underline transition duration-300 ease-in-out;

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
					@apply rounded-3xl object-cover select-none hover:shadow-xl transition ease-in-out duration-300;
				}

				figcaption {
					@apply text-primary-200 dark:text-primary-200 text-center;
				}

				hr {
					@apply my-4 dark:border-primary-600;
				}

				code {
					@apply rounded-xl;

					&:after,
					&:before {
						@apply hidden;
					}
				}

				pre {
					@apply m-0 dark:text-white border-2 border-primary-400 dark:border-primary-400 rounded-xl;
				}

				th {
					@apply dark:text-white rounded-xl;
				}

				td {
				}

				ol li::before {
					@apply rounded-xl;
				}

				.remark-code-title {
					@apply g-white px-4 py-2 text-primary-600 dark:text-white font-medium border-2 border-primary-600 dark:border-primary-400 rounded-lg;
				}
			`}
		</style>
	);
}
