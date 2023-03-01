import { REMOVE, INCREMENTQUANTITY, DECREMENTQUANTITY, TOTAL } from "./type.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      var { el } = action.payload;
      const cartProduct = {
        id: el.id,
        price: el.price,
        img: el.image,
        Quantity: el.Quantity,
        title: el.title,
      };

      return {
        ...state,
        data: [...state.data, cartProduct],
      };
    }

    case REMOVE: {
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };
    }

    case INCREMENTQUANTITY: {
      const updatedCart = state.data.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, Quantity: curElem.Quantity + 1 };
        }
        return curElem;
      });

      return { ...state, data: updatedCart };
    }

    case DECREMENTQUANTITY: {
      const afterdecrement = state.data.map((el) => {
        if (el.id === action.payload) {
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

    case TOTAL: {
      var { totalProducts, totalamount } = state.data.reduce(
        (acc, el) => {
          var { Quantity, price } = el;
          acc.totalProducts += Quantity;

          var updatedamount = price * Quantity;
          acc.totalamount += updatedamount;

          return acc;
        },
        { totalProducts: 0, totalamount: 0 }
      );
      return {
        ...state,
        totalProducts,
        totalamount,
      };
    }

    case "CLEAR": {
      return {
        ...state,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
};
