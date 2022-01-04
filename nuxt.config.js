const pkg = require('./package');
const webpack = require('webpack');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
      '@/node_modules/foundation-sites/dist/css/foundation.css',
      '@/assets/css/site.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      //{ src: '~/static/js/homepage.js', ssr: false},
      { src: '~/node_modules/foundation-sites/dist/js/foundation.js', ssr: false},

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor:[
        'foundation-sites'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
      JENKINS_URL: process.env.JENKINS_URL || 'http://google.com'
  }
}
