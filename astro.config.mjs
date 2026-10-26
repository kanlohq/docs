// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";

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
      components: {
        Footer: "./src/components/Footer.astro",
      },
      plugins: [
        starlightSidebarTopicsPlugin(
          [
            {
              id: "free-pro-team",
              label: {
                en: "Free, Pro & Team",
                de: "Free, Pro & Team",
              },
              link: "/",
              items: [
                {
                  label: "Guides",
                  items: [{ autogenerate: { directory: "guides" } }],
                },
                {
                  label: "Reference",
                  items: [{ autogenerate: { directory: "reference" } }],
                },
              ],
            },
            {
              id: "enterprise-cloud",
              label: {
                en: "Enterprise Cloud",
                de: "Enterprise Cloud",
              },
              link: "/enterprise-cloud-latest",
              items: [{ autogenerate: { directory: "/enterprise-cloud-latest" } }],
            },
            {
              id: "enterprise-server-1-0",
              label: {
                en: "Enterprise Server 1.0",
                de: "Enterprise Server 1.0",
              },
              link: "/enterprise-server-1-0",
              items: [{ autogenerate: { directory: "/enterprise-server-1-0" } }],
            },
          ],
          {
            topics: {
              "free-pro-team": ["/guides/**/*", "/reference/**/*"],
              "enterprise-server-1-0": ["/enterprise-server-1-0/**/*"],
              "enterprise-cloud": ["/enterprise-cloud-latest/**/*"],
            },
          },
        ),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
