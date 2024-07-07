<template>
  <div class="app-card">
    <p v-if="name" class="app-card__name">{{ name }}</p>
    <div :style="background ? `background-image: url('${background}')` : 'background: black'" class="app-card__image-wrapper">
      <img :src="src" class="app-card__image">
    </div>
    <h3 class="app-card__title">{{ title }} {{ model }}</h3>
  </div>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
  src: string,
  title: string,
  background: string,
  name?: string,
  model?: string
}>(), {
  src: '',
  title: '',
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
  width: auto;
  max-height: 400px;
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
  padding: 80px 0;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @include mobile {
    height: auto;
  }
}
.app-card__title {
  font-weight: 400;
  padding: 20px 30px;
  font-size: 20px;
}
</style>