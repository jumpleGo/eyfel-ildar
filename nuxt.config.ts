// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from "@nuxt/schema";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

const vite: NuxtConfig['vite'] = {
  plugins: [
    ViteImageOptimizer(),
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
  vite,
app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, height=device-height, initial-scale=1, user-scalable=no, maximum-scale=1.0',
    }
},
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@pinia/nuxt', 'vue-yandex-maps/nuxt', 'nuxt-anchorscroll'],
  mail: {
    smtp: {
      host: "smtp.example.com",
      port: 587,
    },
  },
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