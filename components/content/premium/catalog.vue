<template>
  <div class="eyfel__catalog">
    <h3 class="eyfel-main__title--h3 eyfel-page__catalog__title montserrat">bestsellers</h3>
    <div class="eyfel-page__bestsellers">
      <AppOrderCard
          v-for="item in bestsellers"
          :key="item"
          title-color="white"
          fluid
          src="/assets/bighill/parfumBighill.png"
          bg-src="/assets/gold-bg.png"
          v-bind="item"
          button-type="gold"
          border="gold"
          @click="showDescription(item)"
      />
    </div>
    <div class="eyfel__catalog-tabs">
      <h3 v-if="parfum.length"
          class="eyfel-main__title--h3 eyfel-page__catalog__title montserrat tab"
          :class="{active: currentTab === 'aromat'}"
          @click="currentTab = 'aromat'">
        парфюм
      </h3>
      <h3 v-if="diffusor.length"
          class="eyfel-main__title--h3 eyfel-page__catalog__title montserrat tab"
          :class="{active: currentTab === 'diffusor'}"
          @click="currentTab = 'diffusor'">
        диффузоры
      </h3>
    </div>
    <div class="eyfel-page__catalog">
      <AppOrderCard
          v-for="item in content"
          title-color="white"
          :key="item"
          v-bind="item"
          button-type="gold"
          bg-src="/assets/bighill/bighill-bg.png"
          @click="showDescription(item)"
          :src="imageSrcByType"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppOrderCard from "@/components/AppOrderCard.vue";
import {useAsyncData} from "#app";
import {getListByType} from "~/api/getters";
import type {IProductItem} from "~/api/types";
import {useLoaderStore} from "~/store/loader";
import {useProductsStore} from "~/store";
import {getImageByType} from "~/helpers/getImageByType";
import {useOrderFlow} from "~/composables/useOrderFlow";
import OrderFlow from "~/components/content/OrderFlow.vue";

const {isLoading} = storeToRefs(useLoaderStore())
const {premium} = storeToRefs(useProductsStore())
const {showDescription} = useOrderFlow()

const currentTab = ref<'diffusor' | 'aromat'>('aromat')
const imageSrcByType = computed(() => currentTab.value === 'diffusor' ? '/assets/bighill/diffusorBighill.png' : '/assets/bighill/parfumBighill.png')
useAsyncData(async () => {
  if (premium.value.length) return

  isLoading.value = true
  const res =  await getListByType('premium')
  premium.value = res
  isLoading.value = false
})

const bestsellers = computed<IProductItem[]>(() => premium.value?.filter(item => item.isBestseller).splice(0,3) || [])
const main = computed<IProductItem[]>(() => premium.value?.filter(item => !item.isBestseller) || [])

const parfum = computed(() => main.value.filter(item => ['bighill_parfum_man','bighill_parfum_woman'].includes(item.category)))
const diffusor = computed(() => main.value.filter(item => item.category === 'bighill_diffusor'))

const content = computed(() => currentTab.value === 'diffusor' ? diffusor.value : parfum.value)



</script>
<style lang="scss" scoped>
.eyfel-page__catalog__title {
  color: white;
}
.eyfel-page__catalog, .eyfel-page__bestsellers {
  ::v-deep .eyfel-order__card__product-image {
    max-width: 220px;

    @include mobile {
      max-width: 100px;
    }
  }
}
.eyfel__catalog-tabs {
  display: flex;
  column-gap: 20px;
}
.tab {
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;

  }
}
.active {
  background: $gold-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid $gold;
}

</style>
