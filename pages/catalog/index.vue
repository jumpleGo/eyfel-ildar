<template>
  <div class="eyfel-catalog">
    <h3 class="eyfel-catalog--title eyfel-main__title--h3">товары</h3>
    <div v-if="isMobile" class="filter pdl" @click="isShow = true">
      <img class="filter-image" src="/assets/filter.png" />
      <span class="eyfel-main__description filter-title">фильтры</span>
    </div>
    <div class="eyfel-catalog__content">
      <Menu v-if="showMenu" ref="menu" class="eyfel-catalog__menu" @close="isShow = false" @change-filters="v => filters = v" />
      <div class="eyfel-page__catalog">
        <AppOrderCard
            v-for="item in content"
            title-color="black"
            :key="item"
            v-bind="item"
            button-type="dark"
            button-text="подробнее"
            :src="getImageByType(item.category)"
            @click="showDescription(item)"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Menu from '@/components/content/catalog/menu.vue'
import AppOrderCard from "~/components/AppOrderCard.vue";
import {getByFilterList} from "~/api/getters";
import {useAsyncData} from "#app";
import {useLoaderStore} from "~/store/loader";
import {useProductsStore} from "~/store";
import {getImageByType, type ITypesCatalog} from "~/helpers/getImageByType";
import {useOrderFlow} from "~/composables/useOrderFlow";

const isShow = ref(false)
const {isMobile} = useResponsive()
const showMenu = computed(() => isMobile.value ? isShow.value : true)
const {isLoading} = storeToRefs(useLoaderStore())
const {catalog} = storeToRefs(useProductsStore())
const filtersValue = ref<ITypesCatalog>(['bighill_parfum_unisex'])

const { showDescription} = useOrderFlow()

watch(() => isShow.value, (v) => {
  if (!isMobile.value) return
  if (v ) document.body.classList.add('modal-open')
  else document.body.classList.remove('modal-open')
})
const filters = computed({
  get: () => filtersValue.value,
  set: (value) => {
    console.log(value)
    filtersValue.value = value
  }
})

const menu = ref()
const content = computed(() => catalog.value.filter(item => filters.value?.includes(item.category)))


useAsyncData(async () => {
  if (catalog.value.length) return
  isLoading.value = true
  catalog.value = await getByFilterList([], 0)
  isLoading.value = false
})


useSeoMeta({
  title: 'Каталог - Eyfel и Bighill парфюмерные коллекции',
  ogTitle: 'Каталог - Eyfel и Bighill парфюмерные коллекции',
  ogType: 'website',
  ogLocale: 'ru',
  description: 'Особенностью духов EYFEL является то, что они создаются исключительно из натуральных ингредиентов. Это позволяет сохранить стойкость аромата на протяжении всего дня и обеспечивает его безопасность для здоровья человека. Кроме того, все духи EYFEL проходят строгий контроль качества перед тем, как попасть на прилавки магазинов.',
  ogDescription: 'Особенностью духов EYFEL является то, что они создаются исключительно из натуральных ингредиентов. Это позволяет сохранить стойкость аромата на протяжении всего дня и обеспечивает его безопасность для здоровья человека. Кроме того, все духи EYFEL проходят строгий контроль качества перед тем, как попасть на прилавки магазинов.',
})
</script>
<style lang="scss" scoped>
.eyfel-catalog {
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 50px;
  position: relative;
  @include mobile {
    padding-top: 50px;
  }
}
.filter {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
}
.filter-image {
  max-width: 30px;
}
.filter-title {
  font-weight: 600;
}
.eyfel-catalog--title {
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  margin-left: 350px;
  @include tablet {
    margin-left: 200px;
  }
  @include mobile {
    margin-left: 40px
  }
  margin-bottom: 40px;
}
.eyfel-page__catalog {
  width: calc(100vw - 350px);
  border: 1px solid black;
  gap: unset;
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    width: calc(100vw - 200px);
  }
  @include mobile {
    width: 100%;
  }
  ::v-deep .eyfel-order__card__image {
    height: 300px;
    @include mobile {
      height: unset;
    }
  }
  ::v-deep .eyfel-order__card__product-image {
    max-height: 300px;
    height: 100%;
    max-width: unset ;
    width: auto;
    @include mobile{
      height: unset;
      max-height: unset;
      width: 100%;
    }
  }
  ::v-deep .eyfel-order__card {
    padding: 10px;
    border: 1px solid black;
  }
}
.eyfel-catalog__content {
  display: flex;
}
</style>