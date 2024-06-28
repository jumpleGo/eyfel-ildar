// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from "@nuxt/schema";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

const vite: NuxtConfig['vite'] = {
  plugins: [
    ViteImageOptimizer({
      includePublic: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 70,
        compressionLevel: 5,
        progressive: true
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import "style/mixins/index.scss";
					@import "style/variables.scss";
				`,
      },
    },
  },
};

export default defineNuxtConfig({
  ssr: true,
  vite,
  app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, height=device-height, initial-scale=1, user-scalable=no, maximum-scale=1.0',
      }
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-swiper',
    '@pinia/nuxt',
    'vue-yandex-maps/nuxt',
    'nuxt-anchorscroll',
    ['nuxt-mail', {
      message: {
        to: 'eyfel.kzn@gmail.com',
      },
      smtp: {
        host: "smtp.timeweb.ru",
        port: 25, //465
        auth: {
          user: 'admin@eyfelkazan.ru',
          pass: '6573ibygs5'
        }
      },
    }],
  ],
  yandexMaps: {
    apikey: '5f2c0950-a225-4de2-b6d4-8d4a97b21de8',
  },
  css: ['~/style/index.scss'],
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination', 'autoplay'],
  },

})