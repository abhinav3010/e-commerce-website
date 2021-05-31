import { createSelector } from 'reselect';
import { SHOP_PAGE_DATA } from './shop-page-data';

const collectionIdMap = SHOP_PAGE_DATA.reduce((acc, collection) => {
  acc[collection.routeName] = collection.id;
  return acc;
}, {});

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === collectionIdMap[collectionUrlParam]
    )
  );
