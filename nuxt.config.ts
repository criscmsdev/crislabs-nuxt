// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client'
  ],
  runtimeConfig:{
    public: {
      GQL_HOST: 'https://api.spacex.land/graphql'
    }
  }
})
