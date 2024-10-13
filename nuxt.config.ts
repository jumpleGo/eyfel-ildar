// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from "@nuxt/schema";

const vite: NuxtConfig['vite'] = {
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
        // to: 'altyngasyr.kazan@mail.ru',
        to: 'conq122@mail.ru',
      },
      smtp: {
        host: "smtp.timeweb.ru",
        port: 25,
        auth: {
          user: 'ildar@eyfel-altyn.ru',
          pass: 'LLRMN3dO/9jV5K'
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