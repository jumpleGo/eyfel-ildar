<template>
  <div class="preloader">
    <div class="logo" v-html="logo" />
  </div>
</template>
<script setup lang="ts">
import {logo} from "~/helpers/icons";
</script>
<style lang="scss" scoped>
.preloader {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background: $light;
}
.logo {
  width: 120px;
}
</style>
