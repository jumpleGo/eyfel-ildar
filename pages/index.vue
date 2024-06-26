<template>
  <div class="eyfel-index">
    <MainBlock />
    <div class="eyfel-index__sliders">
      <StyledSlider v-if="bestsellerItems.length" title="BESTSELLERS" :items="bestsellerItems" link-name="весь каталог" to="/catalog" />
      <StyledSlider v-if="womanItems.length" image-before :items="womanItems"  image-before-src="/assets/main/forWomen.png" title="Для нее" link-name="весь каталог" linkTo="/catalog" :slide-per-view="2" />
      <StyledSlider v-if="manItems.length" image-after :items="manItems" image-after-src="/assets/main/forMan.png" title="Для него" link-name="весь каталог" linkTo="/catalog" :slide-per-view="2" />
      <StyledSlider v-if="homeItems.length" title="Ароматы для дома" :items="homeItems"  link-name="весь каталог" linkTo="/catalog" :slide-per-view="3" />
    </div>
    <div class="order">
      <Order />
      <img src="/assets/flower.svg" class="order__flower" />
    </div>
  </div>


</template>
<script setup lang="ts">
import MainBlock from "~/components/content/index/mainBlock.vue";
import StyledSlider from "~/components/content/index/StyledSlider.vue";
import Order from "~/components/content/AppOrder.vue";
import {useAsyncData} from "#app";
import { getByQuery} from "~/api";
import {useProductsStore} from "~/store";
import {useLoaderStore} from "~/store/loader";
import type {IProductItem} from "~/api/types";

const {indexBestsellers, indexMan, indexWoman, indexHome, isLoadedIndex} = storeToRefs(useProductsStore())
const {isLoading} = storeToRefs(useLoaderStore())

useSeoMeta({
  title: 'EYFEL - парфюмерная империя',
  ogTitle: 'EYFEL',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
})


const {data} = useAsyncData(async () => {
  if (isLoadedIndex.value) return
  isLoading.value = true

  const bestsellers =  getByQuery('products', {
    fieldPath: 'type',
    opStr: '==',
    value: 'premium'
  })
  const man =  getByQuery('products', {
    fieldPath: 'type',
    opStr: '==',
    value: 'man'
  })
  const woman =  getByQuery('products', {
    fieldPath: 'type',
    opStr: '==',
    value: 'woman'
  })
  const home =  getByQuery('products', {
    fieldPath: 'type',
    opStr: '==',
    value: 'home'
  })

  let response: IProductItem[][]  = []
  await Promise.allSettled<IProductItem[]>([bestsellers, man, woman, home]).then((items) => {
    response = items.map(item => item.value)
  })
  isLoading.value = false
  isLoadedIndex.value = true
  return response
})
const items = computed(() => ({
  bestseller: data.value?.[0] || [],
  man: data.value?.[1] || [],
  woman: data.value?.[2] || [],
  home: data.value?.[3] || [],
}))

const bestsellerItems = computed<IProductItem[]>(() => {
  return indexBestsellers.value.length ? indexBestsellers.value : items.value.bestseller
})

const manItems = computed<IProductItem[]>(() => {
  return indexMan.value.length ? indexMan.value : items.value?.man
})

const womanItems = computed<IProductItem[]>(() => {
  return indexWoman.value.length ? indexWoman.value : items.value?.woman
})

const homeItems = computed<IProductItem[]>(() => {
  return indexHome.value.length ? indexHome.value : items.value?.home
})
onMounted(() => {
  if (bestsellerItems.value?.length) {
    indexBestsellers.value = bestsellerItems.value
  }
  if (manItems.value?.length) {
    indexMan.value = manItems.value
  }
  if (womanItems.value?.length) {
    indexWoman.value = womanItems.value
  }
  if (homeItems.value?.length) {
    indexHome.value = homeItems.value
  }
})

</script>
<style lang="scss" scoped>
@import 'style/mixins';
.eyfel-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  @include tablet {
    padding: 0 16px;
  }
  @include mobile {
    padding: 0 16px;
  }
}
.eyfel-index__sliders {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding:  0 40px;
  width: 100%;
  align-items: center;
  @include tablet {
    padding:  0 16px;
  }
  @include mobile {
    padding:  0 16px;

  }
}

.order__flower {
  transform: rotate(-90deg);
  right: 0;
  left: unset;
  bottom: 7%;
  top: unset;
  @include mobile {
    top: -20%;
  }
}

</style>