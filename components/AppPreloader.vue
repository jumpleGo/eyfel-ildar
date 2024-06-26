<template>
  <div class="preloader">
    <img src="/assets/logo.svg" />
  </div>
</template>
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
</style>