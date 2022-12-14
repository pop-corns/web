const config = require('./.contentful.json');
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: 'docs'
  },

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Popcorns',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", crossorigin: "anonymous" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/custom.scss',
    '@/assets/css/owl.css',
    '@/assets/css/templatemo-chain-app-dev.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/visibility.js',
    '~/plugins/parallax.js',
    '~/plugins/vue-typer.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['nuxt-cookie-control', {
      barPosition: 'bottom-full',
      controlButton: false,
      colors: {
        barTextColor: '#fff',
        modalOverlay: '#000',
        barBackground: '#000',
        barButtonColor: '#000',
        modalTextColor: '#000',
        modalBackground: '#fff',
        modalOverlayOpacity: 0.8,
        modalButtonColor: '#fff',
        modalUnsavedColor: '#fff',
        barButtonHoverColor: '#fff',
        barButtonBackground: '#fff',
        modalButtonHoverColor: '#fff',
        modalButtonBackground: '#000',
        controlButtonIconColor: '#000',
        controlButtonBackground: '#fff',
        barButtonHoverBackground: '#22e297',
        checkboxActiveBackground: '#000',
        checkboxInactiveBackground: '#000',
        modalButtonHoverBackground: '#333',
        checkboxDisabledBackground: '#ddd',
        controlButtonIconHoverColor: '#fff',
        controlButtonHoverBackground: '#000',
        checkboxActiveCircleBackground: '#fff',
        checkboxInactiveCircleBackground: '#fff',
        checkboxDisabledCircleBackground: '#fff',
      },
      text: {
        barTitle: 'Cookie Policy',
        barDescription: 'We use cookies to ensure you get the best experience on our website. Learn more on our ',
        acceptAll: 'Accept all',
        declineAll: 'Delete all',
        manageCookies: 'Manage cookies',
        unsaved: 'You have unsaved settings',
        close: 'Close',
        save: 'Save',
        necessary: 'Necessary cookies',
        optional: 'Optional cookies',
        functional: 'Functional cookies',
        blockedIframe: 'To see this, please enable functional cookies',
        here: 'here'
      }
    }],
  ],

  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
        },

        description: {
          en: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as configuring your cookie preferences, logging in or filling in forms."
        },
      }
    ],
    optional: [
      {
        name: {
          en: "Analytics",
        },
        description: {
          en:
            "These cookies help us understand how visitors use our website, enabling us to improve and optimize it."
        },
        src: "https://www.googletagmanager.com/gtag/js?id=UA-138616567-1",
        async: true,
        cookies: ["_ga", "_gat_gtag_UA_138616567_1", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-138616567-1");
        }
      }
    ]
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["~/assets/js/owl-carousel.js", "~/assets/js/imagesloaded.js"]
  }
}
