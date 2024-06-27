import {useNuxtApp} from "#app";
import {addDoc, collection } from "@firebase/firestore";
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
