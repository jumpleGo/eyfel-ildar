<template>
  <input v-model="title" placeholder="название" />
  <input v-model="description" placeholder="описание" />
  <input v-model="type" placeholder="тип" /> man woman premium
  <input v-model="isBestseller" type="checkbox" /> бестселлер?
  <input v-model="model"  placeholder="модель" />
  <input v-model="category"  placeholder="класс" /> 'bighill_parfum_man' | 'bighill_parfum_woman' | 'bighill_pdiffusor' | 'eyfel_parfum_man' | 'eyfel_parfum_woman'
  <button @click="create">создать</button>
</template>

<script lang="ts" setup>
import {addDocument} from "~/api/setters";
const title = ref('')
const description = ref('')
const model = ref('')
const type = ref('')
const category = ref('')
const isBestseller = ref(false)

const create = () => {
  addDocument({
    title: title.value,
    description: description.value,
    type: type.value,
    isBestseller: isBestseller.value,
    model: model.value,
    category: category.value
  })
}
</script>