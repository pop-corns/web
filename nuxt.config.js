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
        accepted: () => {
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="AsaBg1y1cxD9dvkDLooxg9YyuvM7poiJ";;analytics.SNIPPET_VERSION="4.15.3";
          analytics.load("AsaBg1y1cxD9dvkDLooxg9YyuvM7poiJ");
          analytics.page();
          }}();
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
