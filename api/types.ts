import { type ITypesCatalog} from "~/helpers/getImageByType";

export interface IProductItem {
    src: string,
    title: string,
    description: string,
    type: 'man' | 'woman' | 'premium' | 'car' | 'home',
    category: ITypesCatalog,
    model: string,
    isBestseller: boolean
}