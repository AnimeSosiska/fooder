// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app:{
    head:{
      title:'Fooder',
      meta:[
        {name:'description', content: 'Fooder - is a cozy home shop'}
      ]
    }
  },
  modules: [
        '@nuxt/content',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})