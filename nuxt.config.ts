import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "@nuxt/eslint"],
  content: {
    build: {
      markdown: {
        contentHeading: false,
        rehypePlugins: {
          "rehype-unwrap-images": {}
        }
      }
    },
    experimental: { nativeSqlite: true },
    renderer: {
      anchorLinks: false
    }
  },
  css: ["~/assets/styles/index.css"],
  googleFonts: {
    families: {
      Spectral: [400, 700]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr-FR"
      },
      title: "Semelles sans frontières 👣",
      titleTemplate: "%s | Semelles sans frontières 👣",
      meta: [
        { property: "og:title", content: "Semelles sans frontières 👣" },
        {
          property: "description",
          content:
            "Parcours d’un voyage à travers l’Europe : changer nos quotidiens, découvrir de nouveaux horizons et vous partager nos histoires"
        },
        {
          property: "og:description",
          content:
            "Parcours d’un voyage à travers l’Europe : changer nos quotidiens, découvrir de nouveaux horizons et vous partager nos histoires"
        }
      ]
    }
  }
});
