import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import AdminReducer from "./AdminReducer/Admin.reducer";
import { authReducer } from "./Auth/Auth.reducer";
// import { cartReducer } from "./Cart/cart.Reducer";
import { productReducer } from "./Product/Product.Reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  admin: AdminReducer,
  auth: authReducer,
  products: productReducer,
  // cartItems: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
