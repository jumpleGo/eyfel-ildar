import { defineStore } from 'pinia'
import type {IProductItem} from "~/api/types";
export const useLoaderStore = defineStore('loader',() => {

    const isLoading = ref<boolean>(false)


    return {
        isLoading
    }
})