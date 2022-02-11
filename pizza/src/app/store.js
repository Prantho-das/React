import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducer"
import { productReducer } from "./reducers/productReducer"
const errorLoadReducer = (state = { error: null, loading: false }, { type, payload }) => {
  if (type === "ERROR_FOUND") {
    state = { ...state, error: payload }
  }
  if (type === "LOAD_PLEASE") {
    state = { ...state, loading: true }
  }
  if (type === "UNLOAD_PLEASE") {
    state = { ...state, loading: false }
  }
  return state;
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const reducer = combineReducers({ productReducer, errorLoadReducer,cart:cartReducer })
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
