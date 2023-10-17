// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content"],
  content: {
    markdown: {
      anchorLinks: false,
      remarkPlugins: ["remark-unwrap-images"],
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
