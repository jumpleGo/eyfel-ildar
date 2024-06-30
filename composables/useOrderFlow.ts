import type {IProductItem} from "~/api/types";
import {useModalStore} from "~/store/modal";

export const useOrderFlow = () => {
    const { scrollToAnchor } = useAnchorScroll()
    const {isShowModal, selectedItem} = storeToRefs(useModalStore())


    const showDescription = (item?: IProductItem) => {
        if (item) {
            selectedItem.value = item
        }
        isShowModal.value = true
    }

    const roznZakaz = () => {
        isShowModal.value = false
        scrollToAnchor('#app-footer')
    }

    watch(() => isShowModal.value, (v) => {
        if (v) document.body.classList.add('modal-open')
        else document.body.classList.remove('modal-open')
    })



    return {
        showModal: isShowModal.value,
        selectedItem: selectedItem.value,
        showDescription,
        roznZakaz
    }
}