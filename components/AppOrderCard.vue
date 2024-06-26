<template>
  <div :class="['eyfel-order__card', theme]">
    <div
        :style="bg"
        :class="['eyfel-order__card__image', {'gold-border': border === 'gold'}]">
      <img :src="src" class="eyfel-order__card__product-image" />
    </div>
    <p :style="`color: ${titleColor}`" class="eyfel-order__card__title eyfel-main__description" v-html="title" />
    <p v-if="model" :style="`color: ${titleColor}`" class="eyfel-order__card__model eyfel-main__description" v-html="model" />
    <AppButton :text="buttonText" :type="buttonType" fluid @click="emit('click')" />
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  title: string,
  model?: string,
  bgSrc?: string,
  src: string,
  titleColor?: string,
  buttonText: string,
  buttonType?:  'light' | 'dark' | 'light-bordered' | 'dark-bordered' | 'gold' ,
  theme?: 'default' | 'gold',
  border: 'gold'
}>(), {

  titleColor: 'white',
  buttonType: 'light-bordered',
  buttonText: 'заказать',
  theme: 'default',
  src: '/assets/woman/parfum.png',
})

const bg = computed(() => props.bgSrc ? `background-image: url('${props.bgSrc}')` : '')

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
<style lang="scss" scoped>
.eyfel-order__card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eyfel-order__card__image {
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @include tablet {
    height: 400px;
  }
  @include mobile {
    height: 300px;
  }
}

.eyfel-order__card__product-image {
  max-width: 390px;
  width: 100%;
}

.eyfel-order__card__title {
  font-weight: 400;
  margin: 10px 0 20px;
  text-align: center;
}
.eyfel-order__card__model {
  opacity: 0.8;
  margin-bottom: 20px;
}
.gold-border {
  border: 2px solid $gold;
}
</style>