<template>
  <div class="done-form">
    <h3 class="eyfel-main__title--h3">Благодарим вас!</h3>
    <p class="eyfel-main__description">
      в ближайшее время мы свяжемся с Вами
    </p>
    <img src="/assets/form-flower.png" class="flower">
    <img src="/assets/logo.svg" class="logo">
  </div>
</template>
<style lang="scss" scoped>
.done-form {
  display: flex;
  flex-direction: column;
  padding: 40px 16px 0;
  align-items: center;
  max-width: 600px;
  width: 100%;
  background: $light;
  border: 2px solid black;
  row-gap: 10px;
}
.eyfel-main__title--h3 {
  font-style: italic;
}
.flower {
  max-width: 197px;
}
.logo {
  margin-top: -60px;
  margin-bottom: 16px;
  place-self: end;
}
</style>