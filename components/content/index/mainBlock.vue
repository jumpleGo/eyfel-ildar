<template>
  <div class="eyfel-main">
    <div class="eyfel-main__title">
      <h2 class="eyfel-main__title--h2 cormorant">парфюмерная</h2>
      <h1 class="eyfel-main__title--h1 cormorant">eyfel</h1>
      <h2 class="eyfel-main__title--h2 --last cormorant">империя</h2>
    </div>
    <p class="eyfel-main__description">
      Парфюмерный дом EYFEL — один из лидеров среди производителей элитной парфюмерии. Бренд был основан в Турции в 2006 году,а в 2009 году быстро завоевал популярность благодаря высокому качеству продукции и оригинальным ароматам. Сегодня духи EYFEL продаются более чем в 20 странах мира, включая Россию.<br><br>
    </p>
    <img src="/assets/main/eyfel-parfum.png" class="eyfel-main__perfume" />
    <img src="/assets/flower.svg" class="eyfel-main__flower" />
  </div>
</template>
<style lang="scss" scoped>
@import 'style/mixins';
.eyfel-main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 40px;
  width: 100%;
  max-width: 1200px;
  @include tablet {
    padding: 50px 16px;
  }
  @include mobile {
    padding: 50px 16px 270px;
  }
}
.eyfel-main__title {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  position: relative;
}
.eyfel-main__title--h2 {
  margin-left: 5vw;
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }

}
.--last {
  margin-left: auto;
  margin-right: 20vw;
  @include mobile {
    margin-left: auto;
    margin-right: 0;
  }
  @include tablet {
    margin-left: auto;
    margin-right: 0;
  }
}
.eyfel-main__title--h1 {
  text-align: center;

}
.eyfel-main__description {
  max-width: 810px;
  margin-left: auto;
  @include tablet {
    margin-left: unset;
  }
  @include mobile {
    margin-top: 40px
  }
}
.eyfel-main__perfume {
  position: absolute;
  margin-top: 10px;
  bottom: 0;
  max-width: 560px;
  animation: up linear 1s;
  @include tablet {
    display: none;
  }
  @include mobile {
    bottom: -30px;
    left: 10%;
    margin-top: unset;
    max-width: 300px;
  }
}
.eyfel-main__flower {
  position: absolute;
  bottom: 0;
  max-width:300px;
  left: 0;
  @include tablet {
    display: none;
  }
  @include mobile {
    max-width: 200px;
    bottom: 0;
  }
}
</style>
<script setup lang="ts">
</script>