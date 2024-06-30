import { defineStore } from 'pinia'
import type {IProductItem} from "~/api/types";
export const useModalStore = defineStore('modal',() => {

    const isShowModal = ref<boolean>(false)
    const selectedItem = ref<IProductItem | null>(null)


    return {
        isShowModal,
        selectedItem
    }
})