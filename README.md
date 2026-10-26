# Kanlo Docs

Documentation for [Kanlo](https://kanlo.cc), built with [Astro Starlight](https://starlight.astro.build) and Tailwind CSS.

## Tech stack

- [Astro](https://astro.build) with [Starlight](https://starlight.astro.build)
- [Tailwind CSS](https://tailwindcss.com) via `@tailwindcss/vite`
- Custom theme in `src/styles/global.css`, matching the Kanlo design tokens

## Getting started

Requirements: Node.js 18.20.8+ / 20.3+ / 22+ and npm (or your package manager of choice).

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the production build locally     |

## Project structure

```text
.
├── public/                  # Static assets (favicon.svg, favicon.ico, ...)
├── src/
│   ├── assets/              # Images used in docs
│   ├── content/
│   │   └── docs/            # Documentation pages (.md / .mdx)
│   │       ├── guides/
│   │       └── reference/
│   └── styles/
│       └── global.css       # Tailwind import + Starlight theme variables
├── astro.config.mjs         # Astro + Starlight configuration
└── package.json
```

## Writing docs

- Pages live in `src/content/docs/` as `.md` or `.mdx`. Each file becomes a route based on its path.
- Every page needs at least a `title` in its frontmatter:

  ```md
  ---
  title: Example Guide
  description: Short summary shown in search results.
  ---
  ```

- The sidebar is configured in `astro.config.mjs`. The `Reference` section is generated automatically from `src/content/docs/reference/`. New guides must be added to the `Guides` section manually via their `slug`.
- Static files (favicons, downloads) go in `public/` and are referenced with an absolute path such as `/favicon.svg`.

## Theming

Colors are defined as Starlight CSS variables (`--sl-color-*`) in `src/styles/global.css`, with separate values for dark mode (`:root`) and light mode (`:root[data-theme='light']`). They are derived from the Kanlo design tokens so the docs match the product.

## Deployment

<Describe how the docs are deployed, e.g. Dokploy, Docker, or static hosting of `dist/`.>

## License

The documentation content (`src/content/docs/` and `src/assets/`) is licensed under
[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](./LICENSE).

The site source code (configuration, styles, components) is licensed under the [MIT License](./LICENSE-CODE).

The Kanlo name and logo are trademarks of RealGolf.Games UG (haftungsbeschränkt) and are not covered by these licenses.
