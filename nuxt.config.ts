// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
    '@nuxt/content',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/css/_breakpoints.scss" as *;
            @use "@/assets/css/_reset.scss" as *;
            @use "@/assets/css/_utils.scss" as *;
            @use "@/assets/css/_variables.scss" as *;
          `,
        }
      }
    }
  },
  css: [
    // '@/assets/css/main.scss',
  ],
  image: {
    presets: {
      portrait: {
        modifiers: {
          format: 'webp',
          height: 150
        }
      }
    }
  }

})
