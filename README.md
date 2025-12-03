# Thomas Leon Highbaugh

Thomas Leon Highbaugh is a modern, statically generated portfolio and blog built on cutting-edge web technologies, emphasizing performance, developer experience, and maintainable architecture.

## 🏗️ Technical Architecture

### Core Framework & Build System

The site leverages **Astro** as its primary framework, utilizing its islands architecture to deliver optimal performance through selective hydration. Astro's file-based routing system manages page generation, while its content collections API provides type-safe content management for blogs, projects, and legal documents.

The build process employs Astro's static site generation capabilities, pre-rendering all pages at build time to deliver maximum performance and SEO benefits. TypeScript compilation is integrated into the build pipeline with strict null checks enabled, ensuring robust type safety throughout the application.

### Styling & Design System

**Tailwind CSS** serves as the primary styling framework, configured with custom theme extensions including:

- **Typography System**: Extended with `@tailwindcss/typography` for rich content rendering
- **Custom Animations**: CSS keyframe animations for `twinkle` and `meteor` effects creating dynamic visual elements
- **Dark Mode**: Class-based dark mode implementation with seamless theme switching
- **Custom Fonts**: Atkinson font family integration with fallback to system fonts

The design system emphasizes utility-first CSS with component-specific styling where necessary, maintaining consistency while allowing for flexible customization.

### Content Management & Type Safety

The site implements Astro's content collections system with Zod schema validation, providing:

- **Blog Collection**: Typed content with title, summary, date, tags, and draft status
- **Projects Collection**: Extended with demo and repository URLs
- **Legal Collection**: Simplified schema for privacy and terms documents
- **Work Collection**: Employment history with date ranges and role information

Content is authored in Markdown with MDX support for embedded components, enabling rich interactive content while maintaining the simplicity of Markdown authoring.

### Interactive Components & State Management

SolidJS powers the site's interactive components, chosen for its fine-grained reactivity and minimal runtime overhead:

- **Search Functionality**: Implements Fuse.js for fuzzy search across blog posts and projects with real-time filtering
- **Theme Management**: Reactive theme switching with persistence
- **Navigation**: Dynamic drawer and header components with responsive behavior

The hybrid approach allows static content to remain purely HTML while enabling interactive features where needed, optimizing for both performance and user experience.

### Search & Discovery

The search system utilizes **Fuse.js** for client-side fuzzy search capabilities:

```typescript
const fuse = new Fuse(data, {
  keys: ["slug", "data.title", "data.summary", "data.tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.4,
})
```

This configuration searches across content titles, summaries, tags, and slugs with configurable match thresholds and minimum query lengths.

### Visual Effects & Animation System

The site features custom CSS animations and JavaScript-driven visual effects:

- **Twinkling Stars**: Procedurally generated SVG stars with CSS keyframe animations
- **Meteor Shower**: Animated background elements using transform and opacity transitions
- **Smooth Transitions**: Hardware-accelerated CSS transitions for theme changes and interactions

Animation timing and easing are carefully tuned for 60fps performance across devices.

### SEO & Web Standards

The architecture prioritizes web standards and SEO optimization:

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Open Graph**: Dynamic meta tag generation for social media sharing
- **RSS/Atom Feeds**: Automatically generated XML feeds for blog and project content
- **Sitemap Generation**: Automated sitemap creation via Astro's sitemap integration
- **Structured Data**: Schema.org markup for enhanced search engine understanding

### Development Environment

The development stack emphasizes modern tooling and developer experience:

- **TypeScript**: Strict type checking with path mapping for clean imports
- **ESLint**: Code linting with modern ECMAScript rules
- **Hot Module Replacement**: Instant development server updates
- **Network Development**: Local network access for cross-device testing

### Deployment & Performance

The static build output is optimized for edge deployment:

- **Asset Optimization**: Automatic image optimization via Sharp
- **Bundle Splitting**: Intelligent code splitting for optimal loading
- **CDN Ready**: Static assets suitable for global CDN distribution
- **Edge Compatibility**: Serverless deployment ready for Vercel, Netlify, and similar platforms

### Configuration Management

Environment-specific configuration is centralized in `src/consts.ts`, providing type-safe access to:

- Site metadata and branding
- Navigation structure
- Social media links
- Page-specific configurations

This approach ensures consistency across components while maintaining flexibility for environment-specific deployments.

## 🚀 Deploy

[![Deploy with Vercel](_deploy_vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-sphere)  [![Deploy with Netlify](_deploy_netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-sphere)

## 💻 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for all Astro modules|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 📚 Technical Dependencies

### Core Framework
- **Astro** `^4.4.13` - Static site generator with islands architecture
- **SolidJS** `^1.8.15` - Reactive UI library for interactive components
- **TypeScript** `^5.3.3` - Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS** `^3.4.1` - Utility-first CSS framework
- **@tailwindcss/typography** `^0.5.10` - Rich text styling plugin
- **clsx** `^2.1.0` - Conditional class name utility
- **tailwind-merge** `^2.2.1` - Tailwind class merging utility

### Content & Search
- **@astrojs/mdx** `^2.1.1` - MDX support for Astro
- **Fuse.js** `^7.0.0` - Fuzzy search library
- **@astrojs/rss** `^4.0.5` - RSS feed generation
- **@astrojs/sitemap** `^3.1.1` - XML sitemap generation

### Build Tools & Optimization
- **@astrojs/check** `^0.5.6` - TypeScript checking for Astro files
- **Sharp** `^0.33.2` - High-performance image processing

## 🏛️ License

MIT

## ✨ Acknowledgement

Architecture inspired by modern static site generation principles and performance-first web development practices.