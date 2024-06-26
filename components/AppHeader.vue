<template>
  <div class="eyfel-header montserrat">
    <nuxt-link to="/" :class="['eyfel-header__links-link main-link', {active: isActive({to: '/'})}]">Главная</nuxt-link>
    <div class="eyfel-header__links">
      <nuxt-link
          class="eyfel-header__links-link"
          v-for="(item, index) in menus"
          :to="item.to"
          :key="`menu-${index}`"
          :class="{active: isActive(item)}">
        {{item.text}}
      </nuxt-link>
    </div>
    <img class="eyfel-header__logo" :src="image" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const image = computed(() => {
   if (route.path === '/man') return "/assets/logo_white.svg"
  else if (route.path === '/premium') return "/assets/logo_gold.svg"
  else return "/assets/logo.svg"
})
const menus = [
  {
    to: '/man',
    text: 'Для него'
  },
  {
    to: '/woman',
    text: 'Для нее'
  },
  {
    to: '/premium',
    text: 'Люкс'
  },
  {
    to: '/catalog',
    text: 'Каталог'
  }
]

const isActive = (item) => {
  return route.path === item.to
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.eyfel-header {
  padding: 21px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include tablet {
    padding: 12px 16px;
  }
  @include mobile {
    padding: 12px 16px;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
  }

}
.main-link {
  font-style: italic;
}
.eyfel-header__logo {
  width: 137px;
  height: auto;
  @include tablet {
    width: 100px
  }
  @include mobile {
    display: none;
  }
}
.eyfel-header__links {
  display: flex;
  align-items: center;
  max-width: 720px;
  width: 100%;
  justify-content: space-between;
  min-height: 53px;
  @include tablet {
    justify-content: space-around;
  }
  @include mobile {
    max-width: unset;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
    min-height: unset;
  }
  &-link {
    font-size: 24px;
    text-transform: capitalize;
    text-decoration: none;
    @include tablet {
      font-size: 16px;
    }
    @include mobile {
      font-size: 14px;
    }
  }
}
.active {
  font-weight: 600;
  font-style: italic;
}
</style>