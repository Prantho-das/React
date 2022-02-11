import { data } from "../../../data"

export const fetchAll = () => async (dispatch) => {
    try {
        dispatch({type:"LOAD_PLEASE"})
        // let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        // res = await res.json();
        dispatch({ type: "FETCH_ALL_PRODUCT",payload: data})
        dispatch({type:"UNLOAD_PLEASE"})
    } catch (error) {
        dispatch({type:"UNLOAD_PLEASE"})
        dispatch({type: "ERROR_FOUND",payload: error.message})
    }
} 