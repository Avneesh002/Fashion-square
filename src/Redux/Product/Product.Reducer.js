import {
  PRODUCTS_GET_ERROR,
  PRODUCTS_GET_LOADING,
  PRODUCTS_GET_SUCCESS,
  PRODUCT_FILTER,
} from "./Product.ActionType";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case PRODUCTS_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case PRODUCTS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case PRODUCT_FILTER: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
