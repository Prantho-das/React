export const fetchAll = () => async (dispatch) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    res = await res.json();
    console.log(res)
    dispatch({
        type: "FETCH_ALL_PRODUCT",
        payload: res,
    })
}