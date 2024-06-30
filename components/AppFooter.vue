<template>
  <div class="app-footer" id="app-footer">
    <div class="app-footer__contacts montserrat">
      <h3 class="app-footer__contacts__title  eyfel-main__title--h3">Контакты</h3>
      <div class="app-footer__contacts__items">
        <div class="contacts__item eyfel-main__description">
          <p>Город:</p>
          <p>Казань:</p>
        </div>
        <div class="contacts__item eyfel-main__description">
          <p>Адрес:</p>
          <p>Сибгата Хакима, 23, блок 2, офис 21</p>
        </div>
        <div class="contacts__item eyfel-main__description">
          <p>Номера телефонов:</p>
          <a class="eyfel-main__description" href="tel:+79393705490">+79393705490</a>
          <a class="eyfel-main__description" href="tel:+79397333379">+79397333379</a>
          <a class="eyfel-main__description" href="tel:+79393357033">+79393357033</a>
          <a class="eyfel-main__description" href="tel:+79393948143">+79393948143</a>
        </div>
        <div class="contacts__item eyfel-main__description">
          <p>Почта:</p>
          <p><a href="mailto:eyfelkzn@mail.ru">eyfelkzn@mail.ru</a></p>
        </div>
        <div class="contacts__item eyfel-main__description">
          <p>Cоцсети:</p>
          <div class="contacts__item-links">
            <a href=""><img src="/assets/tg.png" alt=""></a>
            <a href=""><img src="/assets/inst.png" alt=""></a>
            <a href=""><img src="/assets/vk.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <AppMap />
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import 'style/index';
.app-footer {
  position: relative;
  width: 100%;
  @include mobile {
    border-top: 2px solid black;
  }
}
.app-footer__contacts__title {
  width: 100%;
  text-align: center;
}
.app-footer__contacts {
  padding: 40px;
  border: 2px solid black;
  background: $light;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 600px;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 40px;
  z-index: 2;
  @include tablet {
    max-width: 400px;
  }
  @include mobile {
    max-width: unset;
    left: 0;
    width: auto;
    position: unset;
    border: unset;
  }
}
.app-footer__contacts__items {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
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