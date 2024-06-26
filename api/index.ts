import {useNuxtApp} from "#app";
import {addDoc, collection, doc, getCountFromServer, getDocs, limit, query, setDoc, where} from "@firebase/firestore";
import type {IProductItem} from "~/api/types";
import {startAfter, startAt} from "@firebase/database";


export const getByQuery = async (path: 'products' | 'texts', {fieldPath, opStr, value}: Record<string, any>): Promise<IProductItem[]> => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, path),
        where(fieldPath, opStr, value),
        limit(10)
    )
    const querySnapshot = await getDocs(q);

    const collectionData: IProductItem[] = []
    querySnapshot.forEach(  doc => collectionData.push(<IProductItem>doc.data()))
    return collectionData

}

export const getListByType = async (type: 'man' | 'woman' | 'premium') => {
    const {$firebaseDB} = useNuxtApp()
    const q = query(
        collection($firebaseDB, 'products'),
        where('type', '==', type),
    )

    const querySnapshot = await getDocs(q);

    const collectionData: IProductItem[] = []
    querySnapshot.forEach( doc => collectionData.push(<IProductItem>doc.data()))
    return collectionData
}

export const addDocument = async ({title, description, type, isBestseller, category, model}) => {
    const {$firebaseDB} = useNuxtApp()

    await addDoc(collection($firebaseDB, "products"), {
        title,
        description,
        type,
        isBestseller,
        category,
        model
    });
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
        limit(39),

    )
    const collectionData: IProductItem[] = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(  doc => collectionData.push(<IProductItem>doc.data()))

    return collectionData

}