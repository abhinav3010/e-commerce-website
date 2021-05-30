import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import shopReducer from './shop/shop-reducer';
import sectionsReducer from './sections/sections-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  sections: sectionsReducer,
});
export default persistReducer(persistConfig, rootReducer);
