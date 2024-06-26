import { defineStore } from 'pinia'
import type {IProductItem} from "~/api/types";
export const useProductsStore = defineStore('products',() => {

  const indexBestsellers = ref<IProductItem[]>([])
  const indexMan = ref<IProductItem[]>([])
  const indexWoman = ref<IProductItem[]>([])
  const indexHome = ref<IProductItem[]>([])
  const isLoadedIndex = ref<boolean>(false)
  const premium = ref<IProductItem[]>([])
  const man = ref<IProductItem[]>([])
  const woman = ref<IProductItem[]>([])

  const catalog = ref<IProductItem[]>([])
  const count = ref<number>(0)


    return {
        indexBestsellers,
        indexMan,
        indexWoman,
        indexHome,
        isLoadedIndex,
        premium,
        man,
        woman,
        catalog,
        count
    }
})