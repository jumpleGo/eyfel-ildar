<template>
  <button
      :class="['app-button eyfel-main__description', type, {fluid}, {'gradient': type === 'gold'}]"
      @click="emit('click')">{{ text }}</button>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
  text: string,
  type?: 'light' | 'dark' | 'light-bordered' | 'dark-bordered' |'gold',
  fluid?: boolean
}>(), {
  type: 'light'
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
<style lang="scss" scoped>
@import '/style/variables';
.app-button {
  background: transparent;
  outline: none;
  transition: .5s;
  font-style: italic;
  padding: 11px 40px;
  width: fit-content;
  background: unset;
  border: unset;
  font-weight: 400;


  &:hover {
    cursor: pointer;
  }
}
.fluid {
  width: 100%;
}
.light-bordered {
  color: $light;
  border: 2px solid $light;
  &:hover {
    background: $light;
    color: $dark;
  }
}
.dark-bordered {
  color: $dark;
  border: 2px solid $dark;
  &:hover {
    background: $dark;
    color: $light;
  }
}
.light {
  color: $light;
  border: 2px solid $light;
}
.dark {
  color: $light;
  border: 2px solid $dark;
  background: $dark;
}
.gold {
  color: $gold;
  border: 2px solid $gold;
  background: transparent;
  &:hover {
    color: black;
    background: $gold-gradient;
  }
}
</style>