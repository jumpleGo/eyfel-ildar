<template>
  <Teleport to="body">
    <AppModal v-if="showModal" @close="close">
      <ModalProduct
          v-if="!showForm && !showDone"
          class="modal"
          v-bind="currentItem"
          @opt="showForm = true"
          @rozn="emit('rozn')"
        @close="close"/>
      <div v-if="showForm" class="modal-form modal">
        <h3 class="eyfel-main__title--h3">Оставьте ваши данные </h3>
        <p class="eyfel-main__description">наш менеджер поможет с выбором аромата</p>
        <FormContact
            @send="showDone = true; showForm = false"
            text="отправить" />
      </div>
      <DoneForm v-if="showDone" class="modal" />
    </AppModal>
  </Teleport>
</template>
<script setup lang="ts">
import ModalProduct from "~/components/content/Modal/ModalProduct.vue";
import DoneForm from "~/components/content/DoneForm.vue";
import FormContact from "~/components/content/FormContact.vue";
import type {IProductItem} from "~/api/types";


const showForm = ref(false)
const showDone = ref(false)

defineProps<{
  currentItem: IProductItem,
  showModal?: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'rozn'): void
}>()

const close = () => {
  emit('close')
  showForm.value = false
  showDone.value = false
}
</script>
<style lang="scss" scoped>
.modal-form {
  max-width: 600px;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  background: white;
}
.eyfel-main__title--h3 {
  font-style: italic;
}
</style>