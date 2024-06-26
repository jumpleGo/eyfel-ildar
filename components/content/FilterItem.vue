<template>
  <div class="eyfel-filter__item">
    <label :for="`filter-${id}`" class="label">
      <span class="eyfel-main__description">{{ title }}</span>
      <input
          v-model="model"
          type="checkbox"
          :id="`filter-${id}`"
          class="checkbox">
      <span :class="['checkmark', {active: modelValue}]" />
    </label>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'change', value: {value: boolean, id: string}): void
}>()
const props = defineProps<{
  modelValue: boolean,
  id: string,
  title: string,
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('change', {value: !props.modelValue, id: props.id})
  }
})
</script>
<style lang="scss" scoped>
.eyfel-filter__item{
  &:hover {
    cursor: pointer;
  }
  .active {
    &:before {
      background: black;
    }
  }
}
.label {
  position: relative;
  padding: 0 0 0 30px;
  &:hover {
    cursor: pointer;
  }
}

.checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 2px solid black;
  &:before {
    content: '';
    display: block;
    margin: 1.5px auto;
    width: 12px;
    height: 12px;
    background: transparent;
  }
}
.eyfel-main__description {
  font-weight: 400;
}
</style>