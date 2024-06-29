<template>
  <div class="eyfel-form">
    <input v-model="name" class="eyfel-form--input eyfel-main__description montserrat"  type="text" placeholder="Имя" />
    <input v-model="phone" class="eyfel-form--input --second eyfel-main__description montserrat" type="tel" placeholder="Телефон" />
    <AppButton :text="text" type="dark" class="eyfel-form__button" @click="send" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()

const name = ref('')
const phone = ref('')

const send = () => {
  if (!phone) return
  emit('send', {name: name.value, phone: phone.value})
}

const emit = defineEmits<{
  (e: 'send', {name, phone}: {name: string, phone: string}): void
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
