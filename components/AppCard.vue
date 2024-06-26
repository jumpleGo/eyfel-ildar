<template>
  <div class="app-card">
    <p v-if="name" class="app-card__name">{{ name }}</p>
    <div :style="`background: ${background}`" class="app-card__image-wrapper">
      <img :src="src" class="app-card__image">
    </div>
    <h3 class="app-card__title">{{ title }}</h3>
  </div>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
  src: string,
  title: string,
  background: string,
  name?: string
}>(), {
  src: '',
  title: '',
  background: 'black',
  name: ''
})
</script>

<style lang="scss" scoped>
.app-card {
  position: relative;
  max-width: 350px;
  width: 100%;
}
.app-card__image {
  height: 100%;
  width: 100%;
  max-height: 600px;
}
.app-card__name {
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
}
.app-card__image-wrapper {
  height: 100%;
  width: auto;
  padding: 50px 0;
}
.app-card__title {
  font-weight: 400;
  padding: 20px 30px;
  font-size: 20px;
}
</style>