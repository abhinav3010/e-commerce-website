import { SHOP_PAGE_DATA } from './shop-page-data';

const INITIAL_STATE = {
  collectionData: SHOP_PAGE_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
