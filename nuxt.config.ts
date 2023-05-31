import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/styles/main.scss'],
    modules: [
      ['@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', 'mapState', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      }]
    ]
})
