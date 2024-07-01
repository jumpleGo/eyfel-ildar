<template>
  <div class="eyfel-slider">
    <div class="eyfel-slider__header">
      <p class="eyfel-slider__header--name eyfel-main__description">{{ title }}</p>
      <nuxt-link :to="linkTo" class="eyfel-slider__header--link eyfel-main__description">{{ linkName }}</nuxt-link>
    </div>
    <div class="eyfel-slider__element">
      <img v-if="imageBefore && !isMobile" :src="imageBeforeSrc" class="eyfel-slider__element--before" />
      <div :class="['eyfel-slider__slider', {withElem: (imageAfter || imageBefore) && !isMobile}]">
        <AppSlider v-if="isLoad" :slide-per-view="slidePerViewModified" :delay="delay">
          <SwiperSlide v-for="item in items" :key="item.title">
            <AppCard v-bind="item" :src="getImageByType(item.category)" :background="background" />
          </SwiperSlide>
        </AppSlider>
      </div>
      <img v-if="imageAfter && !isMobile" :src="imageAfterSrc"  class="eyfel-slider__element--after" />
    </div>
  </div>
</template>
<script setup lang="ts">
import AppSlider from "~/components/AppSlider.vue";
import type {IProductItem} from "~/api/types";
import {getImageByType} from "~/helpers/getImageByType";


const props = withDefaults(defineProps<{
  title: string,
  linkTo: string,
  linkName: string,
  slidePerView?: number,
  delay?: number,
  imageBefore?: boolean,
  imageBeforeSrc: string,
  imageAfter?: boolean,
  imageAfterSrc?: string,
  items?: IProductItem[]
  background?: string
}>(), {
  title: '',
  linkTo: '',
  linkName: '',
  imageBeforeSrc: '',
  slidePerView: 3,
  delay: 3000
})

const isLoad = ref(false)
onMounted(() => nextTick(() => isLoad.value = true))
console.log(props.items)

const {isMobile} = useResponsive()
const slidePerViewModified = computed(() => isMobile.value ? 1 : props.slidePerView)
</script>
<style lang="scss" scoped>
.eyfel-slider {
  border: 2px solid black;
  background: white;
  max-width: 1200px;
  width: 100%;
  @include mobile {
    max-width: calc(100vw - 32px);
  }
}
.eyfel-slider__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 28px;
  padding: 40px 40px 35px;
  border-bottom: 2px solid black;
  @include mobile {
    padding: 25px 20px;
  }
}
.eyfel-slider__header--name {
  font-style: italic;
}
.eyfel-slider__header--link {
  border-bottom: 1px dashed black;
  text-decoration: none;
  color: black;
  &:hover {
    cursor:pointer
  }
}
.eyfel-slider__element {
  padding: 45px 40px;
  display: flex;
  @include mobile {
    padding: 25px 20px;
  }
}
.eyfel-slider__slider {
  width: 100%;
}
.withElem {
  width: calc(100% - 350px)
}

.eyfel-slider__element--before,  .eyfel-slider__element--after {
  max-width: 350px;
  width: 100%;
  height: auto;
}
.eyfel-slider__element--before {
  margin-right: 20px;
}
.eyfel-slider__element--after {
  margin-left: 20px;
}
</style>