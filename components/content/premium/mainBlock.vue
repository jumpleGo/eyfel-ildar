<template>
  <div class="eyfel-main">
    <div class="eyfel-main__title">
      <h2 class="eyfel-main__title--h2 cormorant">ПРЕМИУМ</h2>
      <h1 class="eyfel-main__title--h1 cormorant">BIGHILL</h1>
      <h2 class="eyfel-main__title--h2 --last cormorant">ПАРФЮМЕРИЯ</h2>
      <p class="eyfel-main__description montserrat">
        Bighill - это линейка ароматов селективных парфюмов с необыкновенно-
        притягательными нотами. Для создания ароматов этой коллекции мы
        используем насыщенные формулы: стойкие, яркие и узнаваемые.
      </p>
    </div>
  </div>
  <img src="/assets/bighill/smoke.png" class="eyfel-main__smoke" />
  <img src="/assets/bighill/mainBigHill.png" class="eyfel-main__parfum" />
  <img src="/assets/bighill/mainFlower.svg" class="eyfel-main__flower" />
</template>
<style lang="scss" scoped>
.eyfel-main {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 150px 0;
  width: 100%;
  max-width: 100vw;
  min-height: 50vh;
  @include tablet {
    padding: 50px 16px;
    height: calc(100vh - 80px);
  }
  @include mobile {
    padding: 50px 16px;
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
    margin-left: 20px;
  }
}
.eyfel-main__title--h2 {
  margin-left: 1vw;
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
  background: $gold-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.--last {
  margin-left: 9vw;
  @include mobile {
    margin-left: unset;
  }
  @include tablet {
    margin-left: unset;
  }
}

.eyfel-main__description {
  color: white;
  margin-left: 9vw;
  max-width: 800px;
  @include mobile {
    margin-left: unset;
    width: 100%;
  }
  @include tablet {
    margin-left: unset;
    width: 100%;
  }
}
.eyfel-main__smoke {
  position: absolute;
  max-width: 40vw;
  right: 0;
  z-index: 1;
  top: -50px;
  @include tablet {
    right: 0;
    top: 360px;
    max-width: 300px;
  }
  @include mobile {
    right: 0;
    top: 250px;
    max-width: 300px;

  }
}
.eyfel-main__parfum {
  position: absolute;
  right: 0;
  z-index: 2;
  top: 43px;
  max-width: 400px;
  @include tablet {
    right: 0;
    top: 300px;
    max-width: 400px;
  }
  @include mobile {
    right: 0;
    top: 300px;
    max-width: 200px;
  }
}
.eyfel-main__flower {
  position: absolute;
  right: 10%;
  z-index: 3;
  max-width: 35vw;
  top: 410px;
  animation: up linear 1.4s;
  @include tablet {
    right: 20%;
    top: 700px;
    max-width: 400px;
  }
  @include mobile {
    right: 20%;
    top: 500px;
    max-width: 100px;
  }
}

</style>