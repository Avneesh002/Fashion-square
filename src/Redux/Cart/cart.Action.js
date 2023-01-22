import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  DECREMENTQUANTITY,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  INCREMENTQUANTITY,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  TOTAL,
  UPDATE_CART_ITEMS_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
} from "./cart.ActionType";

export const getCartItems = () => async (disptach) => {
  disptach({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = axios.get("http://localhost:3000/cartItems");
    disptach({ type: GET_CART_ITEMS_SUCCESS, payload: res.data });
  } catch (error) {
    disptach({ type: GET_CART_ITEMS_ERROR });
  }
};

export const addItemToCart = (cartInfo) => async (dispatch) => {
  console.log("cartreduceraction", cartInfo);
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  try {
    let res = await axios.post("http://localhost:3000/cartItems", {
      ...cartInfo,
    });
    let data = res.data;
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_ERROR });
  }
};

export const removeItemFromCart = (cartId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  try {
    let res = await axios.delete(`http://localhost:3000/cartItems/${cartId}`);
    dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: { id: cartId } });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};

export const updateCartItem = (cartId, update) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  try {
    let res = await axios.patch(`http://localhost:3000/cartItems/${cartId}`, {
      ...update,
    });
    dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR });
  }
};

//kallol
// export const getTotal = () => (dispatch) => {
//   dispatch({
//     type: TOTAL,
//   });
// };

export const increment = (id) => (dispatch) => {
  dispatch({
    type: INCREMENTQUANTITY,
    payload: id,
  });
};

export const decrement = (id) => (dispatch) => {
  dispatch({
    type: DECREMENTQUANTITY,
    payload: id,
  });
};
