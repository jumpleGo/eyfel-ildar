<template>
  <div class="eyfel-app">
    <div class="eyfel-content">
      <layout>
        <AppPreloader v-if="isLoading" />
        <AppHeader class="eyfel-header" />
        <keep-alive>
          <NuxtPage  />
        </keep-alive>
      </layout>
    </div>
    <AppFooter class="eyfel-footer" />
  </div>
</template>
<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import Layout from "~/layouts/layout.vue";
import {useLoaderStore} from "~/store/loader";
import AppPreloader from "~/components/AppPreloader.vue";
import {getAllCount} from "~/api/getters";
import {useProductsStore} from "~/store";

const {isLoading} = storeToRefs(useLoaderStore())
const {count} = storeToRefs(useProductsStore())

useAsyncData(async () => {
  count.value = await getAllCount()

})
</script>

<style lang="scss" scoped>
.eyfel-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.eyfel-content {
  flex: 1;
}
.eyfel-footer {
  flex: 0;
}
</style>
<style lang="scss">
body {
  margin: unset;
}
</style>