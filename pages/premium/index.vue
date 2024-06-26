<template>
  <div class="eyfel-page">
    <main-block />
    <catalog />
    <app-separate-with-image v-bind="props" class="eyfel-man__separate" without-flower  />
    <div class="order">
      <img class="order__flower" src="/assets/bighill/flowerOrder.png" />
      <app-order theme="dark" image="/assets/bighill/order.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainBlock from "~/components/content/premium/mainBlock.vue";
import Catalog from "~/components/content/premium/catalog.vue";
import AppOrder from "~/components/content/AppOrder.vue";
import {useLoaderStore} from "~/store/loader";
const {isLoading} = storeToRefs(useLoaderStore())
const props = {
  title: 'BIGHILL',
  image: "/assets/bighill/separate.png",
  buttonTitle: 'помочь с выбором аромата',
  description: 'Наш парфюм идеально подходит для любого<br>'+
      'мероприятия. Eyfel парфюм - лучший выбор<br>' +
      'для деловой встречи, похода в ресторан. \n <br> <br>' +
      'Также нельзя не сказать и о повседневном<br>' +
      'использовании наших ароматов. Превосходные<br>' +
      'ароматы Eyfel подойдут на любой случай жизни.',
  theme: 'gold'
}
definePageMeta({

})

useHead({

})
useSeoMeta({

})

onMounted(() => isLoading.value = false)
</script>
<style lang="scss" scoped>
.order__flower {
  max-width: 400px;
}
.order {
  ::v-deep .eyfel-order__title-h1 {
    background: $gold-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>