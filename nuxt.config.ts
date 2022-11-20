// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          gridTemplateColumns: {
            'auto-grid': 'repeat(auto-fit, minmax(400px, 1fr))',
          },
        },
      },
      content: ['./src/**/*.vue'],
    },
  },
})
