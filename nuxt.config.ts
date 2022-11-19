// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
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
