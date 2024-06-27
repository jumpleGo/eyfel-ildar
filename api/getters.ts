import type {IProductItem} from "~/api/types";
import {useNuxtApp} from "#app";
import {collection, getCountFromServer, getDocs, limit, query, where} from "@firebase/firestore";
import {startAt} from "@firebase/database";
import type {ITypesCatalog} from "~/helpers/getImageByType";

const getterDataHandler = async (q) => {
    const querySnapshot = await getDocs(q);

    const collectionData: IProductItem[] = []
    querySnapshot.forEach(doc => collectionData.push(<IProductItem>doc.data()))
    return collectionData
}
export const getByQuery = async (path: 'products' | 'texts', {fieldPath, opStr, value}: Record<string, any>): Promise<IProductItem[]> => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, path),
        where(fieldPath, opStr, value),
        limit(10)
    )
    return getterDataHandler(q)

}

export const getListByType = async (type: 'man' | 'woman' | 'premium') => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, 'products'),
        where('type', '==', type),
    )

    return getterDataHandler(q)
}

export const getByCategory  = async (category: ITypesCatalog, limitCount?: number | undefined): Promise<IProductItem[]> => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, 'products'),
        where('category', '==', category),
        limit(limitCount || 999)
    )
    return getterDataHandler(q)

}


export const getAllCount = async (): Promise<number> => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, 'products')
    )
    const count = await getCountFromServer(q)
    return count.data().count
}

export const getByFilterList = async (filterList: string[], startCount: number): Promise<IProductItem[]> => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, 'products'),
        startAt(startCount),

    )
    const collectionData: IProductItem[] = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(  doc => collectionData.push(<IProductItem>doc.data()))

    return collectionData

}