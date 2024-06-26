<template>
  <div class="eyfel-form">
    <input class="eyfel-form--input eyfel-main__description montserrat"  type="text" placeholder="Имя" />
    <input class="eyfel-form--input --second eyfel-main__description montserrat" type="tel" placeholder="Телефон" />
    <AppButton :text="text" type="dark" class="eyfel-form__button" @click="emit('send')" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()

const emit = defineEmits<{
  (e: 'send'): void
}>()
</script>
<style lang="scss" scoped>
.eyfel-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
}
.eyfel-form--input {
  border: unset;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 10px 0;
  &::placeholder {
  color: black;
    opacity: 0.6;
  }
  &:focus {
    outline: unset;
  }
}
.--second {
  margin-top: 20px
}
.eyfel-form__button {
  margin-top: 64px;
}
</style>
