<template>
  <div class="eyfel-main">
    <div class="eyfel-main__title">
      <h2 class="eyfel-main__title--h2 cormorant">женская</h2>
      <h1 class="eyfel-main__title--h1 cormorant">eyfel</h1>
      <h2 class="eyfel-main__title--h2 --last cormorant">парфюмерия</h2>
      <p class="eyfel-main__description montserrat">
        EYFEL - это не просто духи, это настоящее произведение искусства, которое способно подчеркнуть вашу индивидуальность и придать уверенности. Каждый аромат  гарантирует инвидуальность и стойкость.
      </p>
    </div>
    <div class="eyfel-main__line-text">
      <div class="eyfel-main__line" />
      <p class="eyfel-main__text  montserrat">( ароматы для неё )</p>
    </div>
  </div>

  <img src="/assets/woman/parfum.png" class="eyfel-main__perfume" />
  <img src="/assets/woman/flower.png" class="eyfel-main__flower" />
  <img src="/assets/woman/main.png" class="eyfel-main__stone" />
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
  left: 0;
  @include tablet {
    margin-top: 40px;
    font-size: 14px;
  }
  @include mobile {
    margin-top: 40px;
    font-size: 14px;
    position: unset;
  }
}
.eyfel-main__line {
  height: 2px;
  background: black;
  width: 35vw;
  @include tablet {
    margin-left: unset;
    width: 60vw;
  }
  @include mobile {
    margin-left: unset;
    width: 40vw;

  }
}
.eyfel-main__text {
  color: black;

}
.eyfel-main__title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  color: black;
  z-index: 1;
  width: 100%;
}
.eyfel-main__title--h2 {
  text-transform: uppercase;
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }

}
.eyfel-main__title--h1 {
  text-transform: uppercase;
  margin-left: 22%;
}
.--last {
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }
}

.eyfel-main__description {
  color: black;
  max-width: 700px;

  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }
}
.eyfel-main__perfume {
  position: absolute;
  max-width: 550px;
  right: 0px;
  z-index: 4;
  animation: up linear 1.4s;
  top: 40px;
  @include tablet {
    display: none;
  }
  @include mobile {
    left: auto;
    top: 290px;
    right: 30px;
    max-width: 280px;

  }
}
.eyfel-main__flower {
  position: absolute;
  right: 0;
  top: 200px;
  z-index: 4;
  max-width: 350px;
  @include tablet {
    display: none;
  }
  @include mobile {
    right: 0;
    top: 350px;
    max-width: 200px;
  }
}
.eyfel-main__stone {
  position: absolute;
  right: 0;
  z-index: 3;
  max-width: 990px;
  top: 0;
  @include tablet {
    display: none;
  }
  @include mobile {
    right: 0;
    top: 200px;
    max-width: 600px;
  }
}

</style>
<script setup lang="ts">
</script>