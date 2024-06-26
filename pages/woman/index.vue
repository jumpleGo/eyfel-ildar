<template>
  <div class="eyfel-page">
    <main-block/>
    <catalog />
    <app-separate-with-image v-bind="props" class="eyfel-woman__separate"  />
    <div class="order">
      <img class="order__flower" src="/assets/green_flower.svg" />
      <app-order theme="light" image="/assets/woman/woman-eyfel-form.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainBlock from "~/components/content/woman/mainBlock.vue";
import Catalog from "~/components/content/woman/catalog.vue";
import AppOrder from "~/components/content/AppOrder.vue";

const props = {
  title: 'EYFEL для женщин',
  image: "/assets/woman/woman.png",
  buttonTitle: 'помочь с выбором аромата',
  description: 'Наш парфюм идеально подходит для любого<br>'+
      'мероприятия. Eyfel парфюм - лучший выбор<br>' +
      'для деловой встречи, похода в ресторан. \n <br> <br>' +
      'Также нельзя не сказать и о повседневном<br>' +
      'использовании наших ароматов. Превосходные<br>' +
      'ароматы Eyfel подойдут на любой случай жизни.',
  theme: 'white'
}
definePageMeta({

})

useHead({

})
useSeoMeta({

})
</script>