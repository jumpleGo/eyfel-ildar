<template>
  <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="slidePerView"
      :loop="loop"
      centered-slides
      centered-slides-bounds
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
<style lang="scss" scoped>
:deep(.swiper-slide) {

  @include mobile {
    display: flex;
    justify-content: center;
  }
}
</style>