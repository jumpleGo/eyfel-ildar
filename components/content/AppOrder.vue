<template>
  <div class="eyfel-order" :class="theme">

    <div class="eyfel-order__title">
      <h3 class="eyfel-order__title-h2 eyfel-main__title--h2 cormorant">
        оптовый
      </h3>
      <h2 class="eyfel-order__title-h1 eyfel-main__title--h1 cormorant">
        Eyfel
      </h2>
      <div class="eyfel-order__bottom">
        <h3 class="eyfel-order__title-h2 eyfel-main__title--h2 cormorant">
          заказ
        </h3>
        <p class="eyfel-order__title-description eyfel-main__description montserrat" v-html="text" />
      </div>
    </div>
    <div class="eyfel-order__content">
      <div class="eyfel-order__form">
        <p class="eyfel-order__form__description">Оптовая заявка</p>
        <FormContact text="Отправить" />
      </div>
      <div class="eyfel-order__form_image" :style="`background-image: url('${image}')`" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import FormContact from "~/components/content/FormContact.vue";
withDefaults(defineProps<{
  theme: 'dark' | 'light' | 'white',
  image: string
}>(), {
  theme: 'light',
  image: '/assets/main/eyfel-form.png'
})

const text = 'Вы можете оформить заказ у нас <br>' +
    '          по оптовым ценам, заполнив форму ниже'
</script>
<style lang="scss" scoped>
@import '/style/mixins';
.eyfel-order {
  max-width: 1200px;
  width: 100%;
}
.dark {
  .eyfel-order__title {
    color: white;
  }
}
.light {
  .eyfel-order__title {
    color: black;
  }
}
.white {
  background: white;
  .eyfel-order__title {
    color: black;
  }
}

.eyfel-order__title {
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.eyfel-order__title-h2 {
  text-transform: uppercase;
}
.eyfel-order__title-h1 {
  text-transform: uppercase;
  margin-left: 20%;
  font-style: italic;
}
.eyfel-order__title-description {
  text-transform: unset;
  max-width: 600px;
  margin-left: 25px;
  @include mobile {
    margin-left: unset;
  }
}
.eyfel-order__bottom {
  display: flex;
  align-items: center;
  margin-left: 21%;
  @include mobile {
    flex-direction: column;
  }
}
.eyfel-order__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  height: 350px;
}
.eyfel-order__form {
  border: 2px solid black;
  flex: 0 0 calc(50% - 44px);
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: end;
  row-gap: 40px;
  height: calc(100% - 44px);
  @include mobile {
    flex: unset;
    align-items: center;
    width: 100%;
    row-gap: 20px;
    height: unset;
  }
}
.eyfel-order__form_image {
  border: 2px solid black;
  flex: 0 0 calc( 50% - 4px);
  max-width: 50%;
  height: calc(100% - 4px);
  background-size: cover;
  background-position: center;
  @include mobile {
    display: none;
  }
}
.eyfel-order__form__description {
  font-size: 30px;
  font-style: italic;
  font-weight: 600;
}
</style>
