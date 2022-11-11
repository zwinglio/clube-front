export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Clube da Musculação 🔥",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "12 semanas de treino e acesso direto à Personal, para você usar na sua academia e mudar de uma vez por todas o seu corpo para sua melhor versão!" },
      { hid: "og:title", property: "og:title", content: "Clube da Musculação 🔥" },
      { hid: "og:description", property: "og:description", content: "12 semanas de treino e acesso direto à Personal, para você usar na sua academia e mudar de uma vez por todas o seu corpo para sua melhor versão!" },
      { hid: "og:type", property: "og:type", content: "product" },
      { name: "format-detection", content: "telephone=yes" },

    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
      {
        src: "/js/gtm.js",
        type: "text/javascript",

      },
      {
        // src: '@/node_modules/plyr/dist/plyr.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.scss",
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.css",
    // '~/node_modules/plyr/dist/plyr.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-fonts", "@nuxt/image", '@nuxtjs/pwa'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/image", "@nuxtjs/auth-next"],

  auth: {
    strategies: {
      laravelJWT: {
        provider: "laravel/jwt",
        url: "https://clube-api.voceemforma.net/api/",
        // url: "http://127.0.0.1:8000/api/",
        endpoints: {
          login: {
            url: "auth/login",
          },
          logout: {
            url: "auth/logout",
          },
          user: {
            url: "user",
          },
          refresh: {
            url: "auth/refresh",
          },
        },
        token: {
          property: "access_token",
          maxAge: 3600,
        },
        refreshToken: {
          maxAge: 3600,
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://clube-api.voceemforma.net/api/",
    // baseURL: "http://127.0.0.1:8000/api/",
    credentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Clube da Musculação",
      description:
        "Aplicativo de treino para você que pratica exercícios na academia ou no seu condomínio.",
      lang: "pt-BR",
      background_color: "#0F181E",
      start_url: "/weeks",
    },
    icon: {
      source: "/icon.png",
      purpose: "any",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    prefetch: true,
    families: {
      "League+Gothic": [400],
      "Inter": [200, 400, 700, 900],
    },
    download: true,
    overwrite: true,
    useStylesheet: true,
  },
};
