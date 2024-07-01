<template>
  <div class="eyfel-catalog__menu--wrapper">
    <div class="eyfel-catalog__content--menu">
      <h3 v-if="isMobile" class="eyfel-main__title--h3">Фильтры</h3>
      <div class="menu-category eyfel-main__description pdl">BIGHILL</div>
      <div class="eyfel-catalog__content--filters pdl">
        <filter-item v-model="filters['bighill_parfum_man']" title="Мужской парфюм" id="bighill_parfum_man" @change="setFilter"  />
        <filter-item v-model="filters['bighill_parfum_woman']" title="Женский парфюм" id="bighill_parfum_woman" @change="setFilter"  />
        <filter-item v-model="filters['bighill_parfum_unisex']" title="Унисекс парфюм" id="bighill_parfum_unisex" @change="setFilter"  />
        <filter-item v-model="filters['bighill_diffusor']" title="Диффузоры" id="bighill_diffusor" @change="setFilter" />
      </div>
      <div class="menu-category eyfel-main__description pdl">Eyfel</div>
      <div class="eyfel-catalog__content--filters pdl">
        <filter-item v-model="filters['eyfel_parfum_man']" title="Мужской парфюм" id="eyfel_parfum_man" @change="setFilter" />
        <filter-item v-model="filters['eyfel_parfum_woman']" title="Женский парфюм" id="eyfel_parfum_woman" @change="setFilter" />
        <filter-item v-model="filters['eyfel_parfum_unisex']" title="Унисекс парфюм" id="eyfel_parfum_unisex" @change="setFilter"  />
        <filter-item v-model="filters['eyfel_diffusor']" title="Диффузоры" id="eyfel_diffusor" @change="setFilter" />
        <filter-item v-model="filters['eyfel_sprei']" title="Спреи" id="eyfel_sprei" @change="setFilter" />
      </div>
      <div class="menu-category eyfel-main__description pdl">Другое</div>
      <div class="eyfel-catalog__content--filters pdl">
        <filter-item v-model="filters['autoparfum']" title="Автопарфюм" id="autoparfum" @change="setFilter" />
      </div>
      <span class="clear mgl" @click="reset">сбросить</span>

      <AppButton v-if="isMobile" text="применить" type="dark" class="button" @click="emit('close')" />
    </div>
  </div>
</template>
<script setup lang="ts">
import FilterItem from "~/components/content/FilterItem.vue";
import type {ITypesCatalog} from "~/helpers/getImageByType";
const {isMobile} = useResponsive()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'change-filters', v: ITypesCatalog[]): void
}>()



const filters = reactive<Record<ITypesCatalog, boolean>>({
  bighill_parfum_man: false,
  bighill_parfum_woman: false,
  bighill_parfum_unisex: false,
  bighill_diffusor: false,
  eyfel_parfum_man: false,
  eyfel_parfum_woman: false,
  eyfel_parfum_unisex: false,
  eyfel_diffusor: false,
  eyfel_sprei: false,
  autoparfum: false
})

const route = useRoute()
const checkQuery = () => {
  if (route.query.model) {
    const queries = (route.query.model as string).split(',')
    Object.keys(filters).forEach(item => {
      console.log(item, queries.includes(item))
      filters[item] = queries.includes(item);
    })
  } else {
    filters['bighill_parfum_unisex'] = true
  }
}

onMounted(() => checkQuery())

const setFilter = ({value, id}: {value: boolean, id: ITypesCatalog}) => {
  console.log('change')
  filters[id] = value
}

const reset = () => {
  Object.keys(filters).forEach(key => filters[key] = false)
}

const activeFilters = computed(() => Object.keys(filters).filter(key => filters[key]))
watch(() => activeFilters.value, (value) => {
  emit('change-filters', value)
})
</script>
<style lang="scss" scoped>
.menu-category {
  padding: 23px 40px;
  font-weight: 600;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
.eyfel-catalog__menu--wrapper {
  max-width: 350px;
  background: $light;
  width: 100%;
  @include tablet {
    max-width: 200px;
  }

  @include mobile {
    max-width: unset;
    position: fixed;
    width: 100%;
    top: 0;
    min-height: 100vh;
    height: 100%;
    z-index: 100;
  }
}
.eyfel-catalog__content--menu {
  display: flex;
  width: 100%;
  flex-direction: column;
  @include mobile {
    overflow: scroll;
    height: 100%;
  }
}
.eyfel-main__title--h3 {
  @include mobile {
    margin: 20px 40px;
  }
}
.eyfel-catalog__content--filters {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  row-gap: 15px;
}


.clear {
  border-bottom: 2px dashed black;
  width: fit-content;
  &:hover {
    cursor: pointer;
  }
}

.button {
  margin: 40px;
  margin-bottom: 100px;
}
</style>