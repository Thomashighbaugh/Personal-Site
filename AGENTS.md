# AGENTS.md

## Build, Lint, and Test Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`
- Auto-fix lint: `npm run lint:fix`
- Run Astro CLI: `npm run astro -- <command>`
- To run a single test: (No test script found; add if needed)

## Code Style Guidelines
- **Imports:** Use named imports, type imports, and single quotes.
- **Formatting:**
  - Print width: 120
  - No semicolons
  - Single quotes
  - Trailing commas (es5)
- **Types:** Use TypeScript, strict null checks enabled.
- **Naming:** camelCase for functions/variables, PascalCase for components.
- **Error Handling:** Keep utility functions simple; add error handling as needed.
- **Astro/SolidJS:** Use `.astro` for pages/components, `.tsx` for SolidJS components.
- **Tailwind:** Use utility classes, extend theme in `tailwind.config.mjs`.
- **File Paths:** Use `@/*` alias for imports from `src/`.

## Special Rules
- No Cursor or Copilot rules found.
- Follow conventions above for consistency.
