<template>
  <div class="eyfel__catalog">
    <h3 v-if="bestsellers.length" class="eyfel-main__title--h3 eyfel-page__catalog__title montserrat">bestsellers</h3>
    <div v-if="bestsellers.length" class="eyfel-page__bestsellers">
      <AppOrderCard
          v-for="item in bestsellers"
          title-color="black"
          :key="item"
          button-type="dark-bordered"
          fluid
          :bg-src="bgSrcBestseller"
          v-bind="item"
          @click="showDescription(item)"/>
    </div>
    <h3 v-if="contentMain.length" class="eyfel-main__title--h3 eyfel-page__catalog__title montserrat">ароматы для нее</h3>
    <div v-if="contentMain.length" class="eyfel-page__catalog">
      <AppOrderCard
          v-for="item in contentMain"
          title-color="black"
          :key="item"
          button-type="dark-bordered"
          bg-src="/assets/woman/rose-bg.png"
          v-bind="item"
          @click="showDescription(item)"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppOrderCard from "@/components/AppOrderCard.vue";
import {useLoaderStore} from "~/store/loader";
import {useAsyncData} from "#app";
import {getBestsellersByType, getListByType} from "~/api/getters";
import type {IProductItem} from "~/api/types";
import {useProductsStore} from "~/store";
import {useOrderFlow} from "~/composables/useOrderFlow";

const bgSrcBestseller = '/assets/gold-bg.png'

const {showDescription} = useOrderFlow()

const {isLoading} = storeToRefs(useLoaderStore())
const {woman, womanBest: bestsellers} = storeToRefs(useProductsStore())

useAsyncData(async () => {
  console.log(woman)
  if (woman.value.length) return

  isLoading.value = true
  const resPromise = getListByType('woman', 20)
  const resBestsellerPromise = getBestsellersByType('woman')

  const [res, best] = await  Promise.all([resPromise, resBestsellerPromise])
  bestsellers.value = best
  woman.value = res
  isLoading.value = false
})


const contentMain = computed<IProductItem[]>(
    () => woman.value?.filter(item => !item.isBestseller) || []
)
</script>
<style lang="scss" scoped>
.eyfel-page__catalog__title {
  color: black
}

</style>
