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
} from "./cart.ActionType";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
  totalamount: 0,
  totalProducts: 0,
};

export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS_LOADING: {
      return { ...state, getCartItems: { loading: true, error: false } };
    }
    case GET_CART_ITEMS_SUCCESS: {
      console.log(payload);
      return { ...state, data: payload, getCartItems: { loading: false } };
    }
    case GET_CART_ITEMS_ERROR: {
      return { ...state, getCartItems: { loading: false, error: true } };
    }
    case ADD_ITEM_TO_CART_LOADING: {
      return { ...state, addCartItem: { loading: true, error: false } };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        data: [...state.data, payload],
        addCartItem: { loading: false },
      };
    }
    case ADD_ITEM_TO_CART_ERROR: {
      return { ...state, addCartItem: { loading: false, error: true } };
    }

    case UPDATE_CART_ITEMS_LOADING: {
      return { ...state, updateCartItem: { loading: true, error: false } };
    }

    // case UPDATE_CART_ITEMS_SUCCESS: {
    //   const newItems = state.data.map((ele) => {
    //     if (ele.id === payload.id) {
    //       return payload;
    //     } else return ele;
    //   });
    //   return { ...state, data: newItems, updateCartItem: { loading: false } };
    // }

    case UPDATE_CART_ITEMS_ERROR: {
      return { ...state, updateCartItem: { loading: false, error: true } };
    }
    case REMOVE_CART_ITEMS_LOADING: {
      return { ...state, removeCartItem: { loading: true, error: false } };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      const newItems = state.data.filter((ele) => ele.id !== payload.id);
      return { ...state, data: newItems, removeCartItem: { loading: false } };
    }
    case REMOVE_CART_ITEMS_ERROR: {
      return { ...state, removeCartItem: { loading: false, error: true } };
    }

    //kallol
    case INCREMENTQUANTITY: {
      const updatedCart = state.data.map((curElem) => {
        if (curElem.id === payload) {
          return { ...curElem, Quantity: curElem.Quantity + 1 };
        }
        return curElem;
      });

      return { ...state, data: updatedCart };
    }

    case DECREMENTQUANTITY: {
      const afterdecrement = state.data.map((el) => {
        if (el.id === payload) {
          return {
            ...el,
            Quantity: el.Quantity - 1,
          };
        }
        return el;
      });

      return {
        ...state,
        data: afterdecrement,
      };
    }

    case TOTAL:{

        var {totalProducts,totalamount}= state.data.reduce((acc,el)=>{
            var {Quantity,price} =el;
            acc.totalProducts+=Quantity;
            
            var updatedamount=price*Quantity
             acc.totalamount+=updatedamount

            return acc;

        },{totalProducts:0,
           totalamount:0
         })
         console.log(totalProducts,totalamount)

        return{
             ...state,totalProducts,totalamount
        }

    }

    default: {
      return state;
    }
  }
};
