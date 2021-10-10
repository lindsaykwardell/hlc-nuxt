export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Healthy Living Community",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Mulish:wght@500;700&family=Lato&family=Merriweather&display=swap"
      }
    ],
    script: [
      {
        src: "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      },
      {
        src: "/mc.js"
      },
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/default.postcss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/constant.js",
    "~/plugins/vue-formulate.js",
    "~/plugins/opti-image.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "@nuxtjs/pwa",
    "@nuxtjs/axios"
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    liveEdit: false
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {
          preset: "default"
        },
        "postcss-nested": {}
      }
    }
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.postcss",
    configPath: "tailwind.config.js"
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");

      const posts = await $content(`article`).fetch();

      return posts.map(post => ({
        route: post.path,
        payload: post
      }));
    }
  },
  telemetry: true
};
