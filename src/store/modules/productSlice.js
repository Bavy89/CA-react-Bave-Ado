import { createSlice } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";
const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], singleProduct: null },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});
export default productsSlice.reducer;
const { SET_PRODUCTS } = productsSlice.actions;
const { SET_SINGLE_PRODUCT } = productsSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://v2.api.noroff.dev/online-shop");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    dispatch(SET_PRODUCTS(data.data));
  } catch (error) {
    dispatch(setError(true, "Error fetching products"));
  }
};
export const fetchProductById = (id) => async (dispatch) => {
  dispatch(SET_SINGLE_PRODUCT({}));
  let response;
  try {
    response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
    const data = await response.json();
    dispatch(SET_SINGLE_PRODUCT(data.data));
  } catch (e) {
    return console.error(e.message);
  }
  if (response.ok) {
  } else {
    dispatch(setError(true, "error"));
  }
};
