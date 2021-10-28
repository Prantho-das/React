import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cart from "./reducers/cart";
import wishlist from "./reducers/wishlist";
import auth from "./reducers/auth";
import thunk from "redux-thunk";
const reducer = combineReducers({ cart, wishlist, auth });
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
