import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  googleFonts: {
    families: {
      Outfit: [200, 300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },
  app: {
    head: {
      title: 'Felicio Almeida',
      meta: [
        { name: 'description', content: 'Portifolio Felicio' },
      ],
    },
  }
})