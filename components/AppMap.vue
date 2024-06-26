<template>
  <yandex-map
      v-model="map"
      :settings="{
        location: {
          center,
          zoom: 15,
        },
      }"
      width="100%"
      :height="height"
  >
    <yandex-map-default-scheme-layer :settings="{ customization: configMap }"/>
    <yandex-map-default-features-layer />
    <yandex-map-marker :settings="{ coordinates: markerIcon.coordinates }" position="top-center left-center">
      <img
          class="pin"
          alt=""
          :src="markerIcon.iconSrc"
      />
    </yandex-map-marker>
  </yandex-map>
</template>
<script setup lang="ts">
import {configMap} from "~/components/content/footer/map";
import {YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker} from "vue-yandex-maps";

import type { YMap } from '@yandex/ymaps3-types';


const map = shallowRef<null | YMap>(null);


const markerIcon = {
  iconSrc: '/assets/marker.svg',
  coordinates: [49.12833688360591, 55.817707292000226]
}

const {isMobile} = useResponsive()

const center = computed(() => {
  return isMobile.value ? [49.12833688360591, 55.817707292000226] : [49.12, 55.815]
})
const height = computed(() => {
  return isMobile.value ? '500px' : '700px'
})
</script>