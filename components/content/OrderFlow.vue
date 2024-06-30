<template>
  <Teleport to="body">
    <AppModal v-if="showModal" @close="close">
      <ModalProduct
          v-if="!showForm && !showDone && selectedItem"
          class="modal"
          v-bind="selectedItem"
          @opt="showForm = true"
          @rozn="emit('rozn')"
        @close="close"/>
      <div v-if="showForm" class="modal-form modal">
        <h3 class="eyfel-main__title--h3">Оставьте ваши данные </h3>
        <p class="eyfel-main__description">наш менеджер поможет с выбором аромата</p>
        <FormContact
            @send="send"
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
import {useModalStore} from "~/store/modal";

const {selectedItem} = storeToRefs(useModalStore())

const showForm = ref(false)
const showDone = ref(false)

const props = defineProps<{
  showModal?: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'rozn'): void
}>()

watch(() => props.showModal, (v) => {
  if (v && !selectedItem.value) {
    showForm.value = true
  }
})

const mail = useMail()
const close = () => {
  selectedItem.value = null
  emit('close')
  showForm.value = false
  showDone.value = false
}

const send = ({name, phone}) => {
  let text = `Имя: ${name} | Телефон: ${phone}`
  if (selectedItem.value) text+= ` | заявка с товара: ${selectedItem.value.title} | ${selectedItem.value.model}`
  mail.send({
    from: 'Посетитель сайта',
    subject: 'Заявка с сайта Eyfel',
    text,
  })
  showDone.value = true;
  showForm.value = false;
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
  @include mobile {
    max-width: unset;
    padding: 20px;
    width: -webkit-fill-available;
  }
}
.eyfel-main__title--h3 {
  font-style: italic;
}

::v-deep .done-form {
  @include mobile {
    max-width: unset;
    padding: 20px;
    width: -webkit-fill-available;
  }
}
</style>