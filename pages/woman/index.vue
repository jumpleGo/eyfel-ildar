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
const p = '<li>Хотите почувствовать себя настоящей королевой?</li><li>Желаете окунуться в мир роскоши и элегантности?</li><li>Мечтаете о том, чтобы ваш образ был незабываемым и восхищал окружающих?</li>'
const props = {
  title: 'EYFEL для женщин',
  image: "/assets/woman/woman.png",
  buttonTitle: 'помочь с выбором аромата',
  description: `${p} <br><br>
У нас вы найдете широкий выбор ароматов – от классических до трендовых.
Мы уверены, что каждая женщина сможет подобрать себе идеальный вариант,
который будет соответствовать ее характеру и стилю.<br><br>
Не упустите возможность стать обладательницей уникального аромата EYFEL и почувствовать себя настоящей королевой!`,
  theme: 'white'
}

useSeoMeta({
  title: 'Парфюмерия для женщин. Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии.',
  ogTitle: 'Парфюмерия для женщин. Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии.',
  ogType: 'website',
  ogLocale: 'ru',
  description: 'Женская парфюмерия EYFEL. Парфюмерия для девушек. Оптовый заказ на женскую парфюмерию. Заказать женскую парфюмерию оптом. Женский парфюм оптом.',
  ogDescription: 'Женская парфюмерия EYFEL. Парфюмерия для девушек. Оптовый заказ на женскую парфюмерию. Заказать женскую парфюмерию оптом. Женский парфюм оптом.',
})
</script>