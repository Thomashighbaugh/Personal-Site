thomasleonhighbaugh.me

This is my personal website — a portfolio and a working example of the stack I use.

Built with Astro, TypeScript, Tailwind CSS, and deployed on Vercel (or any similar host).

## Technical architecture

Core framework and build

The site uses Astro with an islands approach: most pages are static HTML and small interactive pieces hydrate only when needed. Routing is file-based and content collections are typed for blogs, projects, and legal pages.

Pages are pre-rendered at build time for predictable performance. TypeScript runs with strict checks to catch issues early.

Styling and design

Tailwind CSS handles most styling. Highlights:

- `@tailwindcss/typography` for post content
- a few small, deliberate animations
- class-based dark mode
- Atkinson font with system fallbacks

The site favors utility classes and small, focused component styles.

Content and types

Content uses Astro collections validated with Zod. Collections include:

- Blog: title, summary, date, tags, draft flag
- Projects: demo and repo URLs
- Legal: privacy and terms
- Work: employment history and roles

Posts are written in Markdown; MDX is available for embedded components.

Interactive components

SolidJS powers small interactive pieces. Examples:

- Fuse.js for client-side search
- persistent theme switching
- responsive drawer and header

Most pages remain static; interactive bits hydrate independently to keep the bundle small.

Search

Client-side search uses Fuse.js and looks across titles, summaries, tags, and slugs with a moderate fuzzy threshold.

Visual effects

Lightweight SVG and CSS animations provide atmosphere without slowing things down. Timings are tuned to avoid jank on mid-range devices.

SEO and web standards

The site uses semantic HTML, Open Graph meta tags, RSS feeds, an auto-generated sitemap, and basic Schema.org markup.

Development

Tooling focuses on fast feedback:

- TypeScript with strict checks
- ESLint for linting
- HMR for quick iteration
- local network dev for testing on devices

Deployment and performance

The build output is static assets ready for CDN or edge hosting. Images are optimized with Sharp and code is split to keep initial loads small.

Configuration

Environment-specific constants live in `src/consts.ts` and provide site metadata, navigation, social links, and page settings.

## Deploy

Use the Vercel or Netlify one-click buttons in the repo, or deploy the static output to any CDN-compatible host.

## Development commands

Run these from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for Astro collections |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview your build locally before deploying      |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## Technical dependencies

Core framework

- Astro `^4.4.13`
- SolidJS `^1.8.15`
- TypeScript `^5.3.3`

Styling and UI

- Tailwind CSS `^3.4.1`
- `@tailwindcss/typography` `^0.5.10`
- clsx `^2.1.0`
- tailwind-merge `^2.2.1`

Content and search

- `@astrojs/mdx` `^2.1.1`
- Fuse.js `^7.0.0`
- `@astrojs/rss` `^4.0.5`
- `@astrojs/sitemap` `^3.1.1`

Build tools and optimization

- `@astrojs/check` `^0.5.6`
- Sharp `^0.33.2`

## License

MIT

## Acknowledgement

Architecture inspired by static-site best practices and a focus on performance.
