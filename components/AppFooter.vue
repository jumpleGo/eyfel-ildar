<template>
  <div class="app-footer" id="app-footer">
    <div class="app-footer__contacts montserrat">
      <h3 class="app-footer__contacts__title  eyfel-main__title--h3">Контакты</h3>
      <div class="app-footer__contacts__items">
        <div class="contacts__item eyfel-main__description">
          <p>Город:</p>
          <p>Казань</p>
        </div>
        <div class="contacts__item eyfel-main__description">
          <p>Номера телефонов:</p>
          <a class="eyfel-main__description" href="tel:+79869170071">+79869170071</a>
          <a class="eyfel-main__description" href="tel:89662509509">89662509509</a>
          <a class="eyfel-main__description" href="tel:89662604604">89662604604</a>
        </div>
        <div class="contacts__item eyfel-main__description">
          <p>Доставка в другие города:</p>
          <p>CDEK</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import 'style/index';
.app-footer {
  position: relative;
  width: 100%;
  background: gray;
  @include mobile {
    border-top: 2px solid black;
  }
}
.app-footer__contacts__title {
  width: 100%;
}
.app-footer__contacts {
  padding: 40px;
  border: 2px solid black;
  background: $light;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  z-index: 2;
  @include mobile {
    border: unset;
    flex-direction: column;
  }
}
.app-footer__contacts__items {
  display: flex;
  width: 100%;
  gap: 100px;

  @include mobile {
    flex-direction: column;
    gap: 40px;

  }
}
.contacts__item {
  display: flex;
  flex-direction: column;
  a{
    text-decoration: none;
    color: black;
  }
  p {
    &:first-child {
      color: #6C6666
    }
  }

  @include mobile {
    gap: 10px
  }
}
.contacts__item-links {
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 10px;
  a {

    img {
      max-width: 40px;
      border-radius: 50%;
      @include mobile {
        max-width: 40px;
      }
    }
  }
}
</style>