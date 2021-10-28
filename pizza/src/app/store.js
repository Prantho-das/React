import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { productReducer } from "./reducers/productReducer"
const reducer = combineReducers({ productReducer })
export const store = createStore(reducer, applyMiddleware(thunk))
