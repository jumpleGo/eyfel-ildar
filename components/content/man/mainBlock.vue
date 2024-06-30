<template>
  <div class="eyfel-main">
    <div class="eyfel-main__title">
      <h2 class="eyfel-main__title--h2 cormorant">мужская</h2>
      <h1 class="eyfel-main__title--h1 cormorant">eyfel</h1>
      <h2 class="eyfel-main__title--h2 --last cormorant">парфюмерия</h2>
      <p class="eyfel-main__description montserrat">
        EYFEL – это не просто духи. Это искусство передачи эмоций и чувств через ароматы. Мы создаем наши духи только из натуральных ингредиентов, чтобы гарантировать их безопасность и стойкость.
      </p>
    </div>
    <div class="eyfel-main__line-text">
      <div class="eyfel-main__line" />
      <p class="eyfel-main__text  montserrat">( ароматы для него )</p>
    </div>
  </div>
  <img src="/assets/man/parfum.png" class="eyfel-main__perfume" />
  <img src="/assets/man/listok.svg" class="eyfel-main__listok" />
  <img src="/assets/man/tree.svg" class="eyfel-main__tree" />
</template>
<style lang="scss" scoped>
.eyfel-main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
  width: 100%;
  min-height: 50vh;
  max-width: 1200px;
  @include tablet {
    padding: 50px 16px;
    height: calc(100vh - 80px);
  }
  @include mobile {
    padding: 50px 16px;
  }
}
.eyfel-main__line-text {
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;
  column-gap: 10px;
  @include tablet {
    margin-top: 40px;
    font-size: 14px;
  }
  @include mobile {
    margin-top: 40px;
    font-size: 14px;
  }
}
.eyfel-main__line {
  height: 1px;
  background: white;
  width: 50vw;
  @include tablet {
    margin-left: unset;
    width: 60vw;
  }
  @include mobile {
    margin-left: unset;
    width: 30vw;

  }
}
.eyfel-main__text {
  color: white;

}
.eyfel-main__title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  color: white;
  width: fit-content;
  z-index: 1;


  @include desktop {
    margin-left: 20%;
  }
}
.eyfel-main__title--h2 {
  margin-left: 5vw;
  text-transform: uppercase;
  @include desktop-m {
    margin-left: 9vw;
  }
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }

}
.eyfel-main__title--h1 {
  text-transform: uppercase;
  margin-left: 5vw;
  @include desktop-m {
    margin-left: 9vw;
  }
}
.--last {
  margin-left: 5vw;
  @include desktop-m {
    margin-left: 9vw;
  }
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }
}

.eyfel-main__description {
  color: white;
  margin-left: 5vw;
  @include desktop-m {
    margin-left: 9vw;
  }
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }
}
.eyfel-main__perfume {
  position: absolute;
  max-width: 500px;
  width: 100%;
  left: 10vw;
  animation: up linear 1.4s;
  z-index: 2;
  top: 40px;
  @include desktop-m {
    max-width: 400px;
    top: 80px;
    left: 5vw;
  }
  @include tablet {
    left: 100px;
    top: 360px;
    max-width: 400px;
  }
  @include mobile {
    left: 40px;
    top: 350px;
    max-width: 300px;

  }
}
.eyfel-main__tree {
  position: absolute;
  left: 0;
  z-index: 1;
  top: -40px;
  max-width: 800px;
  @include desktop-m {
    max-width: 600px;
    top: 0;
  }
  @include tablet {
    left: 0;
    top: 300px;
    max-width: 600px;
  }
  @include mobile {
    left: 0;
    top: 300px;
    max-width: 400px;
  }
}
.eyfel-main__listok {
  position: absolute;
  left: 0;
  z-index: 3;
  max-width: 700px;
  top: 400px;
  @include desktop-m {
    max-width: 400px;
    top: 350px;
  }
  @include tablet {
    left: 0;
    top: 600px;
    max-width: 400px;
  }
  @include mobile {
    left: 0;
    top: 550px;
    max-width: 300px;
  }
}

</style>
<script setup lang="ts">
</script>