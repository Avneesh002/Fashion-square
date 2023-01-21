import {
  PRODUCTS_GET_ERROR,
  PRODUCTS_GET_LOADING,
  PRODUCTS_GET_SUCCESS,
} from "./Product.ActionType";
import { getProductsAPI } from "./ProductAPI";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_GET_LOADING });
  try {
    let data = await getProductsAPI();
    dispatch({ type: PRODUCTS_GET_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCTS_GET_ERROR });
  }
};
