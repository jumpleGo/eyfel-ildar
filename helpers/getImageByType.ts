export type ITypesCatalog =
    | 'bighill_parfum_man'
    | 'bighill_parfum_woman'
    | 'bighill_diffusor'
    | 'eyfel_parfum_man'
    | 'eyfel_parfum_woman'
    | 'eyfel_diffusor'
    | 'bighill_parfum_unisex'
    | 'eyfel_parfum_unisex'
    | 'eyfel_sprei'
    | 'autoparfum'
export const getImageByType = (type: ITypesCatalog) => {
   switch (type) {
       case 'bighill_parfum_man':
           return '/assets/catalog/catalog-bighill.png'
       case 'bighill_parfum_unisex':
           return '/assets/catalog/catalog-bighill.png'
       case 'bighill_parfum_woman':
           return '/assets/catalog/catalog-bighill.png'
       case 'eyfel_parfum_woman':
           return '/assets/catalog/catalog-eyfel.png'
       case 'eyfel_parfum_man':
           return '/assets/catalog/catalog-eyfel.png'
       case 'eyfel_parfum_unisex':
           return '/assets/catalog/catalog-eyfel.png'
       case 'bighill_diffusor':
           return '/assets/catalog/catalog-diffusor.png'
       case 'eyfel_diffusor':
           return '/assets/catalog/catalog-diffusor-eyfel.png'
       case 'eyfel_sprei':
           return '/assets/catalog/catalog-sprei.png'
   }
}