import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productSlice";
import cartSlice from "./modules/cartSlice";
import errorslice from "./modules/errorSlice";
import loaderSlice from "./modules/loaderSlice";

const reducer = combineReducers({
  products: productsSlice,
  cart: cartSlice,
  error: errorslice,
  loader: loaderSlice,
});
const index = configureStore({
  reducer,
});
export default index;
