import { createStore, combineReducers } from "redux";
import cart from "./reducers/cart";
import wishlist from "./reducers/wishlist";
import auth from "./reducers/auth";

const reducer = combineReducers({ cart, wishlist,auth });
const store = createStore(reducer);
export default store;
