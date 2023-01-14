// https://nuxt.com/docs/api/configuration/nuxt-config

export default({
  target: 'static',
  router:{
    base: '/fooder_static/'
  },
  app:{
    baseURL: "/",
    head:{
      title:'Fooder',
      meta:[
        {name:'description', content: 'Fooder - is a cozy home shop'}
      ]
    }
  },
  modules: [
        '@nuxt/content',
    ]
})