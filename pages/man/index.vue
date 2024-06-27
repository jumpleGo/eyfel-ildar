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
const p = '<li>Хотите создать вокруг себя ауру мужественности и силы?</li>' +
    '<li>Желаете, чтобы ваш образ был запоминающимся и вызывал уважение?</li>' +
    '<li>Стремитесь к тому, чтобы ваш парфюм подчеркивал вашу индивидуальность и придавал уверенности?</li>'
const props = {
  title: 'EYFEL для мужчин',
  image: "/assets/man/man.png",
  buttonTitle: 'помочь с выбором аромата',
  description: `${p} <br><br>
Это не просто духи, это настоящее произведение искусства, которое способно подчеркнуть вашу индивидуальность и придать уверенности. Мы уверены, что каждый мужчина сможет подобрать себе идеальный вариант, который будет соответствовать его характеру и стилю.<br><br>
Не упустите возможность стать обладателем уникального аромата EYFEL и почувствовать себя настоящим мужчиной!`,
  theme: 'light'
}

useSeoMeta({
  title: 'Парфюмерия для мужчин. Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии.',
  ogTitle: 'Парфюмерия для мужчин. Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии.',
  ogType: 'website',
  ogLocale: 'ru',
  description: 'Мужская парфюмерия EYFEL. Парфюмерия для мужчин. Оптовый заказ на мужскую парфюмерию. Заказать мужскую парфюмерию оптом. Мужской парфюм оптом.',
  ogDescription: 'Мужская парфюмерия EYFEL. Парфюмерия для мужчин. Оптовый заказ на мужскую парфюмерию. Заказать мужскую парфюмерию оптом. Мужской парфюм оптом.',
})

onMounted(() => isLoading.value = false)
</script>