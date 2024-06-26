<template>
  <div class="eyfel-page">
    <main-block />
    <catalog />
    <app-separate-with-image v-bind="props" class="eyfel-man__separate"  />
    <div class="order">
      <img class="order__flower" src="/assets/green_flower.svg" />
      <app-order theme="dark" image="/assets/man/man-form.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainBlock from "~/components/content/man/mainBlock.vue";
import Catalog from "~/components/content/man/catalog.vue";
import AppOrder from "~/components/content/AppOrder.vue";
import {useLoaderStore} from "~/store/loader";
const {isLoading} = storeToRefs(useLoaderStore())
const props = {
  title: 'EYFEL для мужчин',
  image: "/assets/man/man.png",
  buttonTitle: 'помочь с выбором аромата',
  description: 'Наш парфюм идеально подходит для любого<br>'+
      'мероприятия. Eyfel парфюм - лучший выбор<br>' +
      'для деловой встречи, похода в ресторан. \n <br> <br>' +
      'Также нельзя не сказать и о повседневном<br>' +
      'использовании наших ароматов. Превосходные<br>' +
      'ароматы Eyfel подойдут на любой случай жизни.',
  theme: 'light'
}
definePageMeta({

})

useHead({

})
useSeoMeta({

})

onMounted(() => isLoading.value = false)
</script>