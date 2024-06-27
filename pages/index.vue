<template>
  <div class="eyfel-index">
    <MainBlock />
    <div class="eyfel-index__sliders">
      <StyledSlider v-if="bestsellerItems.length" title="BESTSELLERS" :items="bestsellerItems" link-name="весь каталог" link-to="catalog" />
      <StyledSlider v-if="womanItems.length" image-before :items="womanItems"  image-before-src="/assets/main/forWomen.png" title="Для нее" link-name="весь каталог" linkTo="catalog" :slide-per-view="2" />
      <StyledSlider v-if="manItems.length" image-after :items="manItems" image-after-src="/assets/main/forMan.png" title="Для него" link-name="весь каталог" linkTo="catalog" :slide-per-view="2" />
      <StyledSlider v-if="homeItems.length" title="Ароматы для дома" :items="homeItems"  link-name="весь каталог" linkTo="catalog" :slide-per-view="3" />
    </div>
    <div class="order">
      <Order class="order-component" />
      <img src="/assets/flower.svg" class="order__flower" />
    </div>
  </div>


</template>
<script setup lang="ts">
import MainBlock from "~/components/content/index/mainBlock.vue";
import StyledSlider from "~/components/content/index/StyledSlider.vue";
import Order from "~/components/content/AppOrder.vue";
import {useAsyncData} from "#app";
import {getByCategory, getByQuery} from "~/api/getters";
import {useProductsStore} from "~/store";
import {useLoaderStore} from "~/store/loader";
import type {IProductItem} from "~/api/types";

const {indexBestsellers, indexMan, indexWoman, indexHome, isLoadedIndex} = storeToRefs(useProductsStore())
const {isLoading} = storeToRefs(useLoaderStore())

useSeoMeta({
  title: ' Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии.',
  ogTitle: ' Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии.',
  ogType: 'website',
  ogLocale: 'ru',
  description: 'Особенностью духов EYFEL является то, что они создаются исключительно из натуральных ингредиентов. Это позволяет сохранить стойкость аромата на протяжении всего дня и обеспечивает его безопасность для здоровья человека. Кроме того, все духи EYFEL проходят строгий контроль качества перед тем, как попасть на прилавки магазинов.',
  ogDescription: 'Особенностью духов EYFEL является то, что они создаются исключительно из натуральных ингредиентов. Это позволяет сохранить стойкость аромата на протяжении всего дня и обеспечивает его безопасность для здоровья человека. Кроме того, все духи EYFEL проходят строгий контроль качества перед тем, как попасть на прилавки магазинов.',
})


const {data} = useAsyncData(async () => {
  if (isLoadedIndex.value) return
  isLoading.value = true

  const bestsellers =  getByCategory( 'bighill_parfum_unisex', 10)
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
.order-component {
  z-index: 1;
}
.order__flower {
  transform: rotate(-90deg);
  right: 0;
  left: unset;
  bottom: 14%;
  top: unset;
  z-index: 0;
  @include tablet {
    top: -10%;
  }
  @include mobile {
    top: -20%;
  }
}

</style>