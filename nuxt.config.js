/* eslint-disable max-len */

export default {
  debug: true,
  ssr: true,
  target: 'static',
  head: {
    title: 'Glebov Evgeny Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { name: 'theme-color', content: '#fff' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png',
      },
      {
        rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png', type: 'image/png',
      },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    pageTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },

  css: [
    './assets/styles/main.scss',
    'swiper/css/swiper.min.css',
    'vue-tel-input/dist/vue-tel-input.css',
  ],
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  components: [
    '~/components',
    { path: '~/components/ui/', extensions: ['vue'] },
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/redirect-module',
    'vue2-editor/nuxt',
    '@nuxtjs/i18n',
  ],

  /* router: {
    middleware: ['loggedIn'],
  }, */

  loading: '~/components/s-loader/s-loader',

  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  build: {
    postcss: false,
  },

  router: {
    base: '/base/',
  },

  i18n: {
    defaultLocale: 'ru',
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        // domain: localeDomains.ru
      },
      {
        code: 'en',
        iso: 'en-US',
        // domain: localeDomains.en
      },
    ],
    differentDomains: false,
    vueI18nLoader: true,
    detectBrowserLanguage: false,
  },

  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
  },

  // robots.txt
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
  },

};
