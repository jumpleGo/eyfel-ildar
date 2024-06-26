<template>
  <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="slidePerView"
      :loop="loop"
      :autoplay="{
      delay: delay,
      disableOnInteraction: false,
    }"
  >
    <slot />
  </Swiper>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  slidePerView?: number,
  loop?: boolean,
  delay: number
}>(), {
  slidePerView: 1,
  loop: true,
  delay: 3000
})
</script>