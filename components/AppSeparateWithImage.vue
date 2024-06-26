<template>
  <div :class="['eyfel-separate', theme, {'gradient': theme === 'gold'}]">
    <div class="eyfel-separate__image" :style="`background-image: url('${image}')`" />
    <div class="eyfel-separate__text">
      <h3 class="eyfel-separate__title eyfel-main__title--h3">{{ title }}</h3>
      <p class="eyfel-separate__description eyfel-main__description" v-html="description" />
      <AppButton :text="buttonTitle" class="eyfel-separate__button" type="dark-bordered"/>
    </div>
    <img v-if="!withoutFlower" src="/assets/flower2.svg" class="eyfel-separate__flower" />
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  title: string,
  description: string,
  buttonTitle: string,
  image: string,
  theme: 'white' | 'light' | 'gold',
  withoutFlower: boolean
}>()
</script>
<style lang="scss" scoped>
@import '/style/variables';
@import '/style/mixins';

.light {
  .eyfel-separate__text {
    background: $light;
  }
}
.white {
  .eyfel-separate__text {
    background: white;
  }
}
.eyfel-separate {
  display: flex;
  width: calc(100% + 80px);
  position: relative;
  @include mobile {
    width: calc(100% + 36px);
  }
  @include tablet {
    width: calc(100% + 36px);
  }
}
.eyfel-separate__image {
  height: 500px;
  background-size: cover;
  background-position: center;
  width: 50%;
  @include mobile {
    display: none;
  }
}
.eyfel-separate__text {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 40px 33px;
  height: auto;
  @include mobile {
    width: 100%;
    align-items: center;
  }
}
.eyfel-separate__title {
  font-weight: 600;
  font-style: italic;
  text-align: center;
}
.eyfel-separate__description {
  margin-top: 20px;
  margin-bottom: 40px;

}
.eyfel-separate__button {
  width: fit-content;
  z-index: 1;
}
.eyfel-separate__flower {
  position: absolute;
  height: auto;
  width: 456px;
  right: 0;
  top: 50%;
  @include tablet {
    width: 300px;
    top: 70%;
  }
  @include mobile {
    width: 200px;
    top: 90%;
  }
}
</style>