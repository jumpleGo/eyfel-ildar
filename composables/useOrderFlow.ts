import type {IProductItem} from "~/api/types";

export const useOrderFlow = () => {
    const { scrollToAnchor } = useAnchorScroll()
    const showModal = ref(false)

    const currentItem = ref<IProductItem | null>(null)

    const showDescription = (item: IProductItem) => {
        currentItem.value = item
        showModal.value = true
    }

    const roznZakaz = () => {
        console.log('erewr')
        showModal.value = false
        scrollToAnchor('#app-footer')
    }

    watch(() => showModal.value, (v) => {
        if (v) document.body.classList.add('modal-open')
        else document.body.classList.remove('modal-open')
    })



    return {
        showModal,
        currentItem,
        showDescription,
        roznZakaz
    }
}