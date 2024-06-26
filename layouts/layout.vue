<template>
  <div class="layout">
    <default-layout :class="layout">
      <slot />
    </default-layout>
  </div>
</template>
<script setup lang="ts">
import defaultLayout from "~/layouts/defaultLayout.vue";

const layout = ref('default-layout')
const route = useRoute()

watch(() => route.path, () => checkLayout())

const checkLayout = () => {
  if (route.path === '/') layout.value = 'default-layout'
  if (route.path === '/man') layout.value = 'dark-layout'
  if (route.path === '/woman') layout.value = 'default-layout'
  if (route.path === '/premium') layout.value = 'dark-layout'
  if (route.path === '/catalog') layout.value = 'default-layout'
}

onMounted(() => {
  checkLayout()
})
</script>