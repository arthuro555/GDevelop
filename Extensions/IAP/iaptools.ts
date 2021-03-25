namespace gdjs {
  export namespace evtTools {
    export namespace iap {
      store.verbosity = 2;

      export const registerProduct = (
        id: string,
        type: store.StoreProductType,
        alias?: string
      ) =>
        store.register({
          id,
          type,
          alias,
        });

      export const confirmDelivery = (productID: string) =>
        store.get(productID).finish();

      export const getTitle = (productID: string): string =>
        store.get(productID).title;

      export const getAlias = (productID: string): string =>
        store.get(productID).alias || '';

      export const getDescription = (productID: string): string =>
        store.get(productID).description;

      export const getPrice = (productID: string): string =>
        store.get(productID).price;

      export const getState = (productID: string): string =>
        store.get(productID).state;
    }
  }
}
