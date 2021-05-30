import { createSelector } from 'reselect';

export const selectShop = (state) => state.shop;

export const selectCollectionData = createSelector(
  [selectShop],
  (shop) => shop.collectionData
);
