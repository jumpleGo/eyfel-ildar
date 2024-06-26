<template>
  <div class="eyfel-modal__wrapper">
    <div class="eyfel-modal" @click="emit('close')" />
    <slot />
  </div>

</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<style lang="scss" scoped>
.eyfel-modal {
  box-shadow: 1px 1px 1px gray;
  background: rgba(128, 128, 128, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.eyfel-modal__wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 100;
  top: 0;
}
.eyfel-modal__content {
  position: fixed;
  z-index: 100;
}
</style>

