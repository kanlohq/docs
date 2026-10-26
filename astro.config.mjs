// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.kanlo.cc",
  integrations: [
    starlight({
      title: {
        en: "Kanlo Docs",
        de: "Kanlo Doku",
      },
      favicon: "/favicon.svg",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
        },
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "48x48",
          },
        },
      ],
      customCss: ["./src/styles/global.css"],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/kanlohq" }],
      editLink: {
        baseUrl: "https://github.com/kanlohq/docs/edit/main/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
