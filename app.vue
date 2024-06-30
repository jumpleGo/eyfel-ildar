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
    <OrderFlow :show-modal="isShowModal" @close="isShowModal = false" @rozn="roznZakaz" />
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
import OrderFlow from "~/components/content/OrderFlow.vue";
import {useOrderFlow} from "~/composables/useOrderFlow";
import {useModalStore} from "~/store/modal";
const {showDescription, roznZakaz} = useOrderFlow()
const {isLoading} = storeToRefs(useLoaderStore())
const {count} = storeToRefs(useProductsStore())
const {isShowModal} = storeToRefs(useModalStore())

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